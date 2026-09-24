import React from "react";

export default function Hero({ data }) {
  return (
    <section className="relative text-white flex items-center justify-center text-center px-4 py-14 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0e1b3d] to-[#1d2f66]">
      <div className="max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4">{data.title}</h1>
        <p className="text-sm sm:text-base text-slate-200 mb-6">{data.subtitle}</p>
        <button className="px-6 py-3 rounded-full font-semibold text-white bg-orange-500">
          Get a Free Quote →
        </button>
      </div>
    </section>
  );
}
