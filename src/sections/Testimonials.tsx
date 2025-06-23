import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { testimonialsQuery } from "@/sanity/lib/queries";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";

export const TestimonialsSection = async () => {
  const testimonials = await client.fetch(testimonialsQuery);

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl mb-10 text-emerald-300 text-center">Testimonials</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial: any, idx: number) => (
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
              <blockquote className="text-white/90 text-center italic mb-4">“{testimonial.quote}”</blockquote>
              <div className="text-emerald-300 font-semibold text-lg text-center">{testimonial.name}</div>
              <div className="text-white/60 text-sm text-center">{testimonial.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
