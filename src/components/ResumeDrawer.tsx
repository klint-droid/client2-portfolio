import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, FileDown, Check, Building2, Calendar, MapPin, Mail, Phone, GraduationCap } from 'lucide-react';

interface ResumeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNotify: (msg: string) => void;
}

export const ResumeDrawer: React.FC<ResumeDrawerProps> = ({ isOpen, onClose, onNotify }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    onNotify('Downloading Jeanette G. Gepiga Resume (PDF)...');
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(20, 18, 16, 0.65)',
        backdropFilter: 'blur(6px)',
        animation: 'fadeIn 0.2s ease forwards',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '820px',
          height: '100%',
          backgroundColor: 'var(--bg-primary)',
          boxShadow: 'var(--shadow-drawer)',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          borderLeft: '1px solid var(--border-strong)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '18px 32px',
            backgroundColor: 'rgba(250, 247, 242, 0.95)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid var(--border-hairline)',
          }}
        >
          <div>
            <span
              style={{
                fontSize: '0.72rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: 'var(--accent)',
              }}
            >
              Executive Curriculum Vitae
            </span>
            <div className="serif" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
              Jeanette G. Gepiga
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href={portfolioData.personal.resumeUrl}
              download="Jeanette-G-Gepiga-Resume.pdf"
              onClick={handleDownload}
              className="btn-solid"
              style={{ padding: '8px 18px', fontSize: '0.82rem' }}
            >
              <FileDown size={14} />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--text-main)',
                border: '1px solid var(--border-hairline)',
              }}
              aria-label="Close resume preview"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {/* Document Top Box */}
          <div
            style={{
              padding: '28px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-hairline)',
              borderRadius: 'var(--radius-md)',
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '20px', marginBottom: '18px' }}>
              <div>
                <h1 className="serif" style={{ fontSize: '2.2rem', fontWeight: 700, lineHeight: 1.1 }}>
                  JEANETTE G. GEPIGA
                </h1>
                <div
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    marginTop: '6px',
                  }}
                >
                  General Virtual Assistant
                </div>
              </div>

              {/* Quick Contacts */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.86rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)' }}>
                  <Phone size={14} color="var(--accent)" />
                  <span>{portfolioData.personal.phone}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)' }}>
                  <Mail size={14} color="var(--accent)" />
                  <span>{portfolioData.personal.email}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)' }}>
                  <MapPin size={14} color="var(--accent)" />
                  <span>{portfolioData.personal.location}</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '18px' }}>
              <div
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--text-main)',
                  marginBottom: '8px',
                }}
              >
                Professional Summary
              </div>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                {portfolioData.personal.bioLead} {portfolioData.personal.bioBody}
              </p>
            </div>
          </div>

          {/* Education & Certifications Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
            }}
            className="drawer-split"
          >
            <div
              style={{
                padding: '24px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-hairline)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <GraduationCap size={18} color="var(--accent)" />
                <span style={{ fontSize: '0.74rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Education Background
                </span>
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '4px' }}>
                {portfolioData.education.degree}
              </div>
              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '4px' }}>
                {portfolioData.education.major}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-subtle)' }}>
                {portfolioData.education.institution} | {portfolioData.education.years}
              </div>
            </div>

            <div
              style={{
                padding: '24px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-hairline)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <span style={{ fontSize: '0.74rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>
                Trainings & Certifications
              </span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {portfolioData.certifications.map((c) => (
                  <li key={c.title} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem' }}>
                    <Check size={13} color="var(--accent)" />
                    <span>{c.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Professional Experience Section */}
          <div>
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: 'var(--text-main)',
                marginBottom: '16px',
                paddingBottom: '8px',
                borderBottom: '2px solid var(--border-strong)',
              }}
            >
              Professional Experience (8+ Years)
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {portfolioData.experiences.map((exp) => (
                <div
                  key={exp.id}
                  style={{
                    padding: '24px',
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-hairline)',
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '8px', marginBottom: '10px' }}>
                    <div>
                      <div className="serif" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                        {exp.role}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 600 }}>
                        <Building2 size={14} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: 'var(--text-subtle)' }}>
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
                    {exp.highlights.map((h, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                        <span style={{ color: 'var(--accent)', marginTop: '4px' }}>•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Call to Action */}
          <div
            style={{
              padding: '24px',
              backgroundColor: 'var(--dark-bg)',
              color: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>Download the Original Document</div>
              <div style={{ fontSize: '0.84rem', color: '#B8AEA3' }}>2-Page High Resolution PDF (436 KB)</div>
            </div>
            <a
              href={portfolioData.personal.resumeUrl}
              download="Jeanette-G-Gepiga-Resume.pdf"
              onClick={handleDownload}
              className="btn-camel"
            >
              <FileDown size={16} />
              <span>Download PDF Resume</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @media (max-width: 600px) {
          .drawer-split {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
