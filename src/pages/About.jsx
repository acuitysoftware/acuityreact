import React from "react";

export default function AboutPage({ company }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4 text-[#0e1b3d]">About {company.name}</h1>
      <p className="text-slate-600 max-w-2xl">
        {company.tagline}. We are a results-driven IT company helping businesses
        with innovative digital solutions, from startups to enterprises.
      </p>
    </div>
  );
}
