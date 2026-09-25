import React from "react";
import Eyebrow from "./Eyebrow";
import acuityLogo from "../../../assets/acuity-logo.png";

// ─── Section data (edit here to update the About section) ────────────────────
const ABOUT_DATA = {
  eyebrow: "ABOUT ACUITY",
  title: "Technology That Works for Your Business",
  body: "We are a results-driven IT company helping businesses with innovative digital solutions. From startups to enterprises, we deliver technology that creates real value and measurable growth.",
  ctaLink: "/about",
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "120+", label: "Projects Delivered" },
    { value: "40+", label: "Happy Clients" },
    { value: "98%", label: "Client Satisfaction" },
  ],
  features: [
    { label: "Experienced Team", icon: "👥" },
    { label: "Client-Centric Approach", icon: "🎯" },
    { label: "Quality Solutions", icon: "✅" },
    { label: "Long-Term Partnership", icon: "🤝" },
  ],
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function About() {
  const { eyebrow, title, body, ctaLink, stats, features } = ABOUT_DATA;

  return (
    <section className="bg-primary px-4 sm:px-6 lg:px-8 py-10 font-body relative overflow-hidden">
      {/* Subtle bg pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{ backgroundImage: "radial-gradient(circle at 80% 50%, #01A9FB 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* ── Left: image ── */}
          <div className="relative">
            <img
              src="/homepage-placeholder.svg"
              alt="Acuity team at work"
              className="h-72 w-full rounded-2xl object-cover sm:h-96 ring-4 ring-white/10"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-3 sm:right-4 bg-accent text-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3">
              <img src={acuityLogo} alt="Acuity" className="h-8 w-auto object-contain brightness-0 invert" />
              <div>
                <div className="font-heading font-bold text-sm leading-none">Acuity</div>
                <div className="text-xs text-white/80 leading-none mt-0.5">Software Services</div>
              </div>
            </div>
          </div>

          {/* ── Right: copy ── */}
          <div className="text-white">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mb-4 text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
              {title}
            </h2>
            <p className="mb-6 text-white/70 leading-relaxed text-base">{body}</p>

            {/* Feature chips */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/8 px-4 py-3 text-base font-semibold text-white hover:bg-secondary/15 transition-colors"
                >
                  <span>{f.icon}</span>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={ctaLink}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent text-white font-semibold text-base hover:bg-accent/90 transition-colors shadow-md hover:shadow-lg"
            >
              Know More About Us →
            </a>
          </div>
        </div>

        {/* ── Stats row ── */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map(({ value, label }, i) => (
            <div
              key={i}
              className="text-center rounded-xl border border-white/15 bg-white/8 py-5 hover:bg-secondary/10 transition-colors"
            >
              <div className="text-4xl font-heading font-extrabold text-secondary mb-1">{value}</div>
              <div className="text-sm text-white/60 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
