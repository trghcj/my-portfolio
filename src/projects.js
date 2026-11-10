export const projects = [
  {
    title: "Smart Drive Assistant – AI Agent for Google Drive",
    desc: "An autonomous AI agent for Google Drive that turns plain-English commands into real actions: organizing files, renaming, detecting duplicates via MD5 checksums, and scheduling clean-up sweeps. Every plan is previewed as a dry-run card with one-click undo, and pasted images are OCR'd and filed straight into Drive.",
    tech: ["React 19", "FastAPI", "Gemini Flash", "Google Drive API", "APScheduler", "Tailwind CSS"],
    live: "https://smart-drive-assistant-lovat.vercel.app",
    github: "https://github.com/trghcj/smart-drive-assistant",
    image: "/SmartDrive.png"
  },
  {
    title: "YouTube Playlist Analyzer – Chrome Extension",
    desc: "A Manifest V3 Chrome extension that calculates how long any playlist or video takes to watch at every playback speed. It tracks remaining time live as you watch, builds daily viewing schedules, and lets you search and sort videos, all inside an in-page panel that follows YouTube's navigation without reloads.",
    tech: ["JavaScript", "Chrome Extension (MV3)", "DOM APIs", "HTML/CSS"],
    github: "https://github.com/trghcj/youtube-playlist-extension",
    image: "/PlaylistAnalyzer.png",
    imageFit: "contain"
  },
  {
    title: "Zynkup – Campus Event Platform",
    desc: "ZynkUp is a smart networking and event management platform built using Flutter. It helps users connect, interact, manage events, and build communities.",
    tech: ["Flutter", "FastAPI Backend", "REST API Integration", "JWT Auth", "SQLite"],
    live: "https://zynkup-app.vercel.app/",
    github: "https://github.com/trghcj/zynkup-app",
    image: "/Zynkup_portfolio.jpg",
    imageFit: "contain"
  },
  {
    title: "Talvix – Streamline Hiring",
    desc: "Streamline Hiring. Track Talent. Drive Decisions. A comprehensive platform to manage hiring processes and track potential candidates effectively.",
    tech: ["React", "Tailwind CSS", "Firebase", "FastAPI", "PostgreSQL (Supabase)"],
    live: "https://talvix-six.vercel.app/",
    github: "https://github.com/trghcj/talvix",
    image: "/Talvix_Portfolio.png.jpeg"
  },
  {
    title: "ClipNest – AI Bookmark Manager",
    desc: "An intelligent, AI-powered bookmark manager that automatically extracts metadata, generates summaries, and enables semantic search for web pages, YouTube videos, and PDFs.",
    tech: ["React", "FastAPI", "PostgreSQL (pgvector)", "Gemini 1.5 Flash", "Chrome Extension"],
    live: "https://clipnest-tau.vercel.app/",
    github: "https://github.com/trghcj/ClipNest",
    image: "/clipnest_portfolio.png.jpeg"
  },
  {
    title: "TaskFlow – Full-Stack SaaS Platform",
    desc: "A modern, enterprise-grade task management platform featuring interactive Kanban workflows, real-time analytics, and automated Python-based background reminders.",
    tech: ["React", "FastAPI", "PostgreSQL", "Zustand", "Tailwind CSS"],
    live: "https://taskflow-ds.vercel.app/",
    github: "https://github.com/trghcj/TaskFlow",
    image: "/TaskFlow.jpeg"
  },
  {
    title: "CollegeDB Engine – Automated University Data Pipeline",
    desc: "A high-performance full-stack data extraction pipeline designed to automate the enrichment of university datasets. Features asynchronous web scraping, intelligent entity resolution, and real-time data streaming.",
    tech: ["FastAPI", "Python", "Tailwind CSS v4", "BeautifulSoup4", "Wikidata API"],
    live: "https://collegedb-no3d.onrender.com/",
    github: "https://github.com/trghcj/CollegeDB",
    image: "/CollegeDB.png"
  }
];