import { Metadata } from "next";
import { AboutSection } from "@/sections/About";
import { Header } from "@/sections/Header";

export const metadata: Metadata = {
  title: "About | Brian Mwiruki",
  description: "Discover Brian Mwiruki's journey, expertise, and business values. Learn how his experience in software engineering and consulting can help your business thrive.",
};

function ConsultationBrief() {
  return (
    <section className="py-12 px-4 flex flex-col items-center bg-gray-900">
      <h2 className="font-serif text-2xl md:text-3xl text-emerald-300 mb-3 text-center">Consultation & Business Services</h2>
      <p className="text-white/80 max-w-2xl text-center mb-4 text-lg">
        Need expert advice on software architecture, cloud solutions, or business process optimization? I offer tailored consulting to help you solve complex challenges, streamline operations, and unlock new growth opportunities.
      </p>
      <a href="/contact" className="inline-block bg-emerald-300 text-gray-900 font-semibold px-6 py-2 rounded-xl shadow hover:bg-emerald-200 transition text-base">Book a Consultation</a>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <section className="py-8 px-4 flex flex-col items-center bg-gray-900">
        <h1 className="font-serif text-4xl md:text-5xl text-emerald-300 mb-4 text-center">About Brian Mwiruki</h1>
        <p className="text-white/90 max-w-2xl text-center mb-6 text-lg">
          I am a passionate Full Stack Software Engineer and consultant based in Nairobi, Kenya, with over 4 years of experience delivering scalable, high-impact solutions for businesses of all sizes. My mission is to empower organizations through technology, innovation, and a relentless focus on user experience.
        </p>
        <ul className="text-white/70 max-w-xl mb-8 space-y-2 text-base">
          <li><span className="text-emerald-300 font-semibold">• Business-Driven Engineering:</span> Every solution I build is aligned with your business goals and growth.</li>
          <li><span className="text-emerald-300 font-semibold">• End-to-End Expertise:</span> From frontend to backend (including Python), cloud to process optimization, I deliver results across the stack.</li>
          <li><span className="text-emerald-300 font-semibold">• Collaborative Approach:</span> I work closely with clients to ensure transparency, agility, and shared success.</li>
        </ul>
      </section>
      {/* <AboutSection /> */}
      <ConsultationBrief />
    </main>
  );
} 