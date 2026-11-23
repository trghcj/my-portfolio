import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUp, FileText } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Analytics } from "@vercel/analytics/react";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Suggestions from "./pages/Suggestions";
import CursorGlow from "./components/CursorGlow";
import ThemeToggle from "./components/ThemeToggle";
import WoodlandBackdrop from "./components/WoodlandBackdrop";
import Treeline from "./components/Treeline";

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
      // the last section never reaches mid-screen, so mark it active at the bottom
      if (max > 0 && window.scrollY >= max - 4) setActive("suggestions");
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
      <div className="min-h-screen bg-[#f3f5ee] dark:bg-[#090d0a] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 relative selection:bg-orange-500 selection:text-white overflow-x-clip">

        {/* Background: pine ridges, fog, fireflies */}
        <WoodlandBackdrop />
        <CursorGlow />

        {/* NAVBAR — floating pill */}
        <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
          {/* Scroll progress */}
          <div className="fixed top-0 left-0 right-0 h-[3px] z-[60]">
            <div ref={progressRef} className="h-full origin-left bg-gradient-to-r from-orange-500 via-red-500 to-lime-200" style={{ transform: "scaleX(0)" }} />
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
              className="font-display text-2xl font-semibold tracking-tight bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
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
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
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
        <main className="relative z-10 flex flex-col gap-16 md:gap-24">
          <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
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

        {/* FOOTER — forest floor */}
        <footer className="relative z-10 mt-10">
          {/* treeline rising into the footer */}
          <div className="relative h-24 md:h-36" aria-hidden="true">
            <Treeline seed={51} height={160} minH={70} maxH={158} density={1.1} className="absolute inset-x-0 bottom-0 h-full text-[#2f4a34] opacity-60" />
            <Treeline seed={64} height={140} minH={40} maxH={130} density={0.9} className="absolute inset-x-0 bottom-0 h-[80%] text-[#13211a]" />
          </div>

          <div className="footer-forest relative overflow-hidden text-white/70">
            {/* fireflies */}
            {[[8, 30, 0], [22, 70, 3], [41, 20, 6], [57, 62, 1.5], [73, 35, 4.5], [88, 72, 2.5], [94, 18, 7]].map(([l, t, d], i) => (
              <span
                key={i}
                className="firefly absolute rounded-full"
                style={{ left: `${l}%`, top: `${t}%`, width: 3, height: 3, animationDelay: `-${d}s, -${d}s`, animationDuration: "14s, 3s" }}
                aria-hidden="true"
              />
            ))}

            <div className="relative max-w-7xl mx-auto px-6 pt-8 pb-8">
              <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-12">
                {/* Name */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <img src="/favicon.svg" alt="" className="w-9 h-9" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-orange-300/80">End of the trail</span>
                  </div>
                  <p className="font-display text-5xl md:text-7xl font-extralight tracking-tight leading-[0.95] text-white">
                    Divyansh
                    <br />
                    <span className="italic font-light bg-gradient-to-r from-orange-300 via-lime-200 to-red-300 bg-clip-text text-transparent">Singh</span>
                  </p>
                  <p className="mt-5 max-w-sm font-light text-white/60">
                    Full-stack developer building scalable architectures and premium interfaces.
                  </p>
                </div>

                {/* Explore */}
                <nav aria-label="Footer">
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-orange-300/80 mb-5">Explore</p>
                  <ul className="space-y-3">
                    {navItems.map((item, i) => (
                      <li key={item.id}>
                        <button
                          onClick={() => handleNavClick(item.id)}
                          className="group inline-flex items-baseline gap-3 text-white/70 hover:text-white transition-colors"
                        >
                          <span className="font-mono text-[11px] text-white/30 group-hover:text-orange-300 transition-colors">0{i}</span>
                          <span className="font-display text-lg font-light">{item.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Connect */}
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-orange-300/80 mb-5">Connect</p>
                  <ul className="space-y-3">
                    {socials.map((s) => (
                      <li key={s.label}>
                        <a
                          href={s.href}
                          target={s.href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          className="group no-underline inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                        >
                          <span className="grid place-items-center w-9 h-9 rounded-full border border-white/15 bg-white/5 group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors">
                            {s.icon}
                          </span>
                          <span className="font-display text-lg font-light">{s.label}</span>
                        </a>
                      </li>
                    ))}
                    <li>
                      <a
                        href="https://drive.google.com/file/d/1ls53kq1sjJB8hV7Ie9j9rcmU26ucwtOa/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group no-underline inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                      >
                        <span className="grid place-items-center w-9 h-9 rounded-full border border-white/15 bg-white/5 group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors">
                          <FileText size={16} />
                        </span>
                        <span className="font-display text-lg font-light">Resume</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm text-white/45">
                <p>© {new Date().getFullYear()} Divyansh Singh. Designed for impact.</p>
                <p className="font-mono text-xs">Built with React, Tailwind CSS &amp; Vite.</p>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="group inline-flex items-center gap-2 self-start sm:self-auto pl-4 pr-1.5 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  Back to top
                  <span className="grid place-items-center w-7 h-7 rounded-full bg-orange-500 text-white">
                    <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </footer>

        <Analytics />
      </div>
    </div>
  );
}

export default App;
