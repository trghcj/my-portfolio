import VideoNeuralBackground from "../components/VideoNeuralBackground";
import React from "react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend & Mobile",
      size: "frontend",
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
      size: "backend",
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
      size: "tools",
      skills: [
        { name: "Python", icon: "python" },
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "VS Code", icon: "vscode" },
      ],
    },
  ];

  const categorySizeClasses = {
    frontend: "p-7 md:p-8 scale-110",
    backend: "p-6 md:p-7 scale-100",
    tools: "p-5 md:p-6 scale-95",
  };

  return (
    <section className="relative w-full min-h-screen py-24 md:py-32 bg-black overflow-hidden">
      <VideoNeuralBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/85 z-10 pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-6">

        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Skills & Technologies
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Tools and technologies I use to build modern, scalable, and impactful applications.
          </p>
        </div>

        <div className="space-y-28 md:space-y-36">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white relative inline-block">
                {category.title}
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-28 h-1 bg-purple-500 rounded-full" />
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 justify-items-center">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`
                      group flex flex-col items-center rounded-3xl
                      bg-gray-900/70 backdrop-blur-xl
                      border border-purple-500/20
                      shadow-[0_0_20px_rgba(168,85,247,0.15)]
                      hover:shadow-[0_0_45px_rgba(168,85,247,0.35)]
                      hover:-translate-y-3 hover:scale-105
                      transition-all duration-500
                      ${categorySizeClasses[category.size]}
                    `}
                  >
                    <div className="mb-4 p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                      <img
                        src={`https://skillicons.dev/icons?i=${skill.icon}&theme=dark`}
                        alt={skill.name}
                        className="w-16 h-16 md:w-20 md:h-20 transition-transform group-hover:scale-110"
                      />
                    </div>

                    <p className="text-sm md:text-base font-medium text-gray-200 group-hover:text-purple-300">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-24">
          <p className="text-xl md:text-2xl text-gray-300 font-medium">
            Always learning. Always building. 
          </p>
        </div>

      </div>
    </section>
  );
}
