import React from "react";

export default function Process({ data }) {
  return (
    <section className="w-full bg-white px-4 py-14 font-body">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-heading font-bold mb-10 text-primary">{data.title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.items.map(([num, title, desc], i) => (
            <div key={i} className="relative">
              {/* Step number â€” Manrope 700-800, accent colour */}
              <div className="text-4xl font-heading font-extrabold text-accent mb-3 leading-none">
                {num}
              </div>
              <h3 className="font-heading font-semibold mb-2 text-primary">{title}</h3>
              <p className="text-sm text-body/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
