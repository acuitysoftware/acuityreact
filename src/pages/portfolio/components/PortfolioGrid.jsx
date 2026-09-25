import React from "react";

export default function PortfolioGrid({ projects }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((p, i) => (
        <div
          key={i}
          className="rounded-xl overflow-hidden border border-primary/10 bg-white shadow-sm hover:shadow-md hover:border-secondary/40 transition-all group"
        >
          <div className="h-32 bg-gradient-to-br from-accent to-primary" />
          <div className="p-4 text-sm font-heading font-semibold text-primary group-hover:text-secondary transition-colors">
            {p}
          </div>
        </div>
      ))}
    </div>
  );
}
