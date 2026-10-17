import React, { useState } from 'react'
import { LanguageSwitch } from '../common/LanguageSwitch'
import { Button } from '../common/Button'
import { useLanguage } from '../../hooks/useLanguage'
import { 
  Search, 
  Menu, 
  X, 
  Moon, 
  Sun, 
  Globe, 
  ArrowRight,
  Accessibility,
  LayoutDashboard,
  Compass
} from 'lucide-react'

export function Navbar({ currentPage, onNavigate }) {
  const { t, lang, setLang } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [highContrast, setHighContrast] = useState(false)

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    const query = searchQuery.toLowerCase()
    if (query.includes('earn') || query.includes('pay') || query.includes('money') || query.includes('fuel')) {
      onNavigate('dashboard', 'earnings')
    } else if (query.includes('grievance') || query.includes('dispute') || query.includes('complaint')) {
      onNavigate('dashboard', 'grievance')
    } else if (query.includes('right') || query.includes('penalty') || query.includes('law')) {
      onNavigate('dashboard', 'rights')
    } else if (query.includes('scheme') || query.includes('welfare') || query.includes('aid')) {
      onNavigate('dashboard', 'schemes')
    } else if (query.includes('safe') || query.includes('emergency') || query.includes('accident')) {
      onNavigate('dashboard', 'safety')
    } else {
      onNavigate('dashboard', 'schemes')
    }
  }

  const toggleContrast = () => {
    setHighContrast(!highContrast)
    document.body.classList.toggle('high-contrast-mode')
  }

  return (
    <header className="gov-header-wrap" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', position: 'sticky', top: 0, zIndex: 1000 }}>

      {/* Main Navbar */}
      <div className="container" style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
        {/* Left: Indian Emblem + KaamSaathi Wordmark + Digital India */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
          {/* Emblem of India */}
          <div 
            onClick={() => onNavigate('landing')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <img 
              src="/assets/emblem.svg" 
              alt="Government of India Emblem" 
              style={{ height: '42px', width: 'auto' }} 
            />
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
                <span style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px', fontFamily: 'Inter, sans-serif' }}>
                  kaam
                </span>
                <span style={{ fontSize: '24px', fontWeight: 800, color: '#0d7e48', letterSpacing: '-0.5px', fontFamily: 'Inter, sans-serif' }}>
                  Saathi
                </span>
              </div>
              <span style={{ fontSize: '10px', fontWeight: 600, color: '#64748b', letterSpacing: '0.4px', marginTop: '-2px' }}>
                कामगार सेवा पोर्टल
              </span>
            </div>
          </div>

          {/* Digital India Badge */}
          <div className="desktop-only" style={{ borderLeft: '1px solid #e2e8f0', paddingLeft: '14px', display: 'flex', alignItems: 'center' }}>
            <img 
              src="/assets/digital-india.svg" 
              alt="Digital India Power to Empower" 
              style={{ height: '28px', width: 'auto' }} 
            />
          </div>
        </div>

        {/* Middle: Prominent Search Pill (myScheme signature design) */}
        <form 
          onSubmit={handleSearchSubmit} 
          className="desktop-only"
          style={{ flexGrow: 1, maxWidth: '440px', margin: '0 16px' }}
        >
          <div 
            style={{ 
              position: 'relative', 
              display: 'flex', 
              alignItems: 'center',
              backgroundColor: '#ffffff',
              borderRadius: '9999px',
              border: '1.5px solid #cbd5e1',
              padding: '2px 4px 2px 16px',
              transition: 'all 0.2s ease',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
            }}
          >
            <input
              type="text"
              placeholder={lang === 'hi' ? 'योजना, अधिकार या समस्या खोजें...' : 'Enter scheme name or support topic to search...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: 'none',
                outline: 'none',
                width: '100%',
                fontSize: '13px',
                color: '#1e293b',
                backgroundColor: 'transparent'
              }}
            />
            <button
              type="submit"
              aria-label="Search"
              style={{
                background: 'transparent',
                border: 'none',
                color: '#64748b',
                padding: '6px 10px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Search size={16} />
            </button>
          </div>
        </form>

        {/* Right side tools: Green Sign In / Dashboard button + Language dropdown + Accessibility icon */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          {/* Green CTA Button (Sign In / Open Dashboard) */}
          <button
            type="button"
            onClick={() => onNavigate(currentPage === 'landing' ? 'dashboard' : 'landing')}
            style={{
              backgroundColor: '#0d7e48',
              color: '#ffffff',
              border: 'none',
              borderRadius: '6px',
              padding: '9px 18px',
              fontSize: '14px',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              transition: 'background-color 0.15s ease'
            }}
          >
            <span>{currentPage === 'landing' ? (lang === 'hi' ? 'डैशबोर्ड खोलें' : 'Sign In') : (lang === 'hi' ? 'होम पेज' : 'Home')}</span>
            <ArrowRight size={16} />
          </button>

          {/* Language Selector Dropdown */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              backgroundColor: '#f1f5f9',
              borderRadius: '6px',
              padding: '6px 10px',
              border: '1px solid #e2e8f0',
              cursor: 'pointer'
            }}
            onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
            title="Switch Language"
          >
            <Globe size={15} color="#0d7e48" />
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#334155' }}>
              {lang === 'en' ? 'English' : 'हिन्दी'}
            </span>
          </div>


          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            className="mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: '1px solid #cbd5e1',
              borderRadius: '6px',
              padding: '6px',
              cursor: 'pointer',
              display: 'none'
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer menu */}
      {mobileMenuOpen && (
        <div style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search scheme or support topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-input"
              style={{ marginBottom: '8px' }}
            />
          </form>
          <button
            onClick={() => { setMobileMenuOpen(false); onNavigate('dashboard'); }}
            className="btn btn-primary"
            style={{ width: '100%', backgroundColor: '#0d7e48' }}
          >
            Open Worker Dashboard
          </button>
          <button
            onClick={() => { setMobileMenuOpen(false); onNavigate('landing'); }}
            className="btn-text-link"
            style={{ textAlign: 'left', padding: '8px 0' }}
          >
            Home
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-only {
            display: none !important;
          }
          .mobile-only {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  )
}
