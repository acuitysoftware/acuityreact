import React from "react";
import Eyebrow from "./Eyebrow";

export default function Solutions({ data }) {
  return (
    <section className="w-full bg-surface px-4 py-14 font-body">
      <div className="max-w-7xl mx-auto">
        <Eyebrow>OUR SOLUTIONS</Eyebrow>
        <h2 className="text-2xl font-heading font-bold mb-8 text-primary">{data.title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.items.map((it, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-primary/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:border-secondary/40 group"
            >
              <img src="/homepage-placeholder.svg" alt="" className="h-32 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-heading font-semibold text-sm text-primary group-hover:text-secondary transition-colors">
                  {it}
                </h3>
                <a className="text-xs font-semibold text-accent cursor-pointer hover:underline mt-1 block">
                  Learn More â†’
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
