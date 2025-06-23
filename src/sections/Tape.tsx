'use client';
import { FaRocket, FaHandshake } from "react-icons/fa";

export const TapeSection = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-emerald-400/20 via-sky-400/10 to-emerald-300/20 py-3 border-y border-emerald-300/20">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
        <span className="inline-flex items-center gap-2 text-emerald-300 font-bold text-lg md:text-xl px-4">
          <FaRocket className="animate-bounce" />
          Available for freelance & remote projects worldwide!
          <FaHandshake className="ml-2 animate-pulse" />
        </span>
        <span className="inline-flex items-center gap-2 text-white/80 font-medium text-base md:text-lg px-4">
          Let's build something exceptional together — <a href="#contact" className="underline underline-offset-4 text-emerald-300 hover:text-white transition">Contact me</a>
        </span>
      </div>
      <style jsx>{`
        .animate-marquee {
          display: flex;
          animation: marquee 18s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};
