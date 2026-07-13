import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Calendar, Clock, ArrowRight, X, ChevronRight } from "lucide-react";
import { BLOG_POSTS, PERSONAL_INFO } from "../data";
import { BlogPost } from "../types";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 bg-slate-950 border-b border-slate-900 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="blog-header">
          <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">Insights & Learnings</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-white tracking-tight">
            Academic & Technical Blog
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed">
            Sharing reflections on computer science coursework, network subnetting, and digital marketing strategies.
          </p>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" id="blog-cards-grid">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/60 backdrop-blur-md border border-slate-850 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between"
              id={`blog-card-${post.id}`}
            >
              <div className="space-y-4">
                {/* Meta details */}
                <div className="flex items-center justify-between text-xs text-indigo-300 font-mono" id={`blog-card-meta-${post.id}`}>
                  <span className="bg-indigo-950/40 border border-indigo-900/30 text-indigo-300 px-2.5 py-1 rounded-md font-semibold text-[10px]">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-indigo-300">
                    <Clock className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white leading-snug font-sans hover:text-indigo-400 transition-colors">
                  {post.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans line-clamp-3">
                  {post.summary}
                </p>
              </div>

              {/* Bottom footer bar */}
              <div className="pt-6 mt-6 border-t border-slate-850 flex items-center justify-between" id={`blog-card-footer-${post.id}`}>
                <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{post.date}</span>
                </span>
                
                <button
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer animate-pulse"
                  id={`read-blog-btn-${post.id}`}
                >
                  <span>Read Article</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expandable Article Modal */}
        <AnimatePresence>
          {selectedPost && (
            <div className="fixed inset-0 z-50 overflow-y-auto" id="blog-modal-container">
              {/* Overlay background with blur */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPost(null)}
                className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm cursor-pointer"
                id="blog-modal-overlay"
              />

              {/* Content Panel */}
              <div className="flex min-h-full items-center justify-center p-4 sm:p-6 md:p-8" id="blog-modal-panel-wrapper">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 30 }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                  className="relative w-full max-w-3xl bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-800 z-10 flex flex-col max-h-[85vh]"
                  id="blog-modal-content-panel"
                >
                  {/* Sticky Header with Title */}
                  <div className="p-6 border-b border-slate-850 flex items-center justify-between bg-slate-900 shrink-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="bg-indigo-950/40 border border-indigo-900/30 text-indigo-300 px-3 py-1 rounded-full text-xs font-bold font-mono">
                        {selectedPost.category}
                      </span>
                      <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        {selectedPost.date}
                      </span>
                      <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-indigo-400" />
                        {selectedPost.readTime}
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
                      id="close-blog-modal-btn"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Scrollable Content Area */}
                  <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow" id="blog-modal-body">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                      {selectedPost.title}
                    </h2>
                    
                    {/* Render Content Blocks */}
                    <div className="text-slate-300 leading-relaxed text-sm sm:text-base space-y-4 font-sans max-w-none">
                      {selectedPost.content.split("\n\n").map((para, pIdx) => {
                        // Very simple markdown parsing for headings or list elements
                        if (para.startsWith("### ")) {
                          return (
                            <h3 key={pIdx} className="text-lg sm:text-xl font-bold text-white pt-3">
                              {para.replace("### ", "")}
                            </h3>
                          );
                        }
                        if (para.startsWith("- ") || para.startsWith("* ")) {
                          return (
                            <ul key={pIdx} className="list-disc pl-5 space-y-2 text-sm text-slate-300">
                              {para.split("\n").map((li, lIdx) => (
                                <li key={lIdx}>{li.replace(/^[-*]\s+/, "")}</li>
                              ))}
                            </ul>
                          );
                        }
                        // Handle bullet numbering
                        if (/^\d+\.\s+/.test(para)) {
                          return (
                            <ol key={pIdx} className="list-decimal pl-5 space-y-2 text-sm text-slate-300">
                              {para.split("\n").map((li, lIdx) => (
                                <li key={lIdx}>{li.replace(/^\d+\.\s+/, "")}</li>
                              ))}
                            </ol>
                          );
                        }
                        // Check bold elements
                        const formattedText = para.split("**").map((text, tIdx) => {
                          if (tIdx % 2 === 1) {
                            return <strong key={tIdx} className="font-extrabold text-indigo-300">{text}</strong>;
                          }
                          return text;
                        });
                        return <p key={pIdx}>{formattedText}</p>;
                      })}
                    </div>

                    {/* Footer Tags */}
                    <div className="pt-6 border-t border-slate-850" id="blog-modal-tags">
                      <div className="flex flex-wrap gap-2">
                        {selectedPost.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono text-indigo-300 bg-indigo-950/40 border border-indigo-900/30 px-2.5 py-1 rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Footer Call-To-Action */}
                  <div className="p-6 border-t border-slate-850 bg-slate-900/80 shrink-0 flex items-center justify-between" id="blog-modal-footer">
                    <span className="text-xs text-slate-400 font-mono">Written by {PERSONAL_INFO.name}</span>
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold cursor-pointer transition-all shadow-lg shadow-indigo-500/20"
                      id="blog-modal-finish-btn"
                    >
                      Done Reading
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
