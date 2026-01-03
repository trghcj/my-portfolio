import Tilt from 'react-parallax-tilt';
import { projects } from '../projects';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 min-h-screen transition-colors duration-300
      bg-gray-100 dark:bg-gray-900"
    >
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-20
          text-gray-900 dark:text-white"
        >
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <Tilt
              key={i}
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              scale={1.06}
              transitionSpeed={500}
              glareEnable
              glareMaxOpacity={0.3}
              glareColor="#a78bfa"
              glarePosition="all"
              className="h-full"
            >
              <div
                className="bg-white dark:bg-gray-800
                rounded-2xl overflow-hidden shadow-xl
                hover:shadow-2xl transition-all duration-500
                flex flex-col h-full"
              >

                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={p.image || 'https://via.placeholder.com/600x400'}
                    alt={p.title}
                    className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                  />
                  {/* Optional overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3
                    className="text-2xl font-bold mb-3
                    text-gray-900 dark:text-white"
                  >
                    {p.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                    {p.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {p.tech.map((t, j) => (
                      <span
                        key={j}
                        className="px-4 py-1.5 text-sm rounded-full font-medium
                        bg-purple-100 text-purple-700
                        dark:bg-purple-900/50 dark:text-purple-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links - Aligned at bottom */}
                  <div className="flex gap-6 items-center mt-auto">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-medium
                        text-purple-600 dark:text-purple-400
                        hover:text-purple-700 dark:hover:text-purple-300
                        hover:underline"
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </a>
                    )}

                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-medium
                      text-gray-700 dark:text-gray-300
                      hover:text-purple-600 dark:hover:text-purple-400
                      hover:underline"
                    >
                      <Github size={20} />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>

        {/* Optional: "More coming soon" note */}
        <p className="text-center mt-16 text-gray-600 dark:text-gray-400 text-lg">
          More projects coming soon...
        </p>
      </div>
    </section>
  );
}