import { lazy, Suspense } from "react";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, FileText, Mail, Github, Linkedin, Leaf, ArrowUpRight, GraduationCap } from "lucide-react";
import { useTheme } from "../context/useTheme";

// three.js is heavy — load the scene after the text so the hero paints instantly
const ForestScene = lazy(() => import("../components/ForestScene"));

function GlassCard({ eyebrow, title, image, imageFit = "cover", icon, onClick, delay }) {
  return (
    <div className="hero-in" style={{ "--d": delay }}>
    <button
      type="button"
      onClick={onClick}
      className="glass-card group w-full text-left rounded-3xl p-2.5 transition-all duration-500 hover:-translate-y-1"
    >
      {image && (
        <div className="h-28 rounded-2xl overflow-hidden mb-3 bg-black/20">
          <img
            src={image}
            alt=""
            className={`w-full h-full ${imageFit === "contain" ? "object-contain p-2" : "object-cover object-top"} transition-transform duration-700 group-hover:scale-105`}
          />
        </div>
      )}
      <div className="flex items-end justify-between gap-3 px-2 pb-1.5">
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600 dark:text-white/55 mb-1">{eyebrow}</p>
          <p className="font-display text-lg font-normal leading-tight text-zinc-900 dark:text-white">{title}</p>
        </div>
        <span className="grid place-items-center w-9 h-9 shrink-0 rounded-full bg-zinc-900/10 dark:bg-white/15 text-zinc-800 dark:text-white group-hover:bg-orange-500 group-hover:text-white transition-colors">
          {icon}
        </span>
      </div>
    </button>
    </div>
  );
}

export default function Home({ onNavigate }) {
  const { theme } = useTheme();
  const go = (id) => onNavigate && onNavigate(id);

  return (
    <>
      {/* 3D woodland */}
      <div className="absolute inset-0" aria-hidden="true">
        <Suspense fallback={null}>
          <ForestScene theme={theme} />
        </Suspense>
        {/* readability + blend into the page */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f3f5ee]/85 via-[#f3f5ee]/30 to-transparent dark:from-[#090d0a]/80 dark:via-[#090d0a]/25" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#f3f5ee] dark:to-[#090d0a]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-12 items-center">

        {/* Left: copy */}
        <div className="max-w-3xl min-w-0">
          <div
            className="hero-in mb-8 inline-flex items-center gap-3 pl-1.5 pr-5 py-1.5 rounded-full glass-card text-xs font-mono uppercase tracking-[0.2em] text-zinc-700 dark:text-white/80"
            style={{ "--d": "100ms" }}
          >
            <span className="relative shrink-0">
              <span className="avatar-ring block w-14 h-14 md:w-16 md:h-16 rounded-full p-[2px]">
                <span className="block w-full h-full rounded-full bg-[#f3f5ee] dark:bg-[#0e140f] p-[2px]">
                  <img
                    src="https://github.com/trghcj.png"
                    alt="Divyansh Singh"
                    className="w-full h-full rounded-full object-cover"
                  />
                </span>
              </span>
              <span className="absolute bottom-0.5 right-0.5 flex w-3 h-3">
                <span className="absolute inline-flex w-full h-full rounded-full bg-orange-400 opacity-75 animate-ping" />
                <span className="relative inline-flex w-3 h-3 rounded-full bg-orange-400 ring-2 ring-[#f3f5ee] dark:ring-[#0e140f]" />
              </span>
            </span>
            Hi, I&apos;m Divyansh Singh
          </div>

          <h1
            className="hero-in font-display font-extralight text-[2.75rem] leading-[1] sm:text-7xl md:text-8xl lg:text-[7.5rem] tracking-tight text-zinc-900 dark:text-white"
            style={{ "--d": "220ms" }}
          >
            Engineering
            <br />
            digital{" "}
            <span className="italic font-light bg-gradient-to-r from-orange-500 via-lime-300 to-red-400 dark:from-orange-300 dark:via-lime-200 dark:to-red-300 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent pr-2">
              experiences
            </span>
          </h1>

          <p
            className="hero-in mt-8 text-lg md:text-xl text-zinc-700 dark:text-white/70 font-light max-w-xl"
            style={{ "--d": "340ms" }}
          >
            I am a full-stack developer focused on building{" "}
            <span className="text-zinc-900 dark:text-white font-normal">scalable architectures</span> and{" "}
            <span className="text-zinc-900 dark:text-white font-normal">premium interfaces</span>.
          </p>

          <div className="hero-in mt-4 h-8 font-mono text-sm md:text-base text-orange-700 dark:text-orange-300" style={{ "--d": "440ms" }}>
            <span className="text-zinc-500 dark:text-white/40">&gt; </span>
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

          {/* CTAs — small pills like a field guide */}
          <div className="hero-in mt-10 flex flex-wrap items-center gap-3" style={{ "--d": "540ms" }}>
            <button
              onClick={() => go("projects")}
              className="group inline-flex items-center gap-3 pl-1.5 pr-5 py-1.5 rounded-full glass-card text-sm font-medium text-zinc-900 dark:text-white hover:bg-white/70 dark:hover:bg-white/15 transition-colors"
            >
              <span className="grid place-items-center w-8 h-8 rounded-full bg-orange-500 text-white">
                <Leaf size={15} />
              </span>
              Explore the work
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="https://drive.google.com/file/d/1ls53kq1sjJB8hV7Ie9j9rcmU26ucwtOa/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline inline-flex items-center gap-2 px-5 py-3 rounded-full glass-card text-sm font-medium text-zinc-900 dark:text-white hover:text-zinc-900 dark:hover:text-white hover:bg-white/70 dark:hover:bg-white/15 transition-colors"
            >
              <FileText size={15} /> Read Resume
            </a>

            <div className="flex items-center gap-1 ml-1">
              {[
                { href: "https://github.com/trghcj", label: "GitHub", icon: <Github size={17} /> },
                { href: "https://linkedin.com/in/divyansh-singh-332b741aa", label: "LinkedIn", icon: <Linkedin size={17} /> },
                { href: "mailto:ms1778937@gmail.com", label: "Email", icon: <Mail size={17} /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="no-underline grid place-items-center w-10 h-10 rounded-full text-zinc-700 dark:text-white/70 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-900/5 dark:hover:bg-white/10 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: floating glass field notes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:self-center">
          <GlassCard
            eyebrow="Currently"
            title="Technical Intern at Pragmys"
            icon={<ArrowUpRight size={16} />}
            onClick={() => go("experience")}
            delay="600ms"
          />
          <GlassCard
            eyebrow="Latest build"
            title="Smart Drive Assistant"
            image="/SmartDrive.png"
            icon={<ArrowUpRight size={16} />}
            onClick={() => go("projects")}
            delay="720ms"
          />
          <GlassCard
            eyebrow="Field note · MAIT"
            title="B.Tech CSE (AI) · CGPA 8.82"
            icon={<GraduationCap size={16} />}
            onClick={() => go("education")}
            delay="840ms"
          />
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 inset-x-0 z-10 hidden md:flex justify-center">
      <button
        onClick={() => go("projects")}
        aria-label="Scroll to projects"
        className="hero-in flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500 dark:text-white/50"
        style={{ "--d": "1000ms" }}
      >
        <span className="w-6 h-10 rounded-full border border-zinc-400/60 dark:border-white/30 flex justify-center pt-2">
          <span className="w-1 h-2 rounded-full bg-orange-500 animate-scroll-dot" />
        </span>
        Enter the forest
      </button>
      </div>
    </>
  );
}
