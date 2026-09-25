import React from "react";
import Eyebrow from "./Eyebrow";

// ─── Section data (edit here to update the Clients section) ───────────────────
const CLIENTS_DATA = {
  eyebrow: "TRUSTED BY BUSINESSES WORLDWIDE",
  title: "Our Recent Clients",
  viewAllLink: "/portfolio",
  items: [
    { name: "Ali's Pizzeria", logo: "/assets/images/creative-logo-design-company.png" },
    { name: "Pink & Purple", logo: "/assets/images/creative-logo-design-company.png" },
    { name: "NexOrdr", logo: "/assets/images/creative-logo-design-company.png" },
    { name: "BottleRunners", logo: "/assets/images/creative-logo-design-company.png" },
    { name: "MenuHuts", logo: "/assets/images/creative-logo-design-company.png" },
    { name: "Marco's Pizza", logo: "/assets/images/creative-logo-design-company.png" },
    { name: "The Food Hub", logo: "/assets/images/creative-logo-design-company.png" },
    { name: "Spice Villa", logo: "/assets/images/creative-logo-design-company.png" },
    { name: "UrbanBite", logo: "/assets/images/creative-logo-design-company.png" },
    { name: "TastyKart", logo: "/assets/images/creative-logo-design-company.png" },
  ],
};

// ─── Single logo card ─────────────────────────────────────────────────────────
function ClientCard({ name, logo }) {
  return (
    <div className="flex-shrink-0 flex flex-col items-center justify-center gap-2 bg-white border border-primary/10 rounded-xl shadow-sm hover:shadow-md hover:border-secondary/40 transition-all px-5 py-4 w-[150px] sm:w-[170px] cursor-default group">
      {/* Removed grayscale classes to always show actual colors */}
      <img
        src={logo}
        alt={name}
        className="h-14 w-full object-contain"
      />
      {/* Removed text-body/60 and group-hover:text-primary to always show primary color */}
      <span className="text-xs font-semibold text-primary text-center leading-tight">
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
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-[#F4F8FC] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-[#F4F8FC] to-transparent" />
      <div className="flex gap-4 animate-marquee" style={{ width: "max-content" }}>
        {doubled.map((client, i) => (
          <ClientCard key={i} name={client.name} logo={client.logo} />
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 28s linear infinite; }
        .animate-marquee:hover { animation-play-state: paused; }
      `}</style>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Clients() {
  const { eyebrow, title, viewAllLink, items } = CLIENTS_DATA;

  return (
    <section className="w-full bg-surface px-10 py-8 font-body">
      <div className="w-full">
        <div className="flex items-end justify-between mb-5">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              {title}
            </h2>
          </div>
          <a href={viewAllLink} className="hidden sm:inline-flex items-center gap-1 text-base font-semibold text-accent hover:underline whitespace-nowrap">
            View All Clients →
          </a>
        </div>
        <MarqueeRow items={items} />
        <div className="mt-4 text-center sm:hidden">
          <a href={viewAllLink} className="text-sm font-semibold text-accent hover:underline">View All Clients →</a>
        </div>
      </div>
    </section>
  );
}