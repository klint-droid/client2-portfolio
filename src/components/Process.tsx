import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="collaboration" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Editorial Header */}
        <div className="editorial-header">
          <div className="editorial-tag">05 / Collaboration Blueprint</div>
          <h2 className="editorial-title">
            How an Executive Engagement Unfolds.
          </h2>
          <p className="editorial-desc">
            Designed for rapid, low-drag onboarding. Within 48 hours, essential communication channels, password vaults,
            and task queues are fully operational.
          </p>
        </div>

        {/* 4-Step Horizontal Process Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
          }}
          className="process-dossier-grid"
        >
          {portfolioData.processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="dossier-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '28px 22px',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                    borderBottom: '1px solid var(--border-hairline)',
                    paddingBottom: '12px',
                  }}
                >
                  <span className="serif" style={{ fontSize: '2.4rem', fontWeight: 700, color: 'var(--accent)', lineHeight: 1 }}>
                    {step.step}
                  </span>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-subtle)', fontWeight: 600 }}>
                    Phase 0{idx + 1}
                  </span>
                </div>

                <h3 className="serif" style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-main)' }}>
                  {step.title}
                </h3>

                <p style={{ fontSize: '0.88rem', lineHeight: 1.65, color: 'var(--text-muted)' }}>
                  {step.description}
                </p>
              </div>

              <div
                style={{
                  marginTop: '20px',
                  paddingTop: '12px',
                  borderTop: '1px solid var(--border-hairline)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  color: 'var(--text-subtle)',
                }}
              >
                <span>Status: Fully Managed</span>
                {idx < 3 && <ArrowRight size={12} color="var(--accent)" />}
              </div>
            </div>
          ))}
        </div>

        {/* Operating Guarantees Banner */}
        <div
          style={{
            marginTop: '44px',
            backgroundColor: 'var(--dark-bg)',
            color: '#FFFFFF',
            borderRadius: 'var(--radius-md)',
            padding: '36px 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            border: '1px solid var(--dark-border)',
          }}
          className="guarantee-banner"
        >
          <div style={{ maxWidth: '680px' }}>
            <div style={{ fontSize: '0.74rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 700, marginBottom: '8px' }}>
              Service Level Agreement (SLA)
            </div>
            <h4 className="serif" style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '8px' }}>
              Strict Confidentiality & Proactive Daily Cadence.
            </h4>
            <p style={{ fontSize: '0.92rem', color: '#B7ADA2', lineHeight: 1.65 }}>
              Standard operating procedures include password vault encryption (1Password/LastPass), mutual NDA
              execution, and end-of-day asynchronous executive digests to eliminate meeting fatigue.
            </p>
          </div>

          <a href="#contact" className="btn-camel">
            Inquire for Consultation
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .process-dossier-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          .process-dossier-grid {
            grid-template-columns: 1fr !important;
          }
          .guarantee-banner {
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};
