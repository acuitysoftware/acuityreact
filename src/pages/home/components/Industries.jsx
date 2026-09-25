import React from "react";
import Eyebrow from "./Eyebrow";

export default function Industries({ data }) {
  return (
    <section className="w-full bg-surface px-4 py-14 font-body">
      <div className="max-w-7xl mx-auto">
        <Eyebrow>INDUSTRIES</Eyebrow>
        <h2 className="text-2xl font-heading font-bold mb-8 text-primary">{data.title}</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {data.items.map((it, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-primary/10 bg-white text-center text-xs font-semibold text-primary shadow-sm hover:border-secondary/50 hover:shadow-md transition-all group"
            >
              <img src="/homepage-placeholder.svg" alt="" className="h-16 w-full object-cover" />
              <div className="px-2 py-2 group-hover:text-secondary transition-colors">{it}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
