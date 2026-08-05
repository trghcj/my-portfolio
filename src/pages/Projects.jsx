import { projects } from "../projects";
import { ArrowUpRight, Github } from "lucide-react";

export default function Projects() {
  return (
    <div className="relative py-32 w-full flex flex-col justify-center">
      <div className="relative z-20 container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-24 max-w-2xl">
          <h2 className="font-display text-5xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter mb-6">
            Selected Work.
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light">
            A showcase of my recent projects, blending robust backend architectures with premium frontend interfaces.
          </p>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-24 md:gap-32">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group flex flex-col lg:flex-row items-center gap-10 lg:gap-16 lg:odd:flex-row-reverse"
            >
              
              {/* Text Content */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                
                <h3 className="font-display text-4xl md:text-5xl font-black mb-4 text-zinc-900 dark:text-white tracking-tight">
                  {p.title}
                </h3>
                
                <div className="mb-8 pl-6 border-l-2 border-orange-500/50">
                  <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {p.tech.map((t, j) => (
                    <span
                      key={j}
                      className="px-5 py-2 text-sm font-semibold tracking-wide rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex items-center gap-6">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 font-bold text-orange-600 dark:text-orange-500 hover:text-orange-700 dark:hover:text-orange-400 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight size={20} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    </a>
                  )}
                  
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 font-bold text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    >
                      <Github size={20} />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>

              </div>

              {/* Image Container */}
              <div className="w-full lg:w-1/2">
                <div className="relative w-full rounded-[2rem] overflow-hidden bg-zinc-100 dark:bg-[#0f0f11] border border-zinc-200 dark:border-zinc-800/60 shadow-2xl p-4 md:p-8 transition-transform duration-700 group-hover:scale-[1.02]">
                  <div className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800/50 shadow-inner bg-zinc-200 dark:bg-zinc-900 aspect-[4/3]">
                    <img
                      src={p.image || "https://via.placeholder.com/800x600"}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}