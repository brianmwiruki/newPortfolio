import { Metadata } from "next";
import { ProjectsSection } from "@/sections/Projects";
import { Header } from "@/sections/Header";

export const metadata: Metadata = {
  title: "Projects | Brian Mwiruki",
  description: "Explore the portfolio projects of Brian Mwiruki, including case studies, real-world results, and innovative solutions for businesses.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <section className="py-12 px-4 flex flex-col items-center bg-gray-900">
        <h1 className="font-serif text-4xl md:text-5xl text-emerald-300 mb-4 text-center">My Projects & Case Studies</h1>
        <p className="text-white/90 max-w-2xl text-center mb-6 text-lg">
          Dive into a selection of my most impactful projects, where I transformed ideas into high-performing digital solutions. Each project showcases my commitment to quality, innovation, and measurable business results.
        </p>
        <p className="text-white/70 max-w-xl text-center mb-8 text-base">
          Click on any project to view detailed case studies, results, and the technologies used.
        </p>
      </section>
      <ProjectsSection />
    </main>
  );
} 