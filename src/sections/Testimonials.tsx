'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { testimonialsQuery } from "@/sanity/lib/queries";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";

function getFirstNSentences(text: string, n: number) {
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  return {
    preview: sentences.slice(0, n).join(" ").trim(),
    hasMore: sentences.length > n,
  };
}

const Modal = ({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={onClose}>
      <div className="bg-gray-900 rounded-2xl p-8 max-w-lg w-full relative shadow-xl" onClick={e => e.stopPropagation()}>
        <button
          className="absolute top-3 right-3 text-white/60 hover:text-emerald-300 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    client.fetch(testimonialsQuery).then(setTestimonials);
  }, []);

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl mb-10 text-emerald-300 text-center">Testimonials</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial: any, idx: number) => {
            const { preview, hasMore } = getFirstNSentences(testimonial.quote, 3);
            return (
              <div
                key={testimonial._id}
                className="bg-gray-800 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:scale-[1.02] transition-transform duration-300 border border-white/10"
              >
                <Image
                  src={testimonial.imageUrl || memojiAvatar1}
                  alt={testimonial.name + ' avatar'}
                  width={64}
                  height={64}
                  className="rounded-full border-2 border-emerald-300 mb-4 bg-gray-900"
                />
                <blockquote className="text-white/90 text-center italic mb-4">
                  “{preview}{hasMore && '...'}”
                </blockquote>
                {hasMore && (
                  <button
                    className="text-emerald-300 underline mb-2 hover:text-emerald-200 transition"
                    onClick={() => setOpenIdx(idx)}
                  >
                    Read More
                  </button>
                )}
                <div className="text-emerald-300 font-semibold text-lg text-center">{testimonial.name}</div>
                <div className="text-white/60 text-sm text-center">{testimonial.company}</div>
                <Modal open={openIdx === idx} onClose={() => setOpenIdx(null)}>
                  <blockquote className="text-white/90 text-center italic mb-4">“{testimonial.quote}”</blockquote>
                  <div className="text-emerald-300 font-semibold text-lg text-center">{testimonial.name}</div>
                  <div className="text-white/60 text-sm text-center">{testimonial.company}</div>
                </Modal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
