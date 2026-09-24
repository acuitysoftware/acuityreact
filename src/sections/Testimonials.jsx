import React from "react";

export default function Testimonials({ data }) {
  return (
    <section className="text-white px-4 py-14 bg-[#0e1b3d]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">{data.title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.items.map(([name, quote], i) => (
            <div key={i} className="bg-white text-slate-800 rounded-xl p-5">
              <div className="text-orange-500 mb-2">★★★★★</div>
              <p className="text-sm mb-3">"{quote}"</p>
              <div className="font-bold text-sm text-[#0e1b3d]">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
