import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Award, Laptop, Layers, CheckCircle } from 'lucide-react';

export const SkillsEducation: React.FC = () => {
  return (
    <section id="skills" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Competency Framework</div>
          <h2 className="section-title">Education, Tools, and Core Strengths.</h2>
          <p className="section-description">
            A comprehensive balance of academic financial training, certified virtual assistance procedures, and
            daily proficiency across modern business software suites.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'start',
          }}
          className="skills-grid"
        >
          {/* Left Column: Education & Certifications */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Academic Education Card */}
            <div
              className="card"
              style={{
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--border-medium)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  marginBottom: '16px',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--accent-soft)',
                    color: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <GraduationCap size={26} />
                </div>
                <div>
                  <span
                    style={{
                      fontSize: '0.74rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      fontWeight: 600,
                      color: 'var(--accent)',
                    }}
                  >
                    Education Background
                  </span>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                    University of Caloocan City | 2011 – 2016
                  </div>
                </div>
              </div>

              <h3
                className="serif-font"
                style={{
                  fontSize: '1.6rem',
                  color: 'var(--text-primary)',
                  marginBottom: '8px',
                  lineHeight: 1.3,
                }}
              >
                {portfolioData.education.degree}
              </h3>
              <div
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: 'var(--accent)',
                  marginBottom: '14px',
                }}
              >
                {portfolioData.education.major}
              </div>
              <p style={{ fontSize: '0.94rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
                {portfolioData.education.summary} Provides a firm analytical grounding in numeracy, business
                processes, invoice verification, and operational risk mitigation.
              </p>
            </div>

            {/* Trainings & Certifications Grid */}
            <div className="card" style={{ backgroundColor: 'var(--card-bg)' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '20px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--accent-soft)',
                    color: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Award size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Trainings & Certifications
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Verified specialized professional modules
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '12px',
                }}
                className="cert-grid"
              >
                {portfolioData.certifications.map((cert) => (
                  <div
                    key={cert.title}
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-md)',
                      padding: '14px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle size={15} color="var(--accent)" />
                      <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {cert.title}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', paddingLeft: '23px' }}>
                      {cert.focus}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Software Experience & Core Strengths */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Software Experience */}
            <div className="card" style={{ backgroundColor: 'var(--card-bg)' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '24px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--accent-soft)',
                    color: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Laptop size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Software & System Experience
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Tools mastered across 8+ years of remote operations
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {portfolioData.softwareSkills.map((category) => (
                  <div key={category.category}>
                    <div
                      style={{
                        fontSize: '0.76rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--accent)',
                        marginBottom: '8px',
                      }}
                    >
                      {category.category}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {category.skills.map((skill) => (
                        <div
                          key={skill}
                          style={{
                            fontSize: '0.85rem',
                            backgroundColor: 'var(--bg-primary)',
                            color: 'var(--text-primary)',
                            padding: '6px 14px',
                            borderRadius: 'var(--radius-full)',
                            border: '1px solid var(--border-medium)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                          }}
                        >
                          <span
                            style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              backgroundColor: 'var(--accent)',
                            }}
                          />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Strengths Badge Cloud */}
            <div className="card" style={{ backgroundColor: 'var(--card-bg)' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '18px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--accent-soft)',
                    color: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Layers size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Core Professional Strengths
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    High-level operational competencies
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '9px' }}>
                {portfolioData.coreStrengths.map((strength) => (
                  <span
                    key={strength}
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      backgroundColor: 'var(--card-bg-subtle)',
                      padding: '8px 16px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                    }}
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 540px) {
          .cert-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
