import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ShieldCheck, Compass, Award, ArrowUpRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="philosophy" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Editorial Header */}
        <div className="editorial-header">
          <div className="editorial-tag">Operational Philosophy</div>
          <h2 className="editorial-title">
            Protecting Executive Bandwidth Through Repeatable, Methodical Systems.
          </h2>
          <p className="editorial-desc">
            A high-performing virtual assistant is not a passive task-taker. They are a proactive operational shield
            who anticipates deadlines, eliminates administrative drag, and upholds uncompromising data accuracy.
          </p>
        </div>

        {/* 3-Column Monograph Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '28px',
          }}
          className="philosophy-grid"
        >
          {/* Box 1 */}
          <div className="dossier-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
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
                  marginBottom: '20px',
                }}
              >
                <Compass size={22} />
              </div>

              <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', fontWeight: 700, marginBottom: '6px' }}>
                Core Approach
              </div>
              <h3 className="serif" style={{ fontSize: '1.45rem', marginBottom: '12px', color: 'var(--text-main)' }}>
                Owner-Mindset & Initiative
              </h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                Having founded and operated an independent apparel venture, I think like a business owner. I evaluate
                every decision through the lens of client experience, logistics reliability, and bottom-line health.
              </p>
            </div>

            <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-hairline)', fontSize: '0.8rem', color: 'var(--text-subtle)' }}>
              Zero micromanagement required
            </div>
          </div>

          {/* Box 2 */}
          <div className="dossier-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
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
                  marginBottom: '20px',
                }}
              >
                <Award size={22} />
              </div>

              <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', fontWeight: 700, marginBottom: '6px' }}>
                Financial Foundation
              </div>
              <h3 className="serif" style={{ fontSize: '1.45rem', marginBottom: '12px', color: 'var(--text-main)' }}>
                Financial Numeracy
              </h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                With a formal BSBA degree in Financial Management and accounting experience, invoices, ledger
                reconciliations, and supplier payment terms are handled with mathematical precision.
              </p>
            </div>

            <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-hairline)', fontSize: '0.8rem', color: 'var(--text-subtle)' }}>
              BSBA Financial Management, UCC
            </div>
          </div>

          {/* Box 3 */}
          <div className="dossier-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
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
                  marginBottom: '20px',
                }}
              >
                <ShieldCheck size={22} />
              </div>

              <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', fontWeight: 700, marginBottom: '6px' }}>
                Executive Discretion
              </div>
              <h3 className="serif" style={{ fontSize: '1.45rem', marginBottom: '12px', color: 'var(--text-main)' }}>
                Discretion & Protocol
              </h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                Prior service as Corporate Secretary and handling sensitive RFP email inboxes means executive
                confidentiality, meeting minutes, and corporate records are safeguarded by default.
              </p>
            </div>

            <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-hairline)', fontSize: '0.8rem', color: 'var(--text-subtle)' }}>
              NDA & corporate governance ready
            </div>
          </div>
        </div>

        {/* Pull Quote Callout */}
        <div
          style={{
            marginTop: '50px',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-strong)',
            borderRadius: 'var(--radius-md)',
            padding: '36px 44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
          }}
          className="philosophy-quote"
        >
          <div style={{ maxWidth: '780px' }}>
            <span
              style={{
                fontSize: '0.74rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                fontWeight: 700,
                display: 'block',
                marginBottom: '8px',
              }}
            >
              Operating Standard
            </span>
            <p className="serif" style={{ fontSize: '1.45rem', color: 'var(--text-main)', lineHeight: 1.45, fontStyle: 'italic' }}>
              "{portfolioData.personal.bioBody}"
            </p>
          </div>

          <a href="#career-archive" className="btn-border" style={{ whiteSpace: 'nowrap' }}>
            <span>Review Full Track Record</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .philosophy-grid {
            grid-template-columns: 1fr !important;
          }
          .philosophy-quote {
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};
