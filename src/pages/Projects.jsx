import { useEffect, useRef } from "react";
import { projects } from "../projects";
import { ArrowUpRight, Github } from "lucide-react";

const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));
const easeOut = (t) => 1 - Math.pow(1 - t, 3);

/**
 * Scroll-linked reveal: as a card scrolls into view it rises out of darkness —
 * scaling up, losing its blur, and brightening into its final card form.
 */
function useEmergeOnScroll() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let frame = null;

    const update = () => {
      frame = null;
      const vh = window.innerHeight;

      cardRefs.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        // 0 when the card's top hits the bottom of the viewport,
        // 1 once it has travelled ~65% of the viewport height upward.
        const raw = clamp((vh - rect.top) / (vh * 0.65));
        const p = easeOut(raw);

        card.style.setProperty("--p", p.toFixed(4));
      });
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

  return cardRefs;
}

export default function Projects() {
  const cardRefs = useEmergeOnScroll();

  return (
    <div className="relative py-32 w-full flex flex-col justify-center">
      <div className="relative z-20 container mx-auto px-6 max-w-7xl">

        {/* Section Header */}
        <div className="mb-24 max-w-2xl">
          <h2 className="font-display text-5xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter mb-6">
            Selected Work.
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light">
            A showcase of my recent projects, blending robust backend architectures with premium frontend interfaces.
          </p>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((p, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="project-emerge group relative"
            >
              <div className="project-emerge-card relative overflow-hidden rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800/70 bg-white/80 dark:bg-[#0c0c0e]/80 backdrop-blur-sm shadow-2xl p-6 md:p-10 lg:p-12">
                <div className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>

                  {/* Text Content */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-600 dark:text-orange-500 mb-4">
                      {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                    </span>

                    <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-zinc-900 dark:text-white tracking-tight">
                      {p.title}
                    </h3>

                    <div className="mb-8 pl-6 border-l-2 border-orange-500/50">
                      <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                        {p.desc}
                      </p>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-3 mb-10">
                      {p.tech.map((t, j) => (
                        <span
                          key={j}
                          className="px-4 py-1.5 text-sm font-semibold tracking-wide rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6">
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex items-center gap-2 font-bold text-orange-600 dark:text-orange-500 hover:text-orange-700 dark:hover:text-orange-400 transition-colors"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight size={20} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                        </a>
                      )}

                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex items-center gap-2 font-bold text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
                        >
                          <Github size={20} />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800/50 shadow-inner bg-zinc-100 dark:bg-zinc-900 aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.02]">
                      <img
                        src={p.image || "https://via.placeholder.com/800x600"}
                        alt={p.title}
                        loading="lazy"
                        className={`w-full h-full ${p.imageFit === "contain" ? "object-contain p-4" : "object-cover object-top"}`}
                      />
                    </div>
                  </div>

                </div>

                {/* Darkness veil — fades away as the card emerges */}
                <div className="project-emerge-veil pointer-events-none absolute inset-0 bg-black" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
