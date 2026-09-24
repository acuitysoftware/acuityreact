import React from "react";

// Shared shell for /admin/login and /admin/register — centered card on a
// branded background, consistent with the rest of the admin panel.
export default function AuthLayout({ title, subtitle, children, footer }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e1b3d] px-4 py-10">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-2 font-bold text-white text-lg mb-6">
          <span className="grid grid-cols-2 gap-0.5">
            <span className="w-3 h-3 bg-orange-500 rounded-sm" />
            <span className="w-3 h-3 bg-blue-300 rounded-sm" />
            <span className="w-3 h-3 bg-blue-300 rounded-sm" />
            <span className="w-3 h-3 bg-orange-500 rounded-sm" />
          </span>
          Acuity Software Services
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8">
          <h1 className="text-xl font-bold text-[#0e1b3d] mb-1">{title}</h1>
          {subtitle && <p className="text-sm text-slate-500 mb-6">{subtitle}</p>}
          {children}
        </div>

        {footer && <div className="text-center text-sm text-slate-400 mt-4">{footer}</div>}
      </div>
    </div>
  );
}
