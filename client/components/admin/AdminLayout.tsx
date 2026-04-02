import { BarChart3, CarFront, LayoutDashboard, LogOut, Menu, Package, Settings, X } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { clearAdminSession, getAdminDisplayProfile, refreshAdminTokenIfNeeded } from "@/lib/adminAuth";

type Props = {
  title: string;
  children: ReactNode;
};

const navItems = [
  { label: "Dashboard", path: "/admin-panel/dashboard", icon: LayoutDashboard },
  { label: "Booking Data", path: "/admin-panel/booking-data", icon: Package },
  { label: "Vehicle Class Management", path: "/admin-panel/vehicle-class-management", icon: CarFront },
  { label: "Settings", path: "/admin-panel/settings", icon: Settings },
];

export function AdminLayout({ title, children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const profile = getAdminDisplayProfile();

  const logout = () => {
    clearAdminSession();
    navigate("/admin-panel/login");
  };

  useEffect(() => {
    const timer = window.setInterval(async () => {
      const ok = await refreshAdminTokenIfNeeded();
      if (!ok) {
        clearAdminSession();
        navigate("/admin-panel/login");
      }
    }, 60 * 1000);
    return () => window.clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex">
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-50 w-72 bg-[#0f1801] text-white transform transition-transform duration-200 lg:translate-x-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="h-16 px-5 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-green-300" />
              <span className="font-semibold tracking-wide">Quickoo Admin</span>
            </div>
            <button
              className="lg:hidden p-1 rounded hover:bg-white/10"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
              type="button"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="p-4 space-y-2">
            {navItems.map(({ label, path, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === path
                    ? "bg-[#487307] text-white"
                    : "text-slate-200 hover:bg-white/10",
                )}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            ))}
          </nav>

          <div className="absolute bottom-4 left-4 right-4 space-y-3">
            <div className="rounded-lg border border-white/10 bg-white/5 p-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#487307] text-white flex items-center justify-center text-sm font-bold">
                {profile.initial}
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-300">Admin</p>
                <p className="text-sm font-medium text-white truncate">{profile.email}</p>
              </div>
            </div>
            <button
              onClick={logout}
              type="button"
              className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-medium"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </aside>

        <div className="flex-1 lg:ml-72">
          <header className="h-16 bg-white border-b border-slate-200 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-40">
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="lg:hidden p-2 rounded-md hover:bg-slate-100"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open sidebar"
              >
                <Menu className="w-5 h-5" />
              </button>
              <h1 className="text-lg font-semibold text-slate-900">{title}</h1>
            </div>
            <span className="text-sm text-slate-500">Admin Panel</span>
          </header>

          <main className="p-4 sm:p-6">{children}</main>
        </div>
      </div>

      {sidebarOpen && (
        <button
          type="button"
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar overlay"
        />
      )}
    </div>
  );
}

