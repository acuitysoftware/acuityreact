import React from "react";

export default function AboutSection({ company }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 font-body">
      <h1 className="text-3xl font-heading font-bold mb-4 text-primary">
        About {company.name}
      </h1>
      <p className="text-body/70 max-w-2xl leading-relaxed">
        {company.tagline}. We are a results-driven IT company helping businesses
        with innovative digital solutions, from startups to enterprises.
      </p>
    </div>
  );
}
