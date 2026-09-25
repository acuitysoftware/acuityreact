import React from "react";
import Eyebrow from "./Eyebrow";

// --- Section data (edit here to update the TechStack section) ----------------
const TECHSTACK_DATA = {
  eyebrow: "OUR TECHNOLOGIES",
  title: "Technologies We Work With",
  viewAllLink: "/services",
  items: [
    { name: "Laravel", icon: "/assets/icons/laravel.png" },
    { name: "React JS", icon: "/assets/icons/react.png" },
    { name: "Node.js", icon: "/assets/icons/node.png" },
    { name: "WordPress", icon: "/assets/icons/word-press.png" },
    { name: "Shopify", icon: "/assets/icons/shopify.png" },
    { name: "Flutter", icon: "/assets/icons/flutter.png" },
    { name: "Firebase", icon: "/assets/icons/firebase.jpg" },
    { name: "AWS", icon: "/assets/icons/aws.png" },
    { name: "Google Cloud", icon: "/assets/icons/google-cloud.jpg" },
    { name: "MySQL", icon: "/assets/icons/mysql.png" },
    { name: "Docker", icon: "/assets/icons/docker.png" },
    { name: "Kubernetes", icon: "/assets/icons/kubernetes.png" },
  ],
};

// --- Component ----------------------------------------------------------------
export default function TechStack() {
  const { eyebrow, title, viewAllLink, items } = TECHSTACK_DATA;

  return (
    <section className="w-full bg-white px-[10px] py-8 font-body">
      <div className="w-full">
        {/* Header row */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              {title}
            </h2>
          </div>
          <a href={viewAllLink} className="hidden sm:inline-flex items-center gap-1 text-base font-semibold text-accent hover:underline whitespace-nowrap">
            View All Technologies ?
          </a>
        </div>

        {/* Grid of tech logos */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {items.map(({ name, icon }, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-primary/10 bg-surface hover:border-secondary hover:shadow-md hover:bg-secondary/5 transition-all p-4 group cursor-default"
            >
              {/* Uses the specific icon path from the data object */}
              <img
                src={icon}
                alt={name}
                className="h-12 w-12 object-contain"
              />
              <span className="text-sm font-semibold text-primary text-center">
                {name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 text-center sm:hidden">
          <a href={viewAllLink} className="text-sm font-semibold text-accent hover:underline">View All Technologies ?</a>
        </div>
      </div>
    </section>
  );
}