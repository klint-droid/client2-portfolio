import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, FileDown, Copy, Check, Send, FileText, ExternalLink, RefreshCw } from 'lucide-react';

interface ContactProps {
  onOpenResume: () => void;
  onNotify: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume, onNotify }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Executive Administrative Support',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    onNotify(`Copied ${label} to clipboard!`);
  };

  // Helper to construct pre-filled mailto URL
  const getMailtoUrl = () => {
    const subject = encodeURIComponent(
      `Portfolio Inquiry: ${formData.service || 'Executive Support'} - ${formData.name || 'Prospective Client'}`
    );
    const body = encodeURIComponent(
      `Hello Jeanette,\n\nName: ${formData.name || '(Name)'}\nEmail: ${formData.email || '(Email)'}\nCompany: ${formData.company || 'N/A'}\nService Area: ${formData.service}\n\nProject Scope & Message:\n${formData.message || '(Message)'}\n\n---\nSent from Jeanette G. Gepiga Portfolio`
    );
    return `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;
  };

  // Direct trigger via Mailto (Option 2)
  const handleDirectEmailApp = (e: React.MouseEvent) => {
    e.preventDefault();
    const mailto = getMailtoUrl();
    window.location.href = mailto;
    onNotify('Opening your default email app with inquiry pre-filled...');
  };

  // Online Form Submit (Option 1 with Option 2 integration)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Attempt Web3Forms API submission (Option 1)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          // Free Web3Forms public forwarding endpoint to Jeanette's email
          access_key: 'b9d36e2f-5b12-402a-a928-89c56fa769f1',
          name: formData.name,
          email: formData.email,
          company: formData.company || 'N/A',
          service: formData.service,
          message: formData.message,
          subject: `Portfolio Inquiry: ${formData.service} from ${formData.name}`,
          to_email: portfolioData.personal.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        onNotify('Inquiry transmitted directly to Jeanette’s inbox!');
      } else {
        // Graceful fallback to Option 2
        setSubmitted(true);
        onNotify('Opening direct mail draft for guaranteed delivery...');
        window.location.href = getMailtoUrl();
      }
    } catch {
      // Offline or network fallback to Option 2
      setSubmitted(true);
      onNotify('Drafting message directly in your email app...');
      window.location.href = getMailtoUrl();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Editorial Header */}
        <div className="editorial-header">
          <div className="editorial-tag">Executive Inquiry Desk</div>
          <h2 className="editorial-title">
            Initiate a Direct Inquiry or Request Retainer Availability.
          </h2>
          <p className="editorial-desc">
            Submit your requirements via the online form below, or send a pre-filled draft directly from your email
            client to <strong>{portfolioData.personal.email}</strong>.
          </p>
        </div>

        {/* Contact Split */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '40px',
            alignItems: 'start',
          }}
          className="contact-dossier-grid"
        >
          {/* Left Column: Direct Channels & CV Access */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="dossier-card" style={{ backgroundColor: 'var(--bg-card)' }}>
              <div
                style={{
                  fontSize: '0.74rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  marginBottom: '18px',
                }}
              >
                Direct Communication Channels
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {/* Email Item */}
                <div
                  style={{
                    padding: '16px',
                    backgroundColor: 'var(--bg-subtle)',
                    border: '1px solid var(--border-hairline)',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: 'var(--radius-xs)',
                        backgroundColor: 'var(--accent-soft)',
                        color: 'var(--accent)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Mail size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-subtle)', textTransform: 'uppercase' }}>
                        Email Address
                      </div>
                      <a href={`mailto:${portfolioData.personal.email}`} style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-main)' }}>
                        {portfolioData.personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(portfolioData.personal.email, 'Email')}
                    style={{
                      padding: '8px',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border-strong)',
                      color: 'var(--accent)',
                    }}
                    title="Copy email"
                  >
                    <Copy size={15} />
                  </button>
                </div>

                {/* Phone Item */}
                <div
                  style={{
                    padding: '16px',
                    backgroundColor: 'var(--bg-subtle)',
                    border: '1px solid var(--border-hairline)',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: 'var(--radius-xs)',
                        backgroundColor: 'var(--accent-soft)',
                        color: 'var(--accent)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Phone size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-subtle)', textTransform: 'uppercase' }}>
                        Direct Mobile / WhatsApp
                      </div>
                      <a href={`tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`} style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-main)' }}>
                        {portfolioData.personal.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(portfolioData.personal.phone, 'Phone number')}
                    style={{
                      padding: '8px',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border-strong)',
                      color: 'var(--accent)',
                    }}
                    title="Copy phone"
                  >
                    <Copy size={15} />
                  </button>
                </div>

                {/* Location */}
                <div
                  style={{
                    padding: '16px',
                    backgroundColor: 'var(--bg-subtle)',
                    border: '1px solid var(--border-hairline)',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'var(--accent-soft)',
                      color: 'var(--accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-subtle)', textTransform: 'uppercase' }}>
                      Location & Timezone
                    </div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-main)' }}>
                      Caloocan City, Philippines
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      Synchronized for US (EST/PST) & Global schedules
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Card with Dual Action (View & Download) */}
            <div
              className="dossier-card"
              style={{
                backgroundColor: 'var(--dark-bg)',
                color: '#FFFFFF',
                border: '1px solid var(--dark-border)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent-gold)', fontWeight: 700 }}>
                  Curriculum Vitae Access
                </span>
                <h4 className="serif" style={{ fontSize: '1.4rem', color: '#FFFFFF', marginTop: '4px' }}>
                  Jeanette G. Gepiga Resume
                </h4>
                <p style={{ fontSize: '0.86rem', color: '#B8ADA2', marginTop: '4px', lineHeight: 1.5 }}>
                  Review the full 2-page document in-browser or download the official high-resolution PDF.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <button
                  onClick={() => {
                    onOpenResume();
                    onNotify('Opening Executive Curriculum Vitae...');
                  }}
                  className="btn-solid"
                  style={{ backgroundColor: '#2E2823', border: '1px solid rgba(255,255,255,0.15)', fontSize: '0.82rem', padding: '10px 14px' }}
                >
                  <FileText size={15} />
                  <span>View in Drawer</span>
                </button>

                <a
                  href={portfolioData.personal.resumeUrl}
                  download="Jeanette-G-Gepiga-Resume.pdf"
                  onClick={() => onNotify('Downloading Jeanette G. Gepiga Resume (PDF)...')}
                  className="btn-camel"
                  style={{ fontSize: '0.82rem', padding: '10px 14px' }}
                >
                  <FileDown size={15} />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form with Dual Delivery (API + Mailto) */}
          <div className="dossier-card" style={{ backgroundColor: 'var(--bg-card)', padding: '36px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '24px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-soft)',
                    color: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Check size={28} />
                </div>
                <h3 className="serif" style={{ fontSize: '1.8rem', color: 'var(--text-main)' }}>
                  Inquiry Dispatched
                </h3>
                <p style={{ maxWidth: '440px', fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Thank you! Your inquiry details have been recorded for <strong>gepigajhean@gmail.com</strong>. Jeanette
                  will review your message and reply within 24 business hours.
                </p>

                {/* Pre-Filled Mail Client Option */}
                <div
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--bg-subtle)',
                    border: '1px solid var(--border-hairline)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '16px',
                    marginTop: '8px',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--accent)', marginBottom: '4px' }}>
                    Guaranteed Delivery
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-main)', marginBottom: '12px' }}>
                    Want to also send this directly from your Gmail, Outlook, or Apple Mail?
                  </div>
                  <a
                    href={getMailtoUrl()}
                    className="btn-solid"
                    style={{ width: '100%', padding: '10px', fontSize: '0.84rem', justifyContent: 'center' }}
                  >
                    <ExternalLink size={14} />
                    <span>Open in Email App (Pre-filled)</span>
                  </a>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      service: 'Executive Administrative Support',
                      message: '',
                    });
                  }}
                  className="btn-border"
                  style={{ marginTop: '12px', fontSize: '0.84rem' }}
                >
                  <RefreshCw size={14} />
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <h3 className="serif" style={{ fontSize: '1.65rem', color: 'var(--text-main)', marginBottom: '4px' }}>
                      Executive Inquiry Form
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                      Sends directly to <strong>{portfolioData.personal.email}</strong>
                    </p>
                  </div>

                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: '#2E7D32',
                      backgroundColor: 'rgba(46, 125, 50, 0.1)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-pill)',
                    }}
                  >
                    Live Delivery Active
                  </span>
                </div>

                {/* Name & Email */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '14px',
                  }}
                  className="form-row"
                >
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: 'var(--radius-xs)',
                        border: '1px solid var(--border-strong)',
                        backgroundColor: 'var(--bg-subtle)',
                        color: 'var(--text-main)',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: 'var(--radius-xs)',
                        border: '1px solid var(--border-strong)',
                        backgroundColor: 'var(--bg-subtle)',
                        color: 'var(--text-main)',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                    Company / Organization Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Ventures or Studio Ltd."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: 'var(--radius-xs)',
                      border: '1px solid var(--border-strong)',
                      backgroundColor: 'var(--bg-subtle)',
                      color: 'var(--text-main)',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Service Area */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                    Primary Area of Assistance *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: 'var(--radius-xs)',
                      border: '1px solid var(--border-strong)',
                      backgroundColor: 'var(--bg-subtle)',
                      color: 'var(--text-main)',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  >
                    <option value="Executive Administrative Support">Executive Administrative Support (Calendar & Comms)</option>
                    <option value="Marketplace & Vendor Operations">Marketplace & Vendor Operations (Listings & RFPs)</option>
                    <option value="Web Research & Data Intelligence">Web Research & Business Intelligence</option>
                    <option value="Business Process & Financial Support">Business Process & Invoicing / Accounting</option>
                    <option value="Full Fractional Virtual Assistant Retainer">Full Fractional Virtual Assistant Retainer</option>
                    <option value="Specialized Operational Project">Specialized Operational Project</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                    Brief Description of Operational Needs *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your operational bottleneck, target timeline, or weekly hours required..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: 'var(--radius-xs)',
                      border: '1px solid var(--border-strong)',
                      backgroundColor: 'var(--bg-subtle)',
                      color: 'var(--text-main)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                {/* Action Buttons: Online Submit + Direct Mail Client */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-solid"
                    style={{ width: '100%', padding: '13px' }}
                  >
                    {loading ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Send Inquiry (Online Form)</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleDirectEmailApp}
                    className="btn-border"
                    style={{ width: '100%', padding: '11px', fontSize: '0.84rem' }}
                    title="Opens your installed email client with all fields pre-filled"
                  >
                    <ExternalLink size={14} />
                    <span>Or Send via Your Email App (Gmail / Outlook)</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .contact-dossier-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 580px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
