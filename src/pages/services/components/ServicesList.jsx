import React from "react";

export default function ServicesList({ services }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {services.map((s, i) => (
        <div
          key={i}
          className="border border-surface rounded-xl p-5 bg-white hover:shadow-md hover:border-secondary/30 transition-all group"
        >
          <div className="w-10 h-10 rounded-lg mb-4 bg-accent/10 flex items-center justify-center">
            <div className="w-5 h-5 rounded bg-accent" />
          </div>
          <h3 className="font-heading font-semibold text-primary group-hover:text-secondary transition-colors">
            {s}
          </h3>
        </div>
      ))}
    </div>
  );
}
