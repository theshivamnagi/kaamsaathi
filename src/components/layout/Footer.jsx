import React from 'react'
import { ShieldCheck, Heart, Sparkles, PhoneCall } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'

export function Footer({ onNavigate }) {
  const { lang } = useLanguage()

  return (
    <footer className="footer">
      <div className="container">
        <div className="grid-3" style={{ marginBottom: '40px' }}>
          {/* Col 1: Brand & Mission */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: 'var(--rounded-md)',
                  backgroundColor: 'var(--colors-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff'
                }}
              >
                <ShieldCheck size={18} color="#ffb084" />
              </div>
              <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--colors-ink)' }}>
                KaamSaathi
              </span>
            </div>
            <p className="body-sm" style={{ marginBottom: '16px', maxWidth: '320px' }}>
              {lang === 'hi'
                ? 'भारतीय गिग, डिलीवरी और असंगठित कामगारों के लिए निष्पक्ष मजदूरी, अधिकार एवं सुरक्षा का भरोसेमंद डिजिटल साथी।'
                : 'A dedicated digital support assistant empowering India’s delivery partners, cab drivers, and informal workers with fair pay clarity, rights awareness, and dispute resolution.'}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--colors-muted)' }}>
              <span>Made with</span>
              <Heart size={13} color="#ff4d8b" fill="#ff4d8b" />
              <span>for India's frontline workforce</span>
            </div>
          </div>

          {/* Col 2: Quick Features */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '14px', color: 'var(--colors-ink)' }}>
              {lang === 'hi' ? 'मुख्य सुविधाएं' : 'Core Services'}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('dashboard', 'earnings')}
                  className="btn-text-link"
                  style={{ padding: 0, fontSize: '13px', color: 'var(--colors-body)' }}
                >
                  {lang === 'hi' ? 'कमाई कैलकुलेटर एवं कटौती जांच' : 'Earnings Calculator & Deductions'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('dashboard', 'rights')}
                  className="btn-text-link"
                  style={{ padding: 0, fontSize: '13px', color: 'var(--colors-body)' }}
                >
                  {lang === 'hi' ? 'कामगार अधिकार एवं समाधान' : 'Worker Rights & Escalation Guides'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('dashboard', 'grievance')}
                  className="btn-text-link"
                  style={{ padding: 0, fontSize: '13px', color: 'var(--colors-body)' }}
                >
                  {lang === 'hi' ? 'औपचारिक शिकायत पत्र जनरेटर' : 'Formal Dispute Letter Drafter'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('dashboard', 'schemes')}
                  className="btn-text-link"
                  style={{ padding: 0, fontSize: '13px', color: 'var(--colors-body)' }}
                >
                  {lang === 'hi' ? 'सरकारी कल्याणकारी योजनाएं' : 'Welfare Schemes & Benefits'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Emergency Reference & Demo Notice */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '14px', color: 'var(--colors-ink)' }}>
              {lang === 'hi' ? 'आपातकालीन हेल्पलाइन (भारत)' : 'Emergency Helplines (India)'}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--colors-body)' }}>
              <div>🚨 <strong>112</strong> — National All-in-One Emergency</div>
              <div>🚑 <strong>108</strong> — Medical & Road Trauma</div>
              <div>👷 <strong>14434</strong> — Govt Worker Grievance Helpline</div>
            </div>

            <div
              style={{
                marginTop: '16px',
                padding: '10px 12px',
                borderRadius: 'var(--rounded-md)',
                backgroundColor: 'rgba(232, 185, 74, 0.2)',
                border: '1px solid rgba(232, 185, 74, 0.4)',
                fontSize: '11px',
                color: '#784d00',
                lineHeight: 1.4
              }}
            >
              <strong>Notice:</strong> This is an interactive hackathon demonstration prototype running 100% on local JavaScript. No live government or company systems are contacted.
            </div>
          </div>
        </div>

        {/* Bottom Horizon line */}
        <div
          style={{
            borderTop: '1px solid var(--colors-hairline)',
            paddingTop: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '12px',
            color: 'var(--colors-muted)'
          }}
        >
          <div>
            © 2026 KaamSaathi • Built for Hackathon Excellence • Clay Design System Standard
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>Privacy Preserved</span>
            <span>Zero Third-Party Trackers</span>
            <span>Mobile-First PWA Ready</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
