import React, { useState, useEffect, useRef } from 'react'
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
  ShieldCheck,
  AlertTriangle,
  FileText,
  PhoneCall,
  Clock,
  MapPin,
  HelpCircle,
  ExternalLink,
  ChevronRight
} from 'lucide-react'

export function AiVoiceAssistantBanner({ onOpenGrievance, onOpenSchemes, onOpenEarnings, onOpenDigiPin }) {
  const [isListeningModalOpen, setIsListeningModalOpen] = useState(false)
  // 'recording' (5s delay) | 'processing' (2s delay) | 'answered'
  const [listeningState, setListeningState] = useState('recording')
  const [secondsRemaining, setSecondsRemaining] = useState(5)

  const timerRef = useRef(null)
  const processingTimerRef = useRef(null)

  const fixedQuestion = 'meri cash on delivery ke paise customer ne pay nahi kiye, is case me meri kya rights hai?'
  const fixedQuestionHindi = 'मेरी कैश ऑन डिलीवरी के पैसे कस्टमर ने पे नहीं किए, इस केस में मेरी क्या राइट्स हैं?'

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
      if (processingTimerRef.current) clearTimeout(processingTimerRef.current)
    }
  }, [])

  const handleStartVoiceInteraction = () => {
    setIsListeningModalOpen(true)
    setListeningState('recording')
    setSecondsRemaining(5)

    if (timerRef.current) clearInterval(timerRef.current)
    if (processingTimerRef.current) clearTimeout(processingTimerRef.current)

    // 5-second recording countdown
    let currentSeconds = 5
    timerRef.current = setInterval(() => {
      currentSeconds -= 1
      setSecondsRemaining(currentSeconds)

      if (currentSeconds <= 0) {
        clearInterval(timerRef.current)
        // Switch to 2-second processing delay
        setListeningState('processing')

        processingTimerRef.current = setTimeout(() => {
          setListeningState('answered')
        }, 2000) // 2 second delay before response
      }
    }, 1000)
  }

  const handleCloseModal = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (processingTimerRef.current) clearTimeout(processingTimerRef.current)
    setIsListeningModalOpen(false)
  }

  const handleDraftGrievanceAction = () => {
    handleCloseModal()
    if (onOpenGrievance) {
      onOpenGrievance({
        company: 'Zomato / Swiggy / Blinkit',
        amount: 1450,
        issueCategory: 'cod_discrepancy',
        whatHappened:
          'Customer refused to pay Cash On Delivery (COD) amount of ₹1,450 at doorstep. As per Code on Social Security 2020 Sections 114 & 134, delivery partners are not liable for customer non-payment. Discrepancy ticket was submitted within SOP.',
        desiredOutcome:
          'Immediate reversal of COD liability, no deduction from wallet or weekly settlement, and protection of partner delivery rating.'
      })
    }
  }

  return (
    <>
      <style>{`
        @keyframes pulseRingGoogle {
          0% { transform: scale(0.92); opacity: 0.85; }
          50% { transform: scale(1.22); opacity: 0.25; }
          100% { transform: scale(0.92); opacity: 0.85; }
        }
        @keyframes bounceGoogleDot {
          0%, 80%, 100% { transform: scale(0.3); opacity: 0.4; }
          40% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes soundWaveBar {
          0%, 100% { height: 8px; }
          50% { height: 32px; }
        }
        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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
            padding: '32px 40px',
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
                fontSize: '25px',
                fontWeight: 800,
                lineHeight: 1.3,
                color: '#ffffff',
                marginBottom: '10px',
                letterSpacing: '-0.3px'
              }}
            >
              Speak to KaamSaathi AI — Hands-Free Voice Assistant
            </h2>

            <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.5, marginBottom: '20px' }}>
              Tap the microphone to speak your query. Get instant legal rights, step-by-step guidance with photos, and actionable dispute resolution.
            </p>

            {/* Google Search Style Big Voice Pill */}
            <div
              onClick={handleStartVoiceInteraction}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleStartVoiceInteraction()
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
                <span style={{ fontSize: '13.5px', color: '#1e293b', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  "{fixedQuestion}"
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

            {/* Quick Spoken Demo Chip */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginTop: '14px' }}>
              <span style={{ fontSize: '11px', color: '#a7f3d0', fontWeight: 600 }}>Active Voice Query:</span>
              <button
                type="button"
                onClick={handleStartVoiceInteraction}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '9999px',
                  padding: '5px 12px',
                  fontSize: '11.5px',
                  color: '#ffffff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)')}
              >
                <Mic size={12} color="#86efac" />
                <span>🎙️ Tap to speak COD non-payment rights question (5s record + 2s AI response)</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3D Sound Wave / Assistant Graphic */}
          <div
            onClick={handleStartVoiceInteraction}
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
                width: '124px',
                height: '124px',
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
                  animation: 'pulseRingGoogle 2.4s ease-out infinite'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: '-24px',
                  borderRadius: '50%',
                  border: '1.5px dashed rgba(74, 222, 128, 0.2)',
                  animation: 'pulseRingGoogle 2.4s ease-out 0.6s infinite'
                }}
              />

              {/* Big Center Mic Icon */}
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.2)'
                }}
              >
                <Mic size={36} color="#0d7e48" strokeWidth={2.5} />
              </div>
            </div>

            <span style={{ fontSize: '12px', color: '#a7f3d0', fontWeight: 600, marginTop: '14px', letterSpacing: '0.5px' }}>
              Tap to Speak (बोलें)
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          FULLSCREEN GOOGLE VOICE SEARCH STYLE OVERLAY (Deep Dark Cinema Mode)
         ========================================================================= */}
      {isListeningModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            // Per user request: background be more dark when recording is happening
            backgroundColor: listeningState === 'recording' ? 'rgba(3, 7, 12, 0.97)' : 'rgba(5, 10, 18, 0.95)',
            backdropFilter: 'blur(12px)',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '24px 20px 32px 20px',
            color: '#ffffff',
            overflowY: 'auto',
            animation: 'modalFadeIn 0.25s ease-out'
          }}
        >
          {/* Top Bar: Back Button & Close */}
          <div
            style={{
              width: '100%',
              maxWidth: '840px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px'
            }}
          >
            {/* Click back to return */}
            <button
              type="button"
              onClick={handleCloseModal}
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
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.22)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)')}
            >
              <ArrowLeft size={16} />
              <span>Back to Dashboard</span>
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  fontSize: '12px',
                  color: '#94a3b8',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  padding: '5px 12px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                {listeningState === 'recording' && `🎙️ Recording Live (${secondsRemaining}s left)`}
                {listeningState === 'processing' && '⏳ AI Legal Processing (2s)...'}
                {listeningState === 'answered' && '✅ Rights & Action Guide Ready'}
              </span>

              <button
                type="button"
                onClick={handleCloseModal}
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
                  justifyContent: 'center',
                  transition: 'background-color 0.15s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.24)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)')}
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* =========================================================================
              PHASE 1: 5-SECOND RECORDING STATE (Deep Dark Background + Fixed Question)
             ========================================================================= */}
          {listeningState === 'recording' && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: '680px',
                width: '100%',
                textAlign: 'center',
                marginTop: '40px',
                animation: 'modalFadeIn 0.3s ease'
              }}
            >
              {/* Google Voice Multi-color Concentric Rings with countdown */}
              <div
                style={{
                  position: 'relative',
                  width: '170px',
                  height: '170px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '36px'
                }}
              >
                {/* Ring 1 - Google Green */}
                <div
                  style={{
                    position: 'absolute',
                    inset: '-20px',
                    borderRadius: '50%',
                    border: '3px solid #34a853',
                    animation: 'pulseRingGoogle 2s ease-out infinite'
                  }}
                />
                {/* Ring 2 - Google Blue */}
                <div
                  style={{
                    position: 'absolute',
                    inset: '-45px',
                    borderRadius: '50%',
                    border: '3px solid #4285f4',
                    animation: 'pulseRingGoogle 2s ease-out 0.4s infinite'
                  }}
                />
                {/* Ring 3 - Google Red */}
                <div
                  style={{
                    position: 'absolute',
                    inset: '-70px',
                    borderRadius: '50%',
                    border: '3px solid #ea4335',
                    animation: 'pulseRingGoogle 2s ease-out 0.8s infinite'
                  }}
                />

                {/* Big Center Glowing Mic Icon */}
                <div
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 45px rgba(52, 168, 83, 0.85)',
                    position: 'relative'
                  }}
                >
                  <Mic size={48} color="#0d7e48" strokeWidth={2.5} />
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '8px',
                      fontSize: '11px',
                      fontWeight: 800,
                      color: '#0d7e48'
                    }}
                  >
                    {secondsRemaining}s
                  </span>
                </div>
              </div>

              {/* Status Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#ef4444',
                    boxShadow: '0 0 10px #ef4444'
                  }}
                />
                <h3 style={{ fontSize: '26px', fontWeight: 800, margin: 0, letterSpacing: '-0.3px', color: '#ffffff' }}>
                  Listening... / सुन रहे हैं... ({secondsRemaining}s)
                </h3>
              </div>

              {/* Animated Audio Equalizer Bars */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', height: '36px', marginBottom: '24px' }}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((bar) => (
                  <span
                    key={bar}
                    style={{
                      width: '4px',
                      backgroundColor: bar % 4 === 0 ? '#4285f4' : bar % 4 === 1 ? '#ea4335' : bar % 4 === 2 ? '#fbbc05' : '#34a853',
                      borderRadius: '2px',
                      animation: `soundWaveBar 0.9s infinite ease-in-out ${bar * 0.08}s`
                    }}
                  />
                ))}
              </div>

              {/* FIXED QUESTION IN THE RECORDING (As requested by user) */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1.5px solid rgba(255, 255, 255, 0.22)',
                  borderRadius: '16px',
                  padding: '20px 24px',
                  maxWidth: '620px',
                  width: '100%',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.4)'
                }}
              >
                <div style={{ fontSize: '12px', color: '#86efac', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                  Captured Spoken Query • रिकॉर्डेड सवाल
                </div>
                <div
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#ffffff',
                    lineHeight: 1.45
                  }}
                >
                  "{fixedQuestion}"
                </div>
                <div style={{ fontSize: '13px', color: '#cbd5e1', marginTop: '8px', fontStyle: 'italic' }}>
                  ({fixedQuestionHindi})
                </div>
              </div>

              <p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '20px' }}>
                5-second audio sampling in progress • Recording hands-free query...
              </p>
            </div>
          )}

          {/* =========================================================================
              PHASE 2: 2-SECOND PROCESSING DELAY (AI Legal Engine Analyzing)
             ========================================================================= */}
          {listeningState === 'processing' && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: '620px',
                width: '100%',
                textAlign: 'center',
                marginTop: '60px',
                animation: 'modalFadeIn 0.3s ease'
              }}
            >
              {/* Spinning AI Ring */}
              <div
                style={{
                  position: 'relative',
                  width: '90px',
                  height: '90px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '28px'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    border: '4px solid rgba(16, 185, 129, 0.2)',
                    borderTopColor: '#10b981',
                    animation: 'spinSlow 1s linear infinite'
                  }}
                />
                <Sparkles size={38} color="#10b981" />
              </div>

              {/* 4 Google Assistant Colored Bouncing Dots */}
              <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#4285f4', animation: 'bounceGoogleDot 1.2s infinite ease-in-out both' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ea4335', animation: 'bounceGoogleDot 1.2s infinite ease-in-out 0.16s both' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#fbbc05', animation: 'bounceGoogleDot 1.2s infinite ease-in-out 0.32s both' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#34a853', animation: 'bounceGoogleDot 1.2s infinite ease-in-out 0.48s both' }} />
              </div>

              <h3 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 10px 0', color: '#ffffff' }}>
                Analyzing Legal Rights & COD Rules... (2s)
              </h3>
              <p style={{ fontSize: '14px', color: '#86efac', margin: '0 0 24px 0', fontWeight: 600 }}>
                KaamSaathi AI श्रम अधिकार व डिलीवरी पार्टनर सुरक्षा नियमों का विश्लेषण कर रहा है...
              </p>

              {/* Echo Query Pill */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  padding: '14px 20px',
                  fontSize: '15px',
                  color: '#e2e8f0',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  maxWidth: '560px'
                }}
              >
                "{fixedQuestion}"
              </div>
            </div>
          )}

          {/* =========================================================================
              PHASE 3: COMPREHENSIVE ANSWER WITH PHOTOS, RIGHTS & NEXT ACTIONS
             ========================================================================= */}
          {listeningState === 'answered' && (
            <div
              style={{
                width: '100%',
                maxWidth: '840px',
                backgroundColor: '#ffffff',
                color: '#0f172a',
                borderRadius: '24px',
                padding: '32px 30px',
                boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
                animation: 'modalFadeIn 0.35s ease'
              }}
            >
              {/* 1. Spoken Query Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  padding: '16px 20px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  marginBottom: '24px'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#ecfdf5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Mic size={18} color="#0d7e48" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '11.5px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
                    Your Voice Query (आपका सवाल):
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginTop: '2px' }}>
                    "{fixedQuestion}"
                  </div>
                </div>
                <span
                  style={{
                    backgroundColor: '#dcfce7',
                    color: '#15803d',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <CheckCircle2 size={12} />
                  AI Verified
                </span>
              </div>

              {/* 2. CORE LEGAL RIGHTS (आपके कानूनी अधिकार) */}
              <div
                style={{
                  backgroundColor: '#f0fdf4',
                  border: '1.5px solid #86efac',
                  borderRadius: '16px',
                  padding: '20px 24px',
                  marginBottom: '28px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <ShieldCheck size={24} color="#0d7e48" />
                  <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#064e3b', margin: 0 }}>
                    आपके कानूनी अधिकार (Your Legal Rights under Indian Law)
                  </h4>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
                  <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', padding: '14px', border: '1px solid #bbf7d0' }}>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#0d7e48', marginBottom: '4px' }}>
                      1. व्यक्तिगत देयता शून्य (Zero Personal Liability)
                    </div>
                    <p style={{ fontSize: '12.5px', color: '#334155', margin: 0, lineHeight: 1.5 }}>
                      <strong>Code on Social Security 2020 (धारा 114)</strong> के तहत डिलीवरी पार्टनर कोई वसूली एजेंट (debt collector) नहीं है। ग्राहक द्वारा नकद न देना कंपनी का व्यापारिक नुकसान है, पार्टनर का नहीं।
                    </p>
                  </div>

                  <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', padding: '14px', border: '1px solid #bbf7d0' }}>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#0d7e48', marginBottom: '4px' }}>
                      2. वॉलेट से कटौती गैर-कानूनी (No Unilateral Deduction)
                    </div>
                    <p style={{ fontSize: '12.5px', color: '#334155', margin: 0, lineHeight: 1.5 }}>
                      यदि आपने सही समय पर घटना की सूचना दी है, तो एग्रीगेटर (Zomato/Swiggy/Amazon/Zepto) आपके फ्लोटिंग कैश या साप्ताहिक पेआउट से यह राशि <strong>जबरन नहीं काट सकता</strong>।
                    </p>
                  </div>

                  <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', padding: '14px', border: '1px solid #bbf7d0' }}>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#0d7e48', marginBottom: '4px' }}>
                      3. आईडी सस्पेंशन से सुरक्षा (Anti-Penalization)
                    </div>
                    <p style={{ fontSize: '12.5px', color: '#334155', margin: 0, lineHeight: 1.5 }}>
                      ग्राहक के गैर-भुगतान विवाद के कारण आपकी रेटिंग घटाना, आईडी ब्लॉक करना या शैडो-बैन (shadow ban) लगाना अनुचित श्रम व्यवहार (unfair trade practice) है।
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. STEP-BY-STEP EXPLANATION WITH PHOTOS */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
                  <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    कदम-दर-कदम समाधान प्रक्रिया (Step-by-Step Action with Photos)
                  </h4>
                  <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>
                    4 Critical Steps to Protect Payout
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* STEP 1 */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '20px',
                      backgroundColor: '#f8fafc',
                      borderRadius: '16px',
                      padding: '18px',
                      border: '1px solid #e2e8f0',
                      alignItems: 'center'
                    }}
                  >
                    <div>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#e0f2fe', color: '#0369a1', fontSize: '11px', fontWeight: 800, padding: '3px 10px', borderRadius: '9999px', marginBottom: '8px' }}>
                        STEP 1 • सबसे महत्वपूर्ण कदम
                      </div>
                      <h5 style={{ fontSize: '15.5px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px 0' }}>
                        ऐप में कभी भी "Cash Collected" मार्क न करें
                      </h5>
                      <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.55, margin: '0 0 10px 0' }}>
                        जैसे ही ग्राहक पैसे देने से इनकार करे या बहाना बनाए, डिलीवरी पार्सल अपने पास रखें और ऐप में भूलकर भी "कलेक्टेड" न दबाएं। ऑर्डर स्क्रीन पर <strong>"Payment Issue" → "Customer Refused Payment / No Cash"</strong> चुनें।
                      </p>
                      <div style={{ fontSize: '12px', color: '#b91c1c', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <AlertTriangle size={14} /> चेतावनी: कलेक्टेड मार्क करने पर कंपनी आपके खाते को देनदार मान लेती है।
                      </div>
                    </div>
                    <div>
                      <img
                        src="/images/cod_doorstep_incident.jpg"
                        alt="Delivery partner handling COD customer payment issue at doorstep"
                        style={{
                          width: '100%',
                          height: '180px',
                          objectFit: 'cover',
                          borderRadius: '12px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}
                      />
                      <div style={{ fontSize: '11px', color: '#64748b', marginTop: '6px', textAlign: 'center' }}>
                        तस्वीर 1: ग्राहक के दरवाजे पर गैर-भुगतान स्थिति में पार्सल हैंडओवर रोकें
                      </div>
                    </div>
                  </div>

                  {/* STEP 2 */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '20px',
                      backgroundColor: '#f8fafc',
                      borderRadius: '16px',
                      padding: '18px',
                      border: '1px solid #e2e8f0',
                      alignItems: 'center'
                    }}
                  >
                    <div>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#fef3c7', color: '#b45309', fontSize: '11px', fontWeight: 800, padding: '3px 10px', borderRadius: '9999px', marginBottom: '8px' }}>
                        STEP 2 • 15 मिनट के अंदर
                      </div>
                      <h5 style={{ fontSize: '15.5px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px 0' }}>
                        ऐप सपोर्ट पर तुरंत टिकट और डिस्प्यूट लॉग दर्ज करें
                      </h5>
                      <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.55, margin: '0 0 10px 0' }}>
                        राइडर सपोर्ट चैट खोलें और <strong>"Report COD Discrepancy"</strong> टिकट बनाएं। ग्राहक को किए गए कॉल के स्क्रीनशॉट और चैट का प्रमाण संलग्न करें। चैट में सपोर्ट एग्जीक्यूटिव से टिकट आईडी नोट करें।
                      </p>
                      <div style={{ fontSize: '12px', color: '#0d7e48', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <CheckCircle2 size={14} /> सपोर्ट टिकट संख्या भविष्य में कानूनी दावे का मुख्य प्रमाण बनेगी।
                      </div>
                    </div>
                    <div>
                      <img
                        src="/images/cod_app_report.jpg"
                        alt="Rider phone showing payment discrepancy ticket screen"
                        style={{
                          width: '100%',
                          height: '180px',
                          objectFit: 'cover',
                          borderRadius: '12px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}
                      />
                      <div style={{ fontSize: '11px', color: '#64748b', marginTop: '6px', textAlign: 'center' }}>
                        तस्वीर 2: ऐप पर 'Payment Discrepancy - Customer Cash Not Received' रिपोर्ट
                      </div>
                    </div>
                  </div>

                  {/* STEP 3 & STEP 4 */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '20px',
                      backgroundColor: '#f8fafc',
                      borderRadius: '16px',
                      padding: '18px',
                      border: '1px solid #e2e8f0',
                      alignItems: 'center'
                    }}
                  >
                    <div>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#dcfce7', color: '#15803d', fontSize: '11px', fontWeight: 800, padding: '3px 10px', borderRadius: '9999px', marginBottom: '8px' }}>
                        STEP 3 & 4 • KaamSaathi कानूनी सुरक्षा
                      </div>
                      <h5 style={{ fontSize: '15.5px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px 0' }}>
                        यदि वॉलेट से कटौती हो — 1-क्लिक लीगल नोटिस ड्राफ्ट करें
                      </h5>
                      <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.55, margin: '0 0 10px 0' }}>
                        KaamSaathi का <strong>DigiPin 4m x 4m लोकेशन इंजन</strong> यह साबित करता है कि आप समय पर दरवाजे पर उपस्थित थे। यदि कंपनी आपकी कमाई से कटौती करती है, तो नीचे दिए बटन से कंपनी के नोडल अधिकारी को आधिकारिक विवाद नोटिस भेजें।
                      </p>
                      <div style={{ fontSize: '12px', color: '#0369a1', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <ShieldCheck size={14} /> सामाजिक सुरक्षा संहिता 2020: कंपनी को 7 दिनों में जवाब देना अनिवार्य है।
                      </div>
                    </div>
                    <div>
                      <img
                        src="/images/cod_legal_protection.jpg"
                        alt="Legal dispute notice under Code on Social Security 2020"
                        style={{
                          width: '100%',
                          height: '180px',
                          objectFit: 'cover',
                          borderRadius: '12px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}
                      />
                      <div style={{ fontSize: '11px', color: '#64748b', marginTop: '6px', textAlign: 'center' }}>
                        तस्वीर 3: आधिकारिक KaamSaathi प्रमाणित COD विवाद निवारण नोटिस
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. HIS NEXT ACTIONS (तत्काल अगले कदम) */}
              <div
                style={{
                  borderTop: '1px solid #e2e8f0',
                  paddingTop: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '14px',
                  flexWrap: 'wrap'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  {/* Action 1: Draft Grievance */}
                  <button
                    type="button"
                    onClick={handleDraftGrievanceAction}
                    style={{
                      backgroundColor: '#0d7e48',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '10px',
                      padding: '12px 22px',
                      fontSize: '14px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 14px rgba(13, 126, 72, 0.3)',
                      transition: 'all 0.15s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#0a6439'
                      e.currentTarget.style.transform = 'translateY(-1px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#0d7e48'
                      e.currentTarget.style.transform = 'none'
                    }}
                  >
                    <FileText size={16} />
                    <span>ड्राफ्ट डिस्प्यूट नोटिस (Draft Grievance Notice)</span>
                    <ArrowRight size={15} />
                  </button>

                  {/* Action 2: Call Labour Helpline */}
                  <a
                    href="tel:14434"
                    style={{
                      backgroundColor: '#f8fafc',
                      color: '#1e293b',
                      border: '1px solid #cbd5e1',
                      borderRadius: '10px',
                      padding: '11px 18px',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'background-color 0.15s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f1f5f9')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f8fafc')}
                  >
                    <PhoneCall size={15} color="#0d7e48" />
                    <span>कॉल लेबर हेल्पलाइन 14434</span>
                  </a>
                </div>

                {/* Secondary Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button
                    type="button"
                    onClick={handleStartVoiceInteraction}
                    style={{
                      backgroundColor: '#f1f5f9',
                      color: '#475569',
                      border: '1px solid #cbd5e1',
                      borderRadius: '10px',
                      padding: '11px 16px',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e2e8f0')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f1f5f9')}
                  >
                    <RotateCcw size={14} />
                    <span>पुनः प्रश्न पूछें (Ask Again)</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCloseModal}
                    style={{
                      backgroundColor: '#0f172a',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '10px',
                      padding: '11px 18px',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    Back to Dashboard
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}
