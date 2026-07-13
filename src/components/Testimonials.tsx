import { motion } from "motion/react";
import { Star, Quote, Award } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-950/40 border-b border-slate-900 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="testimonials-header">
          <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">Endorsements</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-white tracking-tight">
            Professional Recommendations
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed">
            Kind words and training feedback from supervisors, operations managers, and professional training partners.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" id="testimonials-grid">
          {TESTIMONIALS.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/60 backdrop-blur-md border border-slate-850 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between relative group"
              id={`testimonial-card-${test.id}`}
            >
              {/* Decorative quotation mark */}
              <div className="absolute top-4 right-6 text-slate-950/60 group-hover:text-indigo-950/20 transition-colors" id={`testimonial-quote-bg-${test.id}`}>
                <Quote className="w-12 h-12 stroke-[3]" />
              </div>

              <div className="space-y-6 relative z-10">
                {/* 5-star rating */}
                <div className="flex items-center gap-0.5 text-yellow-500" id={`testimonial-rating-${test.id}`}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Testimonial message */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic font-sans">
                  "{test.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-slate-850 flex items-center gap-3 relative z-10" id={`testimonial-author-${test.id}`}>
                {test.avatarUrl ? (
                  <img
                    src={test.avatarUrl}
                    alt={test.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-slate-850 shadow-sm"
                    id={`testimonial-avatar-${test.id}`}
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-indigo-950/50 border border-indigo-900/30 flex items-center justify-center text-indigo-400 font-semibold text-sm">
                    {test.name.substring(0, 2)}
                  </div>
                )}
                <div className="text-left">
                  <h4 className="text-xs sm:text-sm font-bold text-white font-sans tracking-tight">
                    {test.name}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-mono">
                    {test.role} • <span className="font-semibold text-indigo-400">{test.company}</span>
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
