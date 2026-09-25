import React from "react";
import Eyebrow from "./Eyebrow";

export default function Clients({ data }) {
  return (
    <section className="w-full bg-surface px-4 py-12 font-body">
      <div className="max-w-7xl mx-auto">
        <Eyebrow>TRUSTED BY BUSINESSES WORLDWIDE</Eyebrow>
        <h2 className="text-2xl font-heading font-bold mb-6 text-primary">{data.title}</h2>
        <div className="flex flex-wrap gap-3">
          {data.items.map((it, i) => (
            <div
              key={i}
              className="border border-primary/10 rounded-lg px-4 py-3 text-sm font-medium text-body bg-white shadow-sm hover:border-secondary hover:text-primary transition-colors"
            >
              {it}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
