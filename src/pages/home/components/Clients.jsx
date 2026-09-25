import React from "react";
import Eyebrow from "./Eyebrow";

// ─── Section data (edit here to update the Clients section) ───────────────────
const CLIENTS_DATA = {
  eyebrow: "TRUSTED BY BUSINESSES WORLDWIDE",
  title: "Our Recent Clients",
  viewAllLink: "/portfolio",
  items: [
    { name: "Ali's Pizzeria" },
    { name: "Pink & Purple" },
    { name: "NexOrdr" },
    { name: "BottleRunners" },
    { name: "MenuHuts" },
    { name: "Marco's Pizza" },
    { name: "The Food Hub" },
    { name: "Spice Villa" },
    { name: "UrbanBite" },
    { name: "TastyKart" },
  ],
};

// ─── Single logo card ─────────────────────────────────────────────────────────
function ClientCard({ name }) {
  return (
    <div className="flex-shrink-0 flex flex-col items-center justify-center gap-2 bg-white border border-primary/10 rounded-xl shadow-sm hover:shadow-md hover:border-secondary/40 transition-all px-5 py-3 w-[130px] sm:w-[150px] cursor-default group">
      <img
        src="/assets/images/creative-logo-design-company.png"
        alt={name}
        className="h-12 w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
      />
      <span className="text-[10px] font-semibold text-body/60 group-hover:text-primary transition-colors text-center leading-tight">
        {name}
      </span>
    </div>
  );
}

// ─── Marquee track (duplicated for seamless loop) ─────────────────────────────
function MarqueeRow({ items }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      {/* Left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-[#F4F8FC] to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-[#F4F8FC] to-transparent" />

      <div
        className="flex gap-4 animate-marquee"
        style={{ width: "max-content" }}
      >
        {doubled.map((client, i) => (
          <ClientCard key={i} name={client.name} />
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Clients() {
  const { eyebrow, title, viewAllLink, items } = CLIENTS_DATA;

  return (
    <section className="w-full bg-surface px-4 py-12 font-body">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary">
              {title}
            </h2>
          </div>
          <a
            href={viewAllLink}
            className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline whitespace-nowrap"
          >
            View All Clients →
          </a>
        </div>

        {/* Scrolling marquee */}
        <MarqueeRow items={items} />

        {/* Mobile "View All" link */}
        <div className="mt-5 text-center sm:hidden">
          <a
            href={viewAllLink}
            className="text-sm font-semibold text-accent hover:underline"
          >
            View All Clients →
          </a>
        </div>
      </div>
    </section>
  );
}
