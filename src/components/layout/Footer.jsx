import React from 'react'
import { ShieldCheck, ArrowRight, ExternalLink, Heart, Phone, HelpCircle } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'

export function Footer({ onNavigate }) {
  const { lang } = useLanguage()

  return (
    <footer style={{ backgroundColor: '#0f172a', color: '#cbd5e1', borderTop: '3px solid #0d7e48', marginTop: '60px' }}>
      <div className="container" style={{ paddingTop: '48px', paddingBottom: '36px' }}>
        {/* Main 4-column Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '36px',
            marginBottom: '40px' 
          }}
        >
          {/* Col 1: Brand & Mission */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <img 
                src="/assets/emblem.svg" 
                alt="Government of India Emblem" 
                style={{ height: '32px', width: 'auto', filter: 'brightness(0) invert(1)' }} 
              />
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
                <span style={{ fontSize: '22px', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.5px' }}>
                  kaam
                </span>
                <span style={{ fontSize: '22px', fontWeight: 900, color: '#22c55e', letterSpacing: '-0.5px' }}>
                  Saathi
                </span>
              </div>
            </div>

            <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#94a3b8', marginBottom: '18px' }}>
              A dedicated digital assistance portal empowering India's delivery partners, drivers, and informal platform workers with transparent payout auditing, statutory rights, and dispute drafting.
            </p>

            <button
              type="button"
              onClick={() => onNavigate('dashboard')}
              style={{
                backgroundColor: '#0d7e48',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '9px 18px',
                fontSize: '13px',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                transition: 'background-color 0.15s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#15803d')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0d7e48')}
            >
              <span>Open Worker Dashboard</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Col 2: Worker Assistance Tools */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '16px', letterSpacing: '0.2px' }}>
              Worker Tools
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <li>
                <button 
                  onClick={() => onNavigate('dashboard', 'earnings')} 
                  style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 0, fontSize: '13px', textAlign: 'left' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#22c55e')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  › Take-Home & Expense Calculator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('dashboard', 'grievance')} 
                  style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 0, fontSize: '13px', textAlign: 'left' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#22c55e')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  › Formal Grievance & Dispute Drafter
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('dashboard', 'rights')} 
                  style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 0, fontSize: '13px', textAlign: 'left' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#22c55e')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  › Worker Rights & De-activation Shield
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('dashboard', 'schemes')} 
                  style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 0, fontSize: '13px', textAlign: 'left' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#22c55e')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  › Social Security & Welfare Schemes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('dashboard', 'safety')} 
                  style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 0, fontSize: '13px', textAlign: 'left' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#22c55e')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  › Road Safety & Incident Protocols
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('dashboard', 'docs')} 
                  style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 0, fontSize: '13px', textAlign: 'left' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#22c55e')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  › DigiLocker Document Vault & Pass
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Statutory Protections & State Boards */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '16px', letterSpacing: '0.2px' }}>
              Statutory Protections
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#94a3b8' }}>
              <div>
                <strong style={{ color: '#e2e8f0', display: 'block' }}>Social Security Code 2026</strong>
                <span>Mandatory aggregator welfare fund contribution for health and accident insurance.</span>
              </div>
              <div>
                <strong style={{ color: '#e2e8f0', display: 'block' }}>The Punjab State Gig Workers Board</strong>
                <span>Statutory 1-2% cess tracking and 90-day dispute redressal mechanism.</span>
              </div>
              <div>
                <strong style={{ color: '#e2e8f0', display: 'block' }}>National DigiPin Protocol</strong>
                <span>4m x 4m algorithmic address precision for doorstep delivery partners.</span>
              </div>
            </div>
          </div>

          {/* Col 4: Emergency Helplines & Support */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '16px', letterSpacing: '0.2px' }}>
              Emergency Helplines
            </h4>
            <div style={{ fontSize: '13px', lineHeight: 1.6, color: '#94a3b8', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ backgroundColor: '#dc2626', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '2px 6px', borderRadius: '4px' }}>
                  112
                </span>
                <span style={{ color: '#e2e8f0' }}>National Emergency SOS / Police</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ backgroundColor: '#2563eb', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '2px 6px', borderRadius: '4px' }}>
                  14434
                </span>
                <span style={{ color: '#e2e8f0' }}>Ministry of Labour Shram Suvidha</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ backgroundColor: '#0d7e48', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '2px 6px', borderRadius: '4px' }}>
                  14555
                </span>
                <span style={{ color: '#e2e8f0' }}>Ayushman Bharat (PM-JAY) Helpline</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ backgroundColor: '#d97706', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '2px 6px', borderRadius: '4px' }}>
                  1933
                </span>
                <span style={{ color: '#e2e8f0' }}>MANAS NCB Confidential Anti-Drug Tip</span>
              </div>

              <div style={{ marginTop: '8px', fontSize: '12px', color: '#64748b', lineHeight: 1.4 }}>
                100% Client-Side Privacy: No user pay slips, mobile numbers, or personal chats are stored on external servers.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          style={{ 
            borderTop: '1px solid #1e293b', 
            paddingTop: '20px', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '12px',
            color: '#64748b'
          }}
        >
          <div>
            © 2026 KaamSaathi (कामसाथी) • Platform-Based Gig Worker Assistant • Open Demonstration
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span style={{ cursor: 'pointer' }} onClick={() => onNavigate('dashboard', 'rights')}>Worker Rights Charter</span>
            <span>•</span>
            <span style={{ cursor: 'pointer' }} onClick={() => onNavigate('dashboard', 'docs')}>DigiPin Guide</span>
            <span>•</span>
            <span style={{ cursor: 'pointer' }} onClick={() => onNavigate('dashboard')}>Launch Dashboard</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
