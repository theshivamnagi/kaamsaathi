import React, { useState } from 'react'
import { Globe, CheckCircle2, ArrowRight } from 'lucide-react'

export function LanguageModal({ isOpen, onSelectLanguage, initialLang = 'hi' }) {
  // Default to 'hi' (Hindi) as explicitly requested: "Keep the regional language Hindi as default"
  const [selected, setSelected] = useState(initialLang || 'hi')

  if (!isOpen) return null

  const handleConfirm = () => {
    onSelectLanguage && onSelectLanguage(selected)
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(6px)',
        zIndex: 99998,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        userSelect: 'none'
      }}
    >
      <style>{`
        @keyframes modalSlideIn {
          0% { transform: translateY(20px) scale(0.96); opacity: 0; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
      `}</style>

      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          width: '500px',
          maxWidth: '100%',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
          border: '1px solid #e2e8f0',
          animation: 'modalSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}
      >
        {/* Top Header */}
        <div
          style={{
            backgroundColor: '#0d7e48',
            color: '#ffffff',
            padding: '24px 28px',
            textAlign: 'center'
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 12px'
            }}
          >
            <Globe size={26} color="#ffffff" />
          </div>

          <h2 style={{ fontSize: '20px', fontWeight: 800, margin: '0 0 6px 0', letterSpacing: '-0.3px' }}>
            अपनी भाषा चुनें / Select Language
          </h2>
          <p style={{ fontSize: '13px', margin: 0, opacity: 0.9 }}>
            कामसाथी सेवा पोर्टल में आपका स्वागत है • Welcome to KaamSaathi
          </p>
        </div>

        {/* Modal Body: Language Options */}
        <div style={{ padding: '24px 28px' }}>
          <div style={{ fontSize: '12px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '14px' }}>
            Choose Regional vs English (क्षेत्रीय भाषा चुनें)
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            {/* Option 1: हिन्दी (Default / Recommended) */}
            <div
              onClick={() => setSelected('hi')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelected('hi')
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 18px',
                borderRadius: '14px',
                border: selected === 'hi' ? '2px solid #0d7e48' : '1.5px solid #e2e8f0',
                backgroundColor: selected === 'hi' ? '#ecfdf5' : '#ffffff',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: selected === 'hi' ? '#0d7e48' : '#f1f5f9',
                    color: selected === 'hi' ? '#ffffff' : '#0f172a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    fontWeight: 800
                  }}
                >
                  हि
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '17px', fontWeight: 800, color: '#0f172a' }}>
                      हिन्दी (Hindi)
                    </span>
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        backgroundColor: '#dcfce7',
                        color: '#15803d',
                        padding: '2px 6px',
                        borderRadius: '4px'
                      }}
                    >
                      डिफ़ॉल्ट (Default)
                    </span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#475569', marginTop: '2px' }}>
                    कमाई की जांच, कामगार अधिकार, सरकारी योजनाएं व शिकायत पत्र
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  border: selected === 'hi' ? '2px solid #0d7e48' : '2px solid #cbd5e1',
                  backgroundColor: selected === 'hi' ? '#0d7e48' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {selected === 'hi' && <CheckCircle2 size={16} color="#ffffff" strokeWidth={3} />}
              </div>
            </div>

            {/* Option 2: English */}
            <div
              onClick={() => setSelected('en')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelected('en')
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 18px',
                borderRadius: '14px',
                border: selected === 'en' ? '2px solid #0d7e48' : '1.5px solid #e2e8f0',
                backgroundColor: selected === 'en' ? '#ecfdf5' : '#ffffff',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: selected === 'en' ? '#0d7e48' : '#f1f5f9',
                    color: selected === 'en' ? '#ffffff' : '#0f172a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    fontWeight: 800
                  }}
                >
                  EN
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '17px', fontWeight: 800, color: '#0f172a' }}>
                      English
                    </span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#475569', marginTop: '2px' }}>
                    Take-home earnings, worker rights, welfare schemes & dispute drafter
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  border: selected === 'en' ? '2px solid #0d7e48' : '2px solid #cbd5e1',
                  backgroundColor: selected === 'en' ? '#0d7e48' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {selected === 'en' && <CheckCircle2 size={16} color="#ffffff" strokeWidth={3} />}
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <button
            type="button"
            onClick={handleConfirm}
            style={{
              width: '100%',
              backgroundColor: '#0d7e48',
              color: '#ffffff',
              border: 'none',
              borderRadius: '12px',
              padding: '14px',
              fontSize: '15px',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(13, 126, 72, 0.25)',
              transition: 'background-color 0.15s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#15803d')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0d7e48')}
          >
            <span>{selected === 'hi' ? 'हिन्दी में जारी रखें' : 'Continue in English'}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
