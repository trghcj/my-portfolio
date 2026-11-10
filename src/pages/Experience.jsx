import Reveal from "../components/Reveal";
import { Briefcase, GraduationCap, Calendar, Award } from "lucide-react";

const experiences = [
  {
    title: "Technical Intern",
    company: "Pragmys",
    date: "Aug 2026 – Present",
    current: true,
    logo: "/pragmys_logo.png",
    logoCover: true,
    stack: ["Chrome Extension", "Go", "OAuth 2.0", "JavaScript", "Web Scraping"],
    bullets: [
      "Engineered the Pragmys Chrome Extension to automate job data extraction across 6 major platforms (LinkedIn, Indeed, etc.), significantly increasing system automation and eliminating manual job evaluation.",
      "Architected a secure, “no-secrets” OAuth flow and expanded the Go backend API, enabling real-time generation of personalized Skills Matrices directly in the user’s browser.",
      "Developed a heuristics-based Universal Scraper utilizing text-density analysis, automating the parsing of job descriptions from virtually any custom company career page.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Innoviti Solutions",
    date: "May 2026 – Jul 2026",
    logo: "/innovitisolutions_logo.jpg",
    stack: ["Flutter", "Go", "Azure Database", "Admin Portal"],
    bullets: [
      "Engineered the Syntx app ecosystem, building responsive cross-platform pages in Flutter and optimizing backend performance with Go.",
      "Spearheaded development of Nexus, the centralized admin portal enabling real-time monitoring and control of system-wide activity.",
      "Debugged and optimized data structures on Azure Database, resolving critical errors in the coding question engine and skill mapping.",
      "Managed end-to-end testing of the Tournament feature, ensuring seamless competitive flow and data integrity.",
      "Streamlined internal workflows, boosting workspace productivity and operational speed by 20-30%.",
    ],
  },
  {
    title: "Summer Intern, BD Unit",
    company: "Airports Authority of India (AAI)",
    date: "Jun 2025 – Aug 2025",
    logo: "/Airport_Authority_of_India_Logo.jpg",
    stack: ["Flutter", "Firebase", "Firestore", "RBAC"],
    bullets: [
      "Developed the Airport Authority Linkage App using Flutter and Firebase to digitize Excel-driven workflows and streamline data sharing.",
      "Designed data integration and processing workflows consolidating operational data from spreadsheets and internal sources.",
      "Implemented Firebase Authentication, Firestore, and role-based access controls while collaborating with stakeholders to build a scalable application.",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Technology",
    department: "Computer Science & Engineering (AI)",
    institution: "Maharaja Agrasen Institute of Technology",
    date: "2023 – 2027",
    score: "CGPA 8.82 / 10",
    logo: "/MAIT-Delhi-Logo.png",
    description: "Building a strong foundation in computer science, software engineering, algorithms, distributed systems, and artificial intelligence.",
  },
  {
    degree: "Class XII (CBSE)",
    department: "Science Stream",
    institution: "Kendriya Vidyalaya",
    date: "2022",
    score: "85.5%",
    logo: "/Kendriya_vidylaya_images.png",
    description: "Completed higher secondary education with a focus on physics, chemistry, mathematics, and computer science.",
  },
];

function SectionHeader({ icon, eyebrow, title, subtitle }) {
  return (
    <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
      <div>
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-600 dark:text-orange-500 mb-3">
          {icon} {eyebrow}
        </span>
        <h2 className="font-display text-5xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter">
          {title}
        </h2>
      </div>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light max-w-md md:text-right">{subtitle}</p>
    </Reveal>
  );
}

const cardClass =
  "rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-[#0c0c0e]/80 backdrop-blur-sm shadow-sm hover:shadow-xl hover:shadow-orange-500/5 hover:border-orange-500/30 transition-all duration-500";

function Logo({ src, alt, cover }) {
  return (
    <div
      className={`w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-center overflow-hidden ${
        cover ? "bg-black" : "bg-white p-2"
      }`}
    >
      <img src={src} alt={alt} className={`w-full h-full ${cover ? "object-cover" : "object-contain"}`} />
    </div>
  );
}

export default function Experience() {
  return (
    <div id="experience" className="relative w-full py-24 md:py-32 flex flex-col justify-center">
      <div className="relative z-20 max-w-6xl mx-auto px-6 w-full flex flex-col gap-28">

        {/* ---------- Experience ---------- */}
        <div>
          <SectionHeader
            icon={<Briefcase size={14} />}
            eyebrow="Career"
            title="Experience."
            subtitle="Internships where I shipped production features across web, mobile, and backend systems."
          />

          <ol className="relative">
            {/* Timeline rail */}
            <div className="absolute left-7 md:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-orange-500/60 via-zinc-300 dark:via-zinc-700 to-transparent" aria-hidden="true" />

            {experiences.map((exp) => (
              <li key={exp.company} className="relative flex gap-5 md:gap-8 pb-10 last:pb-0">
                {/* Logo node on the rail */}
                <div className="relative z-10">
                  <Logo src={exp.logo} alt={exp.company} cover={exp.logoCover} />
                </div>

                <Reveal as="article" className={`flex-1 min-w-0 p-6 md:p-8 ${cardClass}`}>
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div className="min-w-0">
                      <h3 className="font-display text-xl md:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
                        {exp.title}
                      </h3>
                      <p className="text-base font-medium text-zinc-600 dark:text-zinc-400">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {exp.current && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60">
                          <span className="relative flex w-1.5 h-1.5">
                            <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                            <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          </span>
                          Current
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                        <Calendar size={12} /> {exp.date}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 text-sm md:text-[15px] text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-orange-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 pt-5 border-t border-zinc-100 dark:border-zinc-800/70">
                    {exp.stack.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-semibold rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        {/* ---------- Education ---------- */}
        <div id="education" className="scroll-mt-24">
          <SectionHeader
            icon={<GraduationCap size={14} />}
            eyebrow="Academics"
            title="Education."
            subtitle="The academic foundation behind my engineering work."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <Reveal as="article" key={edu.institution} delay={i * 120} className={`flex flex-col p-6 md:p-8 ${cardClass}`}>
                <div className="flex items-start gap-4 mb-5">
                  <Logo src={edu.logo} alt={edu.institution} />
                  <div className="min-w-0">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight leading-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mt-1">{edu.department}</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-500">{edu.institution}</p>
                  </div>
                </div>

                <p className="text-sm md:text-[15px] text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 flex-1">
                  {edu.description}
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-5 border-t border-zinc-100 dark:border-zinc-800/70">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <Calendar size={12} /> {edu.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-orange-600 dark:text-orange-500 bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-900/50">
                    <Award size={12} /> {edu.score}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
