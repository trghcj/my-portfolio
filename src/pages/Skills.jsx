import React from "react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend & Mobile",
      size: "frontend",
      skills: [
        { name: "React", icon: "react" },
        { name: "Flutter", icon: "flutter" },
        { name: "Dart", icon: "dart" },
        { name: "Tailwind CSS", icon: "tailwindcss" },
        { name: "JavaScript", icon: "javascript" },
      ],
    },
    {
      title: "Backend & Databases",
      size: "backend",
      skills: [
        { name: "Flask", icon: "flask" },
        { name: "Firebase", icon: "firebase" },
        { name: "FastAPI", icon: "fastapi" },
        { name: "Go", icon: "golang" },
        { name: "PostgreSQL", icon: "postgresql" },
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
    frontend: "p-7 md:p-8 scale-100 md:scale-105",
    backend: "p-6 md:p-7 scale-100",
    tools: "p-5 md:p-6 scale-95 md:scale-100",
  };

  const categoryHoverClasses = {
    frontend: "hover:-translate-y-4 hover:scale-[1.06] hover:shadow-[0_15px_40px_rgba(16,185,129,0.25)]",
    backend: "hover:translate-y-3 hover:scale-[0.97] hover:shadow-[0_2px_10px_rgba(16,185,129,0.15)]",
    tools: "hover:rotate-6 hover:scale-110 hover:shadow-[0_10px_30px_rgba(16,185,129,0.2)]",
  };

  return (
    <div className="relative w-full min-h-screen py-24 md:py-32 flex flex-col justify-center">

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">

        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 drop-shadow-sm">
            Skills & Technologies
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto">
            Tools and technologies I use to build modern, scalable, and impactful applications.
          </p>
        </div>

        <div className="space-y-28 md:space-y-36">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <div className="flex justify-center mb-16">
                <h3 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white relative inline-block">
                  {category.title}
                  <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-28 h-1.5 bg-gradient-to-r from-emerald-500 to-emerald-500 rounded-full" />
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 justify-items-center">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`
                      group flex flex-col items-center rounded-3xl
                      bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl
                      border border-white/40 dark:border-white/10
                      shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                      transition-all duration-500
                      ${categorySizeClasses[category.size]}
                      ${categoryHoverClasses[category.size]}
                    `}
                  >
                    <div className="mb-4 p-4 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-100 dark:from-emerald-900/40 dark:to-emerald-900/40 shadow-inner">
                      <img
                        src={`https://skillicons.dev/icons?i=${skill.icon}`}
                        alt={skill.name}
                        className="w-16 h-16 md:w-20 md:h-20 transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
                      />
                    </div>

                    <p className="text-sm md:text-base font-semibold text-slate-700 dark:text-gray-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors text-center">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-32">
          <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 font-medium">
            Always learning. Always building. 
          </p>
        </div>

      </div>
    </div>
  );
}
