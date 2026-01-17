// components/VideoNeuralBackground.jsx
export default function VideoNeuralBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-60 scale-[1.05]"
        style={{
          filter: "brightness(1.1) contrast(1.15) saturate(1.25) blur(0.5px)",
        }}
      >
        <source src="/videos/neural-flow-blue.mp4" type="video/mp4" />
        Your browser does not support video background.
      </video>
    </div>
  );
}