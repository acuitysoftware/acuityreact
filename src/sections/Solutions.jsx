import React from "react";
import Eyebrow from "./Eyebrow";

export default function Solutions({ data }) {
  return (
    <section className="w-full px-4 py-10">
      <Eyebrow>OUR SOLUTIONS</Eyebrow>
      <h2 className="text-2xl font-bold mb-6 text-[#0e1b3d]">{data.title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.items.map((it, i) => (
          <div key={i} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <img src="/homepage-placeholder.svg" alt="" className="h-32 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-sm text-[#0e1b3d]">{it}</h3>
              <a className="text-xs font-semibold text-orange-500 cursor-pointer">Learn More →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
