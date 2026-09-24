import React, { useState } from "react";

export default function Header({ menu, company }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-bold text-xl text-[#0e1b3d]">
          <span className="grid grid-cols-2 gap-0.5">
            <span className="w-3 h-3 bg-orange-500 rounded-sm" />
            <span className="w-3 h-3 bg-blue-900 rounded-sm" />
            <span className="w-3 h-3 bg-blue-900 rounded-sm" />
            <span className="w-3 h-3 bg-orange-500 rounded-sm" />
          </span>
          {company.name}
        </a>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {menu.filter((m) => m.enabled).map((m) => (
            <div key={m.id} className="relative group">
              <a href={m.link} className="hover:text-orange-500">{m.label}</a>
              {m.children && m.children.length > 0 && (
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48 top-full">
                  {m.children.map((c) => (
                    <a key={c.id} href={c.link} className="block px-4 py-2 text-sm hover:bg-slate-50">
                      {c.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <a href="/contact" className="hidden lg:block px-5 py-2 rounded-full text-white text-sm font-semibold bg-orange-500">
          {company.cta} →
        </a>

        <button className="lg:hidden text-2xl" onClick={() => setOpen(!open)}>☰</button>
      </div>

      {open && (
        <div className="lg:hidden px-4 pb-4 flex flex-col gap-2 text-sm font-medium">
          {menu.filter((m) => m.enabled).map((m) => (
            <a key={m.id} href={m.link} className="py-1 border-b">{m.label}</a>
          ))}
        </div>
      )}
    </header>
  );
}
