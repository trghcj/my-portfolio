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
        { name: "Docker", icon: "docker" },
        { name: "AWS", icon: "aws" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen py-32
      bg-gradient-to-b from-gray-50 to-white
      dark:from-gray-900 dark:to-black
      transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Heading */}
        <div className="text-center mb-20">
          <h2
            className="text-5xl md:text-6xl font-bold
            text-gray-900 dark:text-white
            mb-6"
          >
            Skills & Technologies
          </h2>
          <p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400
            max-w-3xl mx-auto"
          >
            Tools and technologies I use to build modern, scalable, and beautiful applications —
            from mobile to full-stack web development.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-32">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className="animate-on-scroll"
              style={{ animationDelay: `${catIndex * 150}ms` }}
            >
              <h3
                className="text-3xl md:text-4xl font-bold text-center mb-16
                text-gray-800 dark:text-gray-100
                relative inline-block"
              >
                {category.title}
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-purple-500 rounded-full opacity-70"></span>
              </h3>

              <div
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8
                gap-8 justify-items-center"
              >
                {category.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center p-6 rounded-3xl
                    bg-white dark:bg-gray-800
                    shadow-lg hover:shadow-2xl
                    border border-gray-200 dark:border-gray-700
                    hover:border-purple-400 dark:hover:border-purple-500
                    hover:-translate-y-3 hover:scale-105
                    transition-all duration-500 ease-out
                    opacity-0 animate-on-scroll"
                    style={{ animationDelay: `${index * 80 + catIndex * 200}ms` }}
                  >
                    <div className="mb-4 p-4 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl
                    group-hover:from-purple-200 group-hover:to-pink-200
                    dark:group-hover:from-purple-800/50 dark:group-hover:to-pink-800/50
                    transition-all duration-300">
                      <img
                        src={`https://skillicons.dev/icons?i=${skill.icon}&theme=dark`}
                        alt={skill.name}
                        className="w-16 h-16 md:w-20 md:h-20
                        group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <p
                      className="font-bold text-center text-sm md:text-base
                      text-gray-800 dark:text-gray-200
                      group-hover:text-purple-600 dark:group-hover:text-purple-400
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

        {/* Closing Note */}
        <div className="text-center mt-32">
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
            Always learning. Always building. 🚀
          </p>
        </div>
      </div>

      {/* Optional: Add simple CSS animation for fade-in (no extra library needed) */}
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
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}