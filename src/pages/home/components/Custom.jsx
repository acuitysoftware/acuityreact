import React from "react";

export default function Custom({ data }) {
  return (
    <section className="w-full bg-white px-10 py-12 font-body">
      <div className="w-full">
        <h2 className="text-2xl font-heading font-bold mb-3 text-primary">
          {data.title || "Custom Section"}
        </h2>
        <p className="text-body/70 text-sm leading-relaxed">{data.body || "Custom content block."}</p>
      </div>
    </section>
  );
}
