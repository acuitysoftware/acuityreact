import React from "react";
import Eyebrow from "./Eyebrow";

export default function Industries({ data }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <Eyebrow>INDUSTRIES</Eyebrow>
      <h2 className="text-2xl font-bold mb-6 text-[#0e1b3d]">{data.title}</h2>
      <div className="flex flex-wrap gap-3">
        {data.items.map((it, i) => (
          <div key={i} className="px-4 py-2 rounded-full bg-slate-100 text-sm font-medium">
            {it}
          </div>
        ))}
      </div>
    </section>
  );
}
