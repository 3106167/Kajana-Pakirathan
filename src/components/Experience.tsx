import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { WORK_EXPERIENCES } from "../data";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <section id="experience" className="py-24 bg-slate-950 border-y border-slate-900 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="experience-header">
          <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">Employment History</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed">
            A proven record of reliability, collaborative teamwork, and detail-oriented technical execution across various commercial domains in London.
          </p>
        </div>

        {/* Timeline Engine */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-4xl mx-auto"
          id="experience-timeline"
        >
          {/* Vertical central spine line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-slate-850 -translate-x-1/2" id="timeline-spine" />

          <div className="space-y-12 md:space-y-16" id="timeline-cards-container">
            {WORK_EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                  id={`experience-timeline-item-${exp.id}`}
                >
                  {/* Timeline node bullet point indicator */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 flex items-center justify-center z-10" id={`timeline-node-${exp.id}`}>
                    <div className="w-8 h-8 rounded-full bg-slate-900 border-4 border-slate-950 flex items-center justify-center shadow-lg">
                      <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
                    </div>
                  </div>

                  {/* Empty balance side on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Actual Card Content side */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8" id={`timeline-content-side-${exp.id}`}>
                    <div className="bg-slate-900/60 backdrop-blur-md border border-slate-850 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-indigo-500/30">
                      
                      {/* Meta Banner */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-indigo-300 bg-indigo-950/40 border border-indigo-900/30 px-2.5 py-1 rounded-md">
                          <Calendar className="w-3 h-3 text-indigo-400" />
                          <span>{exp.period}</span>
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-slate-400 font-mono">
                          <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                          <span>{exp.location}</span>
                        </span>
                      </div>

                      {/* Header Title */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white tracking-tight font-sans">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-semibold text-indigo-400 font-sans">
                          {exp.company}
                        </p>
                      </div>

                      {/* Responsibilities bullets */}
                      <ul className="space-y-2.5 mb-6 text-slate-300 text-xs sm:text-sm leading-relaxed" id={`timeline-bullets-${exp.id}`}>
                        {exp.bullets.map((bullet, bIndex) => (
                          <li key={bIndex} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills Gained Tags */}
                      <div className="pt-4 border-t border-slate-850" id={`timeline-skills-${exp.id}`}>
                        <span className="text-[11px] font-mono text-slate-500 block mb-2 font-bold uppercase tracking-wider">
                          Competencies Demonstrated
                        </span>
                        <div className="flex flex-wrap gap-1.5" id={`timeline-skills-tags-${exp.id}`}>
                          {exp.skillsGained.map((skill) => (
                            <span
                              key={skill}
                              className="text-xs bg-slate-950 hover:bg-slate-900 text-slate-300 transition-colors px-2.5 py-1 rounded-md font-sans border border-slate-850 hover:border-indigo-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
