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
    <section className="w-full bg-surface px-10 py-8 font-body">
      <div className="w-full">
        {/* Header row */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              {title}
            </h2>
          </div>
          <a
            href={viewAllLink}
            className="hidden sm:inline-flex items-center gap-1 text-base font-semibold text-accent hover:underline whitespace-nowrap"
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
                  src="/assets/images/feature-project-sample.jpg"
                  alt={label}
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="text-base font-heading font-semibold text-primary group-hover:text-secondary transition-colors leading-snug">
                  {label}
                </span>
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
