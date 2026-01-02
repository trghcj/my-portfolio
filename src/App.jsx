import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Suggestions from './pages/Suggestions';
import { Analytics } from '@vercel/analytics/react'; // ← Import Analytics

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white">Divyansh Singh</Link>
          
          <ul className="hidden md:flex gap-8 text-white font-medium">
            <li><Link to="/" className="hover:text-purple-400 transition">Home</Link></li>
            <li><Link to="/projects" className="hover:text-purple-400 transition">Projects</Link></li>
            <li><Link to="/skills" className="hover:text-purple-400 transition">Skills</Link></li>
            <li><Link to="/suggestions" className="hover:text-purple-400 transition">Suggestions</Link></li>
          </ul>

          <button className="md:hidden text-white" onClick={() => setNavOpen(!navOpen)}>
            <ChevronDown size={32} className={`${navOpen ? "rotate-180" : ""} transition-transform`} />
          </button>
        </div>

        {navOpen && (
          <ul className="md:hidden flex flex-col gap-4 px-6 py-4 bg-gray-900/95 text-white font-medium">
            <li><Link to="/" onClick={() => setNavOpen(false)}>Home</Link></li>
            <li><Link to="/projects" onClick={() => setNavOpen(false)}>Projects</Link></li>
            <li><Link to="/skills" onClick={() => setNavOpen(false)}>Skills</Link></li>
            <li><Link to="/suggestions" onClick={() => setNavOpen(false)}>Suggestions</Link></li>
          </ul>
        )}
      </nav>

      {/* Routes */}
      <div className="pt-20"> {/* Prevents content from hiding under navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/suggestions" element={<Suggestions />} />
        </Routes>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white text-center">
        <p className="text-lg">No boilerplate, just components and classes</p>
        <p className="mt-3 text-purple-300">© 2026 Divyansh Singh. All rights reserved.</p>
      </footer>

      {/* Vercel Analytics */}
      <Analytics /> {/* ← Add this at the root of your app */}
    </>
  );
}

export default App;
