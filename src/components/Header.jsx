import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Header({ menu, company }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 w-full font-body shadow-md px-6 lg:px-10"
      style={{ backgroundColor: "black" }}
    >
      {/* ── Inner container — caps width so content doesn't over-stretch on big monitors ── */}
      <div className="max-w-[1600px] mx-auto">
        {/* ── Main bar ───────────────────────────────────────── */}
        <div className="relative w-full h-[68px] xl:h-[80px] 2xl:h-[96px] flex items-center justify-between gap-4">
          {/* ── Logo (left) ─────────────────────────────────── */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/assets/images/white_logo.png"
              alt="Acuity logo"
              className="h-12 xl:h-16 2xl:h-20 w-auto object-contain"
            />
          </a>

          {/* ── Desktop Nav (centre) ────────────────────────── */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-5 xl:gap-8 2xl:gap-12">
            {menu.filter((m) => m.enabled).map((m) => (
              <div key={m.id} className="relative group">
                {/* Restored <a> tag */}
                <a
                  href={m.link}
                  className="text-xs xl:text-base 2xl:text-lg font-semibold whitespace-nowrap transition-colors hover:text-secondary"
                  style={{ color: "#F4F8FC" }}
                >
                  {m.label}
                </a>

                {/* Dropdown */}
                {m.children && m.children.length > 0 && (
                  <div
                    className="absolute hidden group-hover:block shadow-xl rounded-lg py-1.5 xl:py-2.5 w-44 xl:w-56 2xl:w-64 top-full mt-2 border border-white/10"
                    style={{ backgroundColor: "#0B1730" }}
                  >
                    {m.children.map((c) => (
                      // Restored <a> tag
                      <a
                        key={c.id}
                        href={c.link}
                        className="block px-3 py-1.5 xl:py-2.5 text-xs xl:text-sm 2xl:text-base transition-colors hover:text-secondary"
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
          {/* Restored <a> tag */}
          <a
            href="/contact"
            className="hidden lg:inline-flex items-center gap-1 ml-auto px-4 xl:px-7 2xl:px-8 py-2 xl:py-3 2xl:py-3.5 rounded-full text-white text-xs xl:text-base 2xl:text-lg font-semibold whitespace-nowrap transition-all hover:opacity-90 shadow shrink-0"
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
              // Restored <a> tag
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
            {/* Restored <a> tag */}
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
      </div>
    </header>
  );
}