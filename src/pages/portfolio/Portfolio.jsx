import React from "react";
import PortfolioGrid from "./components/PortfolioGrid";

const PROJECTS = [
  "Restaurant Ordering System (NexOrdr)", "E-commerce Website (Pink and Purple)",
  "Corporate Website (Acuity)", "Pizzeria Website (Ali's Pizzeria)", "Custom Web Application",
];

export default function PortfolioPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 font-body">
      <h1 className="text-3xl font-heading font-bold mb-8 text-primary">Our Work</h1>
      <PortfolioGrid projects={PROJECTS} />
    </div>
  );
}