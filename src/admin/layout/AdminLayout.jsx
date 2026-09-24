import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

// Shell for every /admin/* route. Header + Sidebar are rendered once here
// and never re-mount; only the <Outlet /> content changes as the admin
// navigates between Site Settings / CMS Settings / Home Settings / Menu Settings.
//
// Responsive behaviour:
// - lg and up: sidebar is always visible, pushed in-flow next to the content.
// - below lg: sidebar is off-canvas (hidden by default) and slides in as an
//   overlay when the hamburger button in AdminHeader is tapped, with a
//   backdrop to dismiss it.
export default function AdminLayout({ company }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <AdminHeader company={company} onMenuClick={() => setSidebarOpen((v) => !v)} />
      <div className="flex flex-1 min-h-0 relative">
        {/* Backdrop for mobile/tablet when sidebar is open */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div
          className={
            "fixed lg:static inset-y-0 left-0 top-16 lg:top-0 z-30 transition-transform duration-200 " +
            (sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0")
          }
        >
          <AdminSidebar onNavigate={() => setSidebarOpen(false)} />
        </div>

        <main className="flex-1 min-w-0 overflow-y-auto bg-slate-50 p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
