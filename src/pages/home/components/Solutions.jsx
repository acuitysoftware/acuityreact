import React from "react";
import Eyebrow from "./Eyebrow";

// ─── Section data (edit here to update the Solutions section) ─────────────────
const SOLUTIONS_DATA = {
  eyebrow: "OUR SOLUTIONS",
  title: "Our Solutions",
  viewAllLink: "/services",
  items: [
    { label: "Web Solutions", desc: "See how modern websites can transform your digital sales and reach." },
    { label: "Mobile App Solutions", desc: "Bespoke iOS & Android apps that engage and retain your customers." },
    { label: "Cloud & Infrastructure", desc: "Scalable cloud solutions that grow with your business needs." },
    { label: "AI & Automation", desc: "Intelligent solutions to automate business processes at scale." },
    { label: "E-commerce Solutions", desc: "Complete and secure payment & shopping experiences." },
    { label: "Digital Marketing Solutions", desc: "SEO, ads and content marketing to boost your online reach." },
    { label: "Custom Software Solutions", desc: "Unique software built to tackle your exact challenges." },
    { label: "IT Support & Consulting", desc: "Ongoing guidance and expert technical support for growth." },
  ],
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function Solutions() {
  const { eyebrow, title, viewAllLink, items } = SOLUTIONS_DATA;

  return (
    <section className="w-full bg-surface px-10 py-8 font-body">
      <div className="w-full">
        {/* Header row */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              {title}
            </h2>
          </div>
          <a href={viewAllLink} className="hidden sm:inline-flex items-center gap-1 text-base font-semibold text-accent hover:underline whitespace-nowrap">
            Explore All Solutions →
          </a>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ label, desc }, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-primary/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-secondary/40 group"
            >
              <img src="/homepage-placeholder.svg" alt={label} className="h-36 2xl:h-44 3xl:h-52 w-full object-cover" />
              <div className="p-4 2xl:p-5 3xl:p-6">
                <h3 className="font-heading font-semibold text-base 2xl:text-lg 3xl:text-xl text-primary group-hover:text-secondary transition-colors leading-snug mb-1">
                  {label}
                </h3>
                <p className="text-sm 2xl:text-base 3xl:text-lg text-body/60 leading-relaxed mb-2">{desc}</p>
                <a href={viewAllLink} className="text-sm font-semibold text-accent cursor-pointer hover:underline block">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 text-center sm:hidden">
          <a href={viewAllLink} className="text-sm font-semibold text-accent hover:underline">Explore All Solutions →</a>
        </div>
      </div>
    </section>
  );
}
