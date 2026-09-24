import React from "react";

const PROJECTS = [
  "Restaurant Ordering System (NexOrdr)", "E-commerce Website (Pink and Purple)",
  "Corporate Website (Acuity)", "Pizzeria Website (Ali's Pizzeria)", "Custom Web Application",
];

export default function PortfolioPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-[#0e1b3d]">Our Work</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROJECTS.map((p, i) => (
          <div key={i} className="rounded-xl overflow-hidden border">
            <div className="h-32 bg-gradient-to-br from-orange-500 to-[#0e1b3d]" />
            <div className="p-3 text-sm font-semibold">{p}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
