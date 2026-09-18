import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { FileText, Clock, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onNotify: (msg: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onNotify }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [manilaTime, setManilaTime] = useState('');
  const [activeSection, setActiveSection] = useState('philosophy');
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  const navItems = [
    { label: 'Philosophy', href: '#philosophy', id: 'philosophy' },
    { label: 'Capabilities', href: '#capabilities', id: 'capabilities' },
    { label: 'Career Archive', href: '#career-archive', id: 'career-archive' },
    { label: 'Credentials', href: '#competencies', id: 'competencies' },
    { label: 'Collaboration', href: '#collaboration', id: 'collaboration' },
  ];

  // Live Manila Time Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setManilaTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Scroll detection & Active section spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const scrollPos = window.scrollY + 180;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleLinkClick = (id: string) => {
    setClickedItem(id);
    setActiveSection(id);
    setTimeout(() => setClickedItem(null), 300);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(250, 247, 242, 0.94)' : 'rgba(250, 247, 242, 0.85)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid var(--border-hairline)',
        transition: 'all 0.25s ease',
      }}
    >
      {/* Top Thin Information Bar */}
      <div
        style={{
          borderBottom: '1px solid var(--border-hairline)',
          backgroundColor: 'rgba(243, 236, 224, 0.45)',
          padding: '4px 0',
          fontSize: '0.74rem',
          letterSpacing: '0.04em',
          color: 'var(--text-muted)',
        }}
        className="top-bar-strip"
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#2E7D32',
                display: 'inline-block',
                boxShadow: '0 0 0 2px rgba(46, 125, 50, 0.2)',
              }}
            />
            <span>Open for Remote Retainers & Executive Virtual Assistance</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Clock size={12} color="var(--accent)" />
            <span>Manila, PH:</span>
            <strong style={{ color: 'var(--text-main)', fontVariantNumeric: 'tabular-nums' }}>
              {manilaTime || 'Loading...'}
            </strong>
            <span style={{ color: 'var(--text-subtle)' }}>(Supporting US, UK, & APAC)</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 28px' }}>
        {/* Brand Editorial Signature */}
        <a href="#top" style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            className="serif"
            style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--text-main)',
            }}
          >
            {portfolioData.personal.fullName.toUpperCase()}
          </span>
          <span
            style={{
              fontSize: '0.66rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: 'var(--accent)',
            }}
          >
            Executive Virtual Assistant
          </span>
        </a>

        {/* Center Navigation Links (Plain Bar with Hover Effects) */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '28px',
          }}
          className="desktop-menu"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const isJustClicked = clickedItem === item.id;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleLinkClick(item.id)}
                className={`nav-anim-link ${isActive ? 'active' : ''} ${isJustClicked ? 'clicked' : ''}`}
              >
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Action Suite */}
        <div style={{ display: 'none', alignItems: 'center', gap: '12px' }} className="desktop-actions">
          {/* Quick Dossier Button */}
          <button
            onClick={() => {
              onOpenResume();
              onNotify('Opening Executive Curriculum Vitae...');
            }}
            className="nav-action-btn"
          >
            <FileText size={14} color="var(--accent)" />
            <span>Curriculum Vitae</span>
          </button>

          <a href="#contact" className="btn-solid" style={{ padding: '8px 20px', fontSize: '0.82rem' }}>
            <span>Inquire</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '38px',
            height: '38px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-strong)',
            backgroundColor: 'var(--bg-card)',
            color: 'var(--text-main)',
          }}
          className="mobile-btn"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'var(--bg-card)',
            borderBottom: '1px solid var(--border-hairline)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => {
                setActiveSection(item.id);
                setMobileMenuOpen(false);
              }}
              style={{
                fontSize: '0.98rem',
                fontWeight: 600,
                color: activeSection === item.id ? 'var(--accent)' : 'var(--text-main)',
                padding: '10px 14px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: activeSection === item.id ? 'var(--accent-soft)' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>{item.label}</span>
              {activeSection === item.id && (
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent)',
                  }}
                />
              )}
            </a>
          ))}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
            <button
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="btn-border"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <FileText size={16} />
              <span>View Curriculum Vitae</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-solid"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Inquire for Support</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}

      {/* Interactive Navigation Styling & Micro-Animations */}
      <style>{`
        .nav-anim-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 4px;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s ease, transform 0.18s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        /* Animated Underline Indicator */
        .nav-anim-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 22px;
          height: 2px;
          background-color: var(--accent);
          border-radius: 2px;
          transform: translateX(-50%) scaleX(0);
          transform-origin: center;
          transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease;
        }

        .nav-anim-link span {
          position: relative;
          transition: color 0.18s ease;
        }

        .nav-anim-link:hover {
          color: var(--text-main);
          transform: translateY(-1px);
        }

        .nav-anim-link:hover::after {
          transform: translateX(-50%) scaleX(1);
        }

        /* Click Press Feedback */
        .nav-anim-link:active,
        .nav-anim-link.clicked {
          transform: scale(0.93);
          transition: transform 0.08s ease;
        }

        /* Active Selected State */
        .nav-anim-link.active {
          color: var(--text-main);
          font-weight: 700;
        }

        .nav-anim-link.active::after {
          transform: translateX(-50%) scaleX(1);
        }

        /* Action Button Hover Animation */
        .nav-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: var(--radius-pill);
          background-color: var(--bg-card);
          border: 1px solid var(--border-strong);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-main);
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .nav-action-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(164, 125, 72, 0.15);
        }

        .nav-action-btn:active {
          transform: scale(0.94);
        }

        @media (min-width: 960px) {
          .desktop-menu { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-btn { display: none !important; }
        }
        @media (max-width: 768px) {
          .top-bar-strip { display: none !important; }
        }
      `}</style>
    </header>
  );
};
