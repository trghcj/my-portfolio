import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

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
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Request timed out")), 10000)
      );

      const writePromise = addDoc(collection(db, "suggestions"), {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
      });

      await Promise.race([writePromise, timeoutPromise]);

      setStatus("✅ Thank you! Your message has been sent successfully.");
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      setStatus(
        error.message === "Request timed out"
          ? "⏱️ Connection timed out. Please check your internet and try again."
          : "❌ Failed to send message. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="suggestions"
      className="relative w-full min-h-screen py-32
      bg-gradient-to-b from-gray-50 to-white
      dark:from-gray-900 dark:to-black
      transition-all duration-500"
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* Main Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Let's Connect
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question, feedback, project idea, or just want to say hello?
            <br />
            I'd love to hear from you!
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 md:p-12
          border border-gray-200 dark:border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name */}
            <div>
              <label className="block text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                disabled={loading}
                className="w-full px-6 py-4 rounded-xl text-lg
                bg-gray-50 dark:bg-gray-900
                border border-gray-300 dark:border-gray-700
                text-gray-900 dark:text-white
                focus:outline-none focus:ring-4 focus:ring-purple-500/30 focus:border-purple-500
                transition-all duration-300"
                placeholder=""
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                disabled={loading}
                className="w-full px-6 py-4 rounded-xl text-lg
                bg-gray-50 dark:bg-gray-900
                border border-gray-300 dark:border-gray-700
                text-gray-900 dark:text-white
                focus:outline-none focus:ring-4 focus:ring-purple-500/30 focus:border-purple-500
                transition-all duration-300"
                placeholder=""
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                Message / Question / Suggestion
              </label>
              <textarea
                name="message"
                rows="8"
                required
                disabled={loading}
                className="w-full px-6 py-4 rounded-xl text-lg resize-none
                bg-gray-50 dark:bg-gray-900
                border border-gray-300 dark:border-gray-700
                text-gray-900 dark:text-white
                focus:outline-none focus:ring-4 focus:ring-purple-500/30 focus:border-purple-500
                transition-all duration-300"
                placeholder="Write your message here..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-3 px-10 py-5
                text-xl font-bold text-white rounded-2xl
                bg-gradient-to-r from-purple-600 to-pink-600
                hover:from-purple-700 hover:to-pink-700
                shadow-lg hover:shadow-2xl
                transform hover:scale-105
                transition-all duration-300
                disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message 🚀"
                )}
              </button>
            </div>

            {/* Status Message */}
            {status && (
              <div className={`text-center text-lg font-medium p-5 rounded-xl
                ${status.includes("✅") 
                  ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300" 
                  : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300"
                }`}>
                {status}
              </div>
            )}
          </form>
        </div>

        {/* Closing Note */}
        <p className="text-center mt-16 text-lg text-gray-600 dark:text-gray-400">
          I read every message and will get back to you as soon as possible 💜
        </p>
      </div>
    </section>
  );
}