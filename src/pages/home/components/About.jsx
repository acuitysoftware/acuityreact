import React from "react";
import Eyebrow from "./Eyebrow";

export default function About({ data }) {
  return (
    <section className="bg-primary px-4 py-14 text-white font-body sm:py-20">
      <div className="max-w-7xl mx-auto grid items-center gap-10 lg:grid-cols-2">
        <img
          src="/homepage-placeholder.svg"
          alt="Acuity software project placeholder"
          className="h-64 w-full rounded-2xl object-cover sm:h-80"
        />
        <div>
          <Eyebrow>ABOUT ACUITY</Eyebrow>
          <h2 className="mb-4 text-2xl font-heading font-bold text-white md:text-3xl">
            {data.title}
          </h2>
          <p className="mb-8 max-w-2xl text-white/70 leading-relaxed">{data.body}</p>
          <div className="flex flex-wrap gap-3">
            {data.features.map((f, i) => (
              <div
                key={i}
                className="rounded-full border border-secondary/40 bg-secondary/10 px-4 py-2 text-sm font-semibold text-white hover:bg-secondary/20 transition-colors"
              >
                {f}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
