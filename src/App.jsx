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

  const navItems = ["Home", "Projects", "Skills", "Suggestions"];

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">

        {/* NAVBAR */}
        <nav
          className="fixed top-0 left-0 right-0 z-50 
          bg-white/90 dark:bg-gray-900/80 
          backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
        >
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

            {/* Logo */}
            <Link
              to="/"
              onClick={() => setNavOpen(false)}
              className="relative inline-block group text-2xl md:text-3xl font-extrabold tracking-tight
              bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700 
              bg-clip-text text-transparent
              drop-shadow-[0_2px_6px_rgba(168,85,247,0.6)] 
              dark:drop-shadow-[0_0_12px_rgba(168,85,247,0.9)]
              hover:brightness-125 hover:scale-105 transition-all duration-300"
            >
              Divyansh Singh
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden md:flex gap-10 font-semibold">
              {navItems.map((item) => (
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

              {/* Mobile Toggle */}
              <button
                onClick={() => setNavOpen(!navOpen)}
                className="md:hidden"
                aria-label="Toggle Menu"
              >
                <ChevronDown
                  size={28}
                  className={`transition-transform duration-300 ${
                    navOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* ✅ MOBILE DROPDOWN MENU */}
          {navOpen && (
            <div
              className="md:hidden absolute top-full left-0 w-full
              bg-white dark:bg-gray-900
              border-t border-gray-200 dark:border-gray-800
              shadow-xl z-50 pointer-events-auto"
            >
              <ul className="flex flex-col py-6 space-y-6 text-center font-semibold">
                {navItems.map((item) => (
                  <li key={item}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      onClick={() => setNavOpen(false)}
                      className="block text-lg hover:text-purple-600 dark:hover:text-purple-400 transition"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
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
        <footer
          className="py-12 text-center 
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
