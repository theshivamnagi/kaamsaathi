import React, { useState } from 'react'
import { LanguageSwitch } from '../common/LanguageSwitch'
import { Button } from '../common/Button'
import { useLanguage } from '../../hooks/useLanguage'
import { 
  Menu, 
  X, 
  Compass, 
  LayoutDashboard, 
  ShieldCheck, 
  Calculator, 
  FileText,
  HelpCircle,
  Sparkles
} from 'lucide-react'

export function Navbar({ currentPage, onNavigate }) {
  const { t, lang } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (pageId, sectionId) => {
    setMobileMenuOpen(false)
    if (onNavigate) {
      onNavigate(pageId, sectionId)
    }
  }

  return (
    <header className="top-nav">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        {/* Logo / Wordmark */}
        <div 
          onClick={() => handleNavClick('landing')}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: 'var(--rounded-md)',
              backgroundColor: 'var(--colors-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
            }}
          >
            <ShieldCheck size={22} color="#ffb084" />
          </div>
          <div>
            <div style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.5px', color: 'var(--colors-ink)', lineHeight: 1.1 }}>
              KaamSaathi
            </div>
            <div style={{ fontSize: '10px', fontWeight: 600, color: 'var(--colors-muted)', letterSpacing: '0.5px' }}>
              कामगार साथी
            </div>
          </div>
        </div>

        {/* Desktop Navigation links */}
        <nav style={{ display: 'none' }} className="desktop-nav-links">
          <button
            onClick={() => handleNavClick('landing')}
            className={`btn-text-link ${currentPage === 'landing' ? 'active-link' : ''}`}
            style={{ fontSize: '14px', fontWeight: 500 }}
          >
            {t.navHome}
          </button>
          
          <button
            onClick={() => handleNavClick('landing', 'features-section')}
            className="btn-text-link"
            style={{ fontSize: '14px', fontWeight: 500 }}
          >
            {lang === 'hi' ? 'सुविधाएं' : 'Features'}
          </button>

          <button
            onClick={() => handleNavClick('landing', 'how-it-works-section')}
            className="btn-text-link"
            style={{ fontSize: '14px', fontWeight: 500 }}
          >
            {lang === 'hi' ? 'कैसे काम करता है' : 'How it works'}
          </button>
        </nav>

        {/* Right side cluster: Language selector + Dashboard CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <LanguageSwitch />

          {currentPage === 'landing' ? (
            <Button
              variant="primary"
              size="sm"
              icon={LayoutDashboard}
              onClick={() => handleNavClick('dashboard')}
            >
              {t.navDashboard}
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              icon={Compass}
              onClick={() => handleNavClick('landing')}
            >
              {t.navHome}
            </Button>
          )}

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              background: 'transparent',
              border: '1px solid var(--colors-hairline)',
              borderRadius: 'var(--rounded-md)',
              padding: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '64px',
            left: 0,
            right: 0,
            backgroundColor: 'var(--colors-canvas)',
            borderBottom: '1px solid var(--colors-hairline)',
            padding: '16px 20px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            zIndex: 100
          }}
        >
          <button
            onClick={() => handleNavClick('landing')}
            className="btn-text-link"
            style={{ textAlign: 'left', padding: '10px 0', fontSize: '15px' }}
          >
            🏠 {t.navHome}
          </button>

          <button
            onClick={() => handleNavClick('dashboard')}
            className="btn-text-link"
            style={{ textAlign: 'left', padding: '10px 0', fontSize: '15px', fontWeight: 600 }}
          >
            ⚡ {t.navDashboard}
          </button>

          <button
            onClick={() => handleNavClick('dashboard', 'earnings')}
            className="btn-text-link"
            style={{ textAlign: 'left', padding: '10px 0', fontSize: '15px' }}
          >
            💰 {t.actionEarningsTitle}
          </button>

          <button
            onClick={() => handleNavClick('dashboard', 'rights')}
            className="btn-text-link"
            style={{ textAlign: 'left', padding: '10px 0', fontSize: '15px' }}
          >
            ⚖️ {t.actionRightsTitle}
          </button>

          <button
            onClick={() => handleNavClick('dashboard', 'schemes')}
            className="btn-text-link"
            style={{ textAlign: 'left', padding: '10px 0', fontSize: '15px' }}
          >
            🏛️ {t.actionSchemesTitle}
          </button>

          <button
            onClick={() => handleNavClick('dashboard', 'grievance')}
            className="btn-text-link"
            style={{ textAlign: 'left', padding: '10px 0', fontSize: '15px' }}
          >
            📝 {t.actionGrievanceTitle}
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav-links {
            display: flex !important;
            align-items: center;
            gap: 16px;
          }
          .mobile-hamburger-btn {
            display: none !important;
          }
        }
        .active-link {
          font-weight: 700 !important;
          color: var(--colors-primary) !important;
        }
      `}</style>
    </header>
  )
}
