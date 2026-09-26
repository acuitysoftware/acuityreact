import React from "react";
import Eyebrow from "./Eyebrow";
import { FiPhone, FiMail } from "react-icons/fi";
import {
  MdFreeCancellation,
  MdDesignServices,
  MdSchedule,
  MdSupportAgent,
} from "react-icons/md";

// ─── Section data (edit here to update the CTA section) ──────────────────────
const CTA_DATA = {
  eyebrow: "LET'S WORK TOGETHER",
  title: "Let's Build Something Great Together",
  subtitle:
    "Have a project in mind? Get in touch and our experts will help you find the right solution.",
  phone: "6290915550",
  email: "paul@acuitysoftwareservices.com",
  highlights: [
    { label: "Free Consultation", icon: MdFreeCancellation },
    { label: "Custom Solutions", icon: MdDesignServices },
    { label: "On-Time Delivery", icon: MdSchedule },
    { label: "Ongoing Support", icon: MdSupportAgent },
  ],
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function CTA() {
  const { eyebrow, title, subtitle, phone, email, highlights } = CTA_DATA;

  return (
    <section className="w-full bg-white px-10 py-14 font-body">
      <div className="w-full grid lg:grid-cols-2 gap-10 lg:gap-16 2xl:gap-20 items-start">
        
        {/* ── Left: copy & contact info ── */}
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          
          <h2 className="text-3xl md:text-4xl 3xl:text-6xl font-heading font-bold text-primary mb-4 leading-tight">
            {title}
          </h2>
          
          <p className="text-body/60 leading-relaxed mb-8 text-base 3xl:text-xl max-w-lg">
            {subtitle}
          </p>

          {/* Highlight blocks - 2x2 grid with React Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 2xl:gap-5 3xl:gap-8 mb-10 max-w-lg 2xl:max-w-2xl 3xl:max-w-none 3xl:min-h-[480px] 3xl:grid-rows-2">
            {highlights.map(({ label, icon: Icon }, i) => (
              <div
                key={i}
                className="flex items-center gap-3 3xl:flex-col 3xl:justify-center 3xl:text-center text-sm 2xl:text-base 3xl:text-2xl font-semibold text-primary bg-surface border border-primary/10 rounded-xl px-4 py-3 2xl:px-5 2xl:py-4 3xl:px-7 3xl:py-6"
              >
                <div className="w-9 h-9 2xl:w-11 2xl:h-11 3xl:w-16 3xl:h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Icon className="text-lg 2xl:text-xl 3xl:text-4xl" />
                </div>
                {label}
              </div>
            ))}
          </div>

          {/* Contact Info */}
          {/* <div className="flex flex-col sm:flex-row gap-6">
            <a href={`tel:${phone}`} className="flex items-center gap-3 text-primary hover:text-accent transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                <FiPhone className="text-accent" />
              </div>
              <div>
                <div className="text-[11px] 3xl:text-base text-body/50 leading-none mb-0.5">Phone</div>
                <div className="text-sm 3xl:text-xl font-semibold">{phone}</div>
              </div>
            </a>

            <a href={`mailto:${email}`} className="flex items-center gap-3 text-primary hover:text-accent transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                <FiMail className="text-accent" />
              </div>
              <div>
                <div className="text-[11px] 3xl:text-base text-body/50 leading-none mb-0.5">Email</div>
                <div className="text-sm 3xl:text-xl font-semibold break-all">{email}</div>
              </div>
            </a>
          </div> */}
        </div>

        {/* ── Right: Form Card ── */}
        <div className="bg-surface border border-primary/10 rounded-2xl p-6 md:p-8 2xl:p-10 3xl:p-12 shadow-sm">
          <h3 className="text-primary font-heading font-bold text-xl 2xl:text-2xl 3xl:text-4xl mb-5">Get a Free Quote</h3>
          
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full px-4 py-3 2xl:px-5 2xl:py-4 3xl:px-6 3xl:py-5 rounded-lg border border-primary/10 bg-white text-primary text-sm 2xl:text-base 3xl:text-xl placeholder:text-body/40 focus:outline-none focus:border-accent transition-colors"
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-3 2xl:px-5 2xl:py-4 3xl:px-6 3xl:py-5 rounded-lg border border-primary/10 bg-white text-primary text-sm 2xl:text-base 3xl:text-xl placeholder:text-body/40 focus:outline-none focus:border-accent transition-colors"
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full px-4 py-3 2xl:px-5 2xl:py-4 3xl:px-6 3xl:py-5 rounded-lg border border-primary/10 bg-white text-primary text-sm 2xl:text-base 3xl:text-xl placeholder:text-body/40 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            
            <textarea 
              placeholder="Tell us about your project" 
              rows="4"
              className="w-full px-4 py-3 2xl:px-5 2xl:py-4 3xl:px-6 3xl:py-5 rounded-lg border border-primary/10 bg-white text-primary text-sm 2xl:text-base 3xl:text-xl placeholder:text-body/40 focus:outline-none focus:border-accent transition-colors resize-none"
            ></textarea>
            
            <button 
              type="submit" 
              className="w-full px-8 py-3.5 2xl:py-4 3xl:py-6 rounded-lg font-semibold text-white bg-accent hover:bg-accent/90 transition-colors shadow-md text-sm 2xl:text-base 3xl:text-xl mt-2"
            >
              Get a Free Quote →
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
