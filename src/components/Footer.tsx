import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Mail, Phone, MapPin, FileDown, FileText } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--dark-bg)',
        color: '#FFFFFF',
        paddingTop: '70px',
        paddingBottom: '36px',
        borderTop: '1px solid var(--dark-border)',
      }}
    >
      <div className="container">
        {/* Upper Footer */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr',
            gap: '48px',
            marginBottom: '50px',
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              className="serif"
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                marginBottom: '6px',
              }}
            >
              {portfolioData.personal.fullName.toUpperCase()}
            </div>
            <div
              style={{
                fontSize: '0.76rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                fontWeight: 700,
                marginBottom: '16px',
              }}
            >
              Executive Virtual Assistant & Business Operations
            </div>
            <p style={{ fontSize: '0.9rem', color: '#B5ABA0', lineHeight: 1.7, maxWidth: '420px' }}>
              {portfolioData.personal.tagline} Delivering peace of mind and operational continuity for high-performing
              executives worldwide.
            </p>
          </div>

          {/* Quick Dossier Index */}
          <div>
            <div
              style={{
                fontSize: '0.74rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                fontWeight: 700,
                marginBottom: '16px',
              }}
            >
              Dossier Index
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: 'Philosophy & Approach', href: '#philosophy' },
                { label: 'Executive Capabilities', href: '#capabilities' },
                { label: 'Career Archive (2016–2026)', href: '#career-archive' },
                { label: 'Credentials & Systems', href: '#competencies' },
                { label: 'Collaboration Blueprint', href: '#collaboration' },
                { label: 'Executive Inquiry Desk', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '0.86rem',
                      color: '#C6BCB0',
                      transition: 'var(--transition)',
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#FFFFFF')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#C6BCB0')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Channels */}
          <div>
            <div
              style={{
                fontSize: '0.74rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                fontWeight: 700,
                marginBottom: '16px',
              }}
            >
              Direct Contacts
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '0.88rem',
                  color: '#C6BCB0',
                }}
              >
                <Mail size={15} color="var(--accent-gold)" />
                <span>{portfolioData.personal.email}</span>
              </a>

              <a
                href={`tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '0.88rem',
                  color: '#C6BCB0',
                }}
              >
                <Phone size={15} color="var(--accent-gold)" />
                <span>{portfolioData.personal.phone}</span>
              </a>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '0.88rem',
                  color: '#C6BCB0',
                }}
              >
                <MapPin size={15} color="var(--accent-gold)" />
                <span>{portfolioData.personal.location}</span>
              </div>

              <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <button
                  onClick={onOpenResume}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.82rem',
                    color: 'var(--accent-gold)',
                    textAlign: 'left',
                  }}
                >
                  <FileText size={14} />
                  <span>Inspect Curriculum Vitae (Drawer)</span>
                </button>

                <a
                  href={portfolioData.personal.resumeUrl}
                  download="Jeanette-G-Gepiga-Resume.pdf"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.82rem',
                    color: '#B5ABA0',
                  }}
                >
                  <FileDown size={14} />
                  <span>Download Original PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Strip */}
        <div
          style={{
            paddingTop: '28px',
            borderTop: '1px solid var(--dark-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.8rem',
            color: '#82786F',
          }}
        >
          <div>
            © {new Date().getFullYear()} Jeanette G. Gepiga. Executive Virtual Assistant & Business Operations
            Specialist.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--accent-gold)',
              fontSize: '0.8rem',
              fontWeight: 600,
            }}
          >
            <span>Return to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </footer>
  );
};
