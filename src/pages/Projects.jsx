import { projects } from "../projects";
import { ArrowUpRight, Github } from "lucide-react";

export default function Projects() {
  return (
    <div className="relative py-32 w-full flex flex-col justify-center">
      <div className="relative z-20 container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-20 max-w-2xl">
          <h2 className="font-display text-5xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter mb-6">
            Selected Work.
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light">
            A showcase of my recent projects, blending robust backend architectures with premium frontend interfaces.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group relative flex flex-col rounded-3xl overflow-hidden bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-orange-500/50 transition-colors duration-500"
            >
              {/* Image Container */}
              <div className="relative h-[300px] sm:h-[400px] overflow-hidden bg-zinc-100 dark:bg-zinc-950">
                <img
                  src={p.image || "https://via.placeholder.com/800x600"}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter grayscale-[50%] group-hover:grayscale-0"
                />
                
                {/* Gradient Overlay for Text Readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Quick Links Overlay (visible on hover) */}
                <div className="absolute top-6 right-6 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-zinc-900 hover:bg-orange-600 shadow-lg transition-transform hover:scale-110"
                      aria-label="Live Demo"
                    >
                      <ArrowUpRight size={24} />
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 shadow-lg transition-transform hover:scale-110"
                      aria-label="Source Code"
                    >
                      <Github size={24} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-zinc-900 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                  {p.title}
                </h3>
                
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 flex-grow leading-relaxed">
                  {p.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tech.map((t, j) => (
                    <span
                      key={j}
                      className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}