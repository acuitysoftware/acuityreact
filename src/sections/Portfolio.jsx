import React from "react";
import Eyebrow from "./Eyebrow";

export default function Portfolio({ data }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <Eyebrow>OUR WORK</Eyebrow>
      <h2 className="text-2xl font-bold mb-6 text-[#0e1b3d]">{data.title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.items.map((it, i) => (
          <div key={i} className="rounded-xl overflow-hidden border">
            <div className="h-32 bg-gradient-to-br from-orange-500 to-[#0e1b3d]" />
            <div className="p-3 text-sm font-semibold">{it}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
