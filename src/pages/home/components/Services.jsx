import React from "react";
import Eyebrow from "./Eyebrow";

export default function Services({ data }) {
  return (
    <section className="w-full bg-white px-4 py-14 font-body">
      <div className="max-w-7xl mx-auto">
        <Eyebrow>WHAT WE DO</Eyebrow>
        <h2 className="text-2xl font-heading font-bold mb-8 text-primary">{data.title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.items.map(([title, desc], i) => (
            <div
              key={i}
              className="border border-surface rounded-xl p-5 bg-white hover:shadow-md hover:border-secondary/30 transition-all group"
            >
              {/* Icon placeholder â€” accent colour */}
              <div className="w-10 h-10 rounded-lg mb-4 bg-accent/10 flex items-center justify-center">
                <div className="w-5 h-5 rounded bg-accent" />
              </div>
              <h3 className="font-heading font-semibold mb-2 text-primary group-hover:text-secondary transition-colors">
                {title}
              </h3>
              <p className="text-sm text-body/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
