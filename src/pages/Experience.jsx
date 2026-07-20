import { Briefcase, GraduationCap, BookOpen } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Innoviti Solutions",
      location: "Remote",
      date: "05/2026 – Present",
      bullets: [
        "Enhanced app stability across the Syntx ecosystem by architecting a global error boundary and OfflineGuard, integrating Firebase Crashlytics to prevent production crashes.",
        "Updated critical user onboarding flows by implementing strict client-side Regex validation, resolving backend data allocation bugs and ensuring 100% data integrity.",
        "Revamped legacy UI components by designing high-performance, responsive layouts with glassmorphism, replacing heavy Lottie animations with scalable assets.",
        "Developed features for Nexus, the administrative control portal responsible for managing system flow, users, and matches."
      ]
    },
    {
      title: "Summer Intern, Business Development Unit",
      company: "Airports Authority of India (AAI)",
      location: "New Delhi, India",
      date: "06/2025 – 08/2025",
      bullets: [
        "Developed the Airport Authority Linkage App using Flutter and Firebase to digitize Excel-driven workflows and streamline data sharing.",
        "Designed data integration and processing workflows consolidating operational data from spreadsheets and internal sources.",
        "Implemented Firebase Authentication, Firestore, and role-based access controls while collaborating with stakeholders to build a scalable application."
      ]
    }
  ];

  const education = [
    {
      degree: "B.Tech – Computer Science & Engineering (AI)",
      institution: "Maharaja Agrasen Institute (MAIT)",
      location: "New Delhi, India",
      date: "08/2023 – 07/2027",
      score: "CGPA: 8.82/10.0"
    },
    {
      degree: "Class XII (CBSE)",
      institution: "Kendriya Vidyalaya",
      location: "New Delhi, India",
      date: "2022",
      score: "85.5%"
    }
  ];

  const allItems = [
    { type: 'exp', data: experiences[0], icon: Briefcase },
    { type: 'exp', data: experiences[1], icon: Briefcase },
    { type: 'edu', data: education[0], icon: GraduationCap },
    { type: 'edu', data: education[1], icon: BookOpen },
  ];

  return (
    <div id="experience" className="relative w-full py-32 flex flex-col justify-center">
      <div className="relative z-20 max-w-5xl mx-auto px-6 w-full">
        
        <div className="text-center mb-24">
          <h2 className="font-display text-5xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter mb-6">
            Journey.
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light max-w-2xl mx-auto">
            My professional and academic path in building scalable technology.
          </p>
        </div>

        <div className="relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-300 dark:before:via-zinc-800 before:to-transparent">
          {allItems.map((item, index) => {
            const isEven = index % 2 === 0;
            const Icon = item.icon;
            
            return (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-16 last:mb-0">
                {/* Timeline Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-[#0a0a0a] bg-orange-500 text-white shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-125">
                  <Icon size={16} />
                </div>
                
                {/* Timeline Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-orange-500/50 transition-colors shadow-sm group-hover:shadow-lg">
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <span className="text-sm font-bold text-orange-600 dark:text-orange-500 bg-orange-50 dark:bg-orange-950/30 px-3 py-1 rounded-full w-fit">
                      {item.data.date}
                    </span>
                    {item.data.score && (
                      <span className="text-sm font-bold text-zinc-500 mt-2 sm:mt-0">
                        {item.data.score}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-display text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-orange-500 transition-colors">
                    {item.type === 'exp' ? item.data.title : item.data.institution}
                  </h3>
                  
                  <h4 className="text-base font-semibold text-zinc-600 dark:text-zinc-400 mb-4">
                    {item.type === 'exp' ? item.data.company : item.data.degree}
                  </h4>
                  
                  {item.type === 'exp' && (
                    <ul className="list-disc list-inside space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {item.data.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="leading-relaxed">{bullet}</li>
                      ))}
                    </ul>
                  )}
                  
                  {item.data.location && (
                    <div className="mt-5 pt-4 border-t border-zinc-200 dark:border-zinc-800 text-sm text-zinc-500 flex items-center">
                      📍 {item.data.location}
                    </div>
                  )}
                  
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
