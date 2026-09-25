import React from "react";
import Eyebrow from "./Eyebrow";

// ─── Section data (edit here to update the Portfolio section) ────────────────
const PORTFOLIO_DATA = {
  eyebrow: "OUR WORK",
  title: "Featured Projects",
  viewAllLink: "/portfolio",
  items: [
    { label: "Restaurant Ordering System (NexOrdr)", category: "Web App" },
    { label: "E-commerce Website (Pink and Purple)", category: "E-commerce" },
    { label: "Corporate Website (Acuity)", category: "Website" },
    { label: "Pizzeria Website (Ali's Pizzeria)", category: "Website" },
    { label: "Custom Web Application", category: "Custom Software" },
  ],
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const { eyebrow, title, viewAllLink, items } = PORTFOLIO_DATA;

  return (
    <section className="w-full bg-surface px-4 py-14 font-body">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary">
              {title}
            </h2>
          </div>
          <a
            href={viewAllLink}
            className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline whitespace-nowrap"
          >
            View All Projects →
          </a>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ label, category }, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-primary/10 bg-white shadow-sm hover:shadow-md hover:border-secondary/40 hover:-translate-y-1 transition-all group"
            >
              <div className="relative overflow-hidden">
                <img
                  src="/homepage-placeholder.svg"
                  alt={label}
                  className="h-40 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category badge */}
                <span className="absolute top-3 left-3 text-[10px] font-semibold bg-accent text-white px-2.5 py-1 rounded-full shadow">
                  {category}
                </span>
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="text-sm font-heading font-semibold text-primary group-hover:text-secondary transition-colors leading-snug">
                  {label}
                </span>
                <a
                  href={viewAllLink}
                  className="text-xs font-semibold text-accent hover:underline whitespace-nowrap ml-2"
                >
                  View →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile link */}
        <div className="mt-6 text-center sm:hidden">
          <a href={viewAllLink} className="text-sm font-semibold text-accent hover:underline">
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
}
