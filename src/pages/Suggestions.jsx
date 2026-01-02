import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function Suggestions() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setStatus("Sending...");

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    try {
      // Safety timeout (10s)
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

      setStatus("✅ Thank you! Your message has been sent.");
      form.reset();
    } catch (error) {
      setStatus(
        error.message === "Request timed out"
          ? "❌ Connection timed out. Please try again later."
          : "❌ Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="py-24 min-h-screen transition-colors duration-300
      bg-gray-100 dark:bg-gray-900"
    >
      <div className="container mx-auto px-6 max-w-2xl">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6
          text-gray-900 dark:text-white">
          Ask Me Anything / Suggestions
        </h2>

        <p className="text-center mb-12 text-gray-600 dark:text-gray-400">
          Have feedback, ideas, or just want to say hi? Drop a message below 👇
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl p-10 shadow-2xl
          bg-white dark:bg-gray-800"
        >
          {/* Name */}
          <div className="mb-8">
            <label className="block font-medium mb-2
              text-gray-700 dark:text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg border
              bg-gray-50 dark:bg-gray-900
              border-gray-300 dark:border-gray-700
              text-gray-900 dark:text-white
              focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Email */}
          <div className="mb-8">
            <label className="block font-medium mb-2
              text-gray-700 dark:text-gray-300">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border
              bg-gray-50 dark:bg-gray-900
              border-gray-300 dark:border-gray-700
              text-gray-900 dark:text-white
              focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Message */}
          <div className="mb-10">
            <label className="block font-medium mb-2
              text-gray-700 dark:text-gray-300">
              Message / Suggestion
            </label>
            <textarea
              name="message"
              rows="6"
              required
              className="w-full px-4 py-3 rounded-lg border resize-none
              bg-gray-50 dark:bg-gray-900
              border-gray-300 dark:border-gray-700
              text-gray-900 dark:text-white
              focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-lg font-bold text-white
            bg-purple-600 hover:bg-purple-700
            transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Status */}
          {status && (
            <p className="mt-6 text-center font-medium
              text-gray-700 dark:text-gray-300">
              {status}
            </p>
          )}
        </form>

        {/* Footer Text */}
        <p className="text-center mt-8 text-gray-600 dark:text-gray-400">
          I’ll get back to you as soon as possible 🚀
        </p>
      </div>
    </section>
  );
}
