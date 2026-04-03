import { DragEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Edit3, Loader2, Plus, Trash2, Upload } from "lucide-react";
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
  createVehicleClass,
  deleteVehicleClass,
  fetchVehicleClasses,
  updateVehicleClass,
  uploadVehicleClassImage,
  type VehicleClassApiItem,
} from "@/lib/adminVehicleClassApi";

type VehicleClass = {
  id: string;
  vehicle_class_name: string;
  image: string;
  passenger_count: number;
  luggage_count: number;
  base_price: number;
  base_price_per_default_miles: number;
  extra_price_per_miles: number;
  is_active: boolean;
};

type FormState = Omit<VehicleClass, "id">;

const emptyForm: FormState = {
  vehicle_class_name: "",
  image: "",
  passenger_count: 1,
  luggage_count: 1,
  base_price: 0,
  base_price_per_default_miles: 0,
  extra_price_per_miles: 0,
  is_active: true,
};

function mapApiToUi(item: VehicleClassApiItem): VehicleClass {
  return {
    id: item.id,
    vehicle_class_name: item.class_name,
    image: item.vehicle_class_image,
    passenger_count: item.allow_passengers,
    luggage_count: item.allow_luggage,
    base_price: item.base_price,
    base_price_per_default_miles: item.base_price_per_default_miles,
    extra_price_per_miles: item.extra_price_per_miles,
    is_active: item.is_active,
  };
}

export default function AdminVehicleClassManagement() {
  const [items, setItems] = useState<VehicleClass[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");

  const activeCount = useMemo(
    () => items.filter((item) => item.is_active).length,
    [items],
  );

  const loadItems = async () => {
    setError("");
    try {
      const data = await fetchVehicleClasses();
      setItems(data.map(mapApiToUi));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load vehicle classes.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
    setIsFormOpen(false);
  };

  const toApiPayload = (value: FormState) => ({
    vehicle_class_image: value.image,
    class_name: value.vehicle_class_name,
    allow_passengers: value.passenger_count,
    allow_luggage: value.luggage_count,
    base_price: value.base_price,
    base_price_per_default_miles: value.base_price_per_default_miles,
    extra_price_per_miles: value.extra_price_per_miles,
    is_active: value.is_active,
  });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.vehicle_class_name.trim()) return;
    if (!form.image.trim()) {
      setError("Please upload a vehicle image.");
      return;
    }
    setIsSaving(true);
    setError("");
    try {
      if (editingId) {
        await updateVehicleClass(editingId, toApiPayload(form));
      } else {
        await createVehicleClass(toApiPayload(form));
      }
      await loadItems();
      resetForm();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save vehicle class.");
    } finally {
      setIsSaving(false);
    }
  };

  const onEdit = (item: VehicleClass) => {
    setEditingId(item.id);
    setForm({
      vehicle_class_name: item.vehicle_class_name,
      image: item.image,
      passenger_count: item.passenger_count,
      luggage_count: item.luggage_count,
      base_price: item.base_price,
      base_price_per_default_miles: item.base_price_per_default_miles,
      extra_price_per_miles: item.extra_price_per_miles,
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
      await deleteVehicleClass(id);
      await loadItems();
      if (editingId === id) resetForm();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete vehicle class.");
    }
  };

  const deleteTarget = deleteTargetId
    ? items.find((item) => item.id === deleteTargetId) ?? null
    : null;

  const onToggleActive = async (id: string) => {
    const target = items.find((item) => item.id === id);
    if (!target) return;
    setError("");
    try {
      await updateVehicleClass(id, toApiPayload({ ...target, is_active: !target.is_active }));
      await loadItems();
      if (editingId === id) {
        setForm((prev) => ({ ...prev, is_active: !prev.is_active }));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update status.");
    }
  };

  const onImageFileChange = async (file?: File | null) => {
    if (!file) return;
    setIsUploading(true);
    setError("");
    try {
      const url = await uploadVehicleClassImage(file);
      setForm((prev) => ({ ...prev, image: url }));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to upload image.");
    } finally {
      setIsUploading(false);
    }
  };

  const onImageDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files?.[0];
    if (file?.type.startsWith("image/")) void onImageFileChange(file);
  };

  return (
    <AdminLayout title="Vehicle Class Management">
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
          <h2 className="text-base font-semibold text-slate-900">Vehicle Classes</h2>
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
              Add Vehicle Class
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
                <th className="px-4 py-3 font-semibold">Image</th>
                <th className="px-4 py-3 font-semibold">Class Name</th>
                <th className="px-4 py-3 font-semibold">Passengers</th>
                <th className="px-4 py-3 font-semibold">Luggage</th>
                <th className="px-4 py-3 font-semibold">Base Price</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={7} className="px-4 py-10 text-center text-slate-500">
                    Loading vehicle classes...
                  </td>
                </tr>
              ) : (
                <>
                  {items.map((item) => (
                    <tr key={item.id} className="border-t border-slate-100">
                      <td className="px-4 py-3">
                        <img
                          src={item.image}
                          alt={item.vehicle_class_name}
                          className="h-12 w-20 object-contain bg-slate-50 border border-slate-200 rounded p-1"
                        />
                      </td>
                      <td className="px-4 py-3 font-medium text-slate-900">
                        {item.vehicle_class_name}
                      </td>
                      <td className="px-4 py-3 text-slate-700">{item.passenger_count}</td>
                      <td className="px-4 py-3 text-slate-700">{item.luggage_count}</td>
                      <td className="px-4 py-3 text-slate-700">
                        £{item.base_price.toFixed(2)}
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
                            aria-label="Edit vehicle class"
                            className="inline-flex items-center justify-center w-8 h-8 rounded border border-slate-300 hover:bg-slate-50"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setDeleteTargetId(item.id)}
                            title="Delete"
                            aria-label="Delete vehicle class"
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
                      <td colSpan={7} className="px-4 py-8 text-center text-slate-500">
                        No vehicle classes available.
                      </td>
                    </tr>
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>

        <div className="px-4 py-3 border-t border-slate-200 bg-slate-50 text-xs text-slate-500">
          Backed by API: list, create, update status, and delete.
        </div>
      </div>

      <Dialog open={isFormOpen} onOpenChange={(open) => !open ? resetForm() : setIsFormOpen(true)}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>{editingId ? "Edit Vehicle Class" : "Add Vehicle Class"}</DialogTitle>
            <DialogDescription>
              Fill the fields below to {editingId ? "update" : "create"} a vehicle class.
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-3" onSubmit={onSubmit}>
            <div>
              <label className="text-sm text-slate-600">Vehicle Class Name</label>
              <input
                value={form.vehicle_class_name}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, vehicle_class_name: e.target.value }))
                }
                className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#487307]/30"
                placeholder="Business Class"
                required
              />
            </div>

            <div>
              <span className="text-sm text-slate-600">Vehicle image</span>
              <p className="text-xs text-slate-500 mt-0.5">
                {form.image
                  ? "One image per class. Remove it below if you want to upload a different file."
                  : "Upload a file — we get a public URL from the server and send it as "}
                {!form.image && (
                  <>
                    <code className="text-slate-600">vehicle_class_image</code> when you save.
                  </>
                )}
              </p>
              {!form.image && (
                <label
                  className="mt-2 flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 px-4 py-6 cursor-pointer hover:border-[#487307]/50 hover:bg-slate-100/80 transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[#487307]/30 has-[:focus-visible]:ring-offset-2"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={onImageDrop}
                >
                  {isUploading ? (
                    <Loader2 className="w-8 h-8 text-[#487307] animate-spin" />
                  ) : (
                    <Upload className="w-8 h-8 text-slate-400" />
                  )}
                  <span className="text-sm font-medium text-slate-700 text-center">
                    {isUploading ? "Uploading…" : "Click to choose image or drop file here"}
                  </span>
                  <span className="text-xs text-slate-500">JPEG, PNG, WebP</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    disabled={isUploading}
                    onChange={(e) => onImageFileChange(e.target.files?.[0])}
                  />
                </label>
              )}
              {form.image && (
                <div className="mt-2 rounded-lg border border-slate-200 bg-white p-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium px-2 py-0.5">
                      Image uploaded
                    </span>
                    <button
                      type="button"
                      className="text-xs text-slate-600 hover:text-slate-900 underline"
                      onClick={() => setForm((prev) => ({ ...prev, image: "" }))}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-2 h-24 w-full overflow-hidden rounded-md border border-slate-200 bg-slate-50">
                    <img
                      src={form.image}
                      alt="Preview"
                      className="h-full w-full object-contain p-1"
                    />
                  </div>
                  <p
                    className="mt-2 text-[11px] leading-4 text-slate-500 break-all max-h-10 overflow-y-auto"
                    title={form.image}
                  >
                    {form.image}
                  </p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-slate-600">Passenger Count</label>
                <input
                  type="number"
                  min={1}
                  value={form.passenger_count}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      passenger_count: Number(e.target.value || 1),
                    }))
                  }
                  className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#487307]/30"
                />
              </div>
              <div>
                <label className="text-sm text-slate-600">Luggage Count</label>
                <input
                  type="number"
                  min={0}
                  value={form.luggage_count}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      luggage_count: Number(e.target.value || 0),
                    }))
                  }
                  className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#487307]/30"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-slate-600">Base Price</label>
              <input
                type="number"
                min={0}
                step="0.01"
                value={form.base_price}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    base_price: Number(e.target.value || 0),
                  }))
                }
                className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#487307]/30"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-slate-600">Base Price Per Default Miles</label>
                <input
                  type="number"
                  min={0}
                  step="0.01"
                  value={form.base_price_per_default_miles}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      base_price_per_default_miles: Number(e.target.value || 0),
                    }))
                  }
                  className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#487307]/30"
                />
              </div>
              <div>
                <label className="text-sm text-slate-600">Extra Price Per Miles</label>
                <input
                  type="number"
                  min={0}
                  step="0.01"
                  value={form.extra_price_per_miles}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      extra_price_per_miles: Number(e.target.value || 0),
                    }))
                  }
                  className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#487307]/30"
                />
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={form.is_active}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, is_active: e.target.checked }))
                }
                className="w-4 h-4"
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
                disabled={isSaving || isUploading}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] text-white text-sm font-semibold"
              >
                {isSaving ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Saving...
                  </span>
                ) : editingId ? "Update Vehicle Class" : "Add Vehicle Class"}
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <AlertDialog open={Boolean(deleteTarget)} onOpenChange={(open) => !open && setDeleteTargetId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Vehicle Class?</AlertDialogTitle>
            <AlertDialogDescription>
              {deleteTarget
                ? `Are you sure you want to delete "${deleteTarget.vehicle_class_name}"? This cannot be undone.`
                : "Are you sure you want to delete this vehicle class?"}
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

