import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ArrowUpRight, Send, CheckCircle2, AlertCircle, Loader2, User, AtSign, MessageSquare } from "lucide-react";
import Reveal from "../components/Reveal";

const MAX_MESSAGE = 1000;

const channels = [
  { label: "Email", value: "ms1778937@gmail.com", href: "mailto:ms1778937@gmail.com", icon: <FaEnvelope size={18} /> },
  { label: "LinkedIn", value: "divyansh-singh", href: "https://www.linkedin.com/in/divyansh-singh-332b741aa/", icon: <FaLinkedin size={18} /> },
  { label: "GitHub", value: "@trghcj", href: "https://github.com/trghcj", icon: <FaGithub size={18} /> },
];

function Field({ name, type = "text", label, icon, disabled, textarea, onInput, maxLength }) {
  const base =
    "peer w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 pl-12 pr-4 pt-6 pb-2.5 text-base text-zinc-900 dark:text-white placeholder-transparent outline-none transition-all duration-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 disabled:opacity-60";
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-4 top-[1.15rem] text-zinc-400 peer-focus:text-orange-500 transition-colors">
        {icon}
      </span>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          placeholder={label}
          disabled={disabled}
          onInput={onInput}
          maxLength={maxLength}
          className={`${base} resize-none`}
        />
      ) : (
        <input id={name} name={name} type={type} placeholder={label} disabled={disabled} className={base} />
      )}
      <label
        htmlFor={name}
        className="pointer-events-none absolute left-12 top-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-500 transition-all duration-200
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-zinc-400
          peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-orange-500"
      >
        {label}
      </label>
    </div>
  );
}

export default function Suggestions() {
  const [status, setStatus] = useState(null); // { type: "success" | "error", text }
  const [loading, setLoading] = useState(false);
  const [chars, setChars] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      setStatus({ type: "error", text: "Please fill in all fields." });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      await addDoc(collection(db, "suggestions"), {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
      });
      setStatus({ type: "success", text: "Thanks for reaching out! I’ll get back to you." });
      form.reset();
      setChars(0);
    } catch (error) {
      console.error(error);
      setStatus({ type: "error", text: "Something went wrong. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  // Spotlight that follows the cursor inside the form card
  const onSpotlight = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--sx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--sy", `${e.clientY - r.top}px`);
  };

  return (
    <div className="relative w-full py-24 md:py-32 flex flex-col justify-center">
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">

        {/* Header */}
        <Reveal className="text-center mb-14 md:mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-600 dark:text-orange-500 mb-4">
            <span className="w-8 h-px bg-orange-500/60" /> Contact <span className="w-8 h-px bg-orange-500/60" />
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-black text-zinc-900 dark:text-white tracking-tighter leading-[1.05]">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
              great.
            </span>
          </h2>
          <p className="mt-5 text-lg text-zinc-600 dark:text-zinc-400 font-light max-w-xl mx-auto">
            Got a project in mind, a question, or just want to connect? Drop me a message.
          </p>
        </Reveal>

        {/* Card with animated gradient border */}
        <Reveal delay={100}>
          <div className="glow-border rounded-[2rem] p-px shadow-2xl shadow-orange-500/10">
            <div className="grid grid-cols-1 lg:grid-cols-5 rounded-[calc(2rem-1px)] overflow-hidden bg-white dark:bg-[#0b0b0d]">

              {/* Left: image + channels */}
              <div className="relative lg:col-span-2 min-h-[460px] lg:min-h-[640px] overflow-hidden group/img">
                <img
                  src="/Suggestion_image.jpg"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover scale-105 group-hover/img:scale-110 transition-transform duration-[2000ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                <div className="relative h-full flex flex-col justify-end p-6 md:p-8 gap-3">
                  <p className="text-white/70 text-xs font-bold uppercase tracking-[0.25em] mb-1">Reach me directly</p>
                  {channels.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="group no-underline flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md px-4 py-3 text-white hover:bg-white/20 hover:border-white/30 hover:text-white transition-all duration-300"
                    >
                      <span className="grid place-items-center w-10 h-10 rounded-xl bg-white/15 group-hover:bg-orange-500 transition-colors">
                        {c.icon}
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="block text-[11px] uppercase tracking-widest text-white/60">{c.label}</span>
                        <span className="block text-sm font-semibold truncate">{c.value}</span>
                      </span>
                      <ArrowUpRight size={18} className="text-white/60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Right: form */}
              <div onMouseMove={onSpotlight} className="spotlight relative lg:col-span-3 p-6 sm:p-10 lg:p-14 flex flex-col justify-center">
                <div className="relative">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight mb-2">
                    Send a message
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 mb-8">Fill in the form and it lands straight in my inbox.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field name="name" label="Your Name" icon={<User size={18} />} disabled={loading} />
                      <Field name="email" type="email" label="Email Address" icon={<AtSign size={18} />} disabled={loading} />
                    </div>

                    <div>
                      <Field
                        name="message"
                        label="Tell me about your project..."
                        icon={<MessageSquare size={18} />}
                        disabled={loading}
                        textarea
                        maxLength={MAX_MESSAGE}
                        onInput={(e) => setChars(e.target.value.length)}
                      />
                      <p className="mt-2 text-right text-xs text-zinc-400 tabular-nums">
                        {chars} / {MAX_MESSAGE}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="shimmer group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-orange-600 to-red-600 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:hover:scale-100 overflow-hidden"
                      >
                        {loading ? (
                          <>
                            <Loader2 size={18} className="animate-spin" /> Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={17} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                          </>
                        )}
                      </button>

                      {status && (
                        <div
                          role="status"
                          className={`flex items-center gap-2 text-sm font-medium px-4 py-3 rounded-2xl border animate-pop ${
                            status.type === "success"
                              ? "bg-emerald-50 dark:bg-emerald-900/15 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/40"
                              : "bg-red-50 dark:bg-red-900/15 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800/40"
                          }`}
                        >
                          {status.type === "success" ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                          {status.text}
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
}
