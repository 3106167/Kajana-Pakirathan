import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin, Landmark } from "lucide-react";
import { EDUCATION_LIST } from "../data";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-950/40 border-b border-slate-900 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="education-header">
          <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">Academic Foundation</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-white tracking-tight">
            Education & Qualifications
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed">
            A comprehensive background in computing, software architecture, and practical information technology studies in the United Kingdom.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto" id="education-grid">
          {EDUCATION_LIST.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/60 backdrop-blur-md border border-slate-850 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:border-indigo-500/30"
              id={`education-card-${edu.id}`}
            >
              <div className="space-y-4">
                {/* Academic Icon Badge */}
                <div className="w-12 h-12 rounded-xl bg-indigo-950/50 border border-indigo-900/40 flex items-center justify-center text-indigo-400" id={`education-icon-${edu.id}`}>
                  <GraduationCap className="w-6 h-6" />
                </div>

                {/* Date range */}
                <div className="flex items-center gap-1.5 text-xs text-indigo-300 font-mono" id={`education-period-${edu.id}`}>
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{edu.period}</span>
                </div>

                {/* Degree & Inst */}
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug font-sans">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-slate-300 font-medium font-sans">
                    <Landmark className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>{edu.institution}</span>
                  </div>
                </div>

                {/* Details */}
                {edu.details && (
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans pt-1">
                    {edu.details}
                  </p>
                )}
              </div>

              {/* Bottom tag decoration */}
              <div className="pt-4 mt-6 border-t border-slate-850 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Degree Milestone</span>
                <span className="font-bold text-slate-200">London, UK</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
