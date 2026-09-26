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
    <section className="w-full bg-surface px-10 py-8 font-body">
      <div className="mx-auto w-full 2xl:max-w-[1600px] 3xl:max-w-[1900px]">
        {/* Header row */}
        <div className="flex items-end justify-between mb-6">
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
            View All Industries →
          </a>
        </div>

        {/* Grid — 2 cols mobile, 4 cols tablet+, 4 cols desktop */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {items.map(({ label }, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-primary/10 bg-white text-center shadow-sm hover:border-secondary/50 hover:shadow-lg hover:-translate-y-1 transition-all group cursor-default"
            >
              <img
                src="/homepage-placeholder.svg"
                alt={label}
                className="h-32 2xl:h-40 3xl:h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="px-3 py-3 2xl:px-4 2xl:py-4 3xl:px-5 3xl:py-5 text-sm 2xl:text-base 3xl:text-lg font-semibold text-primary group-hover:text-secondary transition-colors leading-snug">
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile link */}
        <div className="mt-5 text-center sm:hidden">
          <a href={viewAllLink} className="text-sm font-semibold text-accent hover:underline">
            View All Industries →
          </a>
        </div>
      </div>
    </section>
  );
}
