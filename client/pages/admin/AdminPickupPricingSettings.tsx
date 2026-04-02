import { FormEvent, useEffect, useMemo, useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Edit3, Loader2, Plus, Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  createExtraPickupType,
  deleteExtraPickupType,
  fetchExtraPickupTypes,
  updateExtraPickupType,
  type ExtraPickupTypeApiItem,
} from "@/lib/adminExtraPickupTypesApi";

type PickupPricingSetting = {
  id: string;
  pickup_type: string;
  additional_pricing_type: string;
  price: number;
  notes: string;
  is_active: boolean;
};

type FormState = Omit<PickupPricingSetting, "id">;

const emptyForm: FormState = {
  pickup_type: "",
  additional_pricing_type: "",
  price: 0,
  notes: "",
  is_active: true,
};

function mapApiToUi(item: ExtraPickupTypeApiItem): PickupPricingSetting {
  return {
    id: item.id,
    pickup_type: item.pickup_type,
    additional_pricing_type: item.additional_pricing_type,
    price: item.base_price,
    notes: item.notes,
    is_active: item.is_active,
  };
}

export default function AdminPickupPricingSettings() {
  const [items, setItems] = useState<PickupPricingSetting[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

  const activeCount = useMemo(
    () => items.filter((item) => item.is_active).length,
    [items],
  );

  const loadItems = async () => {
    setError("");
    try {
      const data = await fetchExtraPickupTypes();
      setItems(data.map(mapApiToUi));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load pickup pricing rules.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  const resetForm = () => {
    setEditingId(null);
    setForm(emptyForm);
    setIsFormOpen(false);
  };

  const toApiPayload = (value: FormState) => ({
    pickup_type: value.pickup_type,
    additional_pricing_type: value.additional_pricing_type,
    base_price: value.price,
    notes: value.notes,
    is_active: value.is_active,
  });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.pickup_type.trim() || !form.additional_pricing_type.trim()) return;
    setIsSaving(true);
    setError("");
    try {
      if (editingId) {
        await updateExtraPickupType(editingId, toApiPayload(form));
      } else {
        await createExtraPickupType(toApiPayload(form));
      }
      await loadItems();
      resetForm();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save rule.");
    } finally {
      setIsSaving(false);
    }
  };

  const onEdit = (item: PickupPricingSetting) => {
    setEditingId(item.id);
    setForm({
      pickup_type: item.pickup_type,
      additional_pricing_type: item.additional_pricing_type,
      price: item.price,
      notes: item.notes,
      is_active: item.is_active,
    });
    setIsFormOpen(true);
  };

  const openAddModal = () => {
    setEditingId(null);
    setForm(emptyForm);
    setIsFormOpen(true);
  };

  const onDelete = async (id: string) => {
    setError("");
    try {
      await deleteExtraPickupType(id);
      await loadItems();
      if (editingId === id) resetForm();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete rule.");
    }
  };

  const onToggleActive = async (id: string) => {
    const target = items.find((item) => item.id === id);
    if (!target) return;
    setError("");
    try {
      await updateExtraPickupType(id, toApiPayload({ ...target, is_active: !target.is_active }));
      await loadItems();
      if (editingId === id) {
        setForm((prev) => ({ ...prev, is_active: !prev.is_active }));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update status.");
    }
  };

  const deleteTarget = deleteTargetId
    ? items.find((item) => item.id === deleteTargetId) ?? null
    : null;

  return (
    <AdminLayout title="Pickup Pricing Settings">
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
          <h2 className="text-base font-semibold text-slate-900">Pickup Additional Pricing</h2>
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500">
              Total: {items.length} | Active: {activeCount}
            </span>
            <button
              type="button"
              onClick={openAddModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#487307] text-white text-xs font-semibold hover:bg-[#3a5c06]"
            >
              <Plus className="w-3.5 h-3.5" />
              Add Rule
            </button>
          </div>
        </div>

        {error && (
          <div className="px-4 py-3 border-b border-red-100 bg-red-50 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr className="text-left">
                <th className="px-4 py-3 font-semibold">Pickup Type</th>
                <th className="px-4 py-3 font-semibold">Additional Pricing Type</th>
                <th className="px-4 py-3 font-semibold">Price</th>
                <th className="px-4 py-3 font-semibold">Notes</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="px-4 py-10 text-center text-slate-500">
                    Loading pickup pricing rules...
                  </td>
                </tr>
              ) : (
                <>
                  {items.map((item) => (
                    <tr key={item.id} className="border-t border-slate-100">
                      <td className="px-4 py-3 font-medium text-slate-900">{item.pickup_type}</td>
                      <td className="px-4 py-3 text-slate-700">{item.additional_pricing_type}</td>
                      <td className="px-4 py-3 text-slate-700">£{item.price.toFixed(2)}</td>
                      <td className="px-4 py-3 text-slate-600 max-w-[220px] truncate">
                        {item.notes || "-"}
                      </td>
                      <td className="px-4 py-3">
                        <label className="inline-flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={item.is_active}
                            onChange={() => onToggleActive(item.id)}
                          />
                          <span
                            className={`text-xs font-medium ${
                              item.is_active ? "text-emerald-700" : "text-slate-500"
                            }`}
                          >
                            {item.is_active ? "Active" : "Inactive"}
                          </span>
                        </label>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => onEdit(item)}
                            title="Edit"
                            aria-label="Edit pricing rule"
                            className="inline-flex items-center justify-center w-8 h-8 rounded border border-slate-300 hover:bg-slate-50"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setDeleteTargetId(item.id)}
                            title="Delete"
                            aria-label="Delete pricing rule"
                            className="inline-flex items-center justify-center w-8 h-8 rounded border border-red-200 text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {items.length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-4 py-8 text-center text-slate-500">
                        No pricing settings available.
                      </td>
                    </tr>
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog open={isFormOpen} onOpenChange={(open) => !open ? resetForm() : setIsFormOpen(true)}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>{editingId ? "Edit Pricing Rule" : "Add Pricing Rule"}</DialogTitle>
            <DialogDescription>
              Configure additional pickup-based pricing.
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-3" onSubmit={onSubmit}>
            <div>
              <label className="text-sm text-slate-600">Pickup Type</label>
              <input
                value={form.pickup_type}
                onChange={(e) => setForm((prev) => ({ ...prev, pickup_type: e.target.value }))}
                className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#487307]/30"
                placeholder="Airport"
                required
              />
            </div>

            <div>
              <label className="text-sm text-slate-600">Additional Pricing Type</label>
              <input
                value={form.additional_pricing_type}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, additional_pricing_type: e.target.value }))
                }
                className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#487307]/30"
                placeholder="Parking"
                required
              />
            </div>

            <div>
              <label className="text-sm text-slate-600">Base price (GBP)</label>
              <input
                type="number"
                min={0}
                step="0.01"
                value={form.price}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, price: Number(e.target.value || 0) }))
                }
                className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#487307]/30"
              />
            </div>

            <div>
              <label className="text-sm text-slate-600">Notes</label>
              <textarea
                rows={3}
                value={form.notes}
                onChange={(e) => setForm((prev) => ({ ...prev, notes: e.target.value }))}
                className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#487307]/30 resize-none"
                placeholder="Optional notes..."
              />
            </div>

            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={form.is_active}
                onChange={(e) => setForm((prev) => ({ ...prev, is_active: e.target.checked }))}
              />
              Is Active
            </label>

            <DialogFooter>
              <button
                type="button"
                onClick={resetForm}
                className="px-3 py-2 rounded-lg border border-slate-300 text-sm font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSaving}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] text-white text-sm font-semibold disabled:opacity-70"
              >
                {isSaving ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Saving...
                  </span>
                ) : editingId ? (
                  "Update Rule"
                ) : (
                  "Add Rule"
                )}
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <AlertDialog open={Boolean(deleteTarget)} onOpenChange={(open) => !open && setDeleteTargetId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Pricing Rule?</AlertDialogTitle>
            <AlertDialogDescription>
              {deleteTarget
                ? `Are you sure you want to delete "${deleteTarget.pickup_type} - ${deleteTarget.additional_pricing_type}"?`
                : "Are you sure you want to delete this pricing rule?"}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setDeleteTargetId(null)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 hover:bg-red-700"
              onClick={async () => {
                if (deleteTargetId) await onDelete(deleteTargetId);
                setDeleteTargetId(null);
              }}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </AdminLayout>
  );
}
