import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Network, Globe, FileSpreadsheet, ShieldCheck, ChevronRight, CheckCircle2 } from "lucide-react";
import { PROJECTS_LIST } from "../data";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Networking", "Web Dev", "Office Specialist", "Compliance"];

  // Map filters to items
  const filteredProjects = PROJECTS_LIST.filter((proj) => {
    if (filter === "All") return true;
    if (filter === "Networking") return proj.tags.some(t => ["Cisco Packet Tracer", "Subnetting", "VLAN Routing", "DNS & TCP/IP", "Network Security"].includes(t));
    if (filter === "Web Dev") return proj.tags.some(t => ["HTML & CSS", "JavaScript", "Full-Stack", "Responsive UI", "Web Standards"].includes(t));
    if (filter === "Office Specialist") return proj.tags.some(t => ["Microsoft Office", "Excel Formulas", "Data Presentation", "Office Automation"].includes(t));
    if (filter === "Compliance") return proj.tags.some(t => ["Regulatory Compliance", "Quality Control", "Service Standards"].includes(t));
    return true;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Network":
        return <Network className="w-5 h-5 text-indigo-400" />;
      case "Globe":
        return <Globe className="w-5 h-5 text-indigo-400" />;
      case "FileSpreadsheet":
        return <FileSpreadsheet className="w-5 h-5 text-indigo-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-indigo-400" />;
      default:
        return <Globe className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-950/40 border-b border-slate-900 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4" id="projects-header">
          <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">Selected Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-white tracking-tight">
            Projects & Certifications
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed">
            A showcasing of simulated systems and production designs highlighting practical technical implementation, administrative excellence, and coursework.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                filter === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-850 border border-slate-850"
              }`}
              id={`filter-tab-${cat.replace(/\s+/g, "-")}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project cards dynamic grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          id="projects-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-slate-900/60 backdrop-blur-md border border-slate-850 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:border-indigo-500/30 relative group"
                id={`project-card-${proj.id}`}
              >
                <div className="space-y-4">
                  {/* Icon & Category Header */}
                  <div className="flex items-center justify-between" id={`project-header-${proj.id}`}>
                    <div className="w-10 h-10 rounded-xl bg-indigo-950/50 flex items-center justify-center border border-indigo-900/40 shadow-sm">
                      {getIcon(proj.iconName)}
                    </div>
                    <span className="text-[10px] font-mono font-semibold tracking-wider text-indigo-400 uppercase">
                      Coursework Verified
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-white tracking-tight font-sans">
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-sans">
                      {proj.description}
                    </p>
                  </div>

                  {/* Bullet Achievements */}
                  <ul className="space-y-2 pt-2 border-t border-slate-850" id={`project-bullets-${proj.id}`}>
                    {proj.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags bottom container */}
                <div className="pt-6 mt-6 border-t border-slate-850 space-y-4" id={`project-footer-${proj.id}`}>
                  <div className="flex flex-wrap gap-1.5" id={`project-tags-${proj.id}`}>
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-indigo-300 bg-indigo-950/40 border border-indigo-900/30 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
