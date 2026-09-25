import React from "react";
import Eyebrow from "./Eyebrow";

// ─── Section data (edit here to update the Industries section) ────────────────
const INDUSTRIES_DATA = {
  eyebrow: "INDUSTRIES",
  title: "Industries We Serve",
  viewAllLink: "/industries",
  items: [
    { label: "Restaurant & Food Tech" },
    { label: "Retail & E-commerce" },
    { label: "Education" },
    { label: "Travel & Hospitality" },
    { label: "Healthcare" },
    { label: "Real Estate" },
    { label: "On-Demand Services" },
    { label: "Others" },
  ],
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function Industries() {
  const { eyebrow, title, viewAllLink, items } = INDUSTRIES_DATA;

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
            View All Industries →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {items.map(({ label }, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-primary/10 bg-white text-center text-xs font-semibold text-primary shadow-sm hover:border-secondary/50 hover:shadow-md hover:-translate-y-0.5 transition-all group cursor-default"
            >
              <img
                src="/homepage-placeholder.svg"
                alt={label}
                className="h-16 w-full object-cover"
              />
              <div className="px-2 py-2 group-hover:text-secondary transition-colors leading-snug">
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile link */}
        <div className="mt-6 text-center sm:hidden">
          <a href={viewAllLink} className="text-sm font-semibold text-accent hover:underline">
            View All Industries →
          </a>
        </div>
      </div>
    </section>
  );
}
