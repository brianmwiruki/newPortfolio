import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Header } from "@/sections/Header";

import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";

const projects = [
  {
    slug: "dark-saas-landing-page",
    title: "Dark Saas Landing Page",
    company: "Acme Corp",
    year: "2022",
    image: darkSaasLandingPage,
    summary: "Enhanced user experience by 40%. Improved site speed by 50%. Increased mobile traffic by 35%.",
    description:
      "A modern SaaS landing page designed for Acme Corp, focusing on performance, accessibility, and conversion optimization. The project involved a complete redesign, implementation of advanced UI/UX patterns, and optimization for both speed and SEO. The result was a significant boost in user engagement and business metrics.",
    link: "https://youtu.be/4k7IdSLxh6w",
    results: [
      "Enhanced user experience by 40%",
      "Improved site speed by 50%",
      "Increased mobile traffic by 35%",
    ],
  },
  {
    slug: "light-saas-landing-page",
    title: "Light Saas Landing Page",
    company: "Innovative Co",
    year: "2021",
    image: lightSaasLandingPage,
    summary: "Boosted sales by 20%. Expanded customer reach by 35%. Increased brand awareness by 15%.",
    description:
      "A clean, conversion-focused SaaS landing page for Innovative Co. The project emphasized clarity, speed, and mobile-first design, resulting in higher sales and broader customer reach. Integrated analytics and A/B testing to continuously improve performance.",
    link: "https://youtu.be/7hi5zwO75yc",
    results: [
      "Boosted sales by 20%",
      "Expanded customer reach by 35%",
      "Increased brand awareness by 15%",
    ],
  },
  {
    slug: "ai-startup-landing-page",
    title: "AI Startup Landing Page",
    company: "Quantum Dynamics",
    year: "2023",
    image: aiStartupLandingPage,
    summary: "Enhanced user experience by 40%. Improved site speed by 50%. Increased mobile traffic by 35%.",
    description:
      "Landing page for an AI startup, built to showcase cutting-edge technology and attract investors. Focused on interactive elements, clear value propositions, and technical credibility. Helped the client secure new partnerships and increase inbound leads.",
    link: "https://youtu.be/Z7I5uSRHMHg",
    results: [
      "Enhanced user experience by 40%",
      "Improved site speed by 50%",
      "Increased mobile traffic by 35%",
    ],
  },
];

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found | Brian Mwiruki" };
  return {
    title: `${project.title} | Projects | Brian Mwiruki`,
    description: project.summary,
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();
  return (
    <main className="min-h-screen bg-gray-900 py-16 px-4 flex flex-col items-center">
      <Header />
      <h1 className="font-serif text-4xl md:text-5xl text-emerald-300 mb-4 text-center">{project.title}</h1>
      <div className="text-white/70 mb-2 text-center">{project.company} &bull; {project.year}</div>
      <div className="w-full max-w-2xl mb-8">
        <Image src={project.image} alt={project.title + ' screenshot'} className="rounded-2xl border border-white/10" />
      </div>
      <p className="text-white/90 max-w-2xl text-lg mb-6 text-center">{project.description}</p>
      <ul className="text-white/70 max-w-xl mb-8 space-y-2 text-base">
        {project.results.map((result, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="text-emerald-300">•</span> {result}
          </li>
        ))}
      </ul>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-300 text-gray-900 font-semibold px-6 py-3 rounded-xl shadow hover:bg-emerald-200 transition text-lg">View Live Site</a>
    </main>
  );
} 