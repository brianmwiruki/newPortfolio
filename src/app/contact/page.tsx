import { Metadata } from "next";
import { ContactSection } from "@/sections/Contact";
import { Header } from "@/sections/Header";

export const metadata: Metadata = {
  title: "Contact | Brian Mwiruki",
  description: "Contact Brian Mwiruki for software engineering, consulting, or business inquiries. Get in touch for a prompt response.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-900 pt-10">
      <Header />
      <section className="py-12 px-4 flex flex-col items-center bg-gray-900">
        <h1 className="font-serif text-4xl md:text-5xl text-emerald-300 mb-4 text-center">Contact Brian Mwiruki</h1>
        <p className="text-white/90 max-w-2xl text-center mb-6 text-lg">
          Ready to start your next project, need expert advice, or want to discuss a business opportunity? I'm here to help! Fill out the form below or reach out directly for a prompt response.
        </p>
      </section>
      <ContactSection />
    </main>
  );
} 