import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import type { RoleExperience } from '../data/portfolioData';
import { ChevronDown, ChevronUp, Check, Building2, Calendar } from 'lucide-react';

export const CareerArchive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string>('offsite-exp'); // Default first role expanded

  const tabs = [
    { id: 'all', label: 'All 6 Engagements' },
    { id: 'va', label: 'Marketplaces & Virtual Support' },
    { id: 'business', label: 'Business Ownership' },
    { id: 'research', label: 'Web Intelligence & Support' },
    { id: 'finance', label: 'Corporate & Accounting' },
  ];

  const filteredRoles = portfolioData.experiences.filter((exp: RoleExperience) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'va') return exp.id === 'offsite-exp';
    if (activeTab === 'business') return exp.id === 'clothing-business';
    if (activeTab === 'research') return exp.id === 'cybersoft' || exp.id === 'collective-solution';
    if (activeTab === 'finance') return exp.id === 'geomaster' || exp.id === 'plums-boons';
    return true;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="career-archive" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Editorial Header */}
        <div className="editorial-header">
          <div className="editorial-tag">Career Archive (2016 – 2026)</div>
          <h2 className="editorial-title">
            Tabular Record of Progressive Roles & Impact.
          </h2>
          <p className="editorial-desc">
            Explore the complete 8+ year chronological archive. Select any engagement row to view detailed
            responsibilities, software platforms utilized, and operational outcomes.
          </p>
        </div>

        {/* Tab Filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '32px',
          }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  backgroundColor: isActive ? 'var(--text-main)' : 'var(--bg-card)',
                  color: isActive ? '#FFFFFF' : 'var(--text-muted)',
                  border: '1px solid',
                  borderColor: isActive ? 'var(--text-main)' : 'var(--border-strong)',
                  boxShadow: isActive ? 'var(--shadow-subtle)' : 'none',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Archive Table / Dossier Index Container */}
        <div
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-hairline)',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-subtle)',
            overflow: 'hidden',
          }}
        >
          {/* Table Header Strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1.4fr 1fr 1fr 48px',
              padding: '16px 28px',
              backgroundColor: 'var(--bg-subtle)',
              borderBottom: '1px solid var(--border-hairline)',
              fontSize: '0.74rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-subtle)',
            }}
            className="archive-table-header"
          >
            <div>Organization</div>
            <div>Role Title</div>
            <div>Tenure</div>
            <div>Domain Focus</div>
            <div style={{ textAlign: 'right' }}>Dossier</div>
          </div>

          {/* Table Rows */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {filteredRoles.map((role: RoleExperience) => {
              const isExpanded = expandedId === role.id;
              return (
                <div
                  key={role.id}
                  style={{
                    borderBottom: '1px solid var(--border-hairline)',
                    transition: 'var(--transition)',
                    backgroundColor: isExpanded ? 'rgba(250, 247, 242, 0.7)' : 'transparent',
                  }}
                >
                  {/* Clickable Master Row */}
                  <div
                    onClick={() => toggleExpand(role.id)}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1.2fr 1.4fr 1fr 1fr 48px',
                      alignItems: 'center',
                      padding: '20px 28px',
                      cursor: 'pointer',
                    }}
                    className="archive-row"
                  >
                    {/* Company */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: 'var(--text-main)', fontSize: '0.94rem' }}>
                      <Building2 size={16} color="var(--accent)" />
                      <span>{role.company}</span>
                    </div>

                    {/* Role Title */}
                    <div>
                      <span className="serif" style={{ fontSize: '1.08rem', fontWeight: 600, color: 'var(--text-main)' }}>
                        {role.role}
                      </span>
                    </div>

                    {/* Tenure */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                      <Calendar size={13} color="var(--accent)" />
                      <span>{role.period}</span>
                    </div>

                    {/* Category Tag */}
                    <div>
                      <span
                        style={{
                          fontSize: '0.74rem',
                          backgroundColor: 'var(--accent-soft)',
                          color: 'var(--accent)',
                          fontWeight: 600,
                          padding: '4px 10px',
                          borderRadius: 'var(--radius-pill)',
                          border: '1px solid rgba(164, 125, 72, 0.15)',
                        }}
                      >
                        {role.category}
                      </span>
                    </div>

                    {/* Toggle Icon */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', color: 'var(--accent)' }}>
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </div>

                  {/* Expanded Dossier Drawer Body */}
                  {isExpanded && (
                    <div
                      style={{
                        padding: '0 28px 28px 28px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        animation: 'fadeIn 0.25s ease',
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: 'var(--bg-primary)',
                          border: '1px solid var(--border-hairline)',
                          borderRadius: 'var(--radius-sm)',
                          padding: '22px 24px',
                        }}
                      >
                        {/* Summary */}
                        <div style={{ marginBottom: '16px' }}>
                          <span
                            style={{
                              fontSize: '0.72rem',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              letterSpacing: '0.1em',
                              color: 'var(--accent)',
                              display: 'block',
                              marginBottom: '6px',
                            }}
                          >
                            Executive Scope
                          </span>
                          <p style={{ fontSize: '0.94rem', color: 'var(--text-main)', lineHeight: 1.65 }}>
                            {role.summary}
                          </p>
                        </div>

                        {/* Bulleted Achievements */}
                        <div>
                          <span
                            style={{
                              fontSize: '0.72rem',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              letterSpacing: '0.1em',
                              color: 'var(--text-subtle)',
                              display: 'block',
                              marginBottom: '10px',
                            }}
                          >
                            Verified Responsibilities & Accomplishments
                          </span>
                          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {role.highlights.map((item, idx) => (
                              <li
                                key={idx}
                                style={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: '10px',
                                  fontSize: '0.88rem',
                                  lineHeight: 1.6,
                                  color: 'var(--text-muted)',
                                }}
                              >
                                <Check size={15} color="var(--accent)" style={{ marginTop: '4px', flexShrink: 0 }} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tools / Software Stack */}
                        <div
                          style={{
                            marginTop: '18px',
                            paddingTop: '14px',
                            borderTop: '1px solid var(--border-hairline)',
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            gap: '8px',
                          }}
                        >
                          <span style={{ fontSize: '0.74rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-subtle)' }}>
                            Stack:
                          </span>
                          {role.tools.map((t) => (
                            <span
                              key={t}
                              style={{
                                fontSize: '0.76rem',
                                backgroundColor: 'var(--bg-card)',
                                color: 'var(--text-main)',
                                padding: '3px 10px',
                                borderRadius: 'var(--radius-xs)',
                                border: '1px solid var(--border-strong)',
                              }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .archive-table-header {
            display: none !important;
          }
          .archive-row {
            grid-template-columns: 1fr 32px !important;
            gap: 8px !important;
            padding: 16px 20px !important;
          }
        }
      `}</style>
    </section>
  );
};
