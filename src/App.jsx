import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = ["Home", "Projects", "Skills", "Experience", "Education", "Suggestions"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setNavOpen(false);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 relative selection:bg-orange-500 selection:text-white">
        
        {/* Animated Background Mesh/Grid */}
        <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-grid-black dark:bg-grid-white bg-grid-pattern opacity-[0.03] dark:opacity-[0.03] animate-grid-scroll" />
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-600/10 blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-red-600/10 blur-[120px] mix-blend-screen" />
        </div>

        {/* NAVBAR */}
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
            scrolled 
              ? "bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border-zinc-200 dark:border-zinc-800/50 shadow-sm" 
              : "bg-transparent border-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="font-display text-2xl font-black tracking-tighter uppercase
              bg-gradient-to-r from-orange-500 to-red-500 
              bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              DS.
            </button>

            {/* Desktop Nav */}
            <ul className="hidden md:flex gap-8 font-medium text-sm tracking-wide">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className="relative group py-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300" />
                  </button>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                {theme === "dark" ? <Sun size={18} className="text-orange-400" /> : <Moon size={18} className="text-zinc-600" />}
              </button>

              {/* Mobile Toggle */}
              <button
                onClick={() => setNavOpen(!navOpen)}
                className="md:hidden p-2"
                aria-label="Toggle Menu"
              >
                <ChevronDown
                  size={24}
                  className={`transition-transform duration-300 ${navOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          <div className={`md:hidden absolute w-full bg-white dark:bg-[#0a0a0a] border-b border-zinc-200 dark:border-zinc-800 transition-all duration-300 overflow-hidden ${navOpen ? 'max-h-96' : 'max-h-0 border-transparent'}`}>
            <ul className="flex flex-col p-4 space-y-2 font-medium">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className="block w-full text-left px-4 py-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* SECTIONS */}
        <main className="relative z-10 flex flex-col gap-32 pb-32">
          <section id="home" className="min-h-screen flex items-center justify-center pt-20">
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
        <footer className="py-10 text-center text-sm font-medium text-zinc-500 dark:text-zinc-500 border-t border-zinc-200 dark:border-zinc-900 relative z-10 bg-zinc-50 dark:bg-[#050505]">
          <p>© {new Date().getFullYear()} Divyansh Singh. Designed for impact.</p>
        </footer>

        <Analytics />
      </div>
    </div>
  );
}

export default App;
