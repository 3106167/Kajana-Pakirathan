import { PERSONAL_INFO, WORK_EXPERIENCES, EDUCATION_LIST, PROJECTS_LIST, TECHNICAL_SKILLS, PROFESSIONAL_SKILLS } from "../data";

export default function PrintableCV() {
  return (
    <div className="hidden print:block bg-white text-black p-4 max-w-[21cm] mx-auto font-sans leading-relaxed text-xs resume-container" id="printable-cv-document">
      {/* Header Info */}
      <div className="text-center border-b-2 border-gray-900 pb-4 mb-5" id="print-header">
        <h1 className="text-3xl font-bold tracking-tight uppercase text-gray-900 font-sans mb-1">
          {PERSONAL_INFO.name}
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-mono text-gray-700 mt-2" id="print-contact-details">
          <span>{PERSONAL_INFO.location}</span>
          <span>•</span>
          <span>{PERSONAL_INFO.email}</span>
          <span>•</span>
          <span>{PERSONAL_INFO.phone}</span>
          <span>•</span>
          <span>linkedin.com/in/kajana-pakirathan</span>
        </div>
      </div>

      {/* Summary / Bio */}
      <div className="mb-5" id="print-summary">
        <p className="text-gray-800 text-justify leading-relaxed">
          {PERSONAL_INFO.bio}
        </p>
      </div>

      {/* Work Experience */}
      <div className="mb-5" id="print-experience">
        <h2 className="text-sm font-bold font-sans uppercase tracking-wider text-gray-950 border-b border-gray-400 pb-1 mb-3">
          Work Experience
        </h2>
        <div className="space-y-4">
          {WORK_EXPERIENCES.map((exp) => (
            <div key={exp.id} className="space-y-1" id={`print-exp-${exp.id}`}>
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-gray-900 text-xs">
                  {exp.role} <span className="font-normal text-gray-600">| {exp.company}, {exp.location}</span>
                </span>
                <span className="font-mono text-[10px] text-gray-600">{exp.period}</span>
              </div>
              <ul className="list-disc pl-4 space-y-0.5 text-gray-700 text-[11px]">
                {exp.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-5" id="print-education">
        <h2 className="text-sm font-bold font-sans uppercase tracking-wider text-gray-950 border-b border-gray-400 pb-1 mb-3">
          Education
        </h2>
        <div className="space-y-3">
          {EDUCATION_LIST.map((edu) => (
            <div key={edu.id} className="flex justify-between items-baseline" id={`print-edu-${edu.id}`}>
              <div>
                <span className="font-bold text-gray-900 text-xs">{edu.degree}</span>
                <span className="block text-gray-600 text-[11px]">{edu.institution}</span>
              </div>
              <span className="font-mono text-[10px] text-gray-600 shrink-0">{edu.period}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Projects & Certifications */}
      <div className="mb-5" id="print-projects">
        <h2 className="text-sm font-bold font-sans uppercase tracking-wider text-gray-950 border-b border-gray-400 pb-1 mb-3">
          Projects & Certifications
        </h2>
        <ul className="list-disc pl-4 space-y-1 text-gray-700 text-[11px]" id="print-projects-bullets">
          {PROJECTS_LIST.map((proj) => (
            <li key={proj.id}>
              <strong className="text-gray-900">{proj.title}</strong>: {proj.description}
            </li>
          ))}
        </ul>
      </div>

      {/* Skills */}
      <div className="mb-5" id="print-skills">
        <h2 className="text-sm font-bold font-sans uppercase tracking-wider text-gray-950 border-b border-gray-400 pb-1 mb-3">
          Skills
        </h2>
        <div className="space-y-1.5 text-[11px]" id="print-skills-categories">
          <div>
            <strong className="text-gray-900 font-bold">Technical:</strong>{" "}
            <span className="text-gray-700">
              {TECHNICAL_SKILLS.map(s => s.name).join(" | ")}
            </span>
          </div>
          <div>
            <strong className="text-gray-900 font-bold">Professional:</strong>{" "}
            <span className="text-gray-700">
              {PROFESSIONAL_SKILLS.join(" | ")}
            </span>
          </div>
        </div>
      </div>

      {/* References Footer */}
      <div className="text-center text-[10px] text-gray-500 italic mt-8 border-t border-gray-200 pt-3" id="print-footer">
        References available on request.
      </div>
    </div>
  );
}
