import React from "react";

export default function CTA({ data }) {
  return (
    <section className="w-full bg-white px-4 py-16 text-center font-body">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-primary">
          {data.title}
        </h2>
        <p className="text-body/70 mb-8 leading-relaxed">{data.subtitle}</p>
        {/* Primary CTA â€” accent (#FD6301), Inter 600 */}
        <a
          href="/contact"
          className="inline-block px-8 py-3 rounded-full font-semibold text-white bg-accent hover:bg-accent/90 transition-colors shadow-md hover:shadow-lg"
        >
          Get a Free Quote â†’
        </a>
      </div>
    </section>
  );
}
