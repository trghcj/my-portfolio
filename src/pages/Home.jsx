import VideoNeuralBackground from "../components/VideoNeuralBackground"; 
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden flex items-center justify-center">

      {/* === Video Neural Background (glowing connections flow) === */}
      <VideoNeuralBackground />

      {/* Dark Overlay – improves text readability while preserving glow */}
      <div className="absolute inset-0 bg-black/70 z-10 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center px-6 py-8 md:py-0">

        {/* Avatar with glow effect */}
        <div className="relative mx-auto mb-10 md:mb-12 w-40 h-40 md:w-44 md:h-44">
          <div className="absolute inset-0 rounded-full blur-3xl bg-purple-600/50 animate-pulse-slow" />
          <img
            src="https://github.com/trghcj.png"
            alt="Divyansh Singh"
            className="relative w-full h-full rounded-full border-4 border-purple-500/80 
                     shadow-[0_0_60px_rgba(168,85,247,0.8),0_0_120px_rgba(168,85,247,0.4)] 
                     object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Greeting & Name with Adaptive Underline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 tracking-tight">
          Hi, I'm{" "}
          <span className="relative inline-block group">
            <span className="text-purple-400">Divyansh Singh</span>
            <span className="navbar-name-underline"></span> {/* ← animated underline */}
          </span>
        </h1>

        {/* Animated Role */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 font-light">
          I am into{" "}
          <span className="text-orange-400 font-semibold">
            <TypeAnimation
              sequence={[
                "React-Native Development", 1600,
                "Android & Web Apps", 1600,
                "Flutter & Kotlin Development", 1600,
                "Modern UI Experiences", 1600,
              ]}
              wrapper="span"
              speed={60}
              deletionSpeed={70}
              repeat={Infinity}
            />
          </span>
        </p>

        {/* Short Description */}
        <p className="max-w-3xl mx-auto text-gray-400 mb-10 md:mb-12 leading-relaxed text-base md:text-lg">
          AI & Full-Stack Developer passionate about neural systems,
          clean architectures, and building products that scale.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-wrap gap-5 md:gap-6 justify-center mb-12 md:mb-14">
          <Link
            to="/projects"
            className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-purple-600 hover:bg-purple-700 
                     text-white font-medium transition-all duration-300 hover:shadow-lg 
                     hover:shadow-purple-500/40 transform hover:-translate-y-1"
          >
            View Projects
          </Link>

          <Link
            to="/skills"
            className="px-7 py-3 md:px-8 md:py-3.5 rounded-full border border-purple-400/70 
                     text-purple-300 hover:bg-purple-600/20 hover:border-purple-400 
                     hover:text-white transition-all duration-300"
          >
            Skills
          </Link>

          <a
            href="https://drive.google.com/file/d/1RGzT0r5Egsy7EdLf9yOzp_27IBFAhCtQ/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 
                     text-white font-medium transition-all duration-300 hover:shadow-lg 
                     hover:shadow-pink-500/40 transform hover:-translate-y-1"
          >
            📄 Resume
          </a>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 
                   transition-colors duration-300 group mb-10 md:mb-12"
        >
          <span className="text-base md:text-lg font-medium">Contact Me</span>
          <ArrowDown 
            className="group-hover:animate-bounce transition-transform" 
            size={20} 
          />
        </a>

        {/* Social Icons */}
        <div id="contact" className="flex justify-center gap-8 md:gap-10 text-purple-400">
          <a 
            href="https://github.com/trghcj" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-purple-300 hover:scale-110 transition-all duration-300"
          >
            <Github size={28} />
          </a>
          <a 
            href="https://linkedin.com/in/divyansh-singh-332b741aa" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-purple-300 hover:scale-110 transition-all duration-300"
          >
            <Linkedin size={28} />
          </a>
          <a 
            href="mailto:ms1778937@gmail.com"
            className="hover:text-purple-300 hover:scale-110 transition-all duration-300"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}