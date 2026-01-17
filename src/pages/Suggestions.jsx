import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import VideoNeuralBackground from "../components/VideoNeuralBackground"; 

export default function Suggestions() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      setStatus("❌ Please fill in all fields.");
      return;
    }

    setLoading(true);
    setStatus("Sending...");

    try {
      await addDoc(collection(db, "suggestions"), {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
      });

      setStatus("✅ Thanks for reaching out! I’ll get back to you.");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("❌ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="suggestions"
      className="relative w-full min-h-screen py-24 md:py-32 bg-black overflow-hidden"
    >
      {/* === Video Neural Background (glowing connections flow) === */}
      <VideoNeuralBackground />

      {/* Depth Overlay – balanced for text readability + video glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90 z-10 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Let’s Connect
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Have a suggestion, collaboration idea,
            <br /> or just want to say hi? 👋
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-900/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 
          border border-purple-500/20 mb-16 md:mb-24
          hover:shadow-[0_0_60px_rgba(168,85,247,0.3)] transition-all duration-500">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name */}
            <div>
              <label className="block text-lg font-semibold mb-3 text-gray-200">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                disabled={loading}
                className="w-full px-6 py-4 rounded-xl text-lg bg-gray-800/70
                  border border-purple-500/30 text-white placeholder-gray-400
                  focus:ring-4 focus:ring-purple-500/40 focus:border-purple-500/50
                  transition-all duration-300"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg font-semibold mb-3 text-gray-200">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                disabled={loading}
                className="w-full px-6 py-4 rounded-xl text-lg bg-gray-800/70
                  border border-purple-500/30 text-white placeholder-gray-400
                  focus:ring-4 focus:ring-purple-500/40 focus:border-purple-500/50
                  transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-lg font-semibold mb-3 text-gray-200">
                Message / Suggestion
              </label>
              <textarea
                name="message"
                rows="7"
                disabled={loading}
                placeholder="Write your message here..."
                className="w-full px-6 py-4 rounded-xl text-lg bg-gray-800/70
                  border border-purple-500/30 text-white placeholder-gray-400
                  focus:ring-4 focus:ring-purple-500/40 focus:border-purple-500/50
                  transition-all duration-300 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="px-10 md:px-12 py-4 md:py-5 text-lg md:text-xl font-bold text-white rounded-2xl
                  bg-gradient-to-r from-purple-600 to-pink-600
                  hover:from-purple-700 hover:to-pink-700 hover:scale-105
                  disabled:opacity-50 disabled:hover:scale-100
                  transition-all duration-300 shadow-lg shadow-purple-500/20"
              >
                {loading ? "Sending..." : "Send Message 🚀"}
              </button>
            </div>

            {/* Status Message */}
            {status && (
              <div
                className={`text-center text-lg font-medium p-5 rounded-xl mt-6
                  ${
                    status.includes("✅")
                      ? "bg-green-900/30 text-green-300 border border-green-500/30"
                      : "bg-red-900/30 text-red-300 border border-red-500/30"
                  }`}
              >
                {status}
              </div>
            )}
          </form>
        </div>

        {/* Alternative Connect Section */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Or Connect With Me
          </h3>

          <div className="flex justify-center gap-8 md:gap-10">
            <a
              href="https://github.com/trghcj"
              target="_blank"
              rel="noreferrer"
              className="p-5 md:p-6 rounded-2xl bg-gray-900/70 backdrop-blur-xl
                border border-purple-500/20 hover:border-purple-500/50
                hover:bg-purple-900/30 hover:scale-110 transition-all duration-300"
            >
              <FaGithub className="text-3xl md:text-4xl text-white" />
            </a>

            <a
              href="https://www.linkedin.com/in/divyansh-singh-332b741aa/"
              target="_blank"
              rel="noreferrer"
              className="p-5 md:p-6 rounded-2xl bg-gray-900/70 backdrop-blur-xl
                border border-purple-500/20 hover:border-purple-500/50
                hover:bg-blue-900/30 hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin className="text-3xl md:text-4xl text-blue-400" />
            </a>

            <a
              href="mailto:ms1778937@gmail.com"
              className="p-5 md:p-6 rounded-2xl bg-gray-900/70 backdrop-blur-xl
                border border-purple-500/20 hover:border-purple-500/50
                hover:bg-pink-900/30 hover:scale-110 transition-all duration-300"
            >
              <FaEnvelope className="text-3xl md:text-4xl text-pink-400" />
            </a>
          </div>

          <p className="mt-10 text-lg md:text-xl text-gray-300">
            Open to ideas, feedback, and collaborations 💜
          </p>
        </div>
      </div>
    </section>
  );
}