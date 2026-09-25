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
} from "react-icons/md";

// ─── Section data (edit here to update the Services section) ─────────────────
const SERVICES_DATA = {
  eyebrow: "WHAT WE DO",
  title: "Our Services",
  subtitle: "End-to-end technology solutions to help your business grow in the digital world.",
  viewAllLink: "/services",
  items: [
    {
      icon: MdComputer,
      title: "Website Development",
      desc: "Modern, responsive and SEO-friendly websites for your business.",
      color: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: MdPhoneAndroid,
      title: "Mobile App Development",
      desc: "Android & iOS apps to grow your customer base.",
      color: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: MdBuild,
      title: "Custom Software Development",
      desc: "Tailored software solutions for unique business needs.",
      color: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: MdShoppingCart,
      title: "E-commerce Solutions",
      desc: "Powerful online stores to boost your sales.",
      color: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      icon: MdTrendingUp,
      title: "Digital Marketing & SEO",
      desc: "Get more traffic, leads and sales with our proven strategies.",
      color: "bg-red-50",
      iconColor: "text-red-500",
    },
    {
      icon: MdDesignServices,
      title: "UI/UX Design",
      desc: "Beautiful, user-friendly designs that convert visitors.",
      color: "bg-pink-50",
      iconColor: "text-pink-600",
    },
    {
      icon: MdCloud,
      title: "Cloud & DevOps Solutions",
      desc: "Scalable and secure cloud infrastructure for modern apps.",
      color: "bg-cyan-50",
      iconColor: "text-cyan-600",
    },
    {
      icon: MdSupportAgent,
      title: "IT Consulting & Support",
      desc: "Expert guidance and ongoing support for long-term success.",
      color: "bg-yellow-50",
      iconColor: "text-yellow-600",
    },
  ],
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function Services() {
  const { eyebrow, title, subtitle, viewAllLink, items } = SERVICES_DATA;

  return (
    <section className="w-full bg-white px-4 py-14 font-body">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex items-end justify-between mb-2">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary">
              {title}
            </h2>
          </div>
          <a
            href={viewAllLink}
            className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline whitespace-nowrap"
          >
            View All Services →
          </a>
        </div>
        <p className="text-body/60 text-sm mb-8 max-w-2xl">{subtitle}</p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title: t, desc, color, iconColor }, i) => (
            <div
              key={i}
              className="border border-primary/8 rounded-xl p-5 bg-white hover:shadow-lg hover:border-secondary/30 hover:-translate-y-1 transition-all group cursor-default"
            >
              {/* Icon bubble */}
              <div
                className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${color}`}
              >
                <Icon className={`text-2xl ${iconColor}`} />
              </div>
              <h3 className="font-heading font-semibold mb-2 text-primary group-hover:text-secondary transition-colors text-sm leading-snug">
                {t}
              </h3>
              <p className="text-xs text-body/60 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile link */}
        <div className="mt-6 text-center sm:hidden">
          <a href={viewAllLink} className="text-sm font-semibold text-accent hover:underline">
            View All Services →
          </a>
        </div>
      </div>
    </section>
  );
}
