import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

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
    <div className="relative w-full py-32 flex flex-col justify-center">
      <div className="relative z-20 max-w-4xl mx-auto px-6 w-full">
        
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-display text-5xl md:text-6xl font-black mb-6 text-zinc-900 dark:text-white tracking-tighter">
            Let’s Connect.
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-light max-w-2xl mx-auto">
            Have a project idea, feedback, or just want to say hi? <br className="hidden md:block" /> I'm always open to discussing new opportunities.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-800 shadow-xl mb-24 transition-colors">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-zinc-900 dark:text-zinc-300">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  disabled={loading}
                  className="w-full px-5 py-4 rounded-xl bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-zinc-900 dark:text-zinc-300">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  disabled={loading}
                  className="w-full px-5 py-4 rounded-xl bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all outline-none"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-zinc-900 dark:text-zinc-300">
                Message
              </label>
              <textarea
                name="message"
                rows="6"
                disabled={loading}
                placeholder="How can I help you?"
                className="w-full px-5 py-4 rounded-xl bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all outline-none resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={loading}
                className="group relative px-10 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-full overflow-hidden transition-transform hover:scale-105 shadow-xl disabled:opacity-70 disabled:hover:scale-100"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative flex items-center justify-center gap-2 w-full h-full">
                  {loading ? "Sending..." : "Send Message"}
                </span>
              </button>
            </div>

            {/* Status Message */}
            {status && (
              <div
                className={`text-center text-sm font-medium p-4 rounded-xl mt-6 border
                  ${
                    status.includes("✅")
                      ? "bg-green-50 dark:bg-green-900/10 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800/30"
                      : "bg-red-50 dark:bg-red-900/10 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800/30"
                  }`}
              >
                {status}
              </div>
            )}
          </form>
        </div>

        {/* Alternative Connect Section */}
        <div className="text-center">
          <h3 className="font-display text-3xl font-bold mb-8 text-zinc-900 dark:text-white">
            Other ways to connect
          </h3>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/trghcj"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-white hover:bg-orange-500 hover:border-orange-500 hover:-translate-y-1 transition-all duration-300 shadow-sm"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>

            <a
              href="https://www.linkedin.com/in/divyansh-singh-332b741aa/"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:-translate-y-1 transition-all duration-300 shadow-sm"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>

            <a
              href="mailto:ms1778937@gmail.com"
              className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-white hover:bg-red-500 hover:border-red-500 hover:-translate-y-1 transition-all duration-300 shadow-sm"
              aria-label="Email"
            >
              <FaEnvelope size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}