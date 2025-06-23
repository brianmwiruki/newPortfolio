import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ProjectsSection = async () => {
  const projects = await client.fetch(projectsQuery);

  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Real-World Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto ">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="mt-10 md:mt-20 grid gap-10 md:gap-12 lg:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project: any) => (
            <Link
              key={project._id}
              href={`/projects/${project.slug.current}`}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-6 pt-8 pb-6 flex flex-col shadow-lg hover:scale-[1.02] transition-transform duration-300 after:pointer-events-none"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    {project.company}
                  </span>
                  <span className="text-white/40">&bull;</span>
                  <span className="text-white/60">{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl mt-2 md:mt-3 md:text-3xl">
                  {project.title}
                </h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <ul className="flex flex-col gap-2 mt-4 md:mt-5">
                  {project.results?.map((result: string, idx: number) => (
                    <li key={idx} className="flex gap-2 text-sm md:text-base text-white/70 items-center">
                      <CheckCircleIcon className="size-5 md:size-6 text-emerald-300" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-6">
                  <button className="bg-white text-gray-950 h-12 w-full px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 shadow hover:bg-gray-100 transition">
                    <span>View Details</span>
                    <ArrowUpRightIcon className="size-4" />
                  </button>
                </span>
                <div className="relative w-full aspect-[4/3] mt-6 rounded-2xl overflow-hidden border border-white/10">
                  {project.coverImageUrl && (
                    <Image
                      src={project.coverImageUrl}
                      alt={project.title + ' screenshot'}
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
      </div>
    </section>
  );
};
 