import React from "react";
import Eyebrow from "./Eyebrow";

export default function About({ data }) {
  return (
    <section className="bg-[#0e1b3d] px-4 py-12 text-white sm:py-16">
      <div className="grid w-full items-center gap-8 lg:grid-cols-2">
        <img src="/homepage-placeholder.svg" alt="Acuity software project placeholder" className="h-64 w-full rounded-2xl object-cover sm:h-80" />
        <div>
          <Eyebrow>ABOUT ACUITY</Eyebrow>
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">{data.title}</h2>
          <p className="mb-8 max-w-2xl text-slate-300">{data.body}</p>
          <div className="flex flex-wrap gap-3">
            {data.features.map((f, i) => (
              <div key={i} className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold">
                {f}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
