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
    <section className="w-full bg-white px-10 py-14 font-body">
      <div className="w-full">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-y-10 lg:gap-x-4 2xl:gap-x-6 3xl:gap-x-8 items-start">
          {steps.map(({ num, icon: Icon, title: t, desc }, i) => (
            <React.Fragment key={i}>
              {/* Arrow connector */}
              {i > 0 && (
              <div className="hidden lg:flex items-center justify-center h-11 w-10 2xl:w-12 3xl:w-14 mx-auto">
                  <FiChevronRight className="text-3xl 2xl:text-4xl text-accent" />
                </div>
              )}

              {/* Card */}
              <div className="min-w-0">
                {/* Number + Icon row */}
                <div className="flex items-center gap-2 2xl:gap-3 mb-3 h-11 2xl:h-14">
                  <span className="text-3xl 2xl:text-4xl 3xl:text-5xl font-heading font-extrabold text-accent leading-none">
                    {num}
                  </span>
                  <Icon className="text-3xl 2xl:text-4xl 3xl:text-5xl text-primary leading-none" />
                </div>

                <h3 className="font-heading font-bold text-base 2xl:text-lg 3xl:text-xl text-primary mb-1">
                  {t}
                </h3>
                <p className="text-sm 2xl:text-base 3xl:text-lg text-body/60 leading-relaxed max-w-[200px] 2xl:max-w-[260px] 3xl:max-w-[320px]">
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
