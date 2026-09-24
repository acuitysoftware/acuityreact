import React from "react";

export default function Process({ data }) {
  return (
    <section className="w-full px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-[#0e1b3d]">{data.title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.items.map(([num, title, desc], i) => (
          <div key={i}>
            <div className="text-3xl font-extrabold text-orange-500 mb-2">{num}</div>
            <h3 className="font-bold mb-1 text-[#0e1b3d]">{title}</h3>
            <p className="text-sm text-slate-500">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
