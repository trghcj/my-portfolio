import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

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
    <div className="relative w-full min-h-screen py-24 md:py-32 flex flex-col justify-center">

      {/* Main Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 w-full">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-slate-900 dark:text-white tracking-tight drop-shadow-sm">
            Let’s Connect
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a suggestion, collaboration idea,
            <br /> or just want to say hi? Feel free to drop a message!
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-8 md:p-12 
          border border-white/40 dark:border-white/10 mb-16 md:mb-24
          hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)] dark:hover:shadow-[0_8px_30px_rgba(168,85,247,0.2)] transition-all duration-500">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name */}
            <div>
              <label className="block text-lg font-semibold mb-3 text-slate-700 dark:text-gray-200">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                disabled={loading}
                className="w-full px-6 py-4 rounded-xl text-lg bg-white/50 dark:bg-gray-800/50
                  border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500
                  focus:ring-4 focus:ring-indigo-500/20 dark:focus:ring-indigo-500/40 focus:border-indigo-400 dark:focus:border-indigo-500
                  transition-all duration-300 outline-none"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg font-semibold mb-3 text-slate-700 dark:text-gray-200">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                disabled={loading}
                className="w-full px-6 py-4 rounded-xl text-lg bg-white/50 dark:bg-gray-800/50
                  border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500
                  focus:ring-4 focus:ring-indigo-500/20 dark:focus:ring-indigo-500/40 focus:border-indigo-400 dark:focus:border-indigo-500
                  transition-all duration-300 outline-none"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-lg font-semibold mb-3 text-slate-700 dark:text-gray-200">
                Message / Suggestion
              </label>
              <textarea
                name="message"
                rows="7"
                disabled={loading}
                placeholder="Write your message here..."
                className="w-full px-6 py-4 rounded-xl text-lg bg-white/50 dark:bg-gray-800/50
                  border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500
                  focus:ring-4 focus:ring-indigo-500/20 dark:focus:ring-indigo-500/40 focus:border-indigo-400 dark:focus:border-indigo-500
                  transition-all duration-300 outline-none resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="px-10 md:px-12 py-4 md:py-5 text-lg md:text-xl font-bold text-white rounded-2xl
                  bg-gradient-to-r from-purple-600 to-indigo-600
                  hover:from-purple-500 hover:to-indigo-500 hover:scale-105
                  disabled:opacity-50 disabled:hover:scale-100
                  transition-all duration-300 shadow-lg shadow-purple-500/30 dark:shadow-purple-900/40"
              >
                {loading ? "Sending..." : " Send Message "}
              </button>
            </div>

            {/* Status Message */}
            {status && (
              <div
                className={`text-center text-lg font-medium p-5 rounded-xl mt-6
                  ${
                    status.includes("✅")
                      ? "bg-green-100/50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-500/30"
                      : "bg-red-100/50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-500/30"
                  }`}
              >
                {status}
              </div>
            )}
          </form>
        </div>

        {/* Alternative Connect Section */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-8 text-slate-900 dark:text-white">
            Or Connect With Me
          </h3>

          <div className="flex justify-center gap-8 md:gap-10">
            <a
              href="https://github.com/trghcj"
              target="_blank"
              rel="noreferrer"
              className="p-5 md:p-6 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl
                border border-white/40 dark:border-white/10 hover:border-indigo-300 dark:hover:border-indigo-500/50
                hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:scale-110 transition-all duration-300 shadow-sm"
            >
              <FaGithub className="text-3xl md:text-4xl text-slate-700 dark:text-white" />
            </a>

            <a
              href="https://www.linkedin.com/in/divyansh-singh-332b741aa/"
              target="_blank"
              rel="noreferrer"
              className="p-5 md:p-6 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl
                border border-white/40 dark:border-white/10 hover:border-sky-300 dark:hover:border-sky-500/50
                hover:bg-sky-50 dark:hover:bg-sky-900/30 hover:scale-110 transition-all duration-300 shadow-sm"
            >
              <FaLinkedin className="text-3xl md:text-4xl text-sky-600 dark:text-sky-400" />
            </a>

            <a
              href="mailto:ms1778937@gmail.com"
              className="p-5 md:p-6 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl
                border border-white/40 dark:border-white/10 hover:border-pink-300 dark:hover:border-pink-500/50
                hover:bg-pink-50 dark:hover:bg-pink-900/30 hover:scale-110 transition-all duration-300 shadow-sm"
            >
              <FaEnvelope className="text-3xl md:text-4xl text-pink-600 dark:text-pink-400" />
            </a>
          </div>

          <p className="mt-10 text-lg md:text-xl text-slate-600 dark:text-gray-400 font-medium">
            Open to ideas, feedback and collaborations 
          </p>
        </div>
      </div>
    </div>
  );
}