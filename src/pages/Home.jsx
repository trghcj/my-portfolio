import { TypeAnimation } from "react-type-animation";
import { ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home({ onNavigate }) {
  return (
    <div className="relative w-full flex items-center justify-center min-h-[calc(100vh-6rem)]">

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center px-6 py-10 md:py-0">

        {/* Avatar */}
        <div className="relative mx-auto mb-10 md:mb-12 w-40 h-40 md:w-44 md:h-44">
          <div className="absolute inset-0 rounded-full blur-3xl bg-purple-600/30 animate-pulse-slow" />
          <img
            src="https://github.com/trghcj.png"
            alt="Divyansh Singh"
            className="relative w-full h-full rounded-full border-4 border-purple-500/80
              shadow-[0_0_60px_rgba(168,85,247,0.4),0_0_120px_rgba(168,85,247,0.2)]
              object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-5 tracking-tight drop-shadow-sm">
          Hi, I&apos;m{" "}
          <span className="relative inline-block group">
            <span className="bg-gradient-to-r from-purple-600 to-sky-500 bg-clip-text text-transparent">Divyansh Singh</span>
            <span className="navbar-name-underline" />
          </span>
        </h1>

        {/* Animated Role */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-gray-300 mb-8 font-light drop-shadow-sm">
          I am into{" "}
          <span className="text-sky-600 dark:text-sky-400 font-semibold drop-shadow-sm">
            <TypeAnimation
              sequence={[
                "React.js Development", 1600,
                "Android & Web Apps", 1600,
                "Flutter Development", 1600,
                "Modern UI Experiences", 1600,
              ]}
              speed={60}
              deletionSpeed={70}
              repeat={Infinity}
            />
          </span>
        </p>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-slate-600 dark:text-gray-400 mb-10 md:mb-12 leading-relaxed text-base md:text-lg">
          AI & Full-Stack Developer passionate about neural systems,
          clean architectures, and building products that scale.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-5 md:gap-6 justify-center mb-12 md:mb-14">

          {/* View Projects */}
          <button
            onClick={() => onNavigate && onNavigate('projects')}
            className="px-8 py-3.5 rounded-full font-semibold text-white
              bg-gradient-to-r from-purple-600 to-indigo-600
              hover:from-purple-500 hover:to-indigo-500
              shadow-lg shadow-purple-500/30 dark:shadow-purple-900/40
              transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            View Projects
          </button>

          {/* Skills */}
          <button
            onClick={() => onNavigate && onNavigate('skills')}
            className="px-8 py-3.5 rounded-full font-semibold
              text-purple-700 dark:text-purple-300
              bg-purple-100/50 dark:bg-purple-900/20 backdrop-blur-sm
              border border-purple-300 dark:border-purple-700/50
              hover:bg-purple-200/50 dark:hover:bg-purple-800/40
              transition-all duration-300 transform hover:-translate-y-1"
          >
            Skills
          </button>

          {/* Resume */}
          <a
            href="https://drive.google.com/file/d/1q30I_PFSIPS3h1tUBeV1uwBVKu-6P9BA/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full font-semibold text-white
              bg-gradient-to-r from-sky-500 to-indigo-500
              hover:from-sky-400 hover:to-indigo-400
              shadow-lg shadow-sky-500/30 dark:shadow-sky-900/40
              transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center gap-2"
          >
            <span>📄 Resume</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => onNavigate && onNavigate('suggestions')}
          className="inline-flex items-center gap-2 text-sky-600 dark:text-sky-400
            hover:text-sky-500 dark:hover:text-sky-300 transition-colors duration-300
            group mb-10 md:mb-12 font-medium"
        >
          <span className="text-base md:text-lg">Contact Me</span>
          <ArrowDown size={20} className="group-hover:animate-bounce" />
        </button>

        {/* Social Links */}
        <div id="contact" className="flex justify-center gap-8 md:gap-10 text-slate-600 dark:text-slate-400">
          <a
            href="https://github.com/trghcj"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-white/50 dark:bg-slate-800/50 rounded-full shadow-sm hover:shadow-md 
            hover:text-purple-600 dark:hover:text-purple-400 hover:scale-110 transition-all duration-300"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/divyansh-singh-332b741aa"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-white/50 dark:bg-slate-800/50 rounded-full shadow-sm hover:shadow-md 
            hover:text-sky-600 dark:hover:text-sky-400 hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="mailto:ms1778937@gmail.com"
            className="p-3 bg-white/50 dark:bg-slate-800/50 rounded-full shadow-sm hover:shadow-md 
            hover:text-pink-600 dark:hover:text-pink-400 hover:scale-110 transition-all duration-300"
          >
            <FaEnvelope size={28} />
          </a>
        </div>

      </div>
    </div>
  );
}
