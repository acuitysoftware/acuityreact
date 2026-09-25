import React from "react";
import { FiPhone, FiMail, FiMapPin, FiCheckCircle } from "react-icons/fi";
import { MdRocketLaunch } from "react-icons/md";

// ─── Section data (edit here to update the CTA section) ──────────────────────
const CTA_DATA = {
  title: "Let's Build Something Great Together",
  subtitle:
    "Have a project in mind? Get in touch and our experts will help you find the right solution.",
  ctaLink: "/contact",
  ctaLabel: "Free Project Consultation →",
  phone: "6290915550",
  email: "paul@acuitysoftwareservices.com",
  address: "Kolkata, India",
  highlights: [
    "Free Consultation",
    "Quick Turnaround",
    "Ongoing Support",
    "Transparent Pricing",
  ],
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function CTA() {
  const { title, subtitle, ctaLink, ctaLabel, phone, email, address, highlights } = CTA_DATA;

  return (
    <section className="w-full bg-white px-4 py-16 font-body">
      <div className="max-w-7xl mx-auto">
        {/* Top hero-style banner */}
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 sm:px-12 sm:py-16 mb-0 text-white">
          {/* Decorative glow */}
          <div
            className="pointer-events-none absolute -top-10 -right-10 w-72 h-72 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #01A9FB 0%, transparent 70%)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-10 -left-10 w-64 h-64 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #FD6301 0%, transparent 70%)" }}
          />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: copy */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MdRocketLaunch className="text-accent text-xl" />
                <span className="text-xs font-semibold text-accent tracking-widest uppercase">
                  Start Your Project
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-4 leading-tight">
                {title}
              </h2>
              <p className="text-white/70 leading-relaxed mb-6 text-sm md:text-base max-w-lg">
                {subtitle}
              </p>

              {/* Highlight chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                {highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 text-xs font-medium text-white/80 border border-white/15 rounded-full px-3 py-1.5 bg-white/8"
                  >
                    <FiCheckCircle className="text-secondary text-sm shrink-0" />
                    {h}
                  </div>
                ))}
              </div>

              <a
                href={ctaLink}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white bg-accent hover:bg-accent/90 transition-colors shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 text-sm"
              >
                {ctaLabel}
              </a>
            </div>

            {/* Right: contact details */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/15 p-6 flex flex-col gap-4">
              <div className="font-heading font-semibold text-white text-lg mb-1">
                Contact Info
              </div>

              <a
                href={`tel:${phone}`}
                className="flex items-center gap-3 text-white/80 hover:text-secondary transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors shrink-0">
                  <FiPhone className="text-secondary" />
                </div>
                <div>
                  <div className="text-[11px] text-white/50 leading-none mb-0.5">Phone</div>
                  <div className="text-sm font-semibold">{phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-white/80 hover:text-secondary transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors shrink-0">
                  <FiMail className="text-secondary" />
                </div>
                <div>
                  <div className="text-[11px] text-white/50 leading-none mb-0.5">Email</div>
                  <div className="text-sm font-semibold break-all">{email}</div>
                </div>
              </a>

              <div className="flex items-center gap-3 text-white/80">
                <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                  <FiMapPin className="text-secondary" />
                </div>
                <div>
                  <div className="text-[11px] text-white/50 leading-none mb-0.5">Location</div>
                  <div className="text-sm font-semibold">{address}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
