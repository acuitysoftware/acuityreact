import React from "react";
import IndustriesList from "./components/IndustriesList";

const INDUSTRIES = [
  "Restaurant & Food Tech", "Retail & E-commerce", "Education", "Travel & Hospitality",
  "Healthcare", "Real Estate", "On-Demand Services", "Others",
];

export default function IndustriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 font-body">
      <h1 className="text-3xl font-heading font-bold mb-8 text-primary">Industries We Serve</h1>
      <IndustriesList industries={INDUSTRIES} />
    </div>
  );
}