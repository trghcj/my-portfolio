export default function CenterAvatar() {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
      <div className="relative avatar-float">
        
        {/* Glow */}
        <div className="absolute inset-0 rounded-full blur-3xl bg-purple-500/40 animate-pulse" />
        <div className="absolute inset-0 rounded-full blur-2xl bg-blue-500/30" />

        {/* Avatar (LinkedIn / GitHub image) */}
        <img
          src="https://github.com/trghcj.png"
          alt="Divyansh Singh"
          className="relative w-56 h-56 md:w-64 md:h-64 rounded-full object-cover 
          border border-white/20 shadow-2xl"
        />
      </div>
    </div>
  );
}
