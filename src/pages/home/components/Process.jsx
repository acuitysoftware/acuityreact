import React from "react";
import Eyebrow from "./Eyebrow";
import {
  MdSearch,
  MdDesignServices,
  MdCode,
  MdRocketLaunch,
} from "react-icons/md";
import { FiChevronRight } from "react-icons/fi";

const PROCESS_DATA = {
  eyebrow: "OUR PROCESS",
  title: "How We Work",
  steps: [
    { num: "01", icon: MdSearch, title: "Discover", desc: "Understand your business goals and requirements." },
    { num: "02", icon: MdDesignServices, title: "Plan & Design", desc: "Create the right strategy and design." },
    { num: "03", icon: MdCode, title: "Develop", desc: "Build with the best technologies." },
    { num: "04", icon: MdRocketLaunch, title: "Launch & Support", desc: "Go live and provide ongoing support." },
  ],
};

export default function Process() {
  const { eyebrow, title, steps } = PROCESS_DATA;

  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-14 font-body">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary">
            {title}
          </h2>
        </div>

        {/* 
          CSS Grid strictly enforces the layout: 
          [Card 1] [Arrow] [Card 2] [Arrow] [Card 3] [Arrow] [Card 4] 
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-y-10 lg:gap-x-4 items-start">
          {steps.map(({ num, icon: Icon, title: t, desc }, i) => (
            <React.Fragment key={i}>
              {/* Arrow connector */}
              {i > 0 && (
                <div className="hidden lg:flex items-center justify-center h-11 w-10 mx-auto">
                  <FiChevronRight className="text-3xl text-accent" />
                </div>
              )}

              {/* Card */}
              <div className="min-w-0">
                {/* Number + Icon row */}
                <div className="flex items-center gap-2 mb-3 h-11">
                  <span className="text-3xl font-heading font-extrabold text-accent leading-none">
                    {num}
                  </span>
                  <Icon className="text-3xl text-primary leading-none" />
                </div>

                <h3 className="font-heading font-bold text-base text-primary mb-1">
                  {t}
                </h3>
                <p className="text-sm text-body/60 leading-relaxed max-w-[200px]">
                  {desc}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}