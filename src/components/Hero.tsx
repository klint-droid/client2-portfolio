import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FileText, FileDown, ArrowDownRight, ShieldCheck, Mail, Phone } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onNotify: (msg: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onNotify }) => {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    onNotify(`Copied ${label} to clipboard!`);
  };

  return (
    <section
      id="top"
      style={{
        paddingTop: '150px',
        paddingBottom: '90px',
        position: 'relative',
        backgroundColor: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-hairline)',
      }}
    >
      <div className="container">
        {/* Editorial Masthead Title */}
        <div style={{ marginBottom: '36px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '0.78rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: 'var(--accent)',
              marginBottom: '16px',
            }}
          >
            <span>Executive Dossier & Portfolio</span>
            <span style={{ color: 'var(--border-strong)' }}>/</span>
            <span>8+ Years Verified Experience</span>
          </div>

          <h1
            className="serif"
            style={{
              fontSize: 'clamp(2.8rem, 5.8vw, 4.8rem)',
              lineHeight: 1.05,
              fontWeight: 600,
              color: 'var(--text-main)',
              maxWidth: '960px',
              letterSpacing: '-0.025em',
            }}
          >
            Methodical. Discreet. <br />
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Indispensable</span> Executive Support.
          </h1>
        </div>

        {/* Magazine Feature Grid (Asymmetric Editorial Matting) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '56px',
            alignItems: 'start',
          }}
          className="hero-magazine-grid"
        >
          {/* Left Column: Architectural Overview & Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <p
              style={{
                fontSize: '1.18rem',
                lineHeight: 1.8,
                color: 'var(--text-main)',
                borderLeft: '3px solid var(--accent)',
                paddingLeft: '20px',
              }}
            >
              {portfolioData.personal.bioLead}
            </p>

            <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--text-muted)' }}>
              Dedicated to preserving executive bandwidth through rigorous calendar defense, marketplace listings
              with 100% data integrity, trusted web intelligence, and reliable operational accounting.
            </p>

            {/* Quick Action Matrix */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <button
                onClick={() => {
                  onOpenResume();
                  onNotify('Opening Executive Curriculum Vitae...');
                }}
                className="btn-solid"
              >
                <FileText size={16} />
                <span>View Full Curriculum Vitae</span>
              </button>

              <a
                href={portfolioData.personal.resumeUrl}
                download="Jeanette-G-Gepiga-Resume.pdf"
                onClick={() => onNotify('Downloading Jeanette G. Gepiga Resume (PDF)...')}
                className="btn-border"
              >
                <FileDown size={16} />
                <span>Download PDF</span>
              </a>

              <a href="#contact" className="btn-camel">
                <span>Inquire for Support</span>
                <ArrowDownRight size={16} />
              </a>
            </div>

            {/* Micro-Contact Line */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '16px',
                paddingTop: '20px',
                borderTop: '1px solid var(--border-hairline)',
                fontSize: '0.84rem',
                color: 'var(--text-muted)',
              }}
            >
              <button
                onClick={() => copyToClipboard(portfolioData.personal.email, 'Email')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--text-main)',
                  fontWeight: 600,
                }}
              >
                <Mail size={14} color="var(--accent)" />
                <span>{portfolioData.personal.email}</span>
              </button>

              <span style={{ color: 'var(--border-strong)' }}>•</span>

              <button
                onClick={() => copyToClipboard(portfolioData.personal.phone, 'Phone number')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--text-main)',
                  fontWeight: 600,
                }}
              >
                <Phone size={14} color="var(--accent)" />
                <span>{portfolioData.personal.phone}</span>
              </button>
            </div>

            {/* Editorial Quick Navigator Bar */}
            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-hairline)',
                borderRadius: 'var(--radius-md)',
                padding: '20px 24px',
                boxShadow: 'var(--shadow-subtle)',
              }}
            >
              <div
                style={{
                  fontSize: '0.72rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  marginBottom: '12px',
                }}
              >
                Dossier Sections
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '10px',
                }}
              >
                {[
                  { label: 'Philosophy & Approach', href: '#philosophy' },
                  { label: 'Core Capabilities', href: '#capabilities' },
                  { label: 'Career Archive (2016–2026)', href: '#career-archive' },
                  { label: 'Credentials & Education', href: '#competencies' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    style={{
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      color: 'var(--text-main)',
                      padding: '6px 0',
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-main)')}
                  >
                    {s.label} →
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Spread with Fine Matting */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                margin: '0 auto',
                maxWidth: '460px',
              }}
            >
              {/* Linen Matting Frame */}
              <div
                style={{
                  backgroundColor: 'var(--bg-card)',
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-hairline)',
                  boxShadow: 'var(--shadow-elevated)',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: '#E5DCce',
                  }}
                >
                  <img
                    src={portfolioData.personal.photoUrl}
                    alt="Jeanette G. Gepiga"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      objectFit: 'cover',
                      aspectRatio: '3 / 4',
                    }}
                  />

                  {/* Editorial Tag Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      backgroundColor: 'rgba(20, 18, 16, 0.78)',
                      backdropFilter: 'blur(8px)',
                      color: '#FFFFFF',
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <ShieldCheck size={13} color="var(--accent-gold)" />
                    <span>Verified Profile</span>
                  </div>
                </div>

                {/* Caption Bar Under Portrait */}
                <div
                  style={{
                    paddingTop: '16px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--accent)',
                        fontWeight: 700,
                      }}
                    >
                      Executive Subject
                    </span>
                    <div className="serif" style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-main)' }}>
                      Jeanette G. Gepiga
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>
                      BSBA Financial Management Graduate
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-subtle)', textTransform: 'uppercase' }}>
                      Experience
                    </div>
                    <div className="serif" style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-main)' }}>
                      8+ Years
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-magazine-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};
