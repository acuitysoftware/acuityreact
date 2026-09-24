import React from "react";
import Hero from "./Hero";
import Clients from "./Clients";
import Services from "./Services";
import Solutions from "./Solutions";
import About from "./About";
import TechStack from "./TechStack";
import Industries from "./Industries";
import Process from "./Process";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import Custom from "./Custom";

// Maps a block's "type" (set in the admin CMS) to its section component.
// Add new block types here as you build more section components.
const registry = {
  Hero, Clients, Services, Solutions, About, TechStack,
  Industries, Process, Portfolio, Testimonials, CTA,
};

export default function SectionRenderer({ section }) {
  const Component = registry[section.type] || Custom;
  return <Component data={section} />;
}
