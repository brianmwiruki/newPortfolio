import { client } from "@/sanity/lib/client";
import { blogPreviewQuery } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import grainImage from "@/assets/images/grain.jpg";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export const BlogPreviewSection = async () => {
  const posts = await client.fetch(blogPreviewQuery);

  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Insights & Updates
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Latest Blog Posts
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto ">
          Explore my latest thoughts, tips, and industry news.
        </p>
        <div className="mt-10 md:mt-20 grid gap-10 md:gap-12 lg:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {posts.map((post: any) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-6 pt-8 pb-6 flex flex-col shadow-lg hover:scale-[1.02] transition-transform duration-300 after:pointer-events-none border border-white/10"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    Blog
                  </span>
                  <span className="text-white/40">&bull;</span>
                  <span className="text-white/60">{post.publishedAt ? formatDate(post.publishedAt) : ''}</span>
                </div>
                <h3 className="font-serif text-2xl mt-2 md:mt-3 md:text-3xl">
                  {post.title}
                </h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <p className="text-white/80 mt-4 md:mt-5 flex-1">
                  {post.body?.children?.[0]?.text || ""}
                </p>
                <span className="mt-6">
                  <button className="bg-white text-gray-950 h-12 w-full px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 shadow hover:bg-gray-100 transition">
                    <span>Read More</span>
                  </button>
                </span>
                <div className="relative w-full aspect-[4/3] mt-6 rounded-2xl overflow-hidden border border-white/10">
                  {post.mainImageUrl && (
                    <Image
                      src={post.mainImageUrl}
                      alt={post.mainImageAlt || post.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover"
                    />
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/blog" className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 font-semibold px-8 py-3 rounded-full shadow hover:from-emerald-400 hover:to-sky-500 transition">
            View all posts
          </Link>
        </div>
      </div>
    </section>
  );
}; 