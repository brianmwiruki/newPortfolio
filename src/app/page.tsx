import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { AboutSection } from "@/sections/About";
import { TestimonialsSection } from "@/sections/Testimonials";
import { ContactSection } from "@/sections/Contact";
import { TapeSection } from "@/sections/Tape";
import { Footer } from "@/sections/Footer";
import { BlogPreviewSection } from "@/sections/BlogPreviewSection";

export default function Home() {
  return (
    <div>
      <Header />
      <TapeSection />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <BlogPreviewSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
