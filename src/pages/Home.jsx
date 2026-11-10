import { TypeAnimation } from "react-type-animation";
import { Code2, Rocket, Mail, Github, Linkedin } from "lucide-react";
import { projects } from "../projects";

const stats = [
  { value: "3", label: "Internships" },
  { value: `${projects.length}+`, label: "Projects shipped" },
  { value: "8.82", label: "CGPA" },
];

export default function Home({ onNavigate }) {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
      <div className="text-center w-full z-10 flex flex-col items-center">

        {/* Avatar with spinning gradient ring */}
        <div className="hero-in mb-10" style={{ "--d": "0ms" }}>
        <div className="relative animate-float">
          <div className="absolute inset-0 rounded-full blur-3xl bg-orange-500/30 scale-150 animate-pulse-slow" />
          <div className="avatar-ring relative w-32 h-32 md:w-40 md:h-40 rounded-full p-[3px]">
            <div className="w-full h-full rounded-full bg-white dark:bg-zinc-950 p-1">
              <img
                src="https://github.com/trghcj.png"
                alt="Divyansh Singh"
                className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
        </div>

        {/* Status chip */}
        <div
          className="hero-in mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur text-sm font-medium text-zinc-700 dark:text-zinc-300 shadow-sm"
          style={{ "--d": "120ms" }}
        >
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
          </span>
          Hi, I&apos;m Divyansh Singh
        </div>

        {/* Headline */}
        <div className="space-y-6 max-w-4xl">
          <h1
            className="hero-in font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-zinc-900 dark:text-white leading-[1.05]"
            style={{ "--d": "220ms" }}
          >
            Engineering digital <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
              experiences
            </span>
          </h1>

          <p className="hero-in text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light max-w-2xl mx-auto" style={{ "--d": "340ms" }}>
            I am a full-stack developer focused on building{" "}
            <span className="font-medium text-zinc-900 dark:text-white">scalable architectures</span> and{" "}
            <span className="font-medium text-zinc-900 dark:text-white">premium interfaces</span>.
          </p>

          <div className="hero-in h-10 text-lg md:text-xl font-mono font-medium text-orange-600 dark:text-orange-500" style={{ "--d": "440ms" }}>
            <span className="text-zinc-400 dark:text-zinc-600">&gt; </span>
            <TypeAnimation
              sequence={[
                "Building React Applications", 2000,
                "Architecting Backend Pipelines", 2000,
                "Automating Data Systems", 2000,
                "Shipping Cross-Platform Mobile Apps", 2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>

        {/* CTAs */}
        <div className="hero-in mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ "--d": "540ms" }}>
          <button
            onClick={() => onNavigate && onNavigate("projects")}
            className="group relative px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 shadow-xl shadow-orange-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative flex items-center gap-2 group-hover:text-white">
              <Rocket size={18} /> View My Work
            </span>
          </button>

          <a
            href="https://drive.google.com/file/d/1ls53kq1sjJB8hV7Ie9j9rcmU26ucwtOa/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline px-8 py-4 rounded-full font-semibold border-2 border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm hover:border-orange-500/60 hover:bg-orange-500/5 text-zinc-900 dark:text-white hover:text-zinc-900 dark:hover:text-white transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Code2 size={18} /> Read Resume
          </a>
        </div>

        {/* Stats */}
        <div className="hero-in mt-14 grid grid-cols-3 divide-x divide-zinc-200 dark:divide-zinc-800 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm" style={{ "--d": "640ms" }}>
          {stats.map((s) => (
            <div key={s.label} className="px-5 sm:px-8 py-4">
              <p className="font-display text-2xl md:text-3xl font-black text-zinc-900 dark:text-white">{s.value}</p>
              <p className="text-[11px] sm:text-xs uppercase tracking-widest text-zinc-500">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Socials */}
        <div className="hero-in mt-10 flex items-center justify-center gap-6" style={{ "--d": "740ms" }}>
          <a href="https://github.com/trghcj" target="_blank" rel="noreferrer" aria-label="GitHub" className="no-underline text-zinc-500 hover:text-orange-500 hover:-translate-y-0.5 transition-all">
            <Github size={22} />
          </a>
          <a href="https://linkedin.com/in/divyansh-singh-332b741aa" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="no-underline text-zinc-500 hover:text-orange-500 hover:-translate-y-0.5 transition-all">
            <Linkedin size={22} />
          </a>
          <a href="mailto:ms1778937@gmail.com" aria-label="Email" className="no-underline text-zinc-500 hover:text-orange-500 hover:-translate-y-0.5 transition-all">
            <Mail size={22} />
          </a>
        </div>

        {/* Scroll cue */}
        <button
          onClick={() => onNavigate && onNavigate("projects")}
          aria-label="Scroll to projects"
          className="hero-in mt-14 hidden md:flex flex-col items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-zinc-400"
          style={{ "--d": "900ms" }}
        >
          <span className="w-6 h-10 rounded-full border-2 border-zinc-300 dark:border-zinc-700 flex justify-center pt-2">
            <span className="w-1 h-2 rounded-full bg-orange-500 animate-scroll-dot" />
          </span>
          Scroll
        </button>
      </div>
    </div>
  );
}
