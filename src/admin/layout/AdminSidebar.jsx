import React from "react";
import { NavLink } from "react-router-dom";
import { FiSettings, FiGrid, FiHome, FiMenu } from "react-icons/fi";

// Left navigation for the admin panel. 4 top-level tabs; "Menu Settings"
// expands to its own Header Management / Footer Management sub-links.
// `onNavigate` is called on link click so AdminLayout can close the
// off-canvas sidebar on mobile/tablet after a selection.
const NAV_ITEMS = [
  { to: "/admin/site-settings", label: "Site Settings", Icon: FiSettings },
  { to: "/admin/cms-settings", label: "CMS Settings", Icon: FiGrid },
  { to: "/admin/home-settings", label: "Home Settings", Icon: FiHome },
];

const MENU_SETTINGS_CHILDREN = [
  { to: "/admin/menu-settings/header", label: "Header Management" },
  { to: "/admin/menu-settings/footer", label: "Footer Management" },
];

const linkClass = ({ isActive }) =>
  "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition " +
  (isActive ? "bg-orange-500 text-white" : "text-slate-300 hover:bg-white/10");

const subLinkClass = ({ isActive }) =>
  "block px-4 py-2 rounded-lg text-sm transition " +
  (isActive ? "bg-orange-500/90 text-white font-semibold" : "text-slate-400 hover:bg-white/10 hover:text-slate-200");

export default function AdminSidebar({ onNavigate }) {
  return (
    <aside className="w-64 max-w-[80vw] bg-[#0e1b3d] text-white flex flex-col shrink-0 h-[calc(100vh-4rem)] lg:h-full overflow-y-auto py-6 px-3 gap-1 shadow-xl lg:shadow-none">
      {NAV_ITEMS.map(({ to, label, Icon }) => (
        <NavLink key={to} to={to} className={linkClass} onClick={onNavigate}>
          <Icon className="text-base" />
          {label}
        </NavLink>
      ))}

      {/* Menu Settings — parent tab + always-expanded sub-tabs */}
      <div className="mt-1">
        <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300">
          <FiMenu className="text-base" />
          Menu Settings
        </div>
        <div className="pl-6 flex flex-col gap-1">
          {MENU_SETTINGS_CHILDREN.map((child) => (
            <NavLink key={child.to} to={child.to} className={subLinkClass} onClick={onNavigate}>
              {child.label}
            </NavLink>
          ))}
        </div>
      </div>
    </aside>
  );
}
