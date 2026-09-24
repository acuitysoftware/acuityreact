import React from "react";

export default function Custom({ data }) {
  return (
    <section className="w-full px-4 py-10">
      <h2 className="text-2xl font-bold mb-2 text-[#0e1b3d]">{data.title || "Custom Section"}</h2>
      <p className="text-slate-500 text-sm">{data.body || "Custom content block."}</p>
    </section>
  );
}
