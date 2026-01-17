import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"                  // ← helpful for CSS targeting if needed
      init={particlesInit}
      options={{
        // ── This is the key fix ──
        fullScreen: {
          enable: true,
          zIndex: -1,                     // puts it behind your content
        },

        background: {
          color: "transparent",           // keeps glassy/see-through
        },

        fpsLimit: 60,

        particles: {
          // your existing config (looks good!)
          number: {
            value: 140,
            density: {
              enable: true,
              area: 1100,
            },
          },
          color: {
            value: ["#8b5cf6", "#22d3ee", "#ec4899"],
          },
          opacity: {
            value: 0.65,
            animation: {
              enable: true,
              speed: 0.6,
              minimumValue: 0.3,
              sync: false,
            },
          },
          size: {
            value: { min: 1.2, max: 3 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.8,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 0.9,
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "out" },
          },
          links: {
            enable: true,
            distance: 170,
            color: "#8b5cf6",
            opacity: 0.4,
            width: 1,
            triangles: {
              enable: true,
              opacity: 0.03,
            },
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.02,
              opacity: 1,
            },
            lines: {
              enable: true,
              frequency: 0.01,
              opacity: 0.6,
            },
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            grab: {
              distance: 220,
              links: {
                opacity: 0.85,
              },
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}