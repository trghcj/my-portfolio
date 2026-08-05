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
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        
        {/* Main Content Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white dark:bg-[#0a0a0a] rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl mb-24">
          
          {/* Left Side: Image */}
          <div className="relative w-full h-[400px] lg:h-auto bg-zinc-100 dark:bg-zinc-900 border-b lg:border-b-0 lg:border-r border-zinc-200 dark:border-zinc-800">
            <img 
              src="/Suggestion_image.jpg" 
              alt="Let's Connect" 
              className="absolute inset-0 w-full h-full object-cover filter contrast-125 dark:brightness-90"
            />
          </div>

          {/* Right Side: Form */}
          <div className="p-8 md:p-14 lg:p-16 flex flex-col justify-center">
            
            <div className="mb-10">
              <h2 className="font-display text-4xl md:text-5xl font-black mb-4 text-zinc-900 dark:text-white tracking-tighter">
                Let’s Connect.
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light">
                Got a project in mind, a question, or just want to connect? Drop me a message and let's build something great.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  disabled={loading}
                  className="w-full px-0 py-4 bg-transparent border-b border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 focus:border-orange-500 transition-colors outline-none text-lg"
                  placeholder="Your Name"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  disabled={loading}
                  className="w-full px-0 py-4 bg-transparent border-b border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 focus:border-orange-500 transition-colors outline-none text-lg"
                  placeholder="Email Address"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  rows="4"
                  disabled={loading}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-4 bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-900 dark:text-white placeholder-zinc-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors outline-none text-lg resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-lg overflow-hidden transition-transform hover:scale-105 shadow-xl disabled:opacity-70 disabled:hover:scale-100 flex items-center gap-2"
                >
                  <span className="relative z-10">
                    {loading ? "Sending..." : "Send Message"}
                  </span>
                  {!loading && <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </button>
              </div>

              {/* Status Message */}
              {status && (
                <div
                  className={`text-sm font-medium p-4 rounded-xl mt-6 border
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