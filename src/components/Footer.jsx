import React from "react";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";

export default function Footer({ company, menu }) {
  return (
    <footer className="bg-primary text-white px-4 py-12 font-body">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        {/* Brand */}
        <div>
          <div className="font-heading font-bold text-lg mb-2 text-white">{company.name}</div>
          <p className="text-white/60 leading-relaxed">
            Helping businesses grow faster with modern websites, apps and digital marketing.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <div className="font-heading font-semibold mb-3 text-white">Quick Links</div>
          {menu.filter((m) => m.enabled).map((m) => (
            <a
              key={m.id}
              href={m.link}
              className="block text-white/60 py-0.5 hover:text-secondary transition-colors"
            >
              {m.label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div>
          <div className="font-heading font-semibold mb-3 text-white">Contact Info</div>
          <div className="text-white/60 py-0.5 flex items-center gap-2"><FiPhone /> {company.phone}</div>
          <div className="text-white/60 py-0.5 flex items-center gap-2"><FiMail /> {company.email}</div>
          <div className="text-white/60 py-0.5 flex items-center gap-2"><FiMapPin /> {company.address}</div>
        </div>

        {/* Newsletter */}
        <div>
          <div className="font-heading font-semibold mb-3 text-white">Newsletter</div>
          <div className="flex gap-1">
            <input
              className="rounded px-2 py-1 text-body text-xs w-full bg-white focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="Your email"
            />
            <button className="px-3 py-1 rounded text-xs font-semibold bg-accent hover:bg-accent/90 text-white flex items-center gap-1 transition-colors">
              <FiSend /> Join
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-white/40 text-xs mt-10 border-t border-white/10 pt-6">
        Â© {new Date().getFullYear()} {company.name}. All Rights Reserved.
      </div>
    </footer>
  );
}
