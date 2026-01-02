import ParticlesBackground from '../components/ParticlesBackground';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center
      bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900
      dark:from-purple-900 dark:via-purple-950 dark:to-black
      overflow-hidden transition-colors duration-300"
    >
      {/* Background Particles */}
      <ParticlesBackground />

      <div className="w-full max-w-5x3 px-30 md:px-40 text-center relative z-20">
        
        {/* Profile Image */}
        <img
          src="https://github.com/trghcj.png"
          alt="Divyansh Singh"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full mx-auto 
          border-8 border-purple-400 shadow-2xl 
          hover:scale-105 transition-all duration-500"
        />

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold mt-8 mb-6 text-white">
          Hi There, I'm{' '}
          <span className="text-purple-300">
            Divyansh Singh
          </span>
        </h1>

        {/* Animated Role */}
        <p className="text-xl md:text-2xl mb-8 text-purple-200">
          I Am Into{' '}
          <span className="text-orange-400 font-bold">
            <TypeAnimation
              sequence={[
                'Mobile Development', 1200,
                'Flutter Apps', 1200,
                'React Native', 1200,
                'Full-Stack Projects', 1200,
                'Open Source', 1200,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
            />
          </span>
        </p>

        {/* About Me */}
        <p className="text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed text-purple-100">
          Android & Web Developer passionate about building modern, scalable,
          and user-friendly applications. I enjoy working on college event apps
          and personal projects while continuously improving my skills.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href="https://drive.google.com/file/d/1RGzT0r5Egsy7EdLf9yOzp_27IBFAhCtQ/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-purple-500 hover:bg-purple-600 
            text-white font-semibold rounded-full shadow-lg 
            transition transform hover:scale-105"
          >
            📄 View Resume
          </a>

          <a
            href="#contact"
            className="px-8 py-3 border border-purple-300 
            text-purple-200 font-semibold rounded-full 
            hover:bg-purple-500 hover:text-white 
            transition transform hover:scale-105"
          >
            📬 Contact Me
          </a>
        </div>

        {/* Contact Icons */}
        <div id="contact" className="flex justify-center gap-8 text-white">
          <a href="https://github.com/trghcj" target="_blank">
            <Github size={36} className="hover:scale-125 hover:text-purple-300 transition" />
          </a>

          <a href="https://www.linkedin.com/in/divyansh-singh-332b741aa/" target="_blank">
            <Linkedin size={36} className="hover:scale-125 hover:text-purple-300 transition" />
          </a>

          <a href="mailto:ms1778937@gmail.com">
            <Mail size={36} className="hover:scale-125 hover:text-purple-300 transition" />
          </a>
        </div>
      </div>
    </section>
  );
}
