import React from "react";
import Eyebrow from "./Eyebrow";

export default function Clients({ data }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <Eyebrow>TRUSTED BY BUSINESSES WORLDWIDE</Eyebrow>
      <h2 className="text-2xl font-bold mb-6 text-[#0e1b3d]">{data.title}</h2>
      <div className="flex flex-wrap gap-3">
        {data.items.map((it, i) => (
          <div key={i} className="border rounded-lg px-4 py-3 text-sm font-semibold text-slate-600 bg-slate-50">
            {it}
          </div>
        ))}
      </div>
    </section>
  );
}
