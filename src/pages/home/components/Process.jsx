import React from "react";
import Eyebrow from "./Eyebrow";
import {
  MdSearch,
  MdDraw,
  MdCode,
  MdRocketLaunch,
} from "react-icons/md";

// ─── Section data (edit here to update the Process section) ──────────────────
const PROCESS_DATA = {
  eyebrow: "HOW WE WORK",
  title: "How We Work",
  steps: [
    {
      num: "01",
      icon: MdSearch,
      title: "Discover",
      desc: "Understand your business goals and requirements in detail.",
      color: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      num: "02",
      icon: MdDraw,
      title: "Plan & Design",
      desc: "Create the right strategy and design that fits your vision.",
      color: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      num: "03",
      icon: MdCode,
      title: "Develop",
      desc: "Build with the best technologies and coding standards.",
      color: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      num: "04",
      icon: MdRocketLaunch,
      title: "Launch & Support",
      desc: "Go live and provide ongoing technical support for growth.",
      color: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ],
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function Process() {
  const { eyebrow, title, steps } = PROCESS_DATA;

  return (
    <section className="w-full bg-white px-4 py-14 font-body">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary">
            {title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-primary/10 z-0" />

          {steps.map(({ num, icon: Icon, title: t, desc, color, iconColor }, i) => (
            <div key={i} className="relative z-10 group">
              {/* Number + icon bubble */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${color} group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`text-2xl ${iconColor}`} />
                </div>
                <span className="text-3xl font-heading font-extrabold text-accent leading-none">
                  {num}
                </span>
              </div>

              <h3 className="font-heading font-semibold mb-2 text-primary group-hover:text-secondary transition-colors">
                {t}
              </h3>
              <p className="text-sm text-body/60 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
