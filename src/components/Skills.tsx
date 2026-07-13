import { motion } from "motion/react";
import { Check, ShieldCheck, Sparkles, Code, HeartHandshake, Award } from "lucide-react";
import { TECHNICAL_SKILLS, PROFESSIONAL_SKILLS } from "../data";

export default function Skills() {
  const professionalSkillDescriptions: { [key: string]: string } = {
    "Communication": "Articulate speaker with an aptitude for translating complex technical concepts to non-technical users.",
    "Customer Service": "Trained in fast-paced retail and restaurant settings to deliver patient, high-quality client care.",
    "Teamwork": "Collaborated with multi-disciplinary teams at Howden Insurance and Sainsbury's to meet strict collective objectives.",
    "Problem Solving": "Logical troubleshooting mindset honed through software engineering, network routing, and hardware diagnostics.",
    "Organisation": "Highly structured coordinator with experience compiling transaction records and auditing complex invoices.",
    "Attention to Detail": "Meticulous reviewer of receipts, ledger records, and hardware configurations to verify error-free compliance."
  };

  return (
    <section id="skills" className="py-24 bg-slate-950 border-b border-slate-900 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="skills-header">
          <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">Capabilities Matrix</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-white tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed">
            A balanced combination of technical IT/networking proficiencies and highly-rated interpersonal strengths.
          </p>
        </div>

        {/* Skills Division */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto" id="skills-dual-grid">
          
          {/* Technical Section */}
          <div className="space-y-6" id="technical-skills-section">
            <div className="flex items-center gap-2 mb-6" id="technical-skills-header">
              <div className="p-2 bg-indigo-950/50 border border-indigo-900/40 rounded-lg text-indigo-400">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white font-sans">
                Technical Proficiencies
              </h3>
            </div>

            <div className="space-y-5 bg-slate-900/60 backdrop-blur-md border border-slate-850 p-6 sm:p-8 rounded-2xl" id="technical-skills-bars">
              {TECHNICAL_SKILLS.map((skill) => (
                <div key={skill.name} className="space-y-2" id={`tech-skill-${skill.name.replace(/\s+/g, "-")}`}>
                  <div className="flex justify-between text-xs font-semibold font-mono text-slate-300">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  {/* Outer track */}
                  <div className="h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-900">
                    {/* Inner progress filled on scroll */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-indigo-650 rounded-full shadow-sm shadow-indigo-500/20"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Strengths Section */}
          <div className="space-y-6" id="professional-skills-section">
            <div className="flex items-center gap-2 mb-6" id="professional-skills-header">
              <div className="p-2 bg-indigo-950/50 border border-indigo-900/40 rounded-lg text-indigo-400">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white font-sans">
                Interpersonal & Professional Traits
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="professional-skills-grid">
              {PROFESSIONAL_SKILLS.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-slate-900/60 backdrop-blur-md border border-slate-850 p-4 sm:p-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col hover:border-indigo-500/30"
                  id={`prof-skill-card-${skill.replace(/\s+/g, "-")}`}
                >
                  <div className="flex items-center gap-2 mb-2" id={`prof-skill-title-container-${skill.replace(/\s+/g, "-")}`}>
                    <div className="w-5 h-5 rounded-full bg-indigo-950/50 border border-indigo-900/40 flex items-center justify-center text-indigo-400 shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="font-bold text-white text-sm font-sans tracking-tight">
                      {skill}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans flex-grow">
                    {professionalSkillDescriptions[skill] || "Highly effective trait demonstrated through successful multi-tasking and professional corporate engagements."}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Quick Credentials / Badging Accent Banner */}
        <div className="mt-16 bg-indigo-950/35 border border-indigo-900/30 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-lg shadow-indigo-950/20" id="skills-accent-banner">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-500/5 rounded-full filter blur-xl" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-900/50 border border-indigo-800/40 text-[10px] font-mono tracking-wider uppercase text-indigo-300">
                <Award className="w-3.5 h-3.5 text-yellow-400" />
                <span>Specialist Badging</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-sans tracking-tight">
                SimNet & Cisco Network Coursework Validated
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm font-sans max-w-xl">
                Accrued 70+ hours of Microsoft Office testing suite validation, alongside rigorous packet tracer routing simulations.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 font-mono text-[10px]">
              <span className="bg-indigo-900/30 border border-indigo-800/20 px-3 py-1.5 rounded-lg text-indigo-300 font-medium">Word Certified</span>
              <span className="bg-indigo-900/30 border border-indigo-800/20 px-3 py-1.5 rounded-lg text-indigo-300 font-medium">Excel Certified</span>
              <span className="bg-indigo-900/30 border border-indigo-800/20 px-3 py-1.5 rounded-lg text-indigo-300 font-medium">PowerPoint Certified</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
