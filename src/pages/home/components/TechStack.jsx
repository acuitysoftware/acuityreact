import React from "react";
import Eyebrow from "./Eyebrow";

export default function TechStack({ data }) {
  return (
    <section className="w-full bg-white px-4 py-14 font-body">
      <div className="max-w-7xl mx-auto">
        <Eyebrow>OUR TECHNOLOGIES</Eyebrow>
        <h2 className="text-2xl font-heading font-bold mb-8 text-primary">{data.title}</h2>
        <div className="flex flex-wrap gap-3">
          {data.items.map((it, i) => (
            <div
              key={i}
              className="border border-primary/10 rounded-lg px-4 py-3 text-sm font-medium text-body bg-surface hover:border-secondary hover:text-primary hover:bg-secondary/5 transition-all cursor-default"
            >
              {it}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
