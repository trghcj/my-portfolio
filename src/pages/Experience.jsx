import React from "react";

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
        "Revamped legacy UI components by designing high-performance, responsive layouts with glassmorphism, successfully replacing heavy Lottie animations with scalable assets.",
        "Developed and maintained features for Nexus, the administrative control portal responsible for managing system flow, users, and matches across the competitive platform."
      ]
    },
    {
      title: "Summer Intern, Business Development Unit",
      company: "Airports Authority of India (AAI)",
      location: "New Delhi, India",
      date: "06/2025 – 08/2025",
      bullets: [
        "Developed the Airport Authority Linkage App using Flutter and Firebase to digitize Excel-driven workflows and streamline data sharing across airport departments through a centralized platform.",
        "Designed data integration and processing workflows consolidating operational data from spreadsheets and internal sources, improving accessibility, consistency, and reporting efficiency.",
        "Implemented Firebase Authentication, Firestore, and role-based access controls while collaborating with stakeholders to build a scalable, data-driven application."
      ]
    }
  ];

  const education = [
    {
      degree: "B.Tech – Computer Science & Engineering (AI)",
      institution: "Maharaja Agrasen Institute of Technology (MAIT)",
      location: "New Delhi, India",
      date: "08/2023 – 07/2027",
      score: "CGPA: 8.78/10.0"
    },
    {
      degree: "Class XII (CBSE)",
      institution: "Kendriya Vidyalaya",
      location: "New Delhi, India",
      date: "2022",
      score: "85.5%"
    }
  ];

  return (
    <div id="experience" className="relative w-full min-h-screen py-24 md:py-32 flex flex-col justify-center">
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 drop-shadow-sm">
            Experience & Education
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and academic background.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
          
          {/* Professional Experience Column */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 inline-block relative">
              Professional Experience
              <span className="absolute -bottom-3 left-0 w-16 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
            </h3>

            <div className="space-y-10">
              {experiences.map((exp, idx) => (
                <div 
                  key={idx}
                  className="relative p-8 rounded-3xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)] dark:hover:shadow-[0_8px_30px_rgba(168,85,247,0.2)] hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">{exp.title}</h4>
                      <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">{exp.company}</p>
                    </div>
                    <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 whitespace-nowrap">
                      {exp.date}
                    </span>
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-slate-600 dark:text-gray-300 mb-4">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">{bullet}</li>
                    ))}
                  </ul>
                  {exp.location && (
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-slate-600 dark:text-gray-300 font-medium mt-auto pt-4 border-t border-slate-200 dark:border-slate-700/50">
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 inline-block relative">
              Education
              <span className="absolute -bottom-3 left-0 w-16 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
            </h3>

            <div className="space-y-10">
              {education.map((edu, idx) => (
                <div 
                  key={idx}
                  className="relative p-8 rounded-3xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(236,72,153,0.15)] dark:hover:shadow-[0_8px_30px_rgba(236,72,153,0.2)] hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">{edu.institution}</h4>
                      <p className="text-lg font-semibold text-pink-600 dark:text-pink-400">{edu.degree}</p>
                    </div>
                    <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-pink-100 dark:bg-pink-900/50 text-pink-800 dark:text-pink-200 whitespace-nowrap">
                      {edu.date}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-slate-600 dark:text-gray-300 font-medium mt-4 pt-4 border-t border-slate-200 dark:border-slate-700/50">
                    <span>{edu.location}</span>
                    <span className="text-slate-900 dark:text-white font-bold">{edu.score}</span>
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
