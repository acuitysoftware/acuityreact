import React, { useState } from "react";
import Eyebrow from "./Eyebrow";
import { MdFormatQuote, MdChevronLeft, MdChevronRight } from "react-icons/md";

// ─── Section data (edit here to update the Testimonials section) ─────────────
const TESTIMONIALS_DATA = {
  eyebrow: "CLIENT REVIEWS",
  title: "What Our Clients Say",
  items: [
    {
      name: "Rajesh Das",
      role: "Owner, Ali's Pizzeria",
      quote:
        "Acuity delivered our website on time with excellent support. Highly recommended! The team is professional and always available.",
      rating: 5,
      avatar: "RD",
    },
    {
      name: "Priya Sharma",
      role: "CEO, Pink & Purple",
      quote:
        "Excellent team, great communication and quality work. Our e-commerce store has seen a massive boost in sales since launch.",
      rating: 5,
      avatar: "PS",
    },
    {
      name: "Amit Verma",
      role: "Director, NexOrdr",
      quote:
        "Professional and reliable. They understand business needs and deliver the best solutions. Long-term partners for us.",
      rating: 5,
      avatar: "AV",
    },
  ],
};

// ─── Star renderer ────────────────────────────────────────────────────────────
function Stars({ count }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="#FCAE01" className="w-4 h-4">
          <path d="M10 1l2.39 5.26L18 7.27l-4 3.89.94 5.5L10 13.77l-4.94 2.89.94-5.5-4-3.89 5.61-.01z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Testimonials() {
  const { eyebrow, title, items } = TESTIMONIALS_DATA;
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p === 0 ? items.length - 1 : p - 1));
  const next = () => setActive((p) => (p === items.length - 1 ? 0 : p + 1));

  return (
    <section className="text-white px-4 py-16 bg-primary font-body relative overflow-hidden">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, #01A9FB 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
              {title}
            </h2>
          </div>
          {/* Navigation arrows */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-9 h-9 rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-secondary/30 transition-colors"
            >
              <MdChevronLeft className="text-xl text-white" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="w-9 h-9 rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-secondary/30 transition-colors"
            >
              <MdChevronRight className="text-xl text-white" />
            </button>
          </div>
        </div>

        {/* Cards — all three visible on desktop, single carousel on mobile */}
        <div className="hidden md:grid md:grid-cols-3 gap-5">
          {items.map(({ name, role, quote, rating, avatar }, i) => (
            <div
              key={i}
              className={`bg-white text-body rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all relative ${
                i === active ? "ring-2 ring-secondary ring-offset-2 ring-offset-primary" : ""
              }`}
            >
              <MdFormatQuote className="text-4xl text-secondary/20 absolute top-4 right-4" />
              <Stars count={rating} />
              <p className="text-sm text-body/75 leading-relaxed italic mb-5">"{quote}"</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-heading font-bold text-sm shrink-0">
                  {avatar}
                </div>
                <div>
                  <div className="font-heading font-semibold text-sm text-primary">{name}</div>
                  <div className="text-[11px] text-body/50">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile single card */}
        <div className="md:hidden">
          {(() => {
            const { name, role, quote, rating, avatar } = items[active];
            return (
              <div className="bg-white text-body rounded-2xl p-6 shadow relative">
                <MdFormatQuote className="text-4xl text-secondary/20 absolute top-4 right-4" />
                <Stars count={rating} />
                <p className="text-sm text-body/75 leading-relaxed italic mb-5">"{quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-heading font-bold text-sm shrink-0">
                    {avatar}
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-sm text-primary">{name}</div>
                    <div className="text-[11px] text-body/50">{role}</div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === active ? "bg-secondary" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
