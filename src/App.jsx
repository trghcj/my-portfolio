import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ChevronDown, Sun, Moon } from "lucide-react";
import { Analytics } from "@vercel/analytics/react";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Suggestions from "./pages/Suggestions";

import { useTheme } from "./context/useTheme";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">

        {/* NAVBAR */}
        <nav className="fixed top-0 left-0 right-0 z-50 
          bg-white/90 dark:bg-gray-900/80 
          backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
        >
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

            {/* Logo with fixed visibility in both modes */}
            <Link
              to="/"
              className="relative inline-block group text-2xl md:text-3xl font-extrabold tracking-tight
                bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700 
                bg-clip-text text-transparent
                drop-shadow-[0_2px_6px_rgba(168,85,247,0.6)] 
                dark:drop-shadow-[0_0_12px_rgba(168,85,247,0.9)]
                hover:brightness-125 hover:scale-105 transition-all duration-300"
            >
              Divyansh Singh

              {/* Optional hover underline glow */}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-600 to-pink-600 
                transition-all duration-400 group-hover:w-full opacity-80 dark:opacity-90"></span>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden md:flex gap-10 font-semibold">
              {["Home", "Projects", "Skills", "Suggestions"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="p-3 rounded-full 
                bg-gray-100 dark:bg-gray-800 
                hover:scale-110 transition"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setNavOpen(!navOpen)}
                className="md:hidden"
              >
                <ChevronDown
                  size={28}
                  className={`transition-transform ${navOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </div>
        </nav>

        {/* ROUTES */}
        <main className="pt-24 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/suggestions" element={<Suggestions />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="py-12 text-center 
          bg-gray-50/90 dark:bg-gray-950/90 
          backdrop-blur relative z-10"
        >
          © 2026 Divyansh Singh
        </footer>

        <Analytics />
      </div>
    </div>
  );
}

export default App;