import Tilt from 'react-parallax-tilt';
import { projects } from '../projects';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <section
      className="py-24 min-h-screen transition-colors duration-300
      bg-gray-100 dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20
          text-gray-900 dark:text-white">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <Tilt
              key={i}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.05}
              transitionSpeed={400}
              glareEnable
              glareMaxOpacity={0.25}
              glareColor="#a78bfa"
            >
              <div className="bg-white dark:bg-gray-800 
                rounded-2xl overflow-hidden shadow-xl
                hover:shadow-2xl transition-all duration-300">

                {/* Project Image */}
                <img
                  src={p.image || 'https://via.placeholder.com/600x400'}
                  alt={p.title}
                  className="w-full h-60 object-cover"
                />

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3
                    text-gray-900 dark:text-white">
                    {p.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {p.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {p.tech.map((t, j) => (
                      <span
                        key={j}
                        className="px-4 py-1.5 text-sm rounded-full
                        bg-purple-100 text-purple-700
                        dark:bg-purple-900/40 dark:text-purple-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-6 items-center">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-medium
                        text-purple-600 dark:text-purple-400
                        hover:underline"
                      >
                        <ExternalLink size={20} /> Live
                      </a>
                    )}

                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-medium
                      text-gray-700 dark:text-gray-300
                      hover:text-purple-600 dark:hover:text-purple-400"
                    >
                      <Github size={20} /> Source
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
