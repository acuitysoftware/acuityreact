import React from "react";

const INDUSTRIES = [
  "Restaurant & Food Tech", "Retail & E-commerce", "Education", "Travel & Hospitality",
  "Healthcare", "Real Estate", "On-Demand Services", "Others",
];

export default function IndustriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-[#0e1b3d]">Industries We Serve</h1>
      <div className="flex flex-wrap gap-3">
        {INDUSTRIES.map((it, i) => (
          <div key={i} className="px-4 py-2 rounded-full bg-slate-100 text-sm font-medium">{it}</div>
        ))}
      </div>
    </div>
  );
}
