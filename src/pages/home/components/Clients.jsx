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
    <div className="flex flex-col items-center justify-center gap-2 md:gap-3 bg-white border border-primary/10 rounded-xl shadow-md hover:shadow-lg hover:border-secondary/40 transition-all p-4 md:p-5 3xl:p-7 hover:-translate-y-1 cursor-default group h-full">
      <img
        src={logo}
        alt={name}
        className="h-12 sm:h-14 3xl:h-20 w-full object-contain transition-transform group-hover:scale-105"
      />
      <span className="text-xs sm:text-sm 3xl:text-lg font-semibold text-primary text-center leading-tight">
        {name}
      </span>
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

        {/* 2 Rows Grid: 2 cols on mobile (5 per row), 5 cols on md+ (2 rows total for 10 items) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-5 3xl:gap-8">
          {items.map((client, i) => (
            <ClientCard key={i} name={client.name} logo={client.logo} />
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <a href={viewAllLink} className="text-sm font-semibold text-accent hover:underline">View All Clients →</a>
        </div>
      </div>
    </section>
  );
}