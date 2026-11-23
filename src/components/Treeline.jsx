/*
 * A row of pine silhouettes drawn as one SVG path. Deterministic, so the
 * ridge looks identical on every load. Stretches to any width.
 */

function rng(seed) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

// Builds a path of overlapping stepped pines across a 1440 x `height` box.
function ridgePath(seed, height, minH, maxH, density) {
  const rand = rng(seed);
  let d = `M0 ${height} `;
  let x = -20;
  while (x < 1460) {
    const h = minH + rand() * (maxH - minH);
    const w = h * (0.42 + rand() * 0.18);
    const top = height - h;
    // three tiers give the pine its stepped outline
    const t1 = top + h * 0.34;
    const t2 = top + h * 0.62;
    d +=
      `M${x - w / 2} ${height} ` +
      `L${x - w * 0.18} ${t2} L${x - w * 0.34} ${t2} ` +
      `L${x - w * 0.1} ${t1} L${x - w * 0.24} ${t1} ` +
      `L${x} ${top} ` +
      `L${x + w * 0.24} ${t1} L${x + w * 0.1} ${t1} ` +
      `L${x + w * 0.34} ${t2} L${x + w * 0.18} ${t2} ` +
      `L${x + w / 2} ${height} Z `;
    x += (w * 0.55) / density + rand() * 30;
  }
  d += `M0 ${height - 2} H1440 V${height} H0 Z`;
  return d;
}

export default function Treeline({ seed = 3, height = 140, minH = 50, maxH = 130, density = 1, className = "", style }) {
  return (
    <svg
      viewBox={`0 0 1440 ${height}`}
      preserveAspectRatio="none"
      className={`block w-full ${className}`}
      style={style}
      aria-hidden="true"
    >
      <path d={ridgePath(seed, height, minH, maxH, density)} fill="currentColor" />
    </svg>
  );
}
