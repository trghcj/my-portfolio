import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Code2, Rocket, Mail, Github, Linkedin } from "lucide-react";

export default function Home({ onNavigate }) {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">

      {/* Main Hero Content */}
      <div className="text-center w-full z-10 flex flex-col items-center">
        
        {/* Floating Avatar */}
        <div className="relative mb-12 animate-float">
          <div className="absolute inset-0 rounded-full blur-2xl bg-orange-500/30 scale-150 animate-pulse-slow" />
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-1 shadow-2xl">
            <img
              src="https://github.com/trghcj.png"
              alt="Divyansh Singh"
              className="w-full h-full rounded-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        {/* Hero Typography */}
        <div className="space-y-6 max-w-4xl">
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
            Engineering digital <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
              experiences
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light max-w-2xl mx-auto">
            I am a full-stack developer focused on building <span className="font-medium text-zinc-900 dark:text-white">scalable architectures</span> and <span className="font-medium text-zinc-900 dark:text-white">premium interfaces</span>.
          </p>

          <div className="h-10 text-lg md:text-xl font-medium text-orange-600 dark:text-orange-500">
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
        </div>

        {/* CTA Buttons */}
        <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => onNavigate && onNavigate('projects')}
            className="group relative px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 shadow-xl shadow-orange-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative flex items-center gap-2">
              <Rocket size={18} /> View My Work
            </span>
          </button>

          <a
            href="https://drive.google.com/file/d/1ls53kq1sjJB8hV7Ie9j9rcmU26ucwtOa/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full font-semibold border-2 border-zinc-200 dark:border-zinc-800 bg-white/10 dark:bg-zinc-900/10 backdrop-blur-sm hover:border-orange-500/50 hover:bg-orange-500/5 text-zinc-900 dark:text-white transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Code2 size={18} /> Read Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-16 flex items-center justify-center gap-6">
          <a href="https://github.com/trghcj" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-orange-500 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/divyansh-singh-332b741aa" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-orange-500 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:ms1778937@gmail.com" className="text-zinc-500 hover:text-orange-500 transition-colors">
            <Mail size={24} />
          </a>
        </div>

      </div>
    </div>
  );
}
