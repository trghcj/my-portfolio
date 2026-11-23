import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";

/*
 * An original, procedural woodland: misty pine silhouettes in layered fog,
 * drifting fireflies, soft light shafts, and a camera that follows the mouse
 * and walks into the trees as the page scrolls.
 */

const PALETTES = {
  dark: {
    fog: "#1a271d",
    trees: ["#060a07", "#0a120c", "#0f1a12"],
    ground: "#070b08",
    fireflies: "#d9f07c",
    fireflySize: 26,
    fireflyBlending: THREE.AdditiveBlending,
    shafts: "#b8d68a",
    shaftOpacity: 0.07,
  },
  light: {
    fog: "#dfe6d6",
    trees: ["#2b3a28", "#3d4f39", "#56694f"],
    ground: "#c7d1bc",
    fireflies: "#b5cf7a",
    fireflySize: 16,
    fireflyBlending: THREE.NormalBlending,
    shafts: "#ffffff",
    shaftOpacity: 0.35,
  },
};

// Deterministic random so the forest looks the same on every load.
function rng(seed) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function usePineGeometry() {
  return useMemo(() => {
    const parts = [];
    const trunk = new THREE.CylinderGeometry(0.06, 0.09, 1.2, 5);
    trunk.translate(0, 0.6, 0);
    parts.push(trunk);
    // Three stacked cones form the canopy
    [
      [1.1, 1.6, 1.3],
      [0.85, 1.4, 2.1],
      [0.55, 1.2, 2.85],
    ].forEach(([r, h, y]) => {
      const cone = new THREE.ConeGeometry(r, h, 7);
      cone.translate(0, y, 0);
      parts.push(cone);
    });
    return mergeGeometries(parts.map((g) => g.toNonIndexed()));
  }, []);
}

function TreeLayer({ geometry, color, count, zMin, zMax, seed, clearing = 1.2, scale = [0.8, 1.0] }) {
  const ref = useRef();

  useEffect(() => {
    const rand = rng(seed);
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    for (let i = 0; i < count; i++) {
      const z = zMin + rand() * (zMax - zMin);
      // keep a soft clearing down the middle so the hero text breathes
      let x = (rand() - 0.5) * (14 + -z * 1.5);
      if (Math.abs(x) < clearing) x = Math.sign(x || 1) * (clearing + rand() * 3);
      const s = scale[0] + rand() * scale[1];
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rand() * Math.PI);
      m.compose(new THREE.Vector3(x, -1.6, z), q, new THREE.Vector3(s, s * (1 + rand() * 0.5), s));
      ref.current.setMatrixAt(i, m);
    }
    ref.current.instanceMatrix.needsUpdate = true;
  }, [count, zMin, zMax, seed, clearing, scale]);

  return (
    <instancedMesh ref={ref} args={[geometry, undefined, count]} frustumCulled={false}>
      <meshBasicMaterial color={color} />
    </instancedMesh>
  );
}

const fireflyVertex = /* glsl */ `
  attribute float aSeed;
  uniform float uTime;
  uniform float uSize;
  varying float vAlpha;
  void main() {
    vec3 p = position;
    p.x += sin(uTime * 0.35 + aSeed * 12.0) * 0.6;
    p.y += sin(uTime * 0.5 + aSeed * 7.0) * 0.45;
    p.z += cos(uTime * 0.3 + aSeed * 5.0) * 0.4;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * (0.7 + 0.3 * sin(uTime * 2.0 + aSeed * 10.0)) * (8.0 / -mv.z);
    vAlpha = 0.35 + 0.65 * pow(0.5 + 0.5 * sin(uTime * 1.6 + aSeed * 20.0), 3.0);
  }
`;

const fireflyFragment = /* glsl */ `
  uniform vec3 uColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float glow = smoothstep(0.5, 0.0, d);
    glow = pow(glow, 2.2);
    gl_FragColor = vec4(uColor, glow * vAlpha);
  }
`;

function Fireflies({ color, blending, size, count = 140 }) {
  const mat = useRef();
  const geometry = useMemo(() => {
    const rand = rng(7);
    const pos = new Float32Array(count * 3);
    const seeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (rand() - 0.5) * 22;
      pos[i * 3 + 1] = -1.2 + rand() * 4.5;
      pos[i * 3 + 2] = 2 - rand() * 26;
      seeds[i] = rand();
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    g.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
    return g;
  }, [count]);

  const uniforms = useMemo(
    () => ({ uTime: { value: 0 }, uSize: { value: 26 }, uColor: { value: new THREE.Color() } }),
    []
  );

  useFrame((state) => {
    if (!mat.current) return;
    const u = mat.current.uniforms;
    u.uTime.value = state.clock.elapsedTime;
    u.uSize.value = size;
    u.uColor.value.set(color);
  });

  return (
    <points geometry={geometry} frustumCulled={false}>
      <shaderMaterial
        ref={mat}
        uniforms={uniforms}
        vertexShader={fireflyVertex}
        fragmentShader={fireflyFragment}
        transparent
        depthWrite={false}
        blending={blending}
      />
    </points>
  );
}

function useShaftTexture() {
  return useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 64;
    c.height = 256;
    const ctx = c.getContext("2d");
    const v = ctx.createLinearGradient(0, 0, 0, 256);
    v.addColorStop(0, "rgba(255,255,255,1)");
    v.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = v;
    ctx.fillRect(0, 0, 64, 256);
    // soften the sides
    ctx.globalCompositeOperation = "destination-in";
    const h = ctx.createLinearGradient(0, 0, 64, 0);
    h.addColorStop(0, "rgba(0,0,0,0)");
    h.addColorStop(0.5, "rgba(0,0,0,1)");
    h.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = h;
    ctx.fillRect(0, 0, 64, 256);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }, []);
}

function LightShafts({ color, opacity }) {
  const tex = useShaftTexture();
  const group = useRef();
  const shafts = [
    [-3.5, -6, 2.2, 0.35],
    [1.5, -10, 3.2, 0.3],
    [5, -8, 1.8, 0.4],
    [-7, -14, 3.6, 0.28],
  ];

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.children.forEach((m, i) => {
      m.material.opacity = opacity * (0.75 + 0.25 * Math.sin(t * 0.4 + i * 1.7));
    });
  });

  return (
    <group ref={group}>
      {shafts.map(([x, z, w, tilt], i) => (
        <mesh key={i} position={[x, 3.2, z]} rotation={[0, 0, tilt]}>
          <planeGeometry args={[w, 11]} />
          <meshBasicMaterial
            map={tex}
            color={color}
            transparent
            opacity={opacity}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            fog={false}
          />
        </mesh>
      ))}
    </group>
  );
}

function CameraRig({ pointer }) {
  const target = useMemo(() => new THREE.Vector3(0, 1.4, -20), []);
  useFrame((state, delta) => {
    const cam = state.camera;
    const heroProgress = Math.min(1, window.scrollY / window.innerHeight);
    const k = 1 - Math.pow(0.001, delta); // frame-rate independent easing
    cam.position.x += (pointer.current.x * 0.8 - cam.position.x) * k;
    cam.position.y += (0.5 + pointer.current.y * 0.35 - cam.position.y) * k;
    cam.position.z += (6 - heroProgress * 5 - cam.position.z) * k;
    cam.lookAt(target);
  });
  return null;
}

const NEAR = [1.1, 0.6];
const MID = [0.8, 0.9];
const FAR = [0.9, 1.3];

function Scene({ palette, pointer }) {
  const pine = usePineGeometry();
  return (
    <>
      <color attach="background" args={[palette.fog]} />
      <fog attach="fog" args={[palette.fog, 2, 36]} />

      <TreeLayer geometry={pine} color={palette.trees[0]} count={12} zMin={-7} zMax={-3} seed={11} clearing={4.2} scale={NEAR} />
      <TreeLayer geometry={pine} color={palette.trees[1]} count={80} zMin={-18} zMax={-7} seed={23} clearing={1.6} scale={MID} />
      <TreeLayer geometry={pine} color={palette.trees[2]} count={190} zMin={-40} zMax={-18} seed={37} clearing={0.6} scale={FAR} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.6, -15]}>
        <planeGeometry args={[120, 80]} />
        <meshBasicMaterial color={palette.ground} />
      </mesh>

      <LightShafts color={palette.shafts} opacity={palette.shaftOpacity} />
      <Fireflies color={palette.fireflies} blending={palette.fireflyBlending} size={palette.fireflySize} />
      <CameraRig pointer={pointer} />
    </>
  );
}

export default function ForestScene({ theme = "dark" }) {
  const wrap = useRef(null);
  const pointer = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);
  const palette = PALETTES[theme === "dark" ? "dark" : "light"];

  // Mouse parallax (the text sits on top of the canvas, so listen on window)
  useEffect(() => {
    const onMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  // Stop rendering while the hero is scrolled out of view
  useEffect(() => {
    if (!wrap.current) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting));
    io.observe(wrap.current);
    return () => io.disconnect();
  }, []);

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const frameloop = reduceMotion ? "demand" : visible ? "always" : "never";

  return (
    <div ref={wrap} className="absolute inset-0">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.5, 6], fov: 50, near: 0.1, far: 90 }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        frameloop={frameloop}
      >
        <Scene palette={palette} pointer={pointer} />
      </Canvas>
    </div>
  );
}
