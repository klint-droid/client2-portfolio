import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Award, Laptop, ShieldCheck, Check } from 'lucide-react';

export const BentoCompetencies: React.FC = () => {
  return (
    <section id="competencies" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Editorial Header */}
        <div className="editorial-header">
          <div className="editorial-tag">Credentials & Systems</div>
          <h2 className="editorial-title">
            Academic Grounding, Certified Practices, and Systems Fluency.
          </h2>
          <p className="editorial-desc">
            Organized in an architectural bento grid: combining a formal university degree in financial management with
            hands-on software mastery and verified administrative certifications.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '24px',
          }}
          className="bento-grid"
        >
          {/* Tile 1: Formal University Education (Large Feature Box) */}
          <div
            className="dossier-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: 'var(--bg-card)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--accent-soft)',
                    color: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <GraduationCap size={24} />
                </div>
                <span
                  style={{
                    fontSize: '0.74rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    backgroundColor: 'var(--bg-subtle)',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-pill)',
                    border: '1px solid var(--border-hairline)',
                  }}
                >
                  Higher Education
                </span>
              </div>

              <span
                style={{
                  fontSize: '0.8rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-subtle)',
                  fontWeight: 600,
                  display: 'block',
                  marginBottom: '6px',
                }}
              >
                {portfolioData.education.institution} • {portfolioData.education.years}
              </span>

              <h3 className="serif" style={{ fontSize: '1.85rem', marginBottom: '8px', color: 'var(--text-main)', lineHeight: 1.25 }}>
                {portfolioData.education.degree}
              </h3>

              <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '16px' }}>
                {portfolioData.education.major}
              </div>

              <p style={{ fontSize: '0.94rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                {portfolioData.education.summary} This formal curriculum ensures strong financial literacy,
                understanding of transaction ledgers, invoice accuracy, business documentation, and administrative
                governance.
              </p>
            </div>

            <div
              style={{
                marginTop: '32px',
                paddingTop: '20px',
                borderTop: '1px solid var(--border-hairline)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              {[
                'Financial Analysis & Records',
                'Invoice & Payment Reconciliation',
                'Business Law & Governance',
                'Operational Planning',
              ].map((pill) => (
                <span
                  key={pill}
                  style={{
                    fontSize: '0.78rem',
                    backgroundColor: 'var(--bg-subtle)',
                    color: 'var(--text-main)',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid var(--border-hairline)',
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Tile 2: Verified Specialized Certifications */}
          <div className="dossier-card" style={{ backgroundColor: 'var(--bg-card)' }}>
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
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-sm)',
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
                <h4 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-main)' }}>
                  Trainings & Certifications
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>
                  6 verified operational courses
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {portfolioData.certifications.map((c) => (
                <div
                  key={c.title}
                  style={{
                    padding: '12px 14px',
                    backgroundColor: 'var(--bg-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-hairline)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Check size={14} color="var(--accent)" />
                    <span style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-main)' }}>
                      {c.title}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
                    {c.focus}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tile 3: Software Ecosystem Matrix (Full Width / Span 2) */}
          <div
            className="dossier-card"
            style={{
              gridColumn: 'span 2',
              backgroundColor: 'var(--bg-card)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '14px',
                marginBottom: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-sm)',
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
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-main)' }}>
                    Technical Systems & Platforms
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-subtle)' }}>
                    Operational environments utilized in daily client workflows
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <ShieldCheck size={16} color="var(--accent)" />
                <span>Zero Learning Curve on Standard Stacks</span>
              </div>
            </div>

            {/* 4 Stack Groups */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '20px',
              }}
              className="software-columns"
            >
              {portfolioData.softwareSkills.map((cat) => (
                <div
                  key={cat.category}
                  style={{
                    backgroundColor: 'var(--bg-subtle)',
                    padding: '18px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-hairline)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--accent)',
                      marginBottom: '12px',
                      borderBottom: '1px solid var(--border-hairline)',
                      paddingBottom: '6px',
                    }}
                  >
                    {cat.category}
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {cat.skills.map((s) => (
                      <li key={s} style={{ fontSize: '0.82rem', color: 'var(--text-main)', lineHeight: 1.45 }}>
                        • {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
          }
          .bento-grid > div {
            grid-column: span 1 !important;
          }
          .software-columns {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          .software-columns {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
