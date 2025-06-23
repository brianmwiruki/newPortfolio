import Image from "next/image";
import React from "react";
import avatar from "@/assets/images/memoji-avatar-1.png";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Avatar */}
        <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
          <Image
            src={avatar}
            alt="Brian Mwiruki avatar"
            width={140}
            height={140}
            className="rounded-full border-4 border-emerald-300 shadow-lg bg-gray-800"
          />
        </div>
        {/* About Content */}
        <div className="flex-1">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 text-emerald-300">About Me</h2>
          <p className="text-white/90 text-lg md:text-xl mb-4">
            Hi, I'm <span className="font-bold text-emerald-300">Brian Mwiruki</span>, a Full Stack Software Engineer based in Nairobi, Kenya, with over 4 years of experience building scalable, end-to-end solutions. I specialize in designing, implementing, and optimizing systems using modern frameworks and cloud technologies. My expertise spans microservices architecture, cloud solutions, and process optimization.
          </p>
          <p className="text-white/70 mb-4">
            I thrive in dynamic environments, am a quick learner, and enjoy collaborating with teams to deliver high-quality solutions. Whether it's frontend magic with <span className="text-emerald-300 font-semibold">React</span> and <span className="text-emerald-300 font-semibold">Next.js</span>, or robust backend systems with <span className="text-emerald-300 font-semibold">Node.js</span>, <span className="text-emerald-300 font-semibold">Python</span>, <span className="text-emerald-300 font-semibold">Django</span>, or <span className="text-emerald-300 font-semibold">Spring Boot</span>, I bring a passion for clean code and great user experiences.
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="bg-gray-800 text-emerald-300 px-3 py-1 rounded-full text-sm font-semibold">React.js</span>
            <span className="bg-gray-800 text-emerald-300 px-3 py-1 rounded-full text-sm font-semibold">Next.js</span>
            <span className="bg-gray-800 text-emerald-300 px-3 py-1 rounded-full text-sm font-semibold">Tailwind CSS</span>
            <span className="bg-gray-800 text-emerald-300 px-3 py-1 rounded-full text-sm font-semibold">Node.js</span>
            <span className="bg-gray-800 text-emerald-300 px-3 py-1 rounded-full text-sm font-semibold">Python</span>
            <span className="bg-gray-800 text-emerald-300 px-3 py-1 rounded-full text-sm font-semibold">Django</span>
            <span className="bg-gray-800 text-emerald-300 px-3 py-1 rounded-full text-sm font-semibold">Spring Boot</span>
            <span className="bg-gray-800 text-emerald-300 px-3 py-1 rounded-full text-sm font-semibold">AWS</span>
            <span className="bg-gray-800 text-emerald-300 px-3 py-1 rounded-full text-sm font-semibold">Azure</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-3 mt-6">
            <a
              href="mailto:mwiruki@outlook.com"
              className="inline-flex items-center gap-2 bg-emerald-300 text-gray-900 px-4 py-2 rounded-lg font-semibold shadow hover:bg-emerald-200 transition"
            >
              <FaEnvelope /> Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/brianmwiruki/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-emerald-300 text-emerald-300 px-4 py-2 rounded-lg font-semibold hover:bg-emerald-300 hover:text-gray-900 transition"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
