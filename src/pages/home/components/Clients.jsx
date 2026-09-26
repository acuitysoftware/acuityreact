import React from "react";
import Eyebrow from "./Eyebrow";

// ─── Section data (edit here to update the Clients section) ───────────────────
const CLIENTS_DATA = {
  eyebrow: "TRUSTED BY BUSINESSES WORLDWIDE",
  title: "Our Recent Clients",
  viewAllLink: "/portfolio",
  items: [
    { logo: "/assets/images/alis-pizzeria.png" },
    { logo: "/assets/images/carry-all.png" },
    { logo: "/assets/images/hand-shake.png" },
    { logo: "/assets/images/lehong.png" },
    { logo: "/assets/images/lime-kebabs.png" },
    { logo: "/assets/images/ok-all.png" },
    { logo: "/assets/images/sohan.png" },
    { logo: "/assets/images/the-great.png" },
    { logo: "/assets/images/virasat.png" },
    { logo: "/assets/images/wildspice.png" },
  ],
};

// ─── Single logo card ─────────────────────────────────────────────────────────
function ClientCard({ logo }) {
  return (
    <div className="flex items-center justify-center bg-white border border-primary/10 rounded-xl shadow-sm hover:shadow-md hover:border-secondary/40 transition-all p-3 md:p-4 hover:-translate-y-1 cursor-default group aspect-square w-full">
      {/* Updated image classes to fill up to 80% of the square card nicely */}
      <img
        src={logo}
        alt="Client logo"
        className="max-w-[80%] max-h-[80%] w-auto h-auto object-contain transition-transform group-hover:scale-105"
      />
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Clients() {
  const { eyebrow, title, viewAllLink, items } = CLIENTS_DATA;

  return (
    <section className="w-full bg-surface px-10 py-8 font-body">
      <div className="w-full">
        <div className="flex items-end justify-between mb-6">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="text-3xl md:text-4xl 3xl:text-5xl font-heading font-bold text-primary">
              {title}
            </h2>
          </div>
          <a href={viewAllLink} className="hidden sm:inline-flex items-center gap-1 text-base 3xl:text-xl font-semibold text-accent hover:underline whitespace-nowrap">
            View All Clients →
          </a>
        </div>

        {/* Grid: 2 cols on mobile, 4 on tablet, 6 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
          {items.map((client, i) => (
            <ClientCard key={i} logo={client.logo} />
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <a href={viewAllLink} className="text-sm font-semibold text-accent hover:underline">View All Clients →</a>
        </div>
      </div>
    </section>
  );
}