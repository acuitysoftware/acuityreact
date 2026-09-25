import React from "react";
import ServicesList from "./components/ServicesList";

const SERVICES = [
  "Website Development", "Mobile App Development", "Custom Software Development",
  "E-commerce Solutions", "Digital Marketing & SEO", "UI/UX Design",
  "Cloud & DevOps Solutions", "IT Consulting & Support",
];

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 font-body">
      <h1 className="text-3xl font-heading font-bold mb-8 text-primary">Our Services</h1>
      <ServicesList services={SERVICES} />
    </div>
  );
}