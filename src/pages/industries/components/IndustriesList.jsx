import React from "react";

export default function IndustriesList({ industries }) {
  return (
    <div className="flex flex-wrap gap-3">
      {industries.map((it, i) => (
        <div
          key={i}
          className="border border-primary/10 px-4 py-2 rounded-full bg-white text-sm font-medium text-body hover:border-secondary hover:text-primary hover:bg-secondary/5 transition-all cursor-default"
        >
          {it}
        </div>
      ))}
    </div>
  );
}
