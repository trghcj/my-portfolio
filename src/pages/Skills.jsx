import Reveal from "../components/Reveal";

const skillCategories = [
  {
    title: "Frontend & Mobile",
    tagline: "Responsive web apps and cross-platform mobile UIs.",
    skills: [
      { name: "React", icon: "react" },
      { name: "Flutter", icon: "flutter" },
      { name: "Dart", icon: "dart" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Tailwind", icon: "tailwindcss" },
      { name: "HTML", icon: "html" },
    ],
  },
  {
    title: "Backend & Databases",
    tagline: "APIs, data pipelines, and the storage behind them.",
    skills: [
      { name: "Go", icon: "golang" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Flask", icon: "flask" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Supabase", icon: "supabase" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    title: "Languages & Tools",
    tagline: "What I write in, ship with, and deploy to.",
    skills: [
      { name: "Python", icon: "python" },
      { name: "Docker", icon: "docker" },
      { name: "Azure", icon: "azure" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
    ],
  },
];

const allSkills = skillCategories.flatMap((c) => c.skills);

function SkillIcon({ icon, name, className }) {
  return (
    <img
      src={`https://skillicons.dev/icons?i=${icon}`}
      alt={name}
      loading="lazy"
      className={className}
    />
  );
}

export default function Skills() {
  return (
    <div className="relative w-full py-24 md:py-32 flex flex-col justify-center">
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">

        {/* Header */}
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <h2 className="font-display text-5xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter">
            Technical Arsenal.
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light max-w-md md:text-right">
            The frameworks, languages, and tools I use to architect robust systems and build premium interfaces.
          </p>
        </Reveal>

        {/* Infinite logo strip */}
        <Reveal delay={100}>
        <div className="skills-marquee relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/30 backdrop-blur-sm py-5 mb-8">
          <div className="skills-marquee-track flex w-max gap-10">
            {[...allSkills, ...allSkills].map((s, i) => (
              <div key={i} className="flex items-center gap-3 shrink-0" aria-hidden={i >= allSkills.length}>
                <SkillIcon icon={s.icon} name={s.name} className="w-8 h-8" />
                <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
        </Reveal>

        {/* Category cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <Reveal
              key={category.title}
              delay={150 + idx * 120}
              className="group/card relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-[#0c0c0e]/80 backdrop-blur-sm p-6 md:p-8 shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 hover:border-orange-500/40 transition-all duration-500"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -top-24 -right-24 w-56 h-56 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/10 blur-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />

              <div className="relative flex items-start justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-600 dark:text-orange-500">
                  0{idx + 1}
                </span>
                <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500">
                  {category.skills.length} tools
                </span>
              </div>

              <h3 className="relative font-display text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight mb-2">
                {category.title}
              </h3>
              <p className="relative text-sm text-zinc-500 dark:text-zinc-400 font-light mb-8">
                {category.tagline}
              </p>

              <div className="relative grid grid-cols-3 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-zinc-100 dark:border-zinc-800/70 bg-zinc-50/80 dark:bg-zinc-900/50 py-4 hover:-translate-y-1 hover:border-orange-500/50 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300"
                  >
                    <SkillIcon
                      icon={skill.icon}
                      name={skill.name}
                      className="w-10 h-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                    />
                    <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </div>
  );
}
