import Tilt from "react-parallax-tilt";
import { projects } from "../projects";
import { ExternalLink, Github } from "lucide-react";
import VideoNeuralBackground from "../components/VideoNeuralBackground"; 

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 min-h-screen bg-black overflow-hidden flex flex-col justify-center"
    >
      {/* === Video Neural Background (glowing blue connections flow) === */}
      <VideoNeuralBackground />

      {/* Depth Overlay – lighter to let video glow shine through */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/85 z-10 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6 max-w-7xl">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-20 md:mb-24 text-white tracking-tight">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {projects.map((p, i) => (
            <Tilt
              key={i}
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              scale={1.06}
              transitionSpeed={500}
              glareEnable
              glareMaxOpacity={0.25}
              glareColor="#a855f7"
              glarePosition="all"
              className="h-full"
            >
              <div
                className="relative bg-gray-900/70 backdrop-blur-xl
                  rounded-2xl overflow-hidden
                  border border-purple-500/20
                  shadow-[0_0_35px_rgba(168,85,247,0.18)]
                  hover:shadow-[0_0_60px_rgba(168,85,247,0.4)]
                  transition-all duration-500
                  flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={p.image || "https://via.placeholder.com/600x400"}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-56 md:h-64 object-cover
                      transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                    {p.title}
                  </h3>

                  <p className="text-gray-300 mb-6 flex-grow leading-relaxed text-sm md:text-base">
                    {p.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                    {p.tech.map((t, j) => (
                      <span
                        key={j}
                        className="px-3 md:px-4 py-1 text-xs md:text-sm rounded-full font-medium
                          bg-purple-500/10 text-purple-300
                          border border-purple-500/30
                          hover:bg-purple-500/20 transition"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-5 md:gap-6 items-center mt-auto">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live demo of ${p.title}`}
                        className="flex items-center gap-2 font-medium text-sm md:text-base
                          text-purple-400 hover:text-purple-300 hover:underline"
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
                      className="flex items-center gap-2 font-medium text-sm md:text-base
                        text-gray-300 hover:text-purple-400 hover:underline"
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
        <p className="text-center mt-20 md:mt-28 text-gray-400 text-lg md:text-xl">
          More projects coming soon...
        </p>
      </div>
    </section>
  );
}