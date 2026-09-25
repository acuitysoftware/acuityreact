import React from "react";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Industries from "./components/Industries";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

/**
 * Home page — renders all sections in order.
 * Each section now owns its own data internally.
 * The `sections` prop from the admin CMS is kept for backward-compat
 * (Hero is still driven by it) but the other sections are self-contained.
 */
export default function Home({ sections }) {
  // Hero still reads from the CMS/admin for its title / subtitle
  const heroSection = sections?.find((s) => s.type === "Hero" && s.enabled);

  return (
    <main>
      {heroSection && <Hero data={heroSection} />}
      <Clients />
      <Services />
      <Solutions />
      <About />
      <TechStack />
      <Industries />
      <Process />
      <Portfolio />
      <Testimonials />
      <CTA />
    </main>
  );
}
