export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend & Mobile",
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
      skills: [
        { name: "Python", icon: "python" },
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "VS Code", icon: "vscode" },
      ],
    },
  ];

  return (
    <div className="relative w-full py-32 flex flex-col justify-center">
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        
        <div className="text-center mb-24">
          <h2 className="font-display text-5xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter mb-6">
            Technical Arsenal.
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light max-w-2xl mx-auto">
            The frameworks, languages, and tools I use to architect robust systems and build premium interfaces.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <div className="flex justify-center mb-14">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-center text-zinc-900 dark:text-white relative inline-block">
                  {category.title}
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
                </h3>
              </div>

              <div className="flex flex-wrap gap-6 justify-center max-w-4xl mx-auto">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-4 px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 hover:border-orange-500/50 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-2 transition-all duration-300"
                  >
                    <img
                      src={`https://skillicons.dev/icons?i=${skill.icon}`}
                      alt={skill.name}
                      className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 filter drop-shadow-sm"
                    />
                    <p className="font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
