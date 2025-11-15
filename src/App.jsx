import Home from './pages/Home'

import HeroSection from "@/components/portfolio/HeroSection";
import TechStack from "@/components/portfolio/TechStack";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";

function App() {
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

export default App
