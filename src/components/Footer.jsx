import React from "react";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import acuityLogo from "../assets/acuity-logo.png";

export default function Footer({ company, menu }) {
  const services = [
    "Web Development",
    "Mobile Apps",
    "Custom Software",
    "E-commerce",
    "Digital Marketing",
    "UI/UX Design",
  ];

  return (
    <footer className="bg-primary text-white font-body">
      {/* ── Main grid ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        {/* Brand */}
        <div>
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 mb-3">
            <img
              src={acuityLogo}
              alt="Acuity logo"
              className="h-8 w-auto object-contain brightness-0 invert"
            />
            <span className="font-heading font-bold text-sm leading-tight text-white whitespace-nowrap">
              {company.name}
            </span>
          </a>
          <p className="text-white/60 leading-relaxed mb-4 text-xs">
            Helping businesses grow faster with modern websites, apps and
            digital marketing solutions.
          </p>
          {/* Social links */}
          <div className="flex gap-2">
            {[
              { href: company.facebook, icon: FaFacebookF, label: "Facebook" },
              { href: company.instagram, icon: FaInstagram, label: "Instagram" },
              { href: company.linkedin, icon: FaLinkedinIn, label: "LinkedIn" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-secondary hover:bg-secondary/15 transition-colors text-xs"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div className="font-heading font-semibold mb-4 text-white">Quick Links</div>
          {menu.filter((m) => m.enabled).map((m) => (
            <a
              key={m.id}
              href={m.link}
              className="flex items-center gap-1.5 text-white/60 py-1 hover:text-secondary transition-colors"
            >
              <span className="text-accent text-xs">›</span> {m.label}
            </a>
          ))}
        </div>

        {/* Services */}
        <div>
          <div className="font-heading font-semibold mb-4 text-white">Our Services</div>
          {services.map((s) => (
            <a
              key={s}
              href="/services"
              className="flex items-center gap-1.5 text-white/60 py-1 hover:text-secondary transition-colors"
            >
              <span className="text-accent text-xs">›</span> {s}
            </a>
          ))}
        </div>

        {/* Contact + Newsletter */}
        <div>
          <div className="font-heading font-semibold mb-4 text-white">Contact Info</div>
          <div className="space-y-3 mb-6">
            <a
              href={`tel:${company.phone}`}
              className="text-white/60 py-0.5 flex items-center gap-2 hover:text-secondary transition-colors text-xs"
            >
              <FiPhone className="shrink-0" /> {company.phone}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="text-white/60 py-0.5 flex items-center gap-2 hover:text-secondary transition-colors text-xs break-all"
            >
              <FiMail className="shrink-0" /> {company.email}
            </a>
            <div className="text-white/60 py-0.5 flex items-center gap-2 text-xs">
              <FiMapPin className="shrink-0" /> {company.address}
            </div>
          </div>

          {/* Newsletter */}
          <div className="font-heading font-semibold mb-3 text-white text-sm">Newsletter</div>
          <div className="flex gap-1">
            <input
              type="email"
              className="rounded-lg px-3 py-2 text-body text-xs w-full bg-white focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="Your email address"
            />
            <button className="px-3 py-2 rounded-lg text-xs font-semibold bg-accent hover:bg-accent/90 text-white flex items-center gap-1 transition-colors shrink-0">
              <FiSend /> Join
            </button>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="text-white/40 text-xs">
            © {new Date().getFullYear()} {company.name}. All Rights Reserved.
          </div>
          <div className="flex gap-4 text-white/40 text-xs">
            <a href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white/70 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
