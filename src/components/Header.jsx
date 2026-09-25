import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Header({ menu, company }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 w-full font-body shadow-md px-10"
      style={{ backgroundColor: "black" }}
    >
      {/* ── Main bar ───────────────────────────────────────── */}
      <div
        className="relative w-full flex items-center justify-between gap-3"
        style={{ height: "68px" }}
      >
        {/* ── Logo (left) ─────────────────────────────────── */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/assets/images/white_logo.png"
            alt="Acuity logo"
            className="h-14 w-auto object-contain"
          />
        </a>

        {/* ── Desktop Nav (centre) ────────────────────────── */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-4">
          {menu.filter((m) => m.enabled).map((m) => (
            <div key={m.id} className="relative group">
              <a
                href={m.link}
                className="text-xs font-medium whitespace-nowrap transition-colors hover:text-secondary"
                style={{ color: "#F4F8FC" }}
              >
                {m.label}
              </a>

              {/* Dropdown */}
              {m.children && m.children.length > 0 && (
                <div
                  className="absolute hidden group-hover:block shadow-xl rounded-lg py-1.5 w-44 top-full mt-2 border border-white/10"
                  style={{ backgroundColor: "#0B1730" }}
                >
                  {m.children.map((c) => (
                    <a
                      key={c.id}
                      href={c.link}
                      className="block px-3 py-1.5 text-xs transition-colors hover:text-secondary"
                      style={{ color: "#F4F8FC" }}
                    >
                      {c.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* ── CTA button (right) ──────────────────────────── */}
        <a
          href="/contact"
          className="hidden lg:inline-flex items-center gap-1 ml-auto px-4 py-2 rounded-full text-white text-xs font-semibold whitespace-nowrap transition-all hover:opacity-90 shadow shrink-0"
          style={{ backgroundColor: "#FD6301" }}
        >
          {company.cta} →
        </a>

        {/* ── Mobile hamburger ────────────────────────────── */}
        <button
          className="lg:hidden ml-auto text-xl shrink-0 transition-colors"
          style={{ color: "#F4F8FC" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* ── Mobile menu ─────────────────────────────────── */}
      {open && (
        <div
          className="lg:hidden px-4 pb-4 flex flex-col gap-0.5 border-t border-white/10"
          style={{ backgroundColor: "#0B1730" }}
        >
          {menu.filter((m) => m.enabled).map((m) => (
            <a
              key={m.id}
              href={m.link}
              className="py-2.5 text-sm border-b border-white/10 transition-colors hover:text-secondary"
              style={{ color: "#F4F8FC" }}
              onClick={() => setOpen(false)}
            >
              {m.label}
            </a>
          ))}
          <a
            href="/contact"
            className="mt-3 text-center px-4 py-2.5 rounded-full text-white text-sm font-semibold"
            style={{ backgroundColor: "#FD6301" }}
            onClick={() => setOpen(false)}
          >
            {company.cta} →
          </a>
        </div>
      )}
    </header>
  );
}
