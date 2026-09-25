import React from "react";

export default function Testimonials({ data }) {
  return (
    <section className="text-white px-4 py-16 bg-primary font-body">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-heading font-bold mb-8 text-white">{data.title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.items.map(([name, quote], i) => (
            <div key={i} className="bg-white text-body rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              {/* Stars â€” gold accent (#FCAE01) for decorative highlight */}
              <div className="text-gold mb-3 text-base tracking-wider">â˜…â˜…â˜…â˜…â˜…</div>
              <p className="text-sm text-body/80 mb-4 leading-relaxed italic">"{quote}"</p>
              <div className="font-heading font-semibold text-sm text-primary">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
