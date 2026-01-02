export default function Skills() {
  const skills = [
    { name: "Flutter", icon: "flutter" },
    { name: "Dart", icon: "dart" },
    { name: "Firebase", icon: "firebase" },
    { name: "React Native", icon: "react" },
    { name: "React", icon: "react" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Python", icon: "python" },
    { name: "Flask", icon: "flask" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "REST API", icon: "api" },
    { name: "VS Code", icon: "vscode" },
    { name: "Figma", icon: "figma" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
  ];

  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-20 text-gray-800">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 max-w-6xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
            >
              <img
                src={`https://skillicons.dev/icons?i=${skill.icon}`}
                alt={skill.name}
                className="w-20 h-20 mb-3"
              />
              <p className="font-semibold text-gray-800 text-base text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

        {/* Optional: small note at the bottom */}
        <p className="text-center mt-16 text-gray-600">
          Constantly learning and experimenting with new tools
        </p>
      </div>
    </section>
  );
}