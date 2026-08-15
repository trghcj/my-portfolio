export default function Experience() {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Innoviti Solutions",
      date: "05/2026 – 07/2026",
      logo: "/innovitisolutions_logo.jpg",
      bullets: [
        "Engineered the Syntx app ecosystem, building responsive cross-platform pages in Flutter and optimizing backend performance with Go.",
        "Spearheaded development of Nexus, the centralized admin portal enabling real-time monitoring and control of system-wide activity.",
        "Debugged and optimized data structures on Azure Database, resolving critical errors in the coding question engine and skill mapping.",
        "Managed end-to-end testing of the Tournament feature, ensuring seamless competitive flow and data integrity.",
        "Streamlined internal workflows, boosting workspace productivity and operational speed by 20-30%."
      ]
    },
    {
      title: "Summer Intern, BD Unit",
      company: "Airports Authority of India (AAI)",
      date: "06/2025 – 08/2025",
      logo: "/Airport_Authority_of_India_Logo.jpg",
      bullets: [
        "Developed the Airport Authority Linkage App using Flutter and Firebase to digitize Excel-driven workflows and streamline data sharing.",
        "Designed data integration and processing workflows consolidating operational data from spreadsheets and internal sources.",
        "Implemented Firebase Authentication, Firestore, and role-based access controls while collaborating with stakeholders to build a scalable application."
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology",
      department: "Computer Science & Engineering (AI)",
      institution: "Maharaja Agrasen Institute of Technology",
      date: "2023 – 2027",
      score: "CGPA: 8.82/10.0",
      logo: "/MAIT-Delhi-Logo.png",
      description: "Building a strong foundation in computer science, software engineering, algorithms, distributed systems, and artificial intelligence."
    },
    {
      degree: "Class XII (CBSE)",
      department: "Science Stream",
      institution: "Kendriya Vidyalaya",
      date: "2022",
      score: "85.5%",
      logo: "/Kendriya_vidylaya_images.png",
      description: "Completed higher secondary education with a focus on physics, chemistry, mathematics, and computer science."
    }
  ];

  return (
    <div id="experience" className="relative w-full py-32 flex flex-col justify-center">
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 w-full">
        
        {/* Vertical Stack Layout for the entire section */}
        <div className="flex flex-col gap-24">
          
          {/* Experience Section */}
          <div>
            <h2 className="font-display text-5xl font-black text-zinc-900 dark:text-white tracking-tighter mb-12">
              Experience.
            </h2>
            
            <div className="flex flex-col">
              {experiences.map((exp, idx) => (
                <div key={idx} className="flex gap-6 border-t border-zinc-200 dark:border-zinc-800 py-10">
                  
                  {/* Left side (Logo) */}
                  <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 bg-white dark:bg-[#0f0f11] rounded-2xl border border-zinc-200 dark:border-zinc-800 p-2 shadow-sm flex items-center justify-center overflow-hidden">
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain rounded-xl" />
                  </div>
                  
                  {/* Right side (Info & Bullets) */}
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">
                      {exp.date}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-zinc-900 dark:text-white leading-tight tracking-tight mb-1">
                      {exp.title}
                    </h3>
                    <p className="font-serif italic text-lg text-zinc-600 dark:text-zinc-400 mb-6">
                      {exp.company}
                    </p>
                    
                    <ul className="space-y-3 text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed list-disc list-outside ml-4 marker:text-orange-500">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="pl-2">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div id="education" className="scroll-mt-24">
            <h2 className="font-display text-5xl font-black text-zinc-900 dark:text-white tracking-tighter mb-12">
              Education.
            </h2>
            
            <div className="flex flex-col">
              {education.map((edu, idx) => (
                <div key={idx} className="flex gap-6 border-t border-zinc-200 dark:border-zinc-800 py-10">
                  
                  {/* Left side (Logo) */}
                  <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 bg-white rounded-2xl border border-zinc-200 dark:border-zinc-800 p-2 shadow-sm flex items-center justify-center overflow-hidden">
                    <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain rounded-xl" />
                  </div>

                  {/* Right side (Info & Details) */}
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">
                      {edu.date}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-zinc-900 dark:text-white leading-tight tracking-tight mb-1">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg text-zinc-700 dark:text-zinc-300 font-medium mb-1">
                      {edu.department}
                    </h4>
                    <p className="font-serif italic text-lg text-zinc-500 dark:text-zinc-500 mb-6">
                      {edu.institution}
                    </p>
                    
                    <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-light mb-6">
                      {edu.description}
                    </p>
                    
                    <div>
                      <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-wide text-orange-600 dark:text-orange-500 bg-orange-50 dark:bg-orange-950/30 rounded-full border border-orange-200 dark:border-orange-900/50">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
