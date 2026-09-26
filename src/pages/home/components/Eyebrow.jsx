import React from "react";

// Eyebrow label: accent orange (#FD6301), Inter 600, wide tracking
export default function Eyebrow({ children }) {
  return (
    <div className="text-accent font-body font-semibold text-xs 3xl:text-base tracking-widest uppercase mb-2">
      {children}
    </div>
  );
}
