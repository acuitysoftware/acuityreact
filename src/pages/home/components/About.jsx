import React from "react";
import Eyebrow from "./Eyebrow";
import {
  MdGroups,
  MdCenterFocusStrong,
  MdVerified,
  MdHandshake,
} from "react-icons/md";

// ─── Section data (edit here to update the About section) ────────────────────
const ABOUT_DATA = {
  eyebrow: "ABOUT ACUITY",
  title: ["Technology That Works for Your ", "Business"],
  body: "We are a results-driven IT company helping businesses with innovative digital solutions. From startups to enterprises, we deliver technology that creates real value and measurable growth.",
  ctaLink: "/about",
  features: [
    { label: "Experienced Team", icon: MdGroups },
    { label: "Client-Centric Approach", icon: MdCenterFocusStrong },
    { label: "Quality Solutions", icon: MdVerified },
    { label: "Long-Term Partnership", icon: MdHandshake },
  ],
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function About() {
  const { eyebrow, title, body, ctaLink, features } = ABOUT_DATA;

  return (
    <section className="w-full bg-body px-10 py-12 font-body relative overflow-hidden">
      <div className="w-full relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* ── Left: image ── */}
          <div className="relative">
            <img
              src="/assets/images/office-building.jpg" // Replace with your actual office image path
              alt="Acuity Software Services Office"
              className="h-72 w-full rounded-2xl object-cover sm:h-[450px] lg:h-[500px] ring-4 ring-white/10"
            />
          </div>

          {/* ── Right: copy ── */}
          <div className="text-white">
            <Eyebrow>{eyebrow}</Eyebrow>

            {/* Title with "Business" highlighted in accent color */}
            <h2 className="mb-4 text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
              {title[0]} <span className="text-accent">{title[1]}</span>
            </h2>

            <p className="mb-8 text-white/70 leading-relaxed text-base">{body}</p>

            {/* Feature list with react-icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {features.map(({ label, icon: Icon }, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-accent shrink-0">
                    <Icon className="text-xl" />
                  </div>
                  <span className="text-base font-medium text-white/90 text-center">{label}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href={ctaLink}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent text-white font-semibold text-base hover:bg-accent/90 transition-colors shadow-md hover:shadow-lg"
            >
              Know More About Us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
