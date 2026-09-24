import React from "react";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";

export default function Footer({ company, menu }) {
  return (
    <footer className="bg-[#0e1b3d] text-white px-4 py-12">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-bold text-lg mb-2">{company.name}</div>
          <p className="text-slate-400">
            Helping businesses grow faster with modern websites, apps and digital marketing.
          </p>
        </div>
        <div>
          <div className="font-bold mb-2">Quick Links</div>
          {menu.filter((m) => m.enabled).map((m) => (
            <a key={m.id} href={m.link} className="block text-slate-400 py-0.5 hover:text-white">
              {m.label}
            </a>
          ))}
        </div>
        <div>
          <div className="font-bold mb-2">Contact Info</div>
          <div className="text-slate-400 py-0.5 flex items-center gap-2"><FiPhone /> {company.phone}</div>
          <div className="text-slate-400 py-0.5 flex items-center gap-2"><FiMail /> {company.email}</div>
          <div className="text-slate-400 py-0.5 flex items-center gap-2"><FiMapPin /> {company.address}</div>
        </div>
        <div>
          <div className="font-bold mb-2">Newsletter</div>
          <div className="flex gap-1">
            <input className="rounded px-2 py-1 text-slate-800 text-xs w-full" placeholder="Your email" />
            <button className="px-3 py-1 rounded text-xs font-semibold bg-orange-500 text-white flex items-center gap-1">
              <FiSend /> Join
            </button>
          </div>
        </div>
      </div>
      <div className="text-center text-slate-500 text-xs mt-10">
        © {new Date().getFullYear()} {company.name}. All Rights Reserved.
      </div>
    </footer>
  );
}
