import React from "react";
import Eyebrow from "./Eyebrow";

export default function Industries({ data }) {
  return (
    <section className="w-full px-4 py-10">
      <Eyebrow>INDUSTRIES</Eyebrow>
      <h2 className="text-2xl font-bold mb-6 text-[#0e1b3d]">{data.title}</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {data.items.map((it, i) => (
          <div key={i} className="overflow-hidden rounded-lg border border-slate-200 bg-white text-center text-xs font-semibold text-[#0e1b3d] shadow-sm">
            <img src="/homepage-placeholder.svg" alt="" className="h-16 w-full object-cover" />
            <div className="px-2 py-2">{it}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
