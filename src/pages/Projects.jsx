import Tilt from 'react-parallax-tilt';
import { projects } from '../projects';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-20 text-gray-800">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <Tilt key={i} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={400} glareEnable={true} glareMaxOpacity={0.3} glareColor="#a78bfa">
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <img src={p.image || "https://via.placeholder.com/600x400"} alt={p.title} className="w-full h-64 object-cover" />
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-3">{p.title}</h3>
                  <p className="text-gray-600 mb-6">{p.desc}</p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {p.tech.map((t, j) => (
                      <span key={j} className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-6">
                    {p.live && <a href={p.live} target="_blank" className="flex items-center gap-2 text-purple-600"><ExternalLink size={20} /> Live</a>}
                    <a href={p.github} target="_blank" className="flex items-center gap-2 text-gray-700"><Github size={20} /> Source</a>
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