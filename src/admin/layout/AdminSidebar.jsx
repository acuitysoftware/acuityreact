import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  FiSettings, FiGrid, FiHome, FiMenu, FiChevronDown, FiChevronLeft,
  FiUser, FiLock, FiLogOut,
} from "react-icons/fi";

const NAV_ITEMS = [
  { to: "/admin/site-settings", label: "Site Settings", Icon: FiSettings },
  { to: "/admin/cms-settings", label: "CMS Settings", Icon: FiGrid },
  { to: "/admin/home-settings", label: "Home Settings", Icon: FiHome },
];

const MENU_SETTINGS_CHILDREN = [
  { to: "/admin/menu-settings/header", label: "Header Management" },
  { to: "/admin/menu-settings/footer", label: "Footer Management" },
];

const PROFILE_CHILDREN = [
  { to: "/admin/change-password", label: "Change Password", Icon: FiLock },
];

const linkClass = ({ isActive }) =>
  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition " +
  (isActive ? "bg-orange-500 text-white" : "text-slate-300 hover:bg-white/10");

const subLinkClass = ({ isActive }) =>
  "flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition " +
  (isActive ? "bg-orange-500/90 text-white font-semibold" : "text-slate-400 hover:bg-white/10 hover:text-slate-200");

export default function AdminSidebar({ onNavigate, collapsed, onToggleCollapse }) {
  const location = useLocation();
  const navigate = useNavigate();
  const menuActive = location.pathname.startsWith("/admin/menu-settings");
  const profileActive = location.pathname.startsWith("/admin/change-password");
  const [menuOpen, setMenuOpen] = useState(menuActive);
  const [profileOpen, setProfileOpen] = useState(profileActive);
  const showLabels = !collapsed;

  const logout = () => {
    localStorage.removeItem("admin_token");
    onNavigate?.();
    navigate("/admin/login");
  };

  return (
    <aside className={`bg-[#0e1b3d] text-white flex flex-col shrink-0 h-[calc(100vh-4rem)] lg:h-full overflow-y-auto py-4 px-2 gap-1 shadow-xl lg:shadow-none transition-[width] duration-200 w-64 max-w-[80vw] ${collapsed ? "lg:w-16" : "lg:w-64"}`}>
      <button
        type="button"
        onClick={onToggleCollapse}
        className={`mb-2 flex items-center rounded-lg p-2.5 text-slate-300 hover:bg-white/10 hover:text-white ${collapsed ? "justify-center" : "justify-end"}`}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <FiChevronLeft className={`text-lg transition-transform ${collapsed ? "rotate-180" : ""}`} />
      </button>

      {NAV_ITEMS.map(({ to, label, Icon }) => (
        <NavLink key={to} to={to} className={linkClass} onClick={onNavigate} title={collapsed ? label : undefined}>
          <Icon className="text-base shrink-0" />
          <span className={showLabels ? "" : "lg:hidden"}>{label}</span>
        </NavLink>
      ))}

      <section className="mt-1">
        <button
          type="button"
          onClick={() => !collapsed && setMenuOpen((open) => !open)}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition text-slate-300 hover:bg-white/10 ${collapsed ? "justify-center" : ""}`}
          aria-expanded={!collapsed && menuOpen}
          title={collapsed ? "Menu Settings" : undefined}
        >
          <FiMenu className="text-base shrink-0" />
          <span className={`flex-1 text-left ${showLabels ? "" : "lg:hidden"}`}>Menu Settings</span>
          <FiChevronDown className={`transition-transform ${menuOpen ? "rotate-180" : ""} ${showLabels ? "" : "lg:hidden"}`} />
        </button>
        {menuOpen && (
          <div className={`ml-6 mt-1 flex flex-col gap-1 border-l border-white/10 pl-2 ${collapsed ? "lg:hidden" : ""}`}>
            {MENU_SETTINGS_CHILDREN.map((child) => (
              <NavLink key={child.to} to={child.to} className={subLinkClass} onClick={onNavigate}>{child.label}</NavLink>
            ))}
          </div>
        )}
      </section>

      <section className="mt-1">
        <button
          type="button"
          onClick={() => !collapsed && setProfileOpen((open) => !open)}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition text-slate-300 hover:bg-white/10 ${collapsed ? "justify-center" : ""}`}
          aria-expanded={!collapsed && profileOpen}
          title={collapsed ? "Profile" : undefined}
        >
          <FiUser className="text-base shrink-0" />
          <span className={`flex-1 text-left ${showLabels ? "" : "lg:hidden"}`}>Profile</span>
          <FiChevronDown className={`transition-transform ${profileOpen ? "rotate-180" : ""} ${showLabels ? "" : "lg:hidden"}`} />
        </button>
        {profileOpen && (
          <div className={`ml-6 mt-1 flex flex-col gap-1 border-l border-white/10 pl-2 ${collapsed ? "lg:hidden" : ""}`}>
            {PROFILE_CHILDREN.map(({ to, label, Icon }) => (
              <NavLink key={to} to={to} className={subLinkClass} onClick={onNavigate}>
                <Icon className="shrink-0" />{label}
              </NavLink>
            ))}
            <button type="button" onClick={logout} className="flex items-center gap-2 px-3 py-2 rounded-lg text-left text-sm text-slate-400 transition hover:bg-white/10 hover:text-slate-200">
              <FiLogOut className="shrink-0" />Logout
            </button>
          </div>
        )}
      </section>
    </aside>
  );
}
