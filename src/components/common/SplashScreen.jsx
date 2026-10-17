import React, { useEffect, useState } from 'react'

export function SplashScreen({ onFinish, durationMs = 2200 }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = Date.now()
    const interval = setInterval(() => {
      const elapsed = Date.now() - start
      const pct = Math.min(100, Math.round((elapsed / durationMs) * 100))
      setProgress(pct)

      if (elapsed >= durationMs) {
        clearInterval(interval)
        onFinish && onFinish()
      }
    }, 30)

    return () => clearInterval(interval)
  }, [durationMs, onFinish])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#ffffff',
        backgroundImage: 'radial-gradient(circle at 50% 40%, #ecfdf5 0%, #ffffff 70%)',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none'
      }}
    >
      <style>{`
        @keyframes emblemPop {
          0% { transform: scale(0.6); opacity: 0; }
          60% { transform: scale(1.08); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes textSlideUp {
          0% { transform: translateY(16px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes auraGlow {
          0% { transform: scale(0.85); opacity: 0.3; }
          50% { transform: scale(1.15); opacity: 0.7; }
          100% { transform: scale(0.85); opacity: 0.3; }
        }
      `}</style>

      {/* Glowing Backdrop Aura */}
      <div
        style={{
          position: 'absolute',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          backgroundColor: '#a7f3d0',
          filter: 'blur(60px)',
          animation: 'auraGlow 3s ease-in-out infinite'
        }}
      />

      {/* Main Logo Container */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 2
        }}
      >
        {/* Emblem with animated pop-in */}
        <div
          style={{
            width: '84px',
            height: '84px',
            borderRadius: '20px',
            backgroundColor: '#ffffff',
            boxShadow: '0 12px 32px rgba(13, 126, 72, 0.18)',
            border: '2px solid #bbf7d0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
            animation: 'emblemPop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
          }}
        >
          <img
            src="/assets/emblem.svg"
            alt="National Emblem"
            style={{ height: '54px', width: 'auto' }}
          />
        </div>

        {/* KaamSaathi Wordmark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '2px',
            animation: 'textSlideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards',
            opacity: 0
          }}
        >
          <span
            style={{
              fontSize: '44px',
              fontWeight: 900,
              color: '#0f172a',
              letterSpacing: '-1px',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          >
            kaam
          </span>
          <span
            style={{
              fontSize: '44px',
              fontWeight: 900,
              color: '#0d7e48',
              letterSpacing: '-1px',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          >
            Saathi
          </span>
        </div>

        {/* Subtitle / Portal Identity */}
        <div
          style={{
            marginTop: '6px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            animation: 'textSlideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards',
            opacity: 0
          }}
        >
          <span
            style={{
              fontSize: '13px',
              fontWeight: 700,
              color: '#0d7e48',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}
          >
            कामगार सेवा पोर्टल
          </span>
          <span
            style={{
              fontSize: '12px',
              color: '#64748b',
              marginTop: '4px',
              fontWeight: 500
            }}
          >
            India's Frontline Gig Worker Assistant
          </span>
        </div>

        {/* Animated Progress Bar */}
        <div
          style={{
            width: '180px',
            height: '4px',
            backgroundColor: '#e2e8f0',
            borderRadius: '9999px',
            overflow: 'hidden',
            marginTop: '32px'
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              backgroundColor: '#0d7e48',
              borderRadius: '9999px',
              transition: 'width 0.05s linear'
            }}
          />
        </div>
      </div>

      {/* Skip Button (Top Right) */}
      <button
        type="button"
        onClick={onFinish}
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          backgroundColor: 'transparent',
          border: '1px solid #cbd5e1',
          borderRadius: '9999px',
          padding: '6px 14px',
          fontSize: '12px',
          fontWeight: 600,
          color: '#64748b',
          cursor: 'pointer',
          zIndex: 10
        }}
      >
        Skip ›
      </button>
    </div>
  )
}
