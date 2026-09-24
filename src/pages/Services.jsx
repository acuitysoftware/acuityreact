import React from "react";

const SERVICES = [
  "Website Development", "Mobile App Development", "Custom Software Development",
  "E-commerce Solutions", "Digital Marketing & SEO", "UI/UX Design",
  "Cloud & DevOps Solutions", "IT Consulting & Support",
];

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-[#0e1b3d]">Our Services</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SERVICES.map((s, i) => (
          <div key={i} className="border rounded-xl p-5">
            <div className="w-10 h-10 rounded-lg mb-3 bg-orange-500" />
            <h3 className="font-bold text-[#0e1b3d]">{s}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
