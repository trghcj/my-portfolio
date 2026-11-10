import { useState, useEffect, useRef } from "react";
import { Menu, X, Sun, Moon, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Analytics } from "@vercel/analytics/react";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Suggestions from "./pages/Suggestions";
import CursorGlow from "./components/CursorGlow";

import { useTheme } from "./context/useTheme";

// label shown in the nav -> id of the section it scrolls to
const navItems = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "suggestions" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/trghcj", icon: <FaGithub size={18} /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/divyansh-singh-332b741aa/", icon: <FaLinkedin size={18} /> },
  { label: "Email", href: "mailto:ms1778937@gmail.com", icon: <FaEnvelope size={18} /> },
];

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const progressRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  // Navbar background + scroll progress bar
  useEffect(() => {
    let frame = null;
    const update = () => {
      frame = null;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${p})`;
      setScrolled(window.scrollY > 50);
    };
    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  // Highlight the nav item for the section currently in the middle of the screen
  useEffect(() => {
    const els = navItems.map((n) => document.getElementById(n.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setNavOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-[#fafaf9] dark:bg-[#08080a] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 relative selection:bg-orange-500 selection:text-white overflow-x-clip">

        {/* Background: grid + ambient blobs + noise + cursor spotlight */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-grid-black dark:bg-grid-white bg-grid-pattern opacity-[0.04] dark:opacity-[0.04] animate-grid-scroll" />
          <div className="ambient-blob absolute top-[-20%] left-[-10%] w-[55%] h-[55%] rounded-full bg-orange-500/10 blur-[120px]" />
          <div className="ambient-blob ambient-blob--slow absolute bottom-[-20%] right-[-10%] w-[55%] h-[55%] rounded-full bg-red-600/10 blur-[120px]" />
          <div className="noise absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" />
        </div>
        <CursorGlow />

        {/* NAVBAR — floating pill */}
        <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
          {/* Scroll progress */}
          <div className="fixed top-0 left-0 right-0 h-[3px] z-[60]">
            <div ref={progressRef} className="h-full origin-left bg-gradient-to-r from-orange-500 via-red-500 to-amber-400" style={{ transform: "scaleX(0)" }} />
          </div>

          <nav
            className={`mx-auto max-w-5xl flex items-center justify-between gap-4 rounded-full border px-4 md:px-5 py-2.5 transition-all duration-500 ${
              scrolled
                ? "bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border-zinc-200/80 dark:border-zinc-800/80 shadow-lg shadow-black/5"
                : "bg-white/30 dark:bg-zinc-950/30 backdrop-blur-md border-transparent"
            }`}
          >
            {/* Logo */}
            <button
              onClick={() => handleNavClick("home")}
              className="font-display text-2xl font-black tracking-tighter bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              DS.
            </button>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-1 text-sm font-medium">
              {navItems.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`relative px-3.5 py-1.5 rounded-full transition-colors duration-300 ${
                        isActive
                          ? "text-white dark:text-zinc-900"
                          : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <span className="absolute inset-0 rounded-full bg-zinc-900 dark:bg-white shadow-md nav-pill" aria-hidden="true" />
                      )}
                      <span className="relative">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:rotate-12 transition-all"
              >
                {theme === "dark" ? <Sun size={17} className="text-orange-400" /> : <Moon size={17} className="text-zinc-600" />}
              </button>
              <button
                onClick={() => setNavOpen(!navOpen)}
                className="md:hidden p-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60"
                aria-label="Toggle menu"
                aria-expanded={navOpen}
              >
                {navOpen ? <X size={17} /> : <Menu size={17} />}
              </button>
            </div>
          </nav>

          {/* Mobile menu */}
          <div
            className={`md:hidden mx-auto max-w-5xl mt-2 overflow-hidden rounded-3xl border bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl transition-all duration-300 ${
              navOpen ? "max-h-[420px] opacity-100 border-zinc-200 dark:border-zinc-800" : "max-h-0 opacity-0 border-transparent"
            }`}
          >
            <ul className="flex flex-col p-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-2xl font-medium transition-colors ${
                      active === item.id ? "bg-orange-500/10 text-orange-600 dark:text-orange-400" : "hover:bg-zinc-100 dark:hover:bg-zinc-900"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </header>

        {/* SECTIONS */}
        <main className="relative z-10 flex flex-col gap-16 md:gap-24 pb-16">
          <section id="home" className="min-h-screen flex items-center justify-center pt-24">
            <Home onNavigate={handleNavClick} />
          </section>

          <section id="projects" className="scroll-mt-20">
            <Projects />
          </section>

          <section id="skills" className="scroll-mt-20">
            <Skills />
          </section>

          <section id="experience" className="scroll-mt-20">
            <Experience />
          </section>

          <section id="suggestions" className="scroll-mt-20">
            <Suggestions />
          </section>
        </main>

        {/* FOOTER */}
        <footer className="relative z-10 border-t border-zinc-200 dark:border-zinc-900 bg-white/60 dark:bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-14">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
              <div>
                <p className="font-display text-6xl md:text-8xl font-black tracking-tighter leading-none bg-gradient-to-br from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-600 bg-clip-text text-transparent">
                  Divyansh Singh
                </p>
                <p className="mt-4 text-zinc-500 dark:text-zinc-400 font-light">
                  Full-stack developer building scalable architectures and premium interfaces.
                </p>
              </div>

              <div className="flex flex-col items-start md:items-end gap-5">
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      aria-label={s.label}
                      className="p-3 rounded-full no-underline border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-white hover:bg-orange-500 hover:border-orange-500 hover:-translate-y-1 transition-all duration-300"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  Back to top
                  <ArrowUp size={16} className="transition-transform group-hover:-translate-y-1" />
                </button>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-zinc-200 dark:border-zinc-900 flex flex-col sm:flex-row justify-between gap-2 text-sm text-zinc-500">
              <p>© {new Date().getFullYear()} Divyansh Singh. Designed for impact.</p>
              <p>Built with React, Tailwind CSS &amp; Vite.</p>
            </div>
          </div>
        </footer>

        <Analytics />
      </div>
    </div>
  );
}

export default App;
