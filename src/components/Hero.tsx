import { motion } from "motion/react";
import { Github, Linkedin, Mail, FileText, ArrowDown, MapPin, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface HeroProps {
  onPrint: () => void;
}

export default function Hero({ onPrint }: HeroProps) {
  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-950 no-print"
    >
      {/* Visual background accents */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-indigo-900/10 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-900/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse duration-5000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy - 7 Cols */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left" id="hero-text-content">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-950/40 border border-indigo-900/40 text-indigo-300 text-xs font-mono font-medium tracking-tight"
              id="hero-badge"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-spin" />
              <span>Available for Technical & Marketing Opportunities</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-sans text-white tracking-tight leading-none"
              id="hero-headline"
            >
              Hi, I'm <span className="block text-indigo-400 mt-1">{PERSONAL_INFO.name}</span>
            </motion.h1>

            {/* Subheading/Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-200 tracking-tight"
              id="hero-subheading"
            >
              {PERSONAL_INFO.title}
            </motion.h2>

            {/* Bio paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans font-normal"
              id="hero-bio"
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* Meta badges: Location, University */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-mono text-slate-300"
              id="hero-meta-badges"
            >
              <div className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-850 rounded-lg px-3 py-1.5 shadow-sm shadow-indigo-950/20">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-850 rounded-lg px-3 py-1.5 shadow-sm shadow-indigo-950/20">
                <span className="font-bold text-indigo-400">UEL</span>
                <span>BSc Computer Science</span>
              </div>
            </motion.div>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2 hero-buttons"
              id="hero-cta-buttons"
            >
              <button
                onClick={handleScrollToContact}
                className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold tracking-tight shadow-lg shadow-indigo-500/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                id="hero-contact-btn"
              >
                <Mail className="w-4 h-4" />
                <span>Let's Connect</span>
              </button>
              <button
                onClick={onPrint}
                className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-850 text-slate-200 border border-slate-850 rounded-xl text-sm font-semibold tracking-tight shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                id="hero-download-btn"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Download Resume PDF</span>
              </button>
            </motion.div>

            {/* Social profiles & quick email */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-5 pt-4 text-slate-400"
              id="hero-social-links"
            >
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                referrerPolicy="no-referrer"
                className="hover:text-indigo-400 transition-colors cursor-pointer flex items-center gap-1.5 text-sm font-mono"
                title="LinkedIn Profile"
                id="hero-linkedin-link"
              >
                <Linkedin className="w-5 h-5 text-slate-400 hover:text-indigo-400 transition-colors" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <span className="text-slate-800">|</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                referrerPolicy="no-referrer"
                className="hover:text-indigo-400 transition-colors cursor-pointer flex items-center gap-1.5 text-sm font-mono"
                title="GitHub Profile"
                id="hero-github-link"
              >
                <Github className="w-5 h-5 text-slate-400 hover:text-indigo-400 transition-colors" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <span className="text-slate-800">|</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-indigo-400 transition-colors cursor-pointer flex items-center gap-1.5 text-sm font-mono"
                title="Email Kajana"
                id="hero-email-link"
              >
                <Mail className="w-5 h-5 text-slate-400 hover:text-indigo-400 transition-colors" />
                <span className="hidden sm:inline">{PERSONAL_INFO.email}</span>
              </a>
            </motion.div>
          </div>

          {/* Visual Bento Feature Accent Panel - 5 Cols */}
          <div className="lg:col-span-5 relative" id="hero-visual-card-panel">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-900/80 backdrop-blur-md border border-slate-850 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6 relative z-10"
              id="hero-profile-bento-card"
            >
              {/* Card Title Header */}
              <div className="flex items-center justify-between border-b border-slate-850 pb-4" id="hero-bento-header">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Candidate Blueprint</span>
                <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
              </div>

              {/* Summary Stats */}
              <div className="space-y-4" id="hero-bento-stats">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-850 hover:border-slate-800 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-indigo-900/30 border border-indigo-800/40 flex items-center justify-center text-indigo-400 text-xs font-mono font-bold">CS</div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">BSc Hons Computer Science</h4>
                      <p className="text-[10px] text-slate-400 font-mono">University of East London</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold bg-indigo-950/40 border border-indigo-900/30 text-indigo-300 px-2 py-1 rounded font-mono">Active</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-850 hover:border-slate-800 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-indigo-900/30 border border-indigo-800/40 flex items-center justify-center text-indigo-400 text-xs font-mono font-bold">IT</div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">Trainee Support Technician</h4>
                      <p className="text-[10px] text-slate-400 font-mono">Hardware & System Diagnostics</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold bg-indigo-950/40 border border-indigo-900/30 text-indigo-300 px-2 py-1 rounded font-mono">Certified</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-850 hover:border-slate-800 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-indigo-900/30 border border-indigo-800/40 flex items-center justify-center text-indigo-400 text-xs font-mono font-bold">NET</div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">Cisco Network Design</h4>
                      <p className="text-[10px] text-slate-400 font-mono">VLANs, Subnets & DNS Security</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold bg-indigo-950/40 border border-indigo-900/30 text-indigo-300 px-2 py-1 rounded font-mono">Hands-on</span>
                </div>
              </div>

              {/* Skills Tags Preview */}
              <div className="space-y-2" id="hero-bento-skills">
                <span className="text-xs font-semibold text-slate-200 block">Core Toolkit</span>
                <div className="flex flex-wrap gap-1.5" id="hero-bento-skills-tags">
                  {["HTML & CSS", "Cisco Packet Tracer", "DNS & TCP/IP", "Windows IT Support", "Social Media"].map((item) => (
                    <span key={item} className="text-[10px] font-mono bg-slate-950 border border-slate-850 hover:border-indigo-500/30 transition-colors text-slate-300 px-2 py-1 rounded-md">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex justify-center mt-12 animate-bounce" id="hero-scroll-indicator">
          <button
            onClick={() => {
              const el = document.getElementById("experience");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-indigo-400 transition-colors cursor-pointer"
            id="hero-scroll-indicator-btn"
          >
            <span>Explore Experience</span>
            <ArrowDown className="w-4 h-4 text-indigo-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
