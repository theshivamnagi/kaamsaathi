import React, { useState, useEffect } from 'react'
import { 
  Mic, 
  Sparkles, 
  ArrowLeft, 
  X, 
  Volume2, 
  ArrowRight, 
  CheckCircle2, 
  RotateCcw,
  Search,
  MessageSquare
} from 'lucide-react'

export function AiVoiceAssistantBanner({ onOpenGrievance, onOpenSchemes, onOpenEarnings, onOpenDigiPin }) {
  const [isListeningModalOpen, setIsListeningModalOpen] = useState(false)
  const [listeningState, setListeningState] = useState('listening') // 'listening' | 'recognized' | 'answered'
  const [activeQuery, setActiveQuery] = useState('')

  const demoQueries = [
    {
      text: 'Zomato payout cycle #41 me ₹1,850 ki deduction kyu hui?',
      answer: 'आपके Zomato साइकिल #41 में ₹1,850 की कटौती "अस्पष्ट पेनल्टी" के रूप में दर्ज है। कोड ऑफ सोशल सिक्योरिटी 2026 के अनुसार आप इसके विरुद्ध शिकायत ड्राफ्ट कर सकते हैं।',
      actionText: 'शिकायत पत्र ड्राफ्ट करें (Draft Grievance)',
      actionType: 'grievance'
    },
    {
      text: 'What is my DigiPin code for doorstep delivery?',
      answer: 'Your delivery hub DigiPin is 110001-DL-8821. It provides 4m x 4m high-precision geospatial address coordinates for accurate doorstep arrival.',
      actionText: 'View DigiPin Details',
      actionType: 'digipin'
    },
    {
      text: 'Am I eligible for Ayushman Bharat ₹5 Lakh health insurance?',
      answer: 'हाँ! ई-श्रम पोर्टल पर पंजीकृत सभी सक्रिय गिग व डिलीवरी पार्टनर्स PM-JAY के तहत ₹5,00,000 कैशलेस अस्पताल कवर के लिए स्वतः पात्र हैं।',
      actionText: 'योजना विवरण देखें (View Scheme)',
      actionType: 'schemes'
    }
  ]

  const handleOpenMic = (customQuery = null) => {
    setIsListeningModalOpen(true)
    setListeningState('listening')
    setActiveQuery('')

    // Simulate auto-listening progression
    const queryToUse = customQuery || demoQueries[0]

    setTimeout(() => {
      setActiveQuery(queryToUse.text)
      setListeningState('recognized')

      setTimeout(() => {
        setListeningState('answered')
      }, 1200)
    }, 1800)
  }

  const handleResetListening = (queryItem) => {
    setListeningState('listening')
    setActiveQuery('')
    setTimeout(() => {
      setActiveQuery(queryItem.text)
      setListeningState('recognized')
      setTimeout(() => {
        setListeningState('answered')
      }, 1200)
    }, 1500)
  }

  const currentAnswer = demoQueries.find((q) => q.text === activeQuery) || demoQueries[0]

  return (
    <>
      <style>{`
        @keyframes pulseRing {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.18); opacity: 0.3; }
          100% { transform: scale(0.95); opacity: 0.8; }
        }
        @keyframes bounceDot {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
        @keyframes shimmerBanner {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>

      {/* =========================================================================
          HERO BANNER: AI-POWERED VOICE ASSISTANT (Replaces the carousel)
         ========================================================================= */}
      <div
        style={{
          width: '100%',
          marginBottom: '24px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #063e2c 0%, #0a563c 45%, #084c37 100%)',
          color: '#ffffff',
          overflow: 'hidden',
          boxShadow: '0 8px 24px rgba(6, 62, 44, 0.22)',
          position: 'relative'
        }}
      >
        {/* Subtle Ambient Glowing Circles */}
        <div
          style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '240px',
            height: '240px',
            borderRadius: '50%',
            backgroundColor: '#10b981',
            filter: 'blur(70px)',
            opacity: 0.25,
            pointerEvents: 'none'
          }}
        />

        <div
          style={{
            padding: '34px 44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '32px',
            flexWrap: 'wrap'
          }}
        >
          {/* Left Column: Headlines & Mic Search Bar */}
          <div style={{ flex: '1 1 500px', maxWidth: '640px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(6px)',
                  color: '#86efac',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <Sparkles size={13} color="#86efac" />
                AI Voice Assistant • वॉइस सहायक
              </span>
              <span style={{ fontSize: '11px', color: '#a7f3d0' }}>Live Interactive Demo</span>
            </div>

            <h2
              style={{
                fontSize: '26px',
                fontWeight: 800,
                lineHeight: 1.3,
                color: '#ffffff',
                marginBottom: '10px',
                letterSpacing: '-0.3px'
              }}
            >
              Speak to KaamSaathi AI — Hands-Free Voice Search
            </h2>

            <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.5, marginBottom: '22px' }}>
              Tap the microphone to ask in Hindi or English about weekly payout deductions, worker rights, road safety protocols, or welfare schemes.
            </p>

            {/* Google Search Style Big Voice Pill */}
            <div
              onClick={() => handleOpenMic()}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleOpenMic()
              }}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '9999px',
                padding: '8px 10px 8px 22px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: '2px solid rgba(255, 255, 255, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,0,0,0.32)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.25)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: 0 }}>
                <Search size={18} color="#0d7e48" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '14px', color: '#475569', fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  Ask by voice: "मेरा ₹1,850 पेआउट क्यों कटा?" / Tap mic...
                </span>
              </div>

              {/* Pulsing Colorful Microphone Icon Button */}
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#0d7e48',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 3px 10px rgba(13, 126, 72, 0.4)',
                  transition: 'transform 0.15s ease'
                }}
              >
                <Mic size={20} color="#ffffff" strokeWidth={2.5} />
              </div>
            </div>

            {/* Quick Spoken Demo Chips */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginTop: '16px' }}>
              <span style={{ fontSize: '11px', color: '#a7f3d0', fontWeight: 600 }}>Try asking:</span>
              {demoQueries.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleOpenMic(item)}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    border: '1px solid rgba(255, 255, 255, 0.22)',
                    borderRadius: '9999px',
                    padding: '4px 10px',
                    fontSize: '11.5px',
                    color: '#ffffff',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.24)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)')}
                >
                  <Mic size={11} color="#86efac" />
                  <span>{item.text.length > 36 ? item.text.substring(0, 36) + '...' : item.text}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Sound Wave / Assistant Graphic */}
          <div
            onClick={() => handleOpenMic()}
            style={{
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            {/* Visualizer Glowing Rings */}
            <div
              style={{
                position: 'relative',
                width: '130px',
                height: '130px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 32px rgba(0,0,0,0.25)'
              }}
            >
              {/* Animated pulsating outer ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-12px',
                  borderRadius: '50%',
                  border: '2px solid rgba(74, 222, 128, 0.4)',
                  animation: 'pulseRing 2.4s ease-out infinite'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: '-24px',
                  borderRadius: '50%',
                  border: '1.5px dashed rgba(74, 222, 128, 0.2)',
                  animation: 'pulseRing 2.4s ease-out 0.6s infinite'
                }}
              />

              {/* Big Center Mic Icon */}
              <div
                style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.2)'
                }}
              >
                <Mic size={38} color="#0d7e48" strokeWidth={2.5} />
              </div>
            </div>

            <span style={{ fontSize: '12px', color: '#a7f3d0', fontWeight: 600, marginTop: '14px', letterSpacing: '0.5px' }}>
              Tap to Speak (बोलें)
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          GOOGLE VOICE SEARCH STYLE SCREEN (Listening Overlay)
         ========================================================================= */}
      {isListeningModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.88)',
            backdropFilter: 'blur(10px)',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '28px 24px 40px 24px',
            userSelect: 'none',
            color: '#ffffff'
          }}
        >
          {/* Top Bar: Back Button & Close */}
          <div
            style={{
              width: '100%',
              maxWidth: '680px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            {/* Click back to return */}
            <button
              type="button"
              onClick={() => setIsListeningModalOpen(false)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '9999px',
                padding: '8px 18px',
                fontSize: '13.5px',
                fontWeight: 600,
                color: '#ffffff',
                cursor: 'pointer',
                transition: 'background-color 0.15s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)')}
            >
              <ArrowLeft size={16} />
              <span>Back to Dashboard</span>
            </button>

            <button
              type="button"
              onClick={() => setIsListeningModalOpen(false)}
              aria-label="Close Voice Screen"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Center Main Stage (Google Mic Experience) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: '580px',
              width: '100%',
              textAlign: 'center',
              margin: 'auto 0'
            }}
          >
            {/* STATE 1: LISTENING ANIMATION */}
            {listeningState === 'listening' && (
              <>
                {/* Google-Search Multi-color Pulse Circles */}
                <div
                  style={{
                    position: 'relative',
                    width: '150px',
                    height: '150px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '36px'
                  }}
                >
                  {/* Expanding multi-colored sound rings */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: '-20px',
                      borderRadius: '50%',
                      border: '3px solid #34a853',
                      animation: 'pulseRing 1.8s ease-out infinite'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: '-40px',
                      borderRadius: '50%',
                      border: '3px solid #4285f4',
                      animation: 'pulseRing 1.8s ease-out 0.4s infinite'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: '-60px',
                      borderRadius: '50%',
                      border: '3px solid #ea4335',
                      animation: 'pulseRing 1.8s ease-out 0.8s infinite'
                    }}
                  />

                  {/* Big Glowing Center Mic */}
                  <div
                    style={{
                      width: '92px',
                      height: '92px',
                      borderRadius: '50%',
                      backgroundColor: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 35px rgba(52, 168, 83, 0.7)'
                    }}
                  >
                    <Mic size={44} color="#0d7e48" strokeWidth={2.5} />
                  </div>
                </div>

                <h3 style={{ fontSize: '26px', fontWeight: 800, margin: '0 0 8px 0', letterSpacing: '-0.3px' }}>
                  Listening... / सुन रहे हैं...
                </h3>

                {/* 4 Animated colored bouncing dots (Google Assistant style) */}
                <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#4285f4', animation: 'bounceDot 1.4s infinite ease-in-out both' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ea4335', animation: 'bounceDot 1.4s infinite ease-in-out 0.16s both' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#fbbc05', animation: 'bounceDot 1.4s infinite ease-in-out 0.32s both' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#34a853', animation: 'bounceDot 1.4s infinite ease-in-out 0.48s both' }} />
                </div>

                <p style={{ fontSize: '14px', color: '#94a3b8', margin: 0 }}>
                  Speak now in Hindi or English (बोलना शुरू करें...)
                </p>
              </>
            )}

            {/* STATE 2: RECOGNIZED VOICE */}
            {listeningState === 'recognized' && (
              <>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    boxShadow: '0 0 25px rgba(16, 185, 129, 0.5)'
                  }}
                >
                  <Volume2 size={32} color="#ffffff" />
                </div>

                <div style={{ fontSize: '12px', color: '#86efac', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                  Voice Recognized • आवाज़ पहचानी गई
                </div>

                <div
                  style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    color: '#ffffff',
                    lineHeight: 1.4,
                    padding: '0 12px'
                  }}
                >
                  "{activeQuery}"
                </div>
              </>
            )}

            {/* STATE 3: ANSWER CARD */}
            {listeningState === 'answered' && (
              <div
                style={{
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  borderRadius: '20px',
                  padding: '28px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  textAlign: 'left',
                  width: '100%',
                  animation: 'modalSlideIn 0.3s ease'
                }}
              >
                {/* Spoken query echo */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Mic size={15} color="#0d7e48" />
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#475569' }}>
                    "{activeQuery}"
                  </span>
                </div>

                {/* AI Response Card */}
                <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '16px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                    <Sparkles size={16} color="#0d7e48" />
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#0d7e48', textTransform: 'uppercase' }}>
                      KaamSaathi AI Voice Solution
                    </span>
                  </div>
                  <p style={{ fontSize: '14px', color: '#166534', lineHeight: 1.55, margin: 0 }}>
                    {currentAnswer.answer}
                  </p>
                </div>

                {/* Action buttons */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={() => {
                      setIsListeningModalOpen(false)
                      if (currentAnswer.actionType === 'grievance' && onOpenGrievance) onOpenGrievance()
                      else if (currentAnswer.actionType === 'schemes' && onOpenSchemes) onOpenSchemes()
                      else if (currentAnswer.actionType === 'earnings' && onOpenEarnings) onOpenEarnings()
                      else if (currentAnswer.actionType === 'digipin' && onOpenDigiPin) onOpenDigiPin()
                    }}
                    style={{
                      backgroundColor: '#0d7e48',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '10px',
                      padding: '11px 20px',
                      fontSize: '13.5px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 12px rgba(13, 126, 72, 0.25)'
                    }}
                  >
                    <span>{currentAnswer.actionText}</span>
                    <ArrowRight size={15} />
                  </button>

                  <button
                    type="button"
                    onClick={() => setListeningState('listening')}
                    style={{
                      backgroundColor: '#f1f5f9',
                      color: '#334155',
                      border: '1px solid #cbd5e1',
                      borderRadius: '10px',
                      padding: '10px 16px',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <RotateCcw size={14} />
                    <span>Ask Another</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Switcher: Tap Sample Queries */}
          <div style={{ width: '100%', maxWidth: '640px' }}>
            <div style={{ fontSize: '12px', color: '#94a3b8', textAlign: 'center', marginBottom: '10px' }}>
              Or tap any sample question to test:
            </div>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {demoQueries.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleResetListening(q)}
                  style={{
                    backgroundColor: activeQuery === q.text ? '#0d7e48' : 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    fontSize: '12px',
                    color: '#ffffff',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s ease'
                  }}
                >
                  🎙️ {q.text.length > 38 ? q.text.substring(0, 38) + '...' : q.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
