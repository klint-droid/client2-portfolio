import React from 'react';
import { portfolioData } from '../data/portfolioData';
import type { ServicePillar } from '../data/portfolioData';
import { Calendar, Store, Search, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calendar':
        return <Calendar size={22} />;
      case 'Store':
        return <Store size={22} />;
      case 'Search':
        return <Search size={22} />;
      case 'BarChart3':
        return <BarChart3 size={22} />;
      default:
        return <Calendar size={22} />;
    }
  };

  const serviceProfiles = [
    {
      id: 'executive-admin',
      suitedFor: 'CEOs, solo founders, and busy partners managing back-to-back cross-timezone meetings.',
      bandwidthSaved: '12 – 18 Hours Saved Weekly',
    },
    {
      id: 'marketplace-ops',
      suitedFor: 'E-commerce brands, marketplace hubs, and venues requiring rigorous catalogue integrity & fast RFP turns.',
      bandwidthSaved: '15 – 20 Hours Saved Weekly',
    },
    {
      id: 'research-intelligence',
      suitedFor: 'Consultancies, research teams, and executives needing trusted, verified datasets without hallucination.',
      bandwidthSaved: '10 – 14 Hours Saved Weekly',
    },
    {
      id: 'business-finance',
      suitedFor: 'Growing service businesses needing organized invoicing, vendor follow-ups, and corporate records.',
      bandwidthSaved: '8 – 12 Hours Saved Weekly',
    },
  ];

  return (
    <section id="capabilities" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Editorial Header */}
        <div className="editorial-header">
          <div className="editorial-tag">Executive Capabilities</div>
          <h2 className="editorial-title">
            Structured Operational Domains That Preserve Leadership Energy.
          </h2>
          <p className="editorial-desc">
            Engagements are structured around measurable operational relief. Every practice area is executed with
            stringent quality control and dependable turnaround times.
          </p>
        </div>

        {/* 2x2 Editorial Practice Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '28px',
          }}
          className="services-dossier-grid"
        >
          {portfolioData.services.map((service: ServicePillar, idx: number) => {
            const profile = serviceProfiles[idx] || serviceProfiles[0];
            return (
              <div
                key={service.id}
                className="dossier-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: 'var(--bg-card)',
                  padding: '36px',
                }}
              >
                <div>
                  {/* Top Header */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '18px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: 'var(--accent-soft)',
                          color: 'var(--accent)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {getIcon(service.icon)}
                      </div>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: 'var(--text-subtle)',
                        }}
                      >
                        Expertise
                      </span>
                    </div>

                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        color: 'var(--accent)',
                        backgroundColor: 'var(--bg-subtle)',
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-pill)',
                        border: '1px solid var(--border-hairline)',
                      }}
                    >
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="serif" style={{ fontSize: '1.65rem', marginBottom: '10px', color: 'var(--text-main)' }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: '0.94rem', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '20px' }}>
                    {service.description}
                  </p>

                  {/* Suited For Box */}
                  <div
                    style={{
                      backgroundColor: 'var(--bg-subtle)',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      marginBottom: '20px',
                      borderLeft: '2px solid var(--accent)',
                    }}
                  >
                    <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.06em' }}>
                      Target Client Profile
                    </div>
                    <div style={{ fontSize: '0.84rem', color: 'var(--text-main)', marginTop: '2px' }}>
                      {profile.suitedFor}
                    </div>
                  </div>

                  {/* Deliverables Checklist */}
                  <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '18px' }}>
                    <div
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--text-subtle)',
                        marginBottom: '10px',
                      }}
                    >
                      Key Deliverables
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                          <CheckCircle2 size={15} color="var(--accent)" style={{ marginTop: '3px', flexShrink: 0 }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Bar: Hours Saved & CTA */}
                <div
                  style={{
                    marginTop: '28px',
                    paddingTop: '18px',
                    borderTop: '1px solid var(--border-hairline)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '12px',
                  }}
                >
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)' }}>
                    {profile.bandwidthSaved}
                  </span>

                  <a
                    href="#contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      color: 'var(--text-main)',
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-main)')}
                  >
                    <span>Request Retainer</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .services-dossier-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
