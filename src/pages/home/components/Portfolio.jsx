import React from "react";
import Eyebrow from "./Eyebrow";

export default function Portfolio({ data }) {
  return (
    <section className="w-full bg-surface px-4 py-14 font-body">
      <div className="max-w-7xl mx-auto">
        <Eyebrow>OUR WORK</Eyebrow>
        <h2 className="text-2xl font-heading font-bold mb-8 text-primary">{data.title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.items.map((it, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-primary/10 bg-white shadow-sm hover:shadow-md hover:border-secondary/40 transition-all group"
            >
              <img src="/homepage-placeholder.svg" alt="" className="h-40 w-full object-cover" />
              <div className="p-4 text-sm font-heading font-semibold text-primary group-hover:text-secondary transition-colors">
                {it}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
