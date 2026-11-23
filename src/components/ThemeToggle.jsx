/*
 * Theme switch: a tiny pixel-art woodland in a pill-shaped window.
 * Day shows a sun and clouds; night shows a moon, stars, fireflies and a lit
 * cabin window. A glass bubble slides across and magnifies the scene under it.
 */

const W = 88; // scene width (px)
const H = 36; // scene height (px)
const K = 30; // bubble diameter
const PAD = 3;
const ZOOM = 1.5;
const EASE = "cubic-bezier(0.65, 0, 0.35, 1)";
const DUR = "700ms";

// Pixel circle rows: [dy, halfWidth] around a centre — reads as a chunky disc.
const DISC = [
  [-5, 2], [-4, 3], [-3, 4], [-2, 4], [-1, 5], [0, 5], [1, 5], [2, 4], [3, 4], [4, 3], [5, 2],
];

function Disc({ cx, cy, color, style }) {
  return (
    <g style={style}>
      {DISC.map(([dy, hw]) => (
        <rect key={dy} x={cx - hw} y={cy + dy} width={hw * 2} height={1} fill={color} />
      ))}
    </g>
  );
}

// A stepped pine: rows narrow toward the top, plus a 1px trunk.
function Pine({ x, base, h, day, night, isNight }) {
  const rows = [];
  for (let i = 0; i < h; i++) {
    const half = Math.max(0, Math.floor((h - i) / 2.2));
    rows.push(<rect key={i} x={x - half} y={base - 2 - i} width={half * 2 + 1} height={1} />);
  }
  return (
    <g style={{ fill: isNight ? night : day, transition: `fill ${DUR} ${EASE}` }}>
      {rows}
      <rect x={x} y={base - 2} width={1} height={2} style={{ fill: isNight ? "#1b120a" : "#5b3b1f" }} />
    </g>
  );
}

const STARS = [[30, 5], [38, 10], [47, 4], [56, 8], [63, 3], [79, 7], [84, 13], [24, 12], [52, 13], [11, 6]];
const FIREFLIES = [[22, 27, "0s"], [36, 24, "0.8s"], [58, 26, "1.6s"], [67, 22, "0.4s"], [81, 28, "1.2s"]];

function Scene({ isNight }) {
  const fade = (on) => ({ opacity: on ? 1 : 0, transition: `opacity ${DUR} ${EASE}` });
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} shapeRendering="crispEdges" className="block" aria-hidden="true">
      <defs>
        <linearGradient id="tt-day" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e7f0d6" />
          <stop offset="1" stopColor="#c8dcaa" />
        </linearGradient>
        <linearGradient id="tt-night" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0a120d" />
          <stop offset="1" stopColor="#1a2b1f" />
        </linearGradient>
      </defs>

      {/* sky */}
      <rect width={W} height={H} fill="url(#tt-day)" />
      <rect width={W} height={H} fill="url(#tt-night)" style={fade(isNight)} />

      {/* day: sun + clouds */}
      <g style={fade(!isNight)}>
        <Disc cx={18} cy={16} color="#f2c443" />
        <rect x={16} y={15} width={2} height={1} fill="#ffe08a" />
        <rect x={15} y={14} width={1} height={1} fill="#ffe08a" />
        <g fill="#ffffff" opacity="0.95">
          <rect x={38} y={8} width={11} height={2} />
          <rect x={40} y={6} width={6} height={2} />
          <rect x={60} y={11} width={9} height={2} />
          <rect x={62} y={9} width={4} height={2} />
        </g>
      </g>

      {/* night: stars + crescent moon */}
      <g style={fade(isNight)}>
        <g fill="#e9f2c9">
          {STARS.map(([x, y], i) => (
            <rect key={i} x={x} y={y} width={1} height={1} className="tt-twinkle" style={{ animationDelay: `${i * 0.37}s` }} />
          ))}
        </g>
        <Disc cx={70} cy={16} color="#eef2d6" />
        <Disc cx={73} cy={14} color="#0e1912" />
      </g>

      {/* ground */}
      <rect x={0} y={31} width={W} height={5} style={{ fill: isNight ? "#0c160f" : "#7c9c3a", transition: `fill ${DUR} ${EASE}` }} />
      <rect x={0} y={31} width={W} height={1} style={{ fill: isNight ? "#1d3022" : "#96b752", transition: `fill ${DUR} ${EASE}` }} />

      {/* back row of pines */}
      {[[6, 12], [29, 14], [52, 11], [77, 13], [86, 10]].map(([x, h]) => (
        <Pine key={`b${x}`} x={x} base={32} h={h} day="#8fae5d" night="#14241a" isNight={isNight} />
      ))}

      {/* cabin */}
      <g style={{ fill: isNight ? "#2a1d12" : "#8a5a32", transition: `fill ${DUR} ${EASE}` }}>
        <rect x={40} y={26} width={9} height={6} />
      </g>
      <g style={{ fill: isNight ? "#3b1f14" : "#a2452e", transition: `fill ${DUR} ${EASE}` }}>
        <rect x={39} y={25} width={11} height={1} />
        <rect x={40} y={24} width={9} height={1} />
        <rect x={42} y={23} width={5} height={1} />
      </g>
      <rect x={42} y={27} width={2} height={2} style={{ fill: isNight ? "#ffd56a" : "#3e2a18", transition: `fill ${DUR} ${EASE}` }} />
      <rect x={46} y={28} width={2} height={4} fill="#2a1a0e" />

      {/* front row of pines */}
      {[[15, 15], [24, 10], [61, 16], [70, 9]].map(([x, h]) => (
        <Pine key={`f${x}`} x={x} base={33} h={h} day="#4c6424" night="#070d09" isNight={isNight} />
      ))}

      {/* night: fireflies */}
      <g style={fade(isNight)} fill="#d9f07c">
        {FIREFLIES.map(([x, y, d], i) => (
          <rect key={i} x={x} y={y} width={1} height={1} className="tt-firefly" style={{ animationDelay: d }} />
        ))}
      </g>
    </svg>
  );
}

export default function ThemeToggle({ theme, onToggle }) {
  const isNight = theme === "dark";
  const knobX = isNight ? W - K - PAD : PAD;
  const move = `left ${DUR} ${EASE}, transform ${DUR} ${EASE}`;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isNight}
      aria-label={isNight ? "Switch to light theme" : "Switch to dark theme"}
      title={isNight ? "Switch to day" : "Switch to night"}
      onClick={onToggle}
      className="theme-toggle group relative shrink-0 rounded-full p-[3px] cursor-pointer"
    >
      {/* window into the scene */}
      <span className="relative block overflow-hidden rounded-full" style={{ width: W, height: H }}>
        <Scene isNight={isNight} />
        <span className="theme-toggle-glass pointer-events-none absolute inset-0 rounded-full" />

        {/* glass bubble that magnifies what's beneath it */}
        <span
          className="theme-toggle-bubble absolute overflow-hidden rounded-full group-hover:scale-[1.06] group-active:scale-95"
          style={{ width: K, height: K, top: PAD, left: knobX, transition: move }}
        >
          <span
            className="absolute"
            style={{
              width: W,
              height: H,
              top: -PAD,
              left: -knobX,
              transform: `scale(${ZOOM})`,
              transformOrigin: `${knobX + K / 2}px ${PAD + K / 2}px`,
              transition: move,
            }}
          >
            <Scene isNight={isNight} />
          </span>
          <span className="theme-toggle-shine absolute inset-0 rounded-full" />
        </span>
      </span>
    </button>
  );
}
