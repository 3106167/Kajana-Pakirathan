import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle, Trash2, LayoutDashboard, X, MessageSquarePlus } from "lucide-react";
import { PERSONAL_INFO } from "../data";
import { ContactInquiry } from "../types";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Admin Dashboard States
  const [showDashboard, setShowDashboard] = useState(false);
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);

  // Load inquiries from localstorage
  useEffect(() => {
    const stored = localStorage.getItem("kajana_portfolio_inquiries");
    if (stored) {
      try {
        setInquiries(JSON.parse(stored));
      } catch (e) {
        console.error("Error reading stored inquiries", e);
      }
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Basic Validations
    if (!name.trim()) return setErrorMsg("Full Name is required.");
    if (!email.trim()) return setErrorMsg("Email address is required.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return setErrorMsg("Please provide a valid email address.");
    }
    if (!subject.trim()) return setErrorMsg("Subject is required.");
    if (!message.trim()) return setErrorMsg("Message body cannot be empty.");

    setLoading(true);

    // Simulate server-side latency for realistic feel
    setTimeout(() => {
      const newInquiry: ContactInquiry = {
        id: "inq_" + Date.now(),
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
        timestamp: new Date().toLocaleString(),
      };

      const updated = [newInquiry, ...inquiries];
      setInquiries(updated);
      localStorage.setItem("kajana_portfolio_inquiries", JSON.stringify(updated));

      setLoading(false);
      setSuccess(true);
      
      // Clear fields
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 1000);
  };

  const handleDelete = (id: string) => {
    const updated = inquiries.filter((inq) => inq.id !== id);
    setInquiries(updated);
    localStorage.setItem("kajana_portfolio_inquiries", JSON.stringify(updated));
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear all submitted test inquiries?")) {
      setInquiries([]);
      localStorage.removeItem("kajana_portfolio_inquiries");
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 border-t border-slate-900 contact-form-section no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="contact-header">
          <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">Get in Touch</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-white tracking-tight">
            Contact & Inquiries
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed">
            Interested in hiring, collaborating, or discussing technical projects? Reach out directly using the form below or via official channels.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-layout-grid">
          
          {/* Quick Contact Info - 5 Cols */}
          <div className="lg:col-span-5 bg-indigo-950/35 border border-indigo-900/30 rounded-3xl p-6 sm:p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden shadow-lg shadow-indigo-950/20" id="contact-info-panel">
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-indigo-500/5 rounded-full filter blur-xl" />
            
            <div className="space-y-8 relative z-10">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-white">Contact Information</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Feel free to reach out. I aim to respond to all valid professional inquiries within 24 business hours.
                </p>
              </div>

              {/* Channels List */}
              <div className="space-y-6" id="contact-channels">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-4 group hover:text-indigo-300 transition-colors"
                  id="contact-email-channel"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-900/50 border border-indigo-800/40 flex items-center justify-center group-hover:bg-indigo-800/60 group-hover:border-indigo-750/50 transition-all">
                    <Mail className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-slate-400 uppercase">Email Me</span>
                    <span className="text-xs sm:text-sm font-semibold tracking-tight">{PERSONAL_INFO.email}</span>
                  </div>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-4 group hover:text-indigo-300 transition-colors"
                  id="contact-phone-channel"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-900/50 border border-indigo-800/40 flex items-center justify-center group-hover:bg-indigo-800/60 group-hover:border-indigo-750/50 transition-all">
                    <Phone className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-slate-400 uppercase">Call Me</span>
                    <span className="text-xs sm:text-sm font-semibold tracking-tight">{PERSONAL_INFO.phone}</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-white" id="contact-location-channel">
                  <div className="w-10 h-10 rounded-xl bg-indigo-900/50 border border-indigo-800/40 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-slate-400 uppercase">Location</span>
                    <span className="text-xs sm:text-sm font-semibold tracking-tight">{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Admin Demo dashboard Toggle Trigger */}
            <div className="pt-8 mt-12 border-t border-indigo-900/30 relative z-10 flex items-center justify-between" id="contact-admin-toggle-panel">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Developer Tools</span>
              <button
                onClick={() => setShowDashboard(!showDashboard)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-900/50 hover:bg-indigo-850/50 border border-indigo-800/40 text-[11px] font-mono font-medium text-indigo-300 hover:text-white transition-all cursor-pointer"
                id="toggle-inbox-dashboard-btn"
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>{showDashboard ? "Write Message" : "Review Inquiries (" + inquiries.length + ")"}</span>
              </button>
            </div>
          </div>

          {/* Form / Admin inbox - 7 Cols */}
          <div className="lg:col-span-7" id="contact-action-panel">
            <AnimatePresence mode="wait">
              {showDashboard ? (
                /* Admin Dashboard Review */
                <motion.div
                  key="admin-dashboard"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-900/60 backdrop-blur-md border border-slate-850 p-6 sm:p-8 rounded-3xl h-full flex flex-col justify-between"
                  id="admin-dashboard-container"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                      <div>
                        <h3 className="text-lg font-bold text-white font-sans tracking-tight">Test Inquiries Inbox</h3>
                        <p className="text-xs text-slate-400 font-sans mt-0.5">Mock server state stored dynamically in local storage.</p>
                      </div>
                      {inquiries.length > 0 && (
                        <button
                          onClick={handleClearAll}
                          className="flex items-center gap-1 text-[11px] font-mono font-semibold text-rose-400 hover:text-rose-300 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Clear All</span>
                        </button>
                      )}
                    </div>

                    {inquiries.length === 0 ? (
                      <div className="text-center py-12 space-y-3" id="admin-empty-inbox">
                        <div className="w-12 h-12 rounded-full bg-slate-950 border border-slate-850 flex items-center justify-center mx-auto">
                          <Mail className="w-6 h-6 text-slate-400" />
                        </div>
                        <p className="text-sm font-semibold text-white">Your Inbox is Empty</p>
                        <p className="text-xs text-slate-400 max-w-xs mx-auto">
                          Try submitting a message using the contact form, then toggle this dashboard back on to inspect the payload!
                        </p>
                        <button
                          onClick={() => setShowDashboard(false)}
                          className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold hover:bg-indigo-500 transition-colors cursor-pointer shadow-lg shadow-indigo-500/20"
                        >
                          <MessageSquarePlus className="w-3.5 h-3.5" />
                          <span>Go to Form</span>
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4 max-h-[350px] overflow-y-auto pr-1" id="admin-inquiries-list">
                        {inquiries.map((inq) => (
                          <div
                              key={inq.id}
                              className="bg-slate-950/60 border border-slate-850 p-4 rounded-xl space-y-2 relative group hover:border-indigo-500/30 transition-colors shadow-sm"
                              id={`inquiry-record-${inq.id}`}
                            >
                            <button
                              onClick={() => handleDelete(inq.id)}
                              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-rose-400 hover:bg-rose-950/30 rounded-lg transition-all cursor-pointer opacity-0 group-hover:opacity-100"
                              title="Delete inquiry"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>

                            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-850 pb-2">
                              <div>
                                <span className="block font-bold text-white text-xs sm:text-sm">{inq.name}</span>
                                <span className="block text-[10px] text-slate-400 font-mono -mt-0.5">{inq.email}</span>
                              </div>
                              <span className="text-[10px] text-slate-500 font-mono self-start">{inq.timestamp}</span>
                            </div>

                            <div className="space-y-1">
                              <span className="block text-xs font-bold text-indigo-300">Subj: {inq.subject}</span>
                              <p className="text-xs text-slate-350 leading-relaxed font-sans">{inq.message}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-6 border-t border-slate-850 flex justify-end">
                    <button
                      onClick={() => setShowDashboard(false)}
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold cursor-pointer transition-all shadow-lg shadow-indigo-500/20"
                    >
                      Return to Form Layout
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Interactive Contact Form */
                <motion.div
                  key="contact-form"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-900/60 backdrop-blur-md border border-slate-850 p-6 sm:p-8 rounded-3xl h-full"
                  id="contact-form-container"
                >
                  {success ? (
                    <div className="text-center py-12 space-y-4" id="contact-success-panel">
                      <div className="w-16 h-16 rounded-full bg-indigo-950/50 border border-indigo-900/40 flex items-center justify-center mx-auto text-indigo-400 animate-bounce">
                        <CheckCircle className="w-10 h-10" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg sm:text-xl font-bold text-white">Message Transmitted!</h3>
                        <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
                          Thank you for reaching out, your message has been recorded. You can review the output in the simulated submissions dashboard!
                        </p>
                      </div>
                      <button
                        onClick={() => setSuccess(false)}
                        className="px-6 py-2.5 bg-indigo-600 text-white text-xs font-semibold rounded-xl hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20 cursor-pointer"
                        id="contact-write-another-btn"
                      >
                        Write Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5" id="contact-form-element">
                      {/* Form Header */}
                      <div className="flex items-center justify-between" id="form-header-row">
                        <h3 className="text-lg font-bold text-white font-sans tracking-tight">Send a Message</h3>
                        <span className="text-[10px] text-indigo-400 font-mono uppercase font-semibold">Strictly Encrypted</span>
                      </div>

                      {/* Error Panel */}
                      {errorMsg && (
                        <div className="p-3 bg-rose-950/40 text-rose-300 text-xs font-medium rounded-lg border border-rose-900/40">
                          {errorMsg}
                        </div>
                      )}

                      {/* Dual column input row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5" id="input-group-name">
                          <label htmlFor="form-name" className="text-xs font-mono font-semibold text-indigo-400 uppercase">
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="form-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. Kajana Pakirathan"
                            className="w-full bg-slate-950 border border-slate-850 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-hidden transition-all shadow-sm font-sans"
                          />
                        </div>

                        <div className="space-y-1.5" id="input-group-email">
                          <label htmlFor="form-email" className="text-xs font-mono font-semibold text-indigo-400 uppercase">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="form-email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your.email@example.com"
                            className="w-full bg-slate-950 border border-slate-850 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-hidden transition-all shadow-sm font-sans"
                          />
                        </div>
                      </div>

                      {/* Subject field */}
                      <div className="space-y-1.5" id="input-group-subject">
                        <label htmlFor="form-subject" className="text-xs font-mono font-semibold text-indigo-400 uppercase">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="form-subject"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          placeholder="e.g. Technical Support Inquiry"
                          className="w-full bg-slate-950 border border-slate-850 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-hidden transition-all shadow-sm font-sans"
                        />
                      </div>

                      {/* Message body */}
                      <div className="space-y-1.5" id="input-group-message">
                        <label htmlFor="form-message" className="text-xs font-mono font-semibold text-indigo-400 uppercase">
                          Message Body
                        </label>
                        <textarea
                          id="form-message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={4}
                          placeholder="Please articulate your message details here..."
                          className="w-full bg-slate-950 border border-slate-850 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-hidden transition-all resize-none shadow-sm font-sans"
                        />
                      </div>

                      {/* Submit Trigger */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold tracking-tight shadow-md hover:shadow-lg disabled:bg-slate-850 disabled:text-slate-500 disabled:shadow-none transition-all cursor-pointer flex items-center justify-center gap-2"
                          id="form-submit-btn"
                        >
                          <Send className={`w-4 h-4 ${loading ? "animate-pulse" : ""}`} />
                          <span>{loading ? "Transmitting..." : "Send Message"}</span>
                        </button>
                      </div>
                    </form>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
