import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Header } from "@/sections/Header";
import { PortableText } from "@portabletext/react";

export async function generateMetadata({ params }) {
  const project = await client.fetch(
    `*[_type == "project" && slug.current == $slug][0]{
      title,
      summary
    }`,
    { slug: params.slug }
  );
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Projects | Brian Mwiruki`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }) {
  const project = await client.fetch(
    `*[_type == "project" && slug.current == $slug][0]{
      title,
      company,
      year,
      summary,
      description,
      "coverImageUrl": coverImage.asset->url,
      results,
      link
    }`,
    { slug: params.slug }
  );

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-gray-900 py-16 px-4 flex flex-col items-center">
      <Header />
      <h1 className="font-serif text-4xl md:text-5xl text-emerald-300 mb-4 text-center">{project.title}</h1>
      <div className="text-white/70 mb-2 text-center">{project.company} &bull; {project.year}</div>
      <div className="w-full max-w-2xl mb-8">
        {project.coverImageUrl && (
          <Image src={project.coverImageUrl} alt={project.title + ' screenshot'} width={800} height={450} className="rounded-2xl border border-white/10" />
        )}
      </div>
      <p className="text-white/90 max-w-2xl text-lg mb-6 text-center">{project.summary}</p>
      <div className="prose prose-invert max-w-xl mb-8">
        <PortableText value={project.description} />
      </div>
      <ul className="text-white/70 max-w-xl mb-8 space-y-2 text-base">
        {project.results?.map((result, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="text-emerald-300">•</span> {result}
          </li>
        ))}
      </ul>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-300 text-gray-900 font-semibold px-6 py-3 rounded-xl shadow hover:bg-emerald-200 transition text-lg">View Live Site</a>
      )}
    </main>
  );
} 