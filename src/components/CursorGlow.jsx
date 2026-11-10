import { useEffect, useRef } from "react";

/** A soft orange spotlight that trails the mouse across the page background. */
export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let frame = null;
    let x = 0;
    let y = 0;
    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (frame === null) {
        frame = requestAnimationFrame(() => {
          frame = null;
          ref.current?.style.setProperty("--mx", `${x}px`);
          ref.current?.style.setProperty("--my", `${y}px`);
          ref.current?.style.setProperty("opacity", "1");
        });
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={ref} className="cursor-glow pointer-events-none fixed inset-0 z-0 opacity-0 transition-opacity duration-700" aria-hidden="true" />;
}
