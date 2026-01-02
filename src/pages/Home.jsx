import ParticlesBackground from '../components/ParticlesBackground';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <section className="relative min-h-screen pt-32 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white flex flex-col items-center justify-center overflow-hidden w-full">
  <ParticlesBackground />

  <div className="w-full max-w-5x4 px-45 md:px-60 text-center relative z-20">
    <img
      src="https://github.com/trghcj.png"
      alt="Divyansh Singh"
      className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto border-8 border-purple-500 shadow-2xl hover:scale-105 transition-all duration-500 -mt-20"
    />

    <h1 className="text-3xl md:text-5xl font-bold mt-8 mb-6 leading-snug">
      Hi There, I'm <span className="text-purple-300">Divyansh Singh</span>
    </h1>

    <p className="text-xl md:text-2xl text-purple-200 mb-8">
      I Am Into{" "}
      <span className="text-orange-400 font-bold">
        <TypeAnimation
          sequence={[
            "Mobile Development", 1200,
            "Flutter Apps", 1200,
            "React Native", 1200,
            "Full-Stack Projects", 1200,
            "Open Source", 1200,
          ]}
          speed={50}
          repeat={Infinity}
          wrapper="span"
        />
      </span>
    </p>

    <p className="text-base md:text-lg max-w-3xl mx-auto mb-10 text-gray-300 leading-relaxed">
      Android & Web Developer • Building Apps for College Events and for myself 
    </p>

    <div className="flex justify-center gap-6">
      <a href="https://github.com/trghcj" target="_blank" rel="noopener noreferrer">
        <Github size={36} className="hover:scale-125 transition" />
      </a>
      <a href="https://www.linkedin.com/in/divyansh-singh-332b741aa/" target="_blank" rel="noopener noreferrer">
        <Linkedin size={36} className="hover:scale-125 transition" />
      </a>
      <a href="mailto:ms1778937@gmail.com">
        <Mail size={36} className="hover:scale-125 transition" />
      </a>
    </div>
  </div>
</section>
 );
}