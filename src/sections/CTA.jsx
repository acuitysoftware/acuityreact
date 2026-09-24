import React from "react";

export default function CTA({ data }) {
  return (
    <section className="w-full px-4 py-14 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#0e1b3d]">{data.title}</h2>
      <p className="text-slate-500 mb-6 max-w-xl mx-auto">{data.subtitle}</p>
      <button className="px-6 py-3 rounded-full font-semibold text-white bg-orange-500">
        Get a Free Quote →
      </button>
    </section>
  );
}
