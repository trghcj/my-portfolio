import VideoNeuralBackground from "../components/VideoNeuralBackground"; 
import React from "react"; // Optional: only if needed for any React-specific features

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend & Mobile",
      skills: [
        { name: "React", icon: "react" },
        { name: "React Native", icon: "react" },
        { name: "Flutter", icon: "flutter" },
        { name: "Dart", icon: "dart" },
        { name: "Tailwind CSS", icon: "tailwindcss" },
        { name: "Figma", icon: "figma" },
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node.js", icon: "nodejs" },
        { name: "Flask", icon: "flask" },
        { name: "Firebase", icon: "firebase" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "REST API", icon: "api" },
      ],
    },
    {
      title: "Languages & Tools",
      skills: [
        { name: "Python", icon: "python" },
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "VS Code", icon: "vscode" },
        
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen py-24 md:py-32 bg-black overflow-hidden flex flex-col justify-center"
    >
      {/* === Video Neural Background (glowing blue/cyan connections & nodes) === */}
      <VideoNeuralBackground />

      {/* Depth Overlay – lighter to let video glow shine through */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/85 z-10 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20 md:mb-28">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Tools and technologies I use to build modern, scalable, and impactful
            applications — from mobile to full-stack web development.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-24 md:space-y-36">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className="animate-on-scroll"
              style={{ animationDelay: `${catIndex * 200}ms` }}
            >
              <h3
                className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-20
                text-white relative inline-block"
              >
                {category.title}
                <span
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2
                  w-24 md:w-28 h-1 bg-purple-500 rounded-full opacity-80"
                />
              </h3>

              <div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6
                gap-8 md:gap-10 justify-items-center"
              >
                {category.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center p-5 md:p-6 rounded-2xl md:rounded-3xl
                    bg-gray-900/70 backdrop-blur-xl
                    border border-purple-500/20
                    shadow-[0_0_20px_rgba(168,85,247,0.15)]
                    hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]
                    hover:-translate-y-3 hover:scale-105
                    transition-all duration-500 ease-out
                    opacity-0 animate-on-scroll"
                    style={{ animationDelay: `${index * 100 + catIndex * 250}ms` }}
                  >
                    <div
                      className="mb-4 p-3 md:p-4 rounded-xl md:rounded-2xl
                      bg-gradient-to-br from-purple-500/20 to-pink-500/20
                      group-hover:from-purple-500/40 group-hover:to-pink-500/40
                      transition-all duration-300"
                    >
                      <img
                        src={`https://skillicons.dev/icons?i=${skill.icon}&theme=dark`}
                        alt={skill.name}
                        className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20
                        group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <p
                      className="font-medium text-center text-sm md:text-base
                      text-gray-200 group-hover:text-purple-300
                      transition-colors duration-300"
                    >
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Message */}
        <div className="text-center mt-20 md:mt-36">
          <p className="text-xl md:text-2xl text-gray-300 font-medium">
            Always learning. Always building. 🚀
          </p>
        </div>
      </div>

      {/* Fade-in animation keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-on-scroll {
          opacity: 0;
          animation: fadeInUp 0.9s ease-out forwards;
        }
      `}</style>
    </section>
  );
}