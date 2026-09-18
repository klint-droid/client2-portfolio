import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import type { RoleExperience } from '../data/portfolioData';
import { Calendar, Building2, Check, Sparkles } from 'lucide-react';

export const Experience: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Experience (8+ Years)' },
    { id: 'va', label: 'Virtual Assistance & Marketplaces' },
    { id: 'business', label: 'Business Ownership' },
    { id: 'research', label: 'Web Research & Support' },
    { id: 'corporate', label: 'Corporate & Accounting' },
  ];

  const filteredExperiences = portfolioData.experiences.filter((exp: RoleExperience) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'va') return exp.id === 'offsite-exp';
    if (activeFilter === 'business') return exp.id === 'clothing-business';
    if (activeFilter === 'research') return exp.id === 'cybersoft' || exp.id === 'collective-solution';
    if (activeFilter === 'corporate') return exp.id === 'geomaster' || exp.id === 'plums-boons';
    return true;
  });

  return (
    <section id="experience" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Career Trajectory</div>
          <h2 className="section-title">8+ Years of Progressive Professional Experience.</h2>
          <p className="section-description">
            A continuous track record of reliability spanning enterprise marketplace operations, direct business
            ownership, in-depth research, and corporate financial administration.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '48px',
          }}
        >
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                style={{
                  padding: '9px 18px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  transition: 'var(--transition)',
                  backgroundColor: isActive ? 'var(--text-primary)' : 'var(--card-bg)',
                  color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                  border: isActive ? '1px solid var(--text-primary)' : '1px solid var(--border-medium)',
                  boxShadow: isActive ? 'var(--shadow-sm)' : 'none',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Timeline List */}
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            position: 'relative',
            paddingLeft: '32px',
          }}
          className="timeline-container"
        >
          {/* Vertical Timeline Guide */}
          <div
            style={{
              position: 'absolute',
              top: '16px',
              bottom: '16px',
              left: '7px',
              width: '2px',
              backgroundColor: 'var(--border-medium)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {filteredExperiences.map((exp: RoleExperience) => (
              <div key={exp.id} style={{ position: 'relative' }}>
                {/* Node Bullet Marker */}
                <div
                  style={{
                    position: 'absolute',
                    top: '28px',
                    left: '-32px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: exp.featured ? 'var(--accent)' : '#FFFFFF',
                    border: '3px solid var(--accent)',
                    boxShadow: '0 0 0 4px var(--bg-primary)',
                    zIndex: 2,
                  }}
                />

                {/* Role Card */}
                <div
                  className="card"
                  style={{
                    padding: '32px',
                    borderLeft: exp.featured ? '4px solid var(--accent)' : '1px solid var(--border-light)',
                    backgroundColor: 'var(--card-bg)',
                  }}
                >
                  {/* Top Meta Header */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: '12px',
                      marginBottom: '14px',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                        <span
                          style={{
                            fontSize: '0.74rem',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            color: 'var(--accent)',
                            backgroundColor: 'var(--accent-soft)',
                            padding: '3px 10px',
                            borderRadius: 'var(--radius-full)',
                          }}
                        >
                          {exp.category}
                        </span>
                        {exp.featured && (
                          <span
                            style={{
                              fontSize: '0.72rem',
                              fontWeight: 600,
                              color: 'var(--accent-gold)',
                              backgroundColor: 'var(--dark-bg)',
                              padding: '2px 8px',
                              borderRadius: 'var(--radius-full)',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                            }}
                          >
                            <Sparkles size={11} />
                            Key Role
                          </span>
                        )}
                      </div>

                      <h3
                        className="serif-font"
                        style={{
                          fontSize: '1.5rem',
                          color: 'var(--text-primary)',
                          lineHeight: 1.25,
                        }}
                      >
                        {exp.role}
                      </h3>
                    </div>

                    {/* Period Badge */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        backgroundColor: 'var(--bg-secondary)',
                        padding: '6px 14px',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid var(--border-light)',
                      }}
                    >
                      <Calendar size={13} color="var(--accent)" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Company Row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.98rem',
                      fontWeight: 600,
                      color: 'var(--accent)',
                      marginBottom: '14px',
                    }}
                  >
                    <Building2 size={16} />
                    <span>{exp.company}</span>
                  </div>

                  {/* Summary */}
                  <p
                    style={{
                      fontSize: '0.96rem',
                      lineHeight: 1.65,
                      color: 'var(--text-secondary)',
                      marginBottom: '18px',
                    }}
                  >
                    {exp.summary}
                  </p>

                  {/* Bulleted Achievements */}
                  <div
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      borderRadius: 'var(--radius-md)',
                      padding: '18px 20px',
                      marginBottom: '20px',
                      border: '1px solid var(--border-light)',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--text-muted)',
                        marginBottom: '10px',
                      }}
                    >
                      Core Responsibilities & Impact
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {exp.highlights.map((item, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                            fontSize: '0.9rem',
                            lineHeight: 1.6,
                            color: 'var(--text-primary)',
                          }}
                        >
                          <Check
                            size={15}
                            color="var(--accent)"
                            style={{ marginTop: '4px', flexShrink: 0 }}
                            strokeWidth={2.5}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tool/Platform Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Tools & Skills:
                    </span>
                    {exp.tools.map((tool) => (
                      <span
                        key={tool}
                        style={{
                          fontSize: '0.78rem',
                          backgroundColor: 'var(--card-bg-subtle)',
                          color: 'var(--text-secondary)',
                          padding: '4px 10px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-light)',
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .timeline-container {
            padding-left: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};
