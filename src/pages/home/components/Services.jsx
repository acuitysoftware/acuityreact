import React from "react";
import Eyebrow from "./Eyebrow";
import {
  MdComputer,
  MdPhoneAndroid,
  MdBuild,
  MdShoppingCart,
  MdTrendingUp,
  MdDesignServices,
  MdCloud,
  MdSupportAgent,
  MdArrowOutward, // Added arrow icon
} from "react-icons/md";

// ─── Section data (edit here to update the Services section) ─────────────────
const SERVICES_DATA = {
  eyebrow: "WHAT WE DO",
  title: "Our Services",
  subtitle: "End-to-end technology solutions to help your business grow in the digital world.",
  viewAllLink: "/services",
  items: [
    { icon: MdComputer, title: "Website Development", desc: "Modern, responsive and SEO-friendly websites for your business.", color: "bg-blue-50", iconColor: "text-blue-600" },
    { icon: MdPhoneAndroid, title: "Mobile App Development", desc: "Android & iOS apps to grow your customer base.", color: "bg-green-50", iconColor: "text-green-600" },
    { icon: MdBuild, title: "Custom Software Development", desc: "Tailored software solutions for unique business needs.", color: "bg-purple-50", iconColor: "text-purple-600" },
    { icon: MdShoppingCart, title: "E-commerce Solutions", desc: "Powerful online stores to boost your sales.", color: "bg-orange-50", iconColor: "text-orange-600" },
    { icon: MdTrendingUp, title: "Digital Marketing & SEO", desc: "Get more traffic, leads and sales with our proven strategies.", color: "bg-red-50", iconColor: "text-red-500" },
    { icon: MdDesignServices, title: "UI/UX Design", desc: "Beautiful, user-friendly designs that convert visitors.", color: "bg-pink-50", iconColor: "text-pink-600" },
    { icon: MdCloud, title: "Cloud & DevOps Solutions", desc: "Scalable and secure cloud infrastructure for modern apps.", color: "bg-cyan-50", iconColor: "text-cyan-600" },
    { icon: MdSupportAgent, title: "IT Consulting & Support", desc: "Expert guidance and ongoing support for long-term success.", color: "bg-yellow-50", iconColor: "text-yellow-600" },
  ],
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function Services() {
  const { eyebrow, title, subtitle, viewAllLink, items } = SERVICES_DATA;

  return (
    <section className="w-full bg-white px-10 py-8 font-body">
      <div className="w-full">
        {/* Header row */}
        <div className="flex items-end justify-between mb-1">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              {title}
            </h2>
          </div>
          <a href={viewAllLink} className="hidden sm:inline-flex items-center gap-1 text-base font-semibold text-accent hover:underline whitespace-nowrap">
            View All Services →
          </a>
        </div>
        <p className="text-body/60 text-base mb-6 max-w-2xl">{subtitle}</p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title: t, desc, color, iconColor }, i) => (
            <div
              key={i}
              className="flex flex-row gap-4 2xl:gap-5 3xl:gap-6 min-h-[160px] 2xl:min-h-[190px] 3xl:min-h-[220px] h-full border border-primary/10 rounded-xl p-5 2xl:p-6 3xl:p-7 bg-white hover:shadow-lg hover:border-secondary/30 hover:-translate-y-1 transition-all group cursor-default shadow-md shadow-gray-500"
            >
              {/* Icon container - added self-start so it doesn't stretch */}
              <div className={`w-14 h-14 2xl:w-16 2xl:h-16 3xl:w-[72px] 3xl:h-[72px] rounded-xl flex items-center justify-center shrink-0 self-start ${color}`}>
                <Icon className={`text-3xl 2xl:text-4xl ${iconColor}`} />
              </div>

              {/* Text container - flex-col with h-full to allow button to push to bottom */}
              <div className="flex flex-col flex-1 h-full">
                {/* Changed font-semibold to font-extrabold for thicker title */}
                <h3 className="font-heading font-extrabold mb-2 text-primary group-hover:text-secondary transition-colors text-base 2xl:text-lg 3xl:text-xl leading-snug">
                  {t}
                </h3>
                <p className="text-sm 2xl:text-base 3xl:text-lg text-body/60 leading-relaxed">{desc}</p>

                {/* Circle Arrow Button */}
                <div className="mt-auto pt-4 flex justify-end">
                  <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white shadow-sm group-hover:scale-110 group-hover:rotate-45 transition-transform duration-300">
                    <MdArrowOutward className="text-xl" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 text-center sm:hidden">
          <a href={viewAllLink} className="text-sm font-semibold text-accent hover:underline">View All Services →</a>
        </div>
      </div>
    </section>
  );
}
