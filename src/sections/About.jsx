import React from "react";
import Eyebrow from "./Eyebrow";

export default function About({ data }) {
  return (
    <section className="text-white px-4 py-16 bg-[#0e1b3d]">
      <div className="max-w-5xl mx-auto text-center">
        <Eyebrow>ABOUT ACUITY</Eyebrow>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{data.title}</h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-8">{data.body}</p>
        <div className="flex flex-wrap justify-center gap-6">
          {data.features.map((f, i) => (
            <div key={i} className="text-sm font-semibold border border-white/20 rounded-full px-4 py-2">
              {f}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
