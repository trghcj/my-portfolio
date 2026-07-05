import Tilt from "react-parallax-tilt";
import { projects } from "../projects";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <div className="relative py-24 md:py-32 w-full flex flex-col justify-center">

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6 max-w-7xl">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-20 md:mb-24 text-slate-900 dark:text-white tracking-tight drop-shadow-sm">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {projects.map((p, i) => (
            <Tilt
              key={i}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              scale={1.02}
              transitionSpeed={500}
              glareEnable
              glareMaxOpacity={0.15}
              glareColor="#10b981"
              glarePosition="all"
              className="h-full"
            >
              <div
                className="relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl
                  rounded-3xl overflow-hidden
                  border border-white/40 dark:border-white/10
                  shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                  hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)] dark:hover:shadow-[0_8px_30px_rgba(16,185,129,0.2)]
                  transition-all duration-500
                  flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden p-2">
                  <div className="rounded-2xl overflow-hidden relative">
                    <img
                      src={p.image || "https://via.placeholder.com/600x400"}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-56 md:h-64 object-cover object-top
                        transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                    {p.title}
                  </h3>

                  <p className="text-slate-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed text-sm md:text-base">
                    {p.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                    {p.tech.map((t, j) => (
                      <span
                        key={j}
                        className="px-3 md:px-4 py-1.5 text-xs md:text-sm rounded-full font-semibold
                          bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300
                          border border-emerald-200 dark:border-emerald-700/50
                          transition-colors duration-300 hover:bg-emerald-200 dark:hover:bg-emerald-800/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-5 md:gap-6 items-center mt-auto pt-4 border-t border-slate-200 dark:border-slate-800">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live demo of ${p.title}`}
                        className="flex items-center gap-2 font-semibold text-sm md:text-base
                          text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 hover:underline transition-colors"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}

                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Source code of ${p.title}`}
                      className="flex items-center gap-2 font-semibold text-sm md:text-base
                        text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:underline transition-colors"
                    >
                      <Github size={18} />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center mt-20 md:mt-28 text-slate-500 dark:text-slate-400 font-medium text-lg md:text-xl">
          More projects coming soon...
        </p>
      </div>
    </div>
  );
}