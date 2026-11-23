import { useEffect, useRef } from "react";
import Treeline from "./Treeline";

/*
 * Fixed atmosphere behind every section: layered pine ridges along the bottom
 * of the screen (with a little scroll parallax), drifting fog, and fireflies.
 */

function rng(seed) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const FIREFLIES = (() => {
  const rand = rng(91);
  return Array.from({ length: 26 }, () => ({
    left: `${rand() * 100}%`,
    top: `${10 + rand() * 85}%`,
    size: 2 + rand() * 2.5,
    delay: `${-rand() * 12}s`,
    drift: `${10 + rand() * 10}s`,
    blink: `${2 + rand() * 3}s`,
  }));
})();

export default function WoodlandBackdrop() {
  const ridges = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = null;
    const update = () => {
      frame = null;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      ridges.current?.style.setProperty("--scroll", p.toFixed(4));
    };
    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* soft light from the canopy */}
      <div className="absolute -top-1/3 left-1/4 w-[70vw] h-[70vh] rounded-full bg-lime-200/25 dark:bg-orange-500/[0.06] blur-[120px]" />
      <div className="ambient-blob absolute top-[-20%] left-[-10%] w-[55%] h-[55%] rounded-full bg-orange-500/10 blur-[120px]" />
      <div className="ambient-blob ambient-blob--slow absolute bottom-[-20%] right-[-10%] w-[55%] h-[55%] rounded-full bg-red-600/10 blur-[120px]" />

      {/* drifting fog */}
      <div className="fog-band absolute top-[18%] left-0 h-[28vh]" />
      <div className="fog-band fog-band--slow absolute top-[58%] left-0 h-[34vh]" />

      {/* pine ridges along the bottom, parallaxing with scroll */}
      <div ref={ridges} className="woodland-ridges absolute inset-x-0 bottom-0">
        <Treeline seed={7} height={220} minH={90} maxH={210} density={1.1} className="ridge ridge--far h-[30vh] text-[#b9c6ad] dark:text-[#111c14]" />
        <Treeline seed={19} height={200} minH={70} maxH={180} density={1} className="ridge ridge--mid h-[24vh] text-[#a3b495] dark:text-[#0e1811]" />
        <Treeline seed={33} height={180} minH={50} maxH={150} density={0.9} className="ridge ridge--near h-[18vh] text-[#8fa37f] dark:text-[#0b140e]" />
      </div>

      {/* fireflies (pale pollen in daylight) */}
      {FIREFLIES.map((f, i) => (
        <span
          key={i}
          className="firefly absolute rounded-full"
          style={{
            left: f.left,
            top: f.top,
            width: f.size,
            height: f.size,
            animationDelay: `${f.delay}, ${f.delay}`,
            animationDuration: `${f.drift}, ${f.blink}`,
          }}
        />
      ))}

      <div className="noise absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" />
    </div>
  );
}
