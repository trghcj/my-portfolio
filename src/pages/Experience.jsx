import React from "react";
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
              <span className="absolute -bottom-3 left-0 w-16 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
            </h3>

            <div className="space-y-6 lg:space-y-8">
              {experiences.map((exp, idx) => (
                <div 
                  key={idx}
                  className="relative p-6 sm:p-8 rounded-3xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 group"
                >
                  <div className="flex gap-4 sm:gap-6">
                    {/* Icon Box */}
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 group-hover:bg-emerald-500/20 group-hover:scale-105 transition-all duration-300">
                        <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-1">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white leading-snug pr-4">{exp.title}</h4>
                        <span className="text-xs sm:text-sm font-medium text-emerald-700/80 dark:text-emerald-400/80 mt-2 sm:mt-1 whitespace-nowrap bg-emerald-500/10 px-3 py-1 rounded-full">
                          {exp.date}
                        </span>
                      </div>
                      
                      <p className="text-base sm:text-lg font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                        {exp.company}
                      </p>
                      
                      {exp.location && (
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">
                          {exp.location}
                        </p>
                      )}
                      
                      <ul className="list-disc list-outside ml-4 space-y-2.5 text-slate-600 dark:text-gray-300">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="leading-relaxed text-sm sm:text-base">{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 inline-block relative">
              Education
              <span className="absolute -bottom-3 left-0 w-16 h-1.5 bg-gradient-to-r from-teal-500 to-teal-500 rounded-full" />
            </h3>

            <div className="space-y-6 lg:space-y-8">
              {education.map((edu, idx) => (
                <div 
                  key={idx}
                  className="relative p-6 sm:p-8 rounded-3xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 group"
                >
                  <div className="flex gap-4 sm:gap-6">
                    {/* Icon Box */}
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 group-hover:bg-emerald-500/20 group-hover:scale-105 transition-all duration-300">
                        {idx === 0 ? <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" /> : <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-1">
                          <h4 className="text-xl font-bold text-slate-900 dark:text-white leading-snug pr-4">{edu.institution}</h4>
                          <span className="text-xs sm:text-sm font-medium text-emerald-700/80 dark:text-emerald-400/80 mt-2 sm:mt-1 whitespace-nowrap bg-emerald-500/10 px-3 py-1 rounded-full">
                            {edu.date}
                          </span>
                        </div>
                        <p className="text-base sm:text-lg font-semibold text-emerald-600 dark:text-emerald-400 mb-6 sm:mb-8">
                          {edu.degree}
                        </p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-slate-500 dark:text-slate-400 text-sm sm:text-base pt-4 border-t border-slate-200 dark:border-slate-700/50">
                        <span>{edu.location}</span>
                        <span className="text-slate-900 dark:text-white font-bold mt-2 sm:mt-0">{edu.score}</span>
                      </div>
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
