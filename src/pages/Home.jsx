import React from "react";
import HeroSection from "../components/portfolio/HeroSection";
import TechStack from "../components/portfolio/TechStack";
import Experience from "../components/portfolio/Experience";
import Projects from "../components/portfolio/Projects";
import Contact from "../components/portfolio/Contact";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}