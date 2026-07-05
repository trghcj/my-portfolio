import { useState } from "react";
import { ChevronDown, Sun, Moon } from "lucide-react";
import { Analytics } from "@vercel/analytics/react";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Suggestions from "./pages/Suggestions";

import { useTheme } from "./context/useTheme";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = ["Home", "Projects", "Skills", "Experience", "Suggestions"];

  const handleNavClick = (id) => {
    setNavOpen(false);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-gray-900 dark:text-white transition-colors duration-300 relative">
        
        {/* Background gradient dark blue mixture */}
        <div className="fixed inset-0 pointer-events-none z-0 
          bg-gradient-to-br from-emerald-100 via-white to-teal-100
          dark:from-slate-950 dark:via-emerald-950/40 dark:to-slate-900
          opacity-80 transition-colors duration-500" />

        {/* NAVBAR */}
        <nav
          className="fixed top-0 left-0 right-0 z-50 
          bg-white/80 dark:bg-slate-900/80 
          backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
        >
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="relative inline-block group text-2xl md:text-3xl font-extrabold tracking-tight
              bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 
              bg-clip-text text-transparent
              drop-shadow-[0_2px_6px_rgba(16,185,129,0.6)] 
              dark:drop-shadow-[0_0_12px_rgba(16,185,129,0.9)]
              hover:brightness-125 hover:scale-105 transition-all duration-300"
            >
              Divyansh Singh
            </button>

            {/* Desktop Nav */}
            <ul className="hidden md:flex gap-10 font-semibold">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="p-3 rounded-full 
                bg-gray-100 dark:bg-gray-800 
                hover:scale-110 transition"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Mobile Toggle */}
              <button
                onClick={() => setNavOpen(!navOpen)}
                className="md:hidden"
                aria-label="Toggle Menu"
              >
                <ChevronDown
                  size={28}
                  className={`transition-transform duration-300 ${
                    navOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* MOBILE DROPDOWN MENU */}
          {navOpen && (
            <div
              className="md:hidden absolute top-full left-0 w-full
              bg-white dark:bg-gray-900
              border-t border-gray-200 dark:border-gray-800
              shadow-xl z-50 pointer-events-auto"
            >
              <ul className="flex flex-col py-6 space-y-6 text-center font-semibold">
                {navItems.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => handleNavClick(item)}
                      className="block w-full text-lg hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>

        {/* SECTIONS */}
        <main className="relative z-10 flex flex-col gap-24 pb-24">
          <section id="home" className="min-h-screen pt-24">
            <Home onNavigate={handleNavClick} />
          </section>
          
          <section id="projects" className="min-h-screen scroll-mt-24">
            <Projects />
          </section>
          
          <section id="skills" className="min-h-screen scroll-mt-24">
            <Skills />
          </section>
          
          <section id="experience" className="min-h-screen scroll-mt-24">
            <Experience />
          </section>
          
          <section id="suggestions" className="min-h-screen scroll-mt-24">
            <Suggestions />
          </section>
        </main>

        {/* FOOTER */}
        <footer
          className="py-12 text-center text-sm font-medium text-gray-500 dark:text-gray-400
          bg-slate-50/80 dark:bg-slate-950/80 
          backdrop-blur border-t border-gray-200 dark:border-gray-800 relative z-10"
        >
          © 2026 Divyansh Singh. All rights reserved.
        </footer>

        <Analytics />
      </div>
    </div>
  );
}

export default App;

