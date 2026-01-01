import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import { projects } from './projects';

function App() {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    document.title = "Divyansh singh - Portfolio";
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur z-50 shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">Divyansh singh</h1>
          <ul className="hidden md:flex gap-6 text-white font-medium">
            <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
            <li><a href="#skills" className="hover:text-purple-400">Skills</a></li>
            <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
          </ul>
          <button className="md:hidden text-white" onClick={() => setNavOpen(!navOpen)}>
            <ChevronDown size={28} className={`${navOpen ? "rotate-180" : ""} transition-transform`} />
          </button>
        </div>
        {navOpen && (
          <ul className="md:hidden flex flex-col gap-3 px-6 pb-3 text-white font-medium">
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white flex items-center justify-center relative">
        <div className="container mx-auto px-6 text-center">
          <img
            src="https://github.com/trchj.png"
            alt="Divyansh Singh"
            className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-purple-500 shadow-2xl"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Divyansh Singh</h1>
          <p className="text-xl md:text-2xl text-purple-300 mb-8">
            Pre-Final Year B.Tech CSE • Flutter & React-Native Developer
          </p>
          <p className="text-lg max-w-2xl mx-auto mb-10 text-gray-300">
             Android & Web Developer• Github • Developing Apps for College Events and Small Businesses
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com/trghcj" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/divyansh-singh-332b741aa/" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition">
              <Linkedin size={28} />
            </a>
            <a href="mailto:ms1778937@gmail.com"
               className="p-3 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition">
              <Mail size={28} />
            </a>
          </div>
          <a href="#projects" className="animate-bounce">
            <ChevronDown size={40} />
          </a>
        </div>
      </section>

      {/* Projects Section */}
<section id="projects" className="py-20 bg-gray-50">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Projects</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((p, i) => (
        <div key={i} className="bg-white shadow-xl rounded-xl overflow-hidden hover:-translate-y-2 transform transition duration-300">
          <img 
            src={p.image || "https://via.placeholder.com/600x400?text=Project+Screenshot"} 
            alt={`${p.title} screenshot`}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
            <p className="text-gray-600 mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {p.tech.map((t, j) => (
                <span key={j} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {p.live && (
                <a href={p.live} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 text-purple-600 hover:underline">
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
              <a href={p.github} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 text-gray-700 hover:underline">
                <Github size={18} /> Source
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Skills Section */}
<section id="skills" className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Skills & Technologies</h2>
    
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
      {[
        { name: "Flutter", icon: "flutter" },
        { name: "Dart", icon: "dart" },
        { name: "Firebase", icon: "firebase" },
        { name: "React", icon: "react" },
        { name: "Node.js", icon: "nodejs" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "Git", icon: "git" },
        { name: "Docker", icon: "docker" },
        { name: "AWS", icon: "aws" },
        { name: "Python", icon: "python" },
        { name: "Flask", icon: "flask" },
      ].map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        >
          <img
            src={`https://skillicons.dev/icons?i=${skill.icon}`}
            alt={skill.name}
            className="w-20 h-20 mb-4"
          />
          <p className="font-medium text-gray-800">{skill.name}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10 text-gray-800">Contact Me</h2>
          <p className="mb-6 text-gray-700">
            Feel free to reach out via email or connect with me on LinkedIn/GitHub.
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/trghcj" target="_blank" rel="noopener noreferrer"
               className="p-4 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/divyansh-singh-332b741aa/" target="_blank" rel="noopener noreferrer"
               className="p-4 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition">
              <Linkedin size={28} />
            </a>
            <a href="mailto:ms1778937@gmail.com"
               className="p-4 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white text-center">
        <p>Made with ❤️ using React + Tailwind • Deployed on Vercel/Netlify</p>
        <p className="mt-2">© 2025 Divyansh Singh. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
