import React from "react";
import Eyebrow from "./Eyebrow";

// ─── Section data (edit here to update the TechStack section) ────────────────
const TECHSTACK_DATA = {
  eyebrow: "OUR TECHNOLOGIES",
  title: "Technologies We Work With",
  viewAllLink: "/services",
  items: [
    { name: "Laravel" },
    { name: "React JS" },
    { name: "Node.js" },
    { name: "WordPress" },
    { name: "Shopify" },
    { name: "Flutter" },
    { name: "Firebase" },
    { name: "AWS" },
    { name: "Google Cloud" },
    { name: "MySQL" },
    { name: "Docker" },
    { name: "Kubernetes" },
  ],
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function TechStack() {
  const { eyebrow, title, viewAllLink, items } = TECHSTACK_DATA;

  return (
    <section className="w-full bg-white px-4 py-14 font-body">
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
            View All Technologies →
          </a>
        </div>

        {/* Grid of tech logos */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {items.map(({ name }, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-primary/10 bg-surface hover:border-secondary hover:shadow-md hover:bg-secondary/5 transition-all p-4 group cursor-default"
            >
              <img
                src="/assets/icons/images.png"
                alt={name}
                className="h-10 w-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <span className="text-[11px] font-semibold text-body/60 group-hover:text-primary transition-colors text-center">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile link */}
        <div className="mt-6 text-center sm:hidden">
          <a href={viewAllLink} className="text-sm font-semibold text-accent hover:underline">
            View All Technologies →
          </a>
        </div>
      </div>
    </section>
  );
}
