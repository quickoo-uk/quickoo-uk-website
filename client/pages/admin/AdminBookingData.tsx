import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { AdminOrderPlaceField, type AdminPlaceValue } from "@/components/admin/AdminOrderPlaceField";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  adminOrderToUpdatePayload,
  fetchAdminOrders,
  formatOrderStatusLabel,
  ORDER_STATUS_VALUES,
  updateAdminOrder,
  type AdminOrderRow,
} from "@/lib/adminOrdersApi";
import { fetchVehicleClasses, type VehicleClassApiItem } from "@/lib/adminVehicleClassApi";
import type { CreateOrderRoutePoint, UpdateOrderRequestBody } from "@/lib/ordersApi";
import { cn } from "@/lib/utils";
import { Edit3, Eye, Loader2, RefreshCw } from "lucide-react";

const POLL_MS = 25_000;

function statusClass(status: string): string {
  const s = status.toLowerCase();
  if (s === "not started") return "bg-amber-50 text-amber-700 border-amber-200";
  if (s === "started") return "bg-blue-50 text-blue-700 border-blue-200";
  if (s === "cancelled") return "bg-red-50 text-red-700 border-red-200";
  return "bg-emerald-50 text-emerald-700 border-emerald-200";
}

function ViewDetail({
  label,
  value,
  mono,
  strong,
  title,
}: {
  label: string;
  value: string;
  mono?: boolean;
  strong?: boolean;
  title?: string;
}) {
  return (
    <div className="min-w-0">
      <p className="text-[10px] font-semibold text-slate-500 uppercase">{label}</p>
      <p
        className={cn(
          "text-slate-900 mt-0.5 break-words text-[11px]",
          mono && "font-mono",
          strong && "font-semibold text-[#487307]",
        )}
        title={title ?? (value.length > 48 ? value : undefined)}
      >
        {value}
      </p>
    </div>
  );
}

function emptyPlace(): AdminPlaceValue {
  return { address: "", latitude: null, longitude: null };
}

type FormState = {
  from: AdminPlaceValue;
  to: AdminPlaceValue;
  fromManualLat: string;
  fromManualLng: string;
  toManualLat: string;
  toManualLng: string;
  flight_number: string;
  pickup_date: string;
  pickup_time: string;
  vehicle_class: string;
  first_name: string;
  last_name: string;
  email: string;
  phonenumber: string;
  special_request: string;
  route_distance: string;
  total_price: string;
  is_payment_paid: boolean;
  transcation_id: string;
  status: string;
};

function defaultForm(): FormState {
  return {
    from: emptyPlace(),
    to: emptyPlace(),
    fromManualLat: "",
    fromManualLng: "",
    toManualLat: "",
    toManualLng: "",
    flight_number: "",
    pickup_date: new Date().toISOString().slice(0, 10),
    pickup_time: "12:00",
    vehicle_class: "",
    first_name: "",
    last_name: "",
    email: "",
    phonenumber: "",
    special_request: "",
    route_distance: "0",
    total_price: "0",
    is_payment_paid: false,
    transcation_id: "",
    status: "not started",
  };
}

function formFromOrder(row: AdminOrderRow): FormState {
  const pt = row.pickup_time;
  let timePart = "12:00";
  try {
    const d = new Date(pt);
    if (!Number.isNaN(d.getTime())) {
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      timePart = `${hh}:${mm}`;
    }
  } catch {
    // keep default
  }

  return {
    from: { address: row.from.address, latitude: row.from.latitude, longitude: row.from.longitude },
    to: { address: row.to.address, latitude: row.to.latitude, longitude: row.to.longitude },
    fromManualLat: "",
    fromManualLng: "",
    toManualLat: "",
    toManualLng: "",
    flight_number: row.flight_number,
    pickup_date: row.pickup_date,
    pickup_time: timePart,
    vehicle_class: row.vehicle_class,
    first_name: row.first_name,
    last_name: row.last_name,
    email: row.email,
    phonenumber: row.phonenumber,
    special_request: row.special_request,
    route_distance: String(row.route_distance),
    total_price: String(row.total_price),
    is_payment_paid: row.is_payment_paid,
    transcation_id: row.transcation_id,
    status: row.status,
  };
}

function resolvePoint(
  place: AdminPlaceValue,
  manualLat: string,
  manualLng: string,
): { address: string; latitude: number; longitude: number } | null {
  const address = place.address.trim();
  const latRaw = place.latitude ?? Number(manualLat);
  const lngRaw = place.longitude ?? Number(manualLng);
  if (!address || !Number.isFinite(latRaw) || !Number.isFinite(lngRaw)) return null;
  return { address, latitude: latRaw, longitude: lngRaw };
}

function localPickupToIso(pickup_date: string, pickup_time: string): string {
  const [hh = "12", mm = "00"] = pickup_time.split(":");
  const d = new Date(
    `${pickup_date}T${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}:00`,
  );
  return Number.isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
}

function buildUpdatePayloadFromForm(
  form: FormState,
  opts?: {
    pricing_breakdown?: Record<string, Record<string, unknown>>;
    stops?: CreateOrderRoutePoint[];
  },
): UpdateOrderRequestBody {
  const from = resolvePoint(form.from, form.fromManualLat, form.fromManualLng);
  const to = resolvePoint(form.to, form.toManualLat, form.toManualLng);
  if (!from || !to) {
    throw new Error("From and To need an address and valid coordinates (pick a Places suggestion or enter lat/lng).");
  }

  return {
    from,
    to,
    stops: opts?.stops ?? [],
    flight_number: form.flight_number.trim(),
    pickup_date: form.pickup_date,
    pickup_time: localPickupToIso(form.pickup_date, form.pickup_time),
    vehicle_class: form.vehicle_class.trim(),
    first_name: form.first_name.trim(),
    last_name: form.last_name.trim(),
    email: form.email.trim(),
    phonenumber: form.phonenumber.trim(),
    special_request: form.special_request.trim(),
    route_distance: Number(form.route_distance) || 0,
    total_price: Number(form.total_price) || 0,
    pricing_breakdown: opts?.pricing_breakdown ?? {},
    is_payment_paid: form.is_payment_paid,
    transcation_id: form.transcation_id.trim(),
    status: form.status.trim() || "not started",
  };
}

export default function AdminBookingData() {
  const [orders, setOrders] = useState<AdminOrderRow[]>([]);
  const [vehicleClasses, setVehicleClasses] = useState<VehicleClassApiItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState("");
  const [editOpen, setEditOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingRow, setEditingRow] = useState<AdminOrderRow | null>(null);
  const [form, setForm] = useState<FormState>(defaultForm);
  const [isSaving, setIsSaving] = useState(false);
  const [formError, setFormError] = useState("");
  const [viewOrder, setViewOrder] = useState<AdminOrderRow | null>(null);
  const [statusUpdatingId, setStatusUpdatingId] = useState<string | null>(null);

  const loadOrders = useCallback(async (opts?: { silent?: boolean }) => {
    if (opts?.silent) setIsRefreshing(true);
    else setError("");
    try {
      const list = await fetchAdminOrders();
      setOrders(list);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load orders.");
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, []);

  const loadVehicleClasses = useCallback(async () => {
    try {
      const list = await fetchVehicleClasses();
      setVehicleClasses(list);
    } catch {
      setVehicleClasses([]);
    }
  }, []);

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  useEffect(() => {
    const t = window.setInterval(() => {
      if (document.visibilityState === "visible") void loadOrders({ silent: true });
    }, POLL_MS);
    return () => window.clearInterval(t);
  }, [loadOrders]);

  useEffect(() => {
    if (editOpen) void loadVehicleClasses();
  }, [editOpen, loadVehicleClasses]);

  const sortedOrders = useMemo(() => {
    return orders.slice().sort((a, b) => {
      const ta = new Date(a.pickup_time || `${a.pickup_date}T12:00:00`).getTime();
      const tb = new Date(b.pickup_time || `${b.pickup_date}T12:00:00`).getTime();
      return tb - ta;
    });
  }, [orders]);

  const handleStatusChange = async (row: AdminOrderRow, newStatus: string) => {
    if (newStatus === row.status) return;
    setError("");
    setStatusUpdatingId(row.id);
    try {
      await updateAdminOrder(row.id, adminOrderToUpdatePayload(row, newStatus));
      await loadOrders({ silent: true });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not update status.");
    } finally {
      setStatusUpdatingId(null);
    }
  };

  const openEdit = (row: AdminOrderRow) => {
    setEditingId(row.id);
    setEditingRow(row);
    setForm(formFromOrder(row));
    setFormError("");
    setEditOpen(true);
  };

  const submitEdit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!editingId) return;
    setFormError("");
    if (!form.vehicle_class.trim()) {
      setFormError("Select a vehicle class.");
      return;
    }
    setIsSaving(true);
    try {
      const body = buildUpdatePayloadFromForm(form, {
        pricing_breakdown: editingRow?.pricing_breakdown ?? {},
        stops: editingRow?.stops ?? [],
      });
      await updateAdminOrder(editingId, body);
      setEditOpen(false);
      setEditingId(null);
      setEditingRow(null);
      await loadOrders({ silent: true });
    } catch (e) {
      setFormError(e instanceof Error ? e.message : "Could not update order.");
    } finally {
      setIsSaving(false);
    }
  };

  const formId = "admin-order-form-edit";

  const FormFields = (
    <div className="space-y-4 max-h-[65vh] overflow-y-auto pr-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <AdminOrderPlaceField
          key={editingId ? `edit-${editingId}-from` : "edit-from"}
          label="From"
          value={form.from}
          onChange={(from) => setForm((p) => ({ ...p, from }))}
          disabled={isSaving}
        />
        <AdminOrderPlaceField
          key={editingId ? `edit-${editingId}-to` : "edit-to"}
          label="To"
          value={form.to}
          onChange={(to) => setForm((p) => ({ ...p, to }))}
          disabled={isSaving}
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <div>
          <label className="text-xs font-semibold text-slate-600">From lat (optional)</label>
          <input
            className="w-full rounded-lg border border-slate-200 px-2 py-1.5 text-sm"
            value={form.fromManualLat}
            onChange={(e) => setForm((p) => ({ ...p, fromManualLat: e.target.value }))}
            placeholder="51.5"
            disabled={isSaving}
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-600">From lng (optional)</label>
          <input
            className="w-full rounded-lg border border-slate-200 px-2 py-1.5 text-sm"
            value={form.fromManualLng}
            onChange={(e) => setForm((p) => ({ ...p, fromManualLng: e.target.value }))}
            placeholder="-0.12"
            disabled={isSaving}
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-600">To lat (optional)</label>
          <input
            className="w-full rounded-lg border border-slate-200 px-2 py-1.5 text-sm"
            value={form.toManualLat}
            onChange={(e) => setForm((p) => ({ ...p, toManualLat: e.target.value }))}
            disabled={isSaving}
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-600">To lng (optional)</label>
          <input
            className="w-full rounded-lg border border-slate-200 px-2 py-1.5 text-sm"
            value={form.toManualLng}
            onChange={(e) => setForm((p) => ({ ...p, toManualLng: e.target.value }))}
            disabled={isSaving}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label className="text-xs font-semibold text-slate-600">Flight number</label>
          <input
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            value={form.flight_number}
            onChange={(e) => setForm((p) => ({ ...p, flight_number: e.target.value }))}
            disabled={isSaving}
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-600">Pickup date</label>
          <input
            type="date"
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            value={form.pickup_date}
            onChange={(e) => setForm((p) => ({ ...p, pickup_date: e.target.value }))}
            disabled={isSaving}
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-600">Pickup time (local)</label>
          <input
            type="time"
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            value={form.pickup_time}
            onChange={(e) => setForm((p) => ({ ...p, pickup_time: e.target.value }))}
            disabled={isSaving}
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-semibold text-slate-600">Vehicle class</label>
        <select
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm bg-white"
          value={form.vehicle_class}
          onChange={(e) => setForm((p) => ({ ...p, vehicle_class: e.target.value }))}
          disabled={isSaving}
        >
          <option value="">Select class…</option>
          {vehicleClasses.map((v) => (
            <option key={v.id} value={v.id}>
              {v.class_name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-semibold text-slate-600">First name</label>
          <input
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            value={form.first_name}
            onChange={(e) => setForm((p) => ({ ...p, first_name: e.target.value }))}
            disabled={isSaving}
            required
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-600">Last name</label>
          <input
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            value={form.last_name}
            onChange={(e) => setForm((p) => ({ ...p, last_name: e.target.value }))}
            disabled={isSaving}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-semibold text-slate-600">Email</label>
          <input
            type="email"
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            disabled={isSaving}
            required
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-600">Phone</label>
          <input
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            value={form.phonenumber}
            onChange={(e) => setForm((p) => ({ ...p, phonenumber: e.target.value }))}
            disabled={isSaving}
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-semibold text-slate-600">Special requests</label>
        <textarea
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm min-h-[72px]"
          value={form.special_request}
          onChange={(e) => setForm((p) => ({ ...p, special_request: e.target.value }))}
          disabled={isSaving}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label className="text-xs font-semibold text-slate-600">Route distance (miles)</label>
          <input
            type="number"
            step="0.01"
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            value={form.route_distance}
            onChange={(e) => setForm((p) => ({ ...p, route_distance: e.target.value }))}
            disabled={isSaving}
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-600">Total price (£)</label>
          <input
            type="number"
            step="0.01"
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            value={form.total_price}
            onChange={(e) => setForm((p) => ({ ...p, total_price: e.target.value }))}
            disabled={isSaving}
          />
        </div>
        <div className="flex flex-col justify-end gap-2">
          <label className="flex items-center gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={form.is_payment_paid}
              onChange={(e) => setForm((p) => ({ ...p, is_payment_paid: e.target.checked }))}
              disabled={isSaving}
            />
            Payment received
          </label>
        </div>
      </div>

      <div>
        <label className="text-xs font-semibold text-slate-600">Transaction ID</label>
        <input
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          value={form.transcation_id}
          onChange={(e) => setForm((p) => ({ ...p, transcation_id: e.target.value }))}
          disabled={isSaving}
          placeholder="Stripe payment id or reference"
        />
      </div>

      <div>
        <label className="text-xs font-semibold text-slate-600">Order status</label>
        <select
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm bg-white"
          value={form.status}
          onChange={(e) => setForm((p) => ({ ...p, status: e.target.value }))}
          disabled={isSaving}
        >
          {ORDER_STATUS_VALUES.map((s) => (
            <option key={s} value={s}>
              {formatOrderStatusLabel(s)}
            </option>
          ))}
        </select>
      </div>

      {formError && <p className="text-sm text-red-600">{formError}</p>}
    </div>
  );

  return (
    <AdminLayout title="Booking Data">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <p className="text-sm text-slate-600">
          Orders from your API, refreshed automatically every {POLL_MS / 1000}s while this tab is visible.
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => void loadOrders()}
            disabled={isRefreshing}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-60"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">{error}</div>
      )}

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between gap-2">
          <h2 className="text-base font-semibold text-slate-900">All orders</h2>
          {isLoading ? <Loader2 className="w-5 h-5 animate-spin text-[#487307]" /> : null}
        </div>

        {!isLoading && sortedOrders.length === 0 ? (
          <p className="p-6 text-sm text-slate-500">No orders yet or check your API connection.</p>
        ) : null}

        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr className="text-left text-slate-600">
                <th className="px-4 py-3 font-semibold">Customer</th>
                <th className="px-4 py-3 font-semibold">Trip</th>
                <th className="px-4 py-3 font-semibold">Flight</th>
                <th className="px-4 py-3 font-semibold">Date / time</th>
                <th className="px-4 py-3 font-semibold">Total</th>
                <th className="px-4 py-3 font-semibold min-w-[140px]">Status</th>
                <th className="px-4 py-3 font-semibold w-24"> </th>
              </tr>
            </thead>
            <tbody>
              {sortedOrders.map((b) => (
                <tr key={b.id} className="border-t border-slate-100">
                  <td className="px-4 py-3">
                    <p className="font-medium text-slate-900">
                      {b.first_name} {b.last_name}
                    </p>
                    <p className="text-slate-500">{b.email}</p>
                  </td>
                  <td className="px-4 py-3 max-w-[220px]">
                    <p className="text-slate-900 truncate" title={b.from.address}>
                      {b.from.address}
                    </p>
                    <p className="text-slate-500 truncate" title={b.to.address}>
                      {b.to.address}
                    </p>
                  </td>
                  <td className="px-4 py-3 text-slate-700">{b.flight_number || "—"}</td>
                  <td className="px-4 py-3">
                    <p className="text-slate-900">{b.pickup_date}</p>
                    <p className="text-slate-500 text-xs">
                      {new Date(b.pickup_time).toLocaleString(undefined, {
                        dateStyle: undefined,
                        timeStyle: "short",
                      })}
                    </p>
                  </td>
                  <td className="px-4 py-3 font-medium text-slate-900">£{Number(b.total_price).toFixed(2)}</td>
                  <td className="px-4 py-3">
                    <select
                      value={b.status}
                      disabled={statusUpdatingId === b.id}
                      onChange={(e) => void handleStatusChange(b, e.target.value)}
                      className={`w-full max-w-[160px] rounded-lg border px-2 py-1.5 text-xs font-medium bg-white ${statusClass(b.status)}`}
                    >
                      {ORDER_STATUS_VALUES.map((s) => (
                        <option key={s} value={s}>
                          {formatOrderStatusLabel(s)}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-0.5">
                      <button
                        type="button"
                        title="View order"
                        aria-label="View order details"
                        onClick={() => setViewOrder(b)}
                        className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-[#487307]"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        title="Edit order"
                        aria-label="Edit order"
                        onClick={() => openEdit(b)}
                        className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-[#487307]"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="lg:hidden p-4 space-y-3">
          {sortedOrders.map((b) => (
            <div key={b.id} className="border border-slate-200 rounded-lg p-3">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900">
                    {b.first_name} {b.last_name}
                  </p>
                  <p className="text-xs text-slate-500 truncate">{b.email}</p>
                </div>
                <div className="flex items-center gap-0.5 shrink-0">
                  <button
                    type="button"
                    title="View"
                    aria-label="View order"
                    onClick={() => setViewOrder(b)}
                    className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    title="Edit"
                    aria-label="Edit order"
                    onClick={() => openEdit(b)}
                    className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <select
                value={b.status}
                disabled={statusUpdatingId === b.id}
                onChange={(e) => void handleStatusChange(b, e.target.value)}
                className={`mt-3 w-full rounded-lg border px-2 py-2 text-xs font-medium bg-white ${statusClass(b.status)}`}
              >
                {ORDER_STATUS_VALUES.map((s) => (
                  <option key={s} value={s}>
                    {formatOrderStatusLabel(s)}
                  </option>
                ))}
              </select>
              <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                {b.from.address} {"→"} {b.to.address}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                {b.pickup_date} · £{Number(b.total_price).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Dialog
        open={editOpen}
        onOpenChange={(o) => {
          setEditOpen(o);
          if (!o) {
            setEditingId(null);
            setEditingRow(null);
          }
        }}
      >
        <DialogContent className="max-w-lg sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>Edit order</DialogTitle>
            <DialogDescription>Update booking fields and status.</DialogDescription>
          </DialogHeader>
          <form id={formId} onSubmit={submitEdit}>
            {FormFields}
            <DialogFooter className="mt-4">
              <button
                type="button"
                className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium"
                onClick={() => setEditOpen(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSaving}
                className="px-4 py-2 rounded-lg bg-[#487307] text-white text-sm font-semibold disabled:opacity-60 inline-flex items-center gap-2"
              >
                {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                Update order
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={viewOrder !== null} onOpenChange={(open) => !open && setViewOrder(null)}>
        <DialogContent className="max-w-4xl w-[calc(100vw-1.5rem)] sm:w-full overflow-hidden p-4 sm:p-5 gap-3 max-h-none">
          <DialogHeader className="space-y-1 shrink-0">
            <DialogTitle className="text-base">Order details</DialogTitle>
            <DialogDescription className="text-xs">
              Read-only snapshot — hover truncated lines for full text.
            </DialogDescription>
          </DialogHeader>
          {viewOrder && (
            <div className="overflow-hidden text-xs leading-tight space-y-2.5">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-x-3 sm:gap-y-1.5 rounded-md border border-slate-200 bg-slate-50/80 p-2.5">
                <div className="sm:col-span-7 min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">Order ID</p>
                  <p className="font-mono text-[11px] text-slate-900 break-all" title={viewOrder.id}>
                    {viewOrder.id}
                  </p>
                </div>
                <div className="sm:col-span-3 flex flex-col gap-0.5">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">Status</p>
                  <span
                    className={`inline-flex w-fit px-2 py-0.5 rounded-full border text-[11px] font-medium ${statusClass(viewOrder.status)}`}
                  >
                    {formatOrderStatusLabel(viewOrder.status)}
                  </span>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">Payment</p>
                  <p className="text-slate-900 text-[11px] mt-0.5">
                    {viewOrder.is_payment_paid ? "Paid" : "Not paid"}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                <div className="min-w-0 border border-slate-100 rounded-md p-2">
                  <p className="text-[10px] font-semibold text-slate-500 uppercase">From</p>
                  <p className="text-slate-900 mt-0.5 break-words" title={viewOrder.from.address}>
                    {viewOrder.from.address}
                  </p>
                  <p className="text-[10px] text-slate-500 mt-0.5 font-mono">
                    {viewOrder.from.latitude.toFixed(5)}, {viewOrder.from.longitude.toFixed(5)}
                  </p>
                </div>
                <div className="min-w-0 border border-slate-100 rounded-md p-2">
                  <p className="text-[10px] font-semibold text-slate-500 uppercase">To</p>
                  <p className="text-slate-900 mt-0.5 break-words" title={viewOrder.to.address}>
                    {viewOrder.to.address}
                  </p>
                  <p className="text-[10px] text-slate-500 mt-0.5 font-mono">
                    {viewOrder.to.latitude.toFixed(5)}, {viewOrder.to.longitude.toFixed(5)}
                  </p>
                </div>
              </div>

              {viewOrder.stops.length > 0 && (
                <div className="min-w-0 border border-slate-100 rounded-md p-2">
                  <p className="text-[10px] font-semibold text-slate-500 uppercase">Stops</p>
                  <p
                    className="text-slate-900 mt-0.5 break-words"
                    title={viewOrder.stops
                      .map((s) => `${s.address} (${s.latitude.toFixed(4)}, ${s.longitude.toFixed(4)})`)
                      .join(" · ")}
                  >
                    {viewOrder.stops.map((s) => s.address).join(" · ")}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-1.5 border border-slate-100 rounded-md p-2">
                <ViewDetail label="Flight" value={viewOrder.flight_number || "—"} />
                <ViewDetail label="Vehicle" value={viewOrder.vehicle_class || "—"} mono />
                <ViewDetail label="Date" value={viewOrder.pickup_date} />
                <ViewDetail
                  label="Pickup"
                  value={(() => {
                    try {
                      const d = new Date(viewOrder.pickup_time);
                      return Number.isNaN(d.getTime()) ? viewOrder.pickup_time : d.toLocaleString();
                    } catch {
                      return viewOrder.pickup_time;
                    }
                  })()}
                  title={viewOrder.pickup_time}
                />
                <ViewDetail label="Dist. (mi)" value={String(viewOrder.route_distance)} />
                <ViewDetail
                  label="Total"
                  value={`£${Number(viewOrder.total_price).toFixed(2)}`}
                  strong
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border border-slate-100 rounded-md p-2 min-w-0">
                <div className="sm:col-span-1 min-w-0">
                  <p className="text-[10px] font-semibold text-slate-500 uppercase">Customer</p>
                  <p className="text-slate-900 mt-0.5">
                    {viewOrder.first_name} {viewOrder.last_name}
                  </p>
                </div>
                <div className="sm:col-span-1 min-w-0 break-all">
                  <p className="text-[10px] font-semibold text-slate-500 uppercase">Email</p>
                  <p className="text-slate-800 mt-0.5" title={viewOrder.email}>
                    {viewOrder.email}
                  </p>
                </div>
                <div className="sm:col-span-1 min-w-0">
                  <p className="text-[10px] font-semibold text-slate-500 uppercase">Phone</p>
                  <p className="text-slate-800 mt-0.5">{viewOrder.phonenumber || "—"}</p>
                </div>
              </div>

              <div className="border border-slate-100 rounded-md p-2 min-w-0">
                <p className="text-[10px] font-semibold text-slate-500 uppercase">Special requests</p>
                <p
                  className="text-slate-900 mt-0.5 whitespace-pre-wrap break-words"
                  title={viewOrder.special_request || undefined}
                >
                  {viewOrder.special_request?.trim() ? viewOrder.special_request : "—"}
                </p>
              </div>

              <div className="border border-slate-100 rounded-md p-2 min-w-0">
                <p className="text-[10px] font-semibold text-slate-500 uppercase">Transaction ID</p>
                <p className="font-mono text-[11px] text-slate-900 break-all mt-0.5" title={viewOrder.transcation_id}>
                  {viewOrder.transcation_id || "—"}
                </p>
              </div>

              <div className="border border-slate-100 rounded-md p-2 min-w-0 bg-slate-900 text-slate-100">
                <p className="text-[10px] font-semibold text-slate-400 uppercase">Pricing breakdown</p>
                <p
                  className="mt-0.5 font-mono text-[11px] break-all"
                  title={
                    Object.keys(viewOrder.pricing_breakdown).length > 0
                      ? JSON.stringify(viewOrder.pricing_breakdown)
                      : "{}"
                  }
                >
                  {Object.keys(viewOrder.pricing_breakdown).length > 0
                    ? JSON.stringify(viewOrder.pricing_breakdown)
                    : "{}"}
                </p>
              </div>
            </div>
          )}
          <DialogFooter className="shrink-0 sm:justify-end gap-2 pt-1">
            <button
              type="button"
              className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium"
              onClick={() => setViewOrder(null)}
            >
              Close
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}
