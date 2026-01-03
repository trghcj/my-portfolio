import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ChevronDown, Sun, Moon } from 'lucide-react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Suggestions from './pages/Suggestions';
import { Analytics } from '@vercel/analytics/react';
import { useTheme } from "./context/useTheme";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      {/* Fixed Navbar - Enhanced */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg z-50 shadow-md border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:opacity-90 transition"
          >
            Divyansh Singh
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-10 font-semibold text-gray-700 dark:text-gray-200">
            <li>
              <Link to="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-purple-600 dark:hover:text-purple-400 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/skills" className="hover:text-purple-600 dark:hover:text-purple-400 transition">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/suggestions" className="hover:text-purple-600 dark:hover:text-purple-400 transition">
                Suggestions
              </Link>
            </li>
          </ul>

          {/* Right Controls: Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 
              text-gray-800 dark:text-gray-200 hover:scale-110 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="md:hidden p-2 text-gray-800 dark:text-white"
            >
              <ChevronDown
                size={32}
                className={`transition-transform duration-300 ${navOpen ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {navOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-xl border-t border-gray-200 dark:border-gray-800">
            <ul className="flex flex-col py-6 px-8 text-lg font-medium text-gray-800 dark:text-gray-200">
              <li className="py-3">
                <Link to="/" onClick={() => setNavOpen(false)} className="block hover:text-purple-600 dark:hover:text-purple-400 transition">
                  Home
                </Link>
              </li>
              <li className="py-3">
                <Link to="/projects" onClick={() => setNavOpen(false)} className="block hover:text-purple-600 dark:hover:text-purple-400 transition">
                  Projects
                </Link>
              </li>
              <li className="py-3">
                <Link to="/skills" onClick={() => setNavOpen(false)} className="block hover:text-purple-600 dark:hover:text-purple-400 transition">
                  Skills
                </Link>
              </li>
              <li className="py-3">
                <Link to="/suggestions" onClick={() => setNavOpen(false)} className="block hover:text-purple-600 dark:hover:text-purple-400 transition">
                  Suggestions
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Main Content with Top Padding */}
      <main className="pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/suggestions" element={<Suggestions />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-gray-50 dark:bg-gray-950 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
        <p className="text-lg mb-2">
          Built with passion using React, Vite, Tailwind CSS & Firebase
        </p>
        <p className="text-purple-600 dark:text-purple-400 font-medium">
          © 2026 Divyansh Singh. All rights reserved.
        </p>
      </footer>

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}

export default App;