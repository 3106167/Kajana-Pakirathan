/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import PrintableCV from "./components/PrintableCV";
import { PERSONAL_INFO } from "./data";
import { Github, Linkedin, Mail, Phone, ChevronUp, Heart } from "lucide-react";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show Back-to-Top button on scroll using useEffect
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans" id="app-portfolio-root">
      {/* 1. Print-Only CV Template */}
      <PrintableCV />

      {/* 2. Interactive Portfolio Content (Hidden during Print) */}
      <div className="flex-grow flex flex-col no-print" id="interactive-content-body">
        {/* Navigation Bar */}
        <Header onPrint={handlePrint} />

        <main className="flex-grow" id="main-content-flow">
          {/* Hero Introductory Section */}
          <Hero onPrint={handlePrint} />

          {/* Work History Section */}
          <Experience />

          {/* Education Timeline */}
          <Education />

          {/* Capabilities Grid */}
          <Skills />

          {/* Selected Work Portfolio */}
          <Projects />

          {/* Insights Blog */}
          <Blog />

          {/* Recommendation Testimonials */}
          <Testimonials />

          {/* Contact & Inquiry Forms */}
          <Contact />
        </main>

        {/* Global Footer */}
        <footer className="bg-slate-950 text-slate-200 border-t border-slate-900 py-12 sm:py-16" id="app-footer">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-slate-900 pb-12">
              
              {/* Branding - 5 cols */}
              <div className="md:col-span-5 space-y-3 text-center md:text-left" id="footer-brand">
                <span className="block font-bold text-lg font-sans tracking-tight text-white">
                  {PERSONAL_INFO.name}
                </span>
                <p className="text-slate-400 text-xs sm:text-sm font-sans max-w-sm leading-relaxed">
                  Computer Science Student & Technical Support Specialist based in London. Committed to building elegant digital solutions.
                </p>
              </div>

              {/* Social Channels - 4 cols */}
              <div className="md:col-span-4 flex flex-col items-center md:items-start gap-3" id="footer-socials">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Networking Links</span>
                <div className="flex items-center gap-4 text-slate-400">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="hover:text-indigo-400 transition-colors cursor-pointer"
                    title="LinkedIn Network"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="hover:text-indigo-400 transition-colors cursor-pointer"
                    title="GitHub Projects"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="hover:text-indigo-400 transition-colors cursor-pointer"
                    title="Email Direct"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="hover:text-indigo-400 transition-colors cursor-pointer"
                    title="Call Direct"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Back to top btn - 3 cols */}
              <div className="md:col-span-3 flex justify-center md:justify-end" id="footer-scroll-top-column">
                <button
                  onClick={scrollToTop}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-xs font-semibold tracking-tight text-white transition-all cursor-pointer border border-slate-800"
                  id="footer-scroll-top-btn"
                >
                  <ChevronUp className="w-4 h-4" />
                  <span>Back to Top</span>
                </button>
              </div>

            </div>

            {/* Bottom Credits Line */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500" id="footer-credits-row">
              <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</span>
              <div className="flex items-center gap-1">
                <span>Made with</span>
                <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
                <span>in London, UK</span>
              </div>
            </div>

          </div>
        </footer>
      </div>

      {/* Floating back-to-top pill on scroll */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-slate-900 border border-slate-800 hover:border-indigo-500 text-white shadow-xl z-50 transition-all cursor-pointer hover:scale-105 duration-200 animate-in fade-in slide-in-from-bottom-4"
          title="Back to Top"
          id="floating-back-to-top"
        >
          <ChevronUp className="w-5 h-5 text-indigo-400" />
        </button>
      )}
    </div>
  );
}

