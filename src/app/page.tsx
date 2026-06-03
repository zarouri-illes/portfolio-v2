import { Footer } from "@/sections/Footer";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { Tech } from "@/sections/Tech";
import { Experience } from "@/sections/Experience";

export default function Home() {
  return (
    <div>

      <HeroSection />
      <Experience />
      <Tech />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
