import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function Suggestions() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return; // prevent double submit

    setLoading(true);
    setStatus("Sending...");

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    try {
      console.log("➡️ Starting Firestore write...");
      console.log("Firestore DB:", db);

      // ⏱️ Safety timeout (10s)
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

      console.log("✅ Firestore write success");

      setStatus("✅ Thank you! Your message has been saved.");
      form.reset();

    } catch (error) {
      console.error("❌ Firestore Error:", error);
      setStatus(
        error.message === "Request timed out"
          ? "❌ Connection timed out. Please check Firebase setup."
          : "❌ Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-800">
          Ask Me Anything / Suggestions
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-2xl p-10"
        >
          <div className="mb-8">
            <label className="block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 border rounded-lg"
            />
          </div>

          <div className="mb-8">
            <label className="block text-gray-700 font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 border rounded-lg"
            />
          </div>

          <div className="mb-8">
            <label className="block text-gray-700 font-medium mb-2">
              Message / Suggestion
            </label>
            <textarea
              name="message"
              rows="6"
              required
              className="w-full px-4 py-3 border rounded-lg"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 text-white py-4 rounded-lg font-bold hover:bg-purple-700 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="mt-6 text-center text-lg font-medium">{status}</p>
          )}
        </form>

        <p className="text-center mt-8 text-gray-600">
          I'll get back to you soon! 🚀
        </p>
      </div>
    </section>
  );
}
