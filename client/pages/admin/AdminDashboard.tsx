import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AdminLayout } from "@/components/admin/AdminLayout";
import {
  fetchAdminOrders,
  formatOrderStatusLabel,
  type AdminOrderRow,
} from "@/lib/adminOrdersApi";
import {
  Ban,
  CheckCircle2,
  Clock3,
  Loader2,
  Package,
  PlayCircle,
  RefreshCw,
} from "lucide-react";

const POLL_MS = 25_000;

function countByStatus(orders: AdminOrderRow[], status: string): number {
  return orders.filter((b) => b.status.toLowerCase() === status.toLowerCase()).length;
}

export default function AdminDashboard() {
  const [orders, setOrders] = useState<AdminOrderRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState("");

  const load = useCallback(async (opts?: { silent?: boolean }) => {
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

  useEffect(() => {
    void load();
  }, [load]);

  useEffect(() => {
    const t = window.setInterval(() => {
      if (document.visibilityState === "visible") void load({ silent: true });
    }, POLL_MS);
    return () => window.clearInterval(t);
  }, [load]);

  const sorted = useMemo(() => {
    return orders.slice().sort((a, b) => {
      const ta = new Date(a.pickup_time || `${a.pickup_date}T12:00:00`).getTime();
      const tb = new Date(b.pickup_time || `${b.pickup_date}T12:00:00`).getTime();
      return tb - ta;
    });
  }, [orders]);

  const total = orders.length;
  const notStarted = countByStatus(orders, "not started");
  const started = countByStatus(orders, "started");
  const completed = countByStatus(orders, "completed");
  const cancelled = countByStatus(orders, "cancelled");
  const recent = sorted.slice(0, 5);

  return (
    <AdminLayout title="Dashboard">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2 mb-4">
        <button
          type="button"
          onClick={() => void load()}
          disabled={isRefreshing}
          className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-60 self-start sm:self-auto"
        >
          <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`} />
          Refresh data
        </button>
      </div>

      {error && (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">{error}</div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">Total orders</p>
            <Package className="w-4 h-4 text-slate-400" />
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-2 flex items-center gap-2">
            {isLoading ? <Loader2 className="w-6 h-6 animate-spin text-[#487307]" /> : total}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">Not started</p>
            <Clock3 className="w-4 h-4 text-amber-500" />
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-2">{notStarted}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">Started</p>
            <PlayCircle className="w-4 h-4 text-blue-500" />
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-2">{started}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">Completed</p>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-2">{completed}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">Cancelled</p>
            <Ban className="w-4 h-4 text-red-400" />
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-2">{cancelled}</p>
        </div>
      </div>

      <div className="mt-6 bg-white rounded-xl border border-slate-200 p-4">
        <div className="flex items-center justify-between mb-3 gap-2">
          <h2 className="text-base font-semibold text-slate-900">Recent orders</h2>
          <Link
            to="/admin-panel/booking-data"
            className="text-sm font-semibold text-[#487307] hover:underline"
          >
            View all
          </Link>
        </div>
        {!isLoading && recent.length === 0 ? (
          <p className="text-sm text-slate-500">No orders yet.</p>
        ) : (
          <div className="space-y-3">
            {recent.map((booking) => (
              <div
                key={booking.id}
                className="p-3 rounded-lg border border-slate-200 bg-slate-50/50 flex items-center justify-between gap-3"
              >
                <div className="min-w-0">
                  <p className="font-medium text-slate-900 truncate">
                    {booking.first_name} {booking.last_name}
                  </p>
                  <p className="text-sm text-slate-600 truncate">
                    {booking.pickup_date}
                    {booking.from.address ? ` · ${booking.from.address}` : ""}
                  </p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-white border border-slate-200 shrink-0 max-w-[120px] truncate">
                  {formatOrderStatusLabel(booking.status)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <p className="mt-4 text-xs text-slate-500">
        Numbers update when you refresh or automatically about every {POLL_MS / 1000} seconds while this tab is
        open.
      </p>
    </AdminLayout>
  );
}
