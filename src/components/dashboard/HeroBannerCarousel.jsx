import React, { useState, useEffect } from 'react'
import { ManasIllustration } from './illustrations'
import { ChevronLeft, ChevronRight, ShieldCheck, HeartPulse, FileText, ArrowRight } from 'lucide-react'

export function HeroBannerCarousel({ onAccessNow }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 'manas',
      tag: 'MANAS',
      title: 'Join the Fight against Drug Trafficking/peddling and report drug related issues through KaamSaathi',
      buttonText: 'Access Now',
      disclaimer: '*Your identity will remain confidential and all the information will be promptly reviewed by Narcotics Control Bureau (NCB)',
      illustration: <ManasIllustration width={340} height={210} />,
      bgGradient: 'linear-gradient(90deg, #032838 0%, #06405b 55%, #084c6e 100%)',
      actionKey: 'manas'
    },
    {
      id: 'eshram',
      tag: 'E-SHRAM & SOCIAL SECURITY 2026',
      title: 'Register for ₹2,00,000 Accidental Cover & Fair Working Hours Under Central Code',
      buttonText: 'Access Now',
      disclaimer: '*Directly verified through Ministry of Labour & Employment Aadhaar eKYC Gateway',
      illustration: (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '210px', width: '320px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.15)', padding: '20px' }}>
          <ShieldCheck size={72} color="#4ade80" />
          <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '18px', marginTop: '12px' }}>₹2,00,000 Insurance</div>
          <div style={{ color: '#93c5fd', fontSize: '12px', marginTop: '4px' }}>National Social Security Cover</div>
        </div>
      ),
      bgGradient: 'linear-gradient(90deg, #063e2c 0%, #0a563c 55%, #0e704d 100%)',
      actionKey: 'schemes'
    },
    {
      id: 'ayushman',
      tag: 'AYUSHMAN BHARAT PM-JAY',
      title: 'Avail ₹5,00,000 Free Cashless Hospital Treatment for Gig Workers & Registered Dependents',
      buttonText: 'Access Now',
      disclaimer: '*Accepted across 28,000+ government and private network hospitals nationwide',
      illustration: (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '210px', width: '320px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.15)', padding: '20px' }}>
          <HeartPulse size={72} color="#f43f5e" />
          <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '18px', marginTop: '12px' }}>₹5,00,000 Health Cover</div>
          <div style={{ color: '#fbcfe8', fontSize: '12px', marginTop: '4px' }}>Cashless Hospitalization</div>
        </div>
      ),
      bgGradient: 'linear-gradient(90deg, #3b113e 0%, #58185c 55%, #76227c 100%)',
      actionKey: 'schemes'
    },
    {
      id: 'digilocker',
      tag: 'DIGILOCKER GIG CREDENTIALS',
      title: 'Instant Driving License, Vehicle RC & Police Clearance Sync for Delivery Drivers',
      buttonText: 'Access Now',
      disclaimer: '*Legally recognized under the Information Technology (IT) Act, 2000',
      illustration: (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '210px', width: '320px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.15)', padding: '20px' }}>
          <FileText size={72} color="#38bdf8" />
          <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '18px', marginTop: '12px' }}>DigiLocker Verified</div>
          <div style={{ color: '#bae6fd', fontSize: '12px', marginTop: '4px' }}>Tamper-proof Digital Wallet</div>
        </div>
      ),
      bgGradient: 'linear-gradient(90deg, #1e293b 0%, #293a54 55%, #334d73 100%)',
      actionKey: 'digilocker'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const active = slides[currentSlide]

  return (
    <div style={{ width: '100%', marginBottom: '22px' }}>
      {/* Banner Card */}
      <div
        style={{
          position: 'relative',
          borderRadius: '16px',
          background: active.bgGradient,
          color: '#ffffff',
          overflow: 'hidden',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          transition: 'background 0.4s ease'
        }}
      >
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous Slide"
          style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'transparent',
            border: 'none',
            color: '#38bdf8',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            borderRadius: '50%',
            transition: 'background-color 0.15s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <ChevronLeft size={28} strokeWidth={2.5} />
        </button>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next Slide"
          style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'transparent',
            border: 'none',
            color: '#38bdf8',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            borderRadius: '50%',
            transition: 'background-color 0.15s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <ChevronRight size={28} strokeWidth={2.5} />
        </button>

        {/* Banner Inner Content */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '32px 56px 28px 56px',
            gap: '24px',
            flexWrap: 'wrap'
          }}
        >
          {/* Text details */}
          <div style={{ flex: '1 1 500px', maxWidth: '640px' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '1.2px',
                color: '#38bdf8',
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: '10px'
              }}
            >
              {active.tag}
            </span>

            <h2
              style={{
                fontSize: '24px',
                fontWeight: 700,
                lineHeight: 1.35,
                color: '#ffffff',
                marginBottom: '20px',
                letterSpacing: '-0.2px'
              }}
            >
              {active.title}
            </h2>

            <button
              type="button"
              onClick={() => onAccessNow && onAccessNow(active.actionKey)}
              style={{
                backgroundColor: '#ffffff',
                color: '#092d42',
                border: 'none',
                borderRadius: '9999px',
                padding: '10px 28px',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transition: 'transform 0.15s, box-shadow 0.15s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.22)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
              }}
            >
              <span>{active.buttonText}</span>
            </button>

            <p
              style={{
                fontSize: '11px',
                color: 'rgba(255, 255, 255, 0.72)',
                marginTop: '22px',
                marginBottom: 0,
                lineHeight: 1.4
              }}
            >
              {active.disclaimer}
            </p>
          </div>

          {/* Graphic on the right */}
          <div
            style={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {active.illustration}
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          marginTop: '12px'
        }}
      >
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
            style={{
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              width: currentSlide === index ? '20px' : '8px',
              height: '8px',
              borderRadius: '4px',
              backgroundColor: currentSlide === index ? '#0d7e48' : '#cbd5e1',
              transition: 'all 0.25s ease'
            }}
          />
        ))}
      </div>
    </div>
  )
}
