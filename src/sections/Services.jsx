import React from "react";
import Eyebrow from "./Eyebrow";

export default function Services({ data }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <Eyebrow>WHAT WE DO</Eyebrow>
      <h2 className="text-2xl font-bold mb-6 text-[#0e1b3d]">{data.title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.items.map(([title, desc], i) => (
          <div key={i} className="border rounded-xl p-5 hover:shadow-md transition">
            <div className="w-10 h-10 rounded-lg mb-3 bg-orange-500" />
            <h3 className="font-bold mb-1 text-[#0e1b3d]">{title}</h3>
            <p className="text-sm text-slate-500">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
