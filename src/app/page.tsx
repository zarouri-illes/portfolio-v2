import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Tech } from "@/sections/Tech";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";


export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <Tech />
      <Footer />
    </div>
  );
}
