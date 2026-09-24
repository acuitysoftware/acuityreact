import React from "react";

// Top bar of the admin panel. Always visible, regardless of which
// admin page is active in the <Outlet />. The hamburger button only
// shows below the `lg` breakpoint, where the sidebar is off-canvas.
export default function AdminHeader({ company, onMenuClick }) {
  return (
    <header className="h-16 bg-[#0e1b3d] text-white flex items-center justify-between px-4 sm:px-6 shrink-0 z-40">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-xl leading-none w-8 h-8 flex items-center justify-center rounded hover:bg-white/10"
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <div className="flex items-center gap-2 font-bold text-sm sm:text-base truncate">
          <span className="grid grid-cols-2 gap-0.5 shrink-0">
            <span className="w-2.5 h-2.5 bg-orange-500 rounded-sm" />
            <span className="w-2.5 h-2.5 bg-blue-300 rounded-sm" />
            <span className="w-2.5 h-2.5 bg-blue-300 rounded-sm" />
            <span className="w-2.5 h-2.5 bg-orange-500 rounded-sm" />
          </span>
          <span className="truncate">{company?.name || "Acuity"} — Admin</span>
        </div>
      </div>
      <div className="flex items-center gap-3 sm:gap-4 text-sm shrink-0">
        <a href="/" target="_blank" rel="noreferrer" className="hidden sm:inline text-slate-300 hover:text-white">
          View Site ↗
        </a>
        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-xs font-bold">
          A
        </div>
      </div>
    </header>
  );
}
