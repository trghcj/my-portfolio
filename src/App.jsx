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
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 shadow-lg transition-colors">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            Divyansh Singh
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 font-medium text-gray-800 dark:text-white">
            <li><Link to="/" className="hover:text-purple-500 transition">Home</Link></li>
            <li><Link to="/projects" className="hover:text-purple-500 transition">Projects</Link></li>
            <li><Link to="/skills" className="hover:text-purple-500 transition">Skills</Link></li>
            <li><Link to="/suggestions" className="hover:text-purple-500 transition">Suggestions</Link></li>
          </ul>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white hover:scale-110 transition"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-900 dark:text-white"
              onClick={() => setNavOpen(!navOpen)}
            >
              <ChevronDown
                size={32}
                className={`${navOpen ? 'rotate-180' : ''} transition-transform`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {navOpen && (
          <ul className="md:hidden flex flex-col gap-4 px-6 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-medium transition-colors">
            <li><Link to="/" onClick={() => setNavOpen(false)}>Home</Link></li>
            <li><Link to="/projects" onClick={() => setNavOpen(false)}>Projects</Link></li>
            <li><Link to="/skills" onClick={() => setNavOpen(false)}>Skills</Link></li>
            <li><Link to="/suggestions" onClick={() => setNavOpen(false)}>Suggestions</Link></li>
          </ul>
        )}
      </nav>

      {/* Routes */}
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/suggestions" element={<Suggestions />} />
        </Routes>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-white text-center transition-colors">
        <p className="text-lg">
          No boilerplate, just components and classes
        </p>
        <p className="mt-3 text-purple-500">
          © 2026 Divyansh Singh. All rights reserved.
        </p>
      </footer>

      {/* Vercel Analytics */}
      <Analytics />
    </>
  );
}

export default App;
