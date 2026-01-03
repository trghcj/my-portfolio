export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: "react" },
        { name: "React Native", icon: "react" },
        { name: "Flutter", icon: "flutter" },
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
      title: "Programming Languages",
      skills: [
        { name: "Dart", icon: "dart" },
        { name: "Python", icon: "python" },
      ],
    },
    {
      title: "Tools & Workflow",
      skills: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "VS Code", icon: "vscode" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen py-24
      bg-gray-100 dark:bg-gray-900
      transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-6
          text-gray-900 dark:text-white"
        >
          Skills & Technologies
        </h2>

        <p
          className="text-center text-gray-600 dark:text-gray-400
          max-w-2xl mx-auto mb-20"
        >
          Technologies and tools I use to design, build, and deploy modern
          applications.
        </p>

        {/* Skill Categories */}
        <div className="space-y-24">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3
                className="text-2xl md:text-3xl font-semibold text-center mb-12
                text-gray-800 dark:text-gray-200"
              >
                {category.title}
              </h3>

              <div
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8
                gap-8 max-w-6xl mx-auto"
              >
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center p-6 rounded-2xl
                    bg-white dark:bg-gray-800
                    shadow-md hover:shadow-2xl
                    hover:-translate-y-2 hover:scale-105
                    transition-all duration-300"
                  >
                    <img
                      src={`https://skillicons.dev/icons?i=${skill.icon}`}
                      alt={skill.name}
                      className="w-16 h-16 md:w-20 md:h-20 mb-4
                      group-hover:scale-110 transition"
                    />

                    <p
                      className="font-semibold text-center text-sm md:text-base
                      text-gray-800 dark:text-gray-200"
                    >
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center mt-24 text-gray-600 dark:text-gray-400">
          Constantly learning, improving, and exploring new technologies 🚀
        </p>
      </div>
    </section>
  );
}
