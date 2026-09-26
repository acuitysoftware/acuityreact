import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX, HiChevronDown } from "react-icons/hi";

const DEFAULT_MENU = [
  { id: "m1", label: "Home", link: "/", enabled: true },
  { id: "m2", label: "About Us", link: "/about", enabled: true },
  {
    id: "m3",
    label: "Services",
    link: "/services",
    enabled: true,
    children: [
      { id: "m3a", label: "Web Development", link: "/services/web" },
      { id: "m3b", label: "Mobile Apps", link: "/services/mobile" },
    ],
  },
  { id: "m4", label: "Industries", link: "/industries", enabled: true },
  { id: "m5", label: "Portfolio", link: "/portfolio", enabled: true },
  { id: "m6", label: "Blog", link: "/blog", enabled: true },
  { id: "m7", label: "Contact Us", link: "/contact", enabled: true },
];

const DEFAULT_COMPANY = {
  name: "Acuity Software Services",
  cta: "Get a Free Quote",
};

export default function Header({ menu = DEFAULT_MENU, company = DEFAULT_COMPANY }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 w-full font-body shadow-md px-10"
      style={{ backgroundColor: "black" }}
    >
      {/* ── Main bar ───────────────────────────────────────── */}
      <div className="relative w-full h-[68px] xl:h-[80px] 2xl:h-[96px] flex items-center justify-between gap-4">
        {/* ── Logo (left) ─────────────────────────────────── */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/assets/images/white_logo.png"
            alt="Acuity logo"
            className="h-12 xl:h-16 2xl:h-20 w-auto object-contain"
          />
        </Link>

        {/* ── Desktop Nav (centre) ────────────────────────── */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-5 xl:gap-8 2xl:gap-12">
          {menu.filter((m) => m.enabled).map((m) => {
            const hasChildren = m.children && m.children.length > 0;
            return (
              <div key={m.id} className="relative group py-2">
                <Link
                  to={m.link}
                  // Changed after:bg-secondary to after:bg-current
                  className="relative inline-flex items-center gap-1 text-xs xl:text-base 2xl:text-lg 3xl:text-[1.6rem] font-semibold whitespace-nowrap transition-colors hover:text-secondary after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                  style={{ color: "#F4F8FC" }}
                >
                  <span>{m.label}</span>
                  {hasChildren && (
                    <HiChevronDown className="text-sm xl:text-base transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {/* Dropdown */}
                {hasChildren && (
                  <div
                    className="absolute hidden group-hover:block shadow-xl rounded-lg py-1.5 xl:py-2.5 w-44 xl:w-56 2xl:w-64 top-full left-0 border border-white/10"
                    style={{ backgroundColor: "#0B1730" }}
                  >
                    {m.children.map((c) => (
                      <Link
                        key={c.id}
                        to={c.link}
                        className="block px-3 py-1.5 xl:py-2.5 text-xs xl:text-sm 2xl:text-base transition-colors hover:text-secondary"
                        style={{ color: "#F4F8FC" }}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* ── CTA button (right) ──────────────────────────── */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-1 px-4 xl:px-7 2xl:px-8 py-2 xl:py-3 2xl:py-3.5 rounded-full text-white text-xs xl:text-base 2xl:text-lg font-semibold whitespace-nowrap transition-all hover:opacity-90 shadow shrink-0"
          style={{ backgroundColor: "#FD6301" }}
        >
          {(company?.cta || DEFAULT_COMPANY.cta)} →
        </Link>

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
            <div key={m.id} className="flex flex-col">
              <Link
                to={m.link}
                // Changed after:bg-secondary to after:bg-current
                className="relative py-2.5 text-sm border-b border-white/10 transition-colors hover:text-secondary flex items-center justify-between after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                style={{ color: "#F4F8FC" }}
                onClick={() => setOpen(false)}
              >
                <span>{m.label}</span>
                {m.children && m.children.length > 0 && (
                  <HiChevronDown className="text-sm" />
                )}
              </Link>
              {m.children && m.children.length > 0 && (
                <div className="pl-4 flex flex-col bg-white/5">
                  {m.children.map((c) => (
                    <Link
                      key={c.id}
                      to={c.link}
                      className="py-2 text-xs border-b border-white/5 text-gray-300 hover:text-secondary"
                      onClick={() => setOpen(false)}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className="mt-3 text-center px-4 py-2.5 rounded-full text-white text-sm font-semibold"
            style={{ backgroundColor: "#FD6301" }}
            onClick={() => setOpen(false)}
          >
            {(company?.cta || DEFAULT_COMPANY.cta)} →
          </Link>
        </div>
      )}
    </header>
  );
}