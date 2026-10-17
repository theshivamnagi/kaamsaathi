import React, { useState } from 'react'
import { X, CheckCircle2, ShieldAlert, ShieldCheck, MapPin, Copy, ExternalLink, Video } from 'lucide-react'

export function DigiPinModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false)
  if (!isOpen) return null

  const digiPinCode = '110001-DL-8821'

  const handleCopy = () => {
    navigator.clipboard.writeText(digiPinCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1100,
        padding: '20px'
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          width: '520px',
          maxWidth: '100%',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
          border: '1px solid #e2e8f0'
        }}
      >
        <div
          style={{
            backgroundColor: '#0d7e48',
            color: '#ffffff',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <MapPin size={22} color="#ffffff" />
            <h3 style={{ margin: 0, fontSize: '17px', fontWeight: 700 }}>National DigiPin Verification</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', color: '#ffffff', cursor: 'pointer', padding: '4px' }}
          >
            <X size={20} />
          </button>
        </div>

        <div style={{ padding: '24px' }}>
          <p style={{ fontSize: '14px', color: '#334155', lineHeight: 1.6, marginBottom: '18px' }}>
            <strong>DigiPin</strong> is India's National Digital Address Code developed by the <strong>Department of Posts</strong> and IIT Hyderabad. It encodes geospatial coordinates into a 10-character code for 4m x 4m precision.
          </p>

          <div
            style={{
              backgroundColor: '#ecfdf5',
              borderRadius: '12px',
              border: '1.5px dashed #10b981',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px'
            }}
          >
            <div>
              <div style={{ fontSize: '11px', color: '#1e40af', fontWeight: 600, textTransform: 'uppercase' }}>
                Your Registered Delivery Hub DigiPin
              </div>
              <div style={{ fontSize: '22px', fontWeight: 800, color: '#064e3b', letterSpacing: '1px' }}>
                {digiPinCode}
              </div>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: '#ffffff',
                border: '1px solid #bfdbfe',
                borderRadius: '8px',
                padding: '8px 12px',
                fontSize: '12px',
                fontWeight: 600,
                color: '#0d7e48',
                cursor: 'pointer'
              }}
            >
              <Copy size={14} />
              <span>{copied ? 'Copied!' : 'Copy Pin'}</span>
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#475569' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Guaranteed Doorstep Accuracy:</strong> Eliminates last-mile confusion for high-density delivery clusters.</span>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Customer Privacy:</strong> Customers share only a DigiPin instead of private street descriptions.</span>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Offline Capable:</strong> Algorithmic grid calculation operates even in low cellular connectivity areas.</span>
            </div>
          </div>

          <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                backgroundColor: '#0d7e48',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '9px 20px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Got It
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ManasModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  if (!isOpen) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1100,
        padding: '20px'
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          width: '540px',
          maxWidth: '100%',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
          border: '1px solid #e2e8f0'
        }}
      >
        <div
          style={{
            backgroundColor: '#092d42',
            color: '#ffffff',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldAlert size={22} color="#f43f5e" />
            <h3 style={{ margin: 0, fontSize: '17px', fontWeight: 700 }}>MANAS - Narcotics Control Bureau (NCB)</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', color: '#ffffff', cursor: 'pointer', padding: '4px' }}
          >
            <X size={20} />
          </button>
        </div>

        <div style={{ padding: '24px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <CheckCircle2 size={28} />
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Report Confidentially Submitted</h4>
              <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.5 }}>
                Your information has been securely dispatched to the Narcotics Control Bureau (NCB) operations desk. Your identity remains 100% anonymous.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false)
                  onClose()
                }}
                style={{
                  marginTop: '16px',
                  backgroundColor: '#092d42',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '9px 24px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5, marginBottom: '16px' }}>
                Join the nation in fighting drug trafficking. Delivery agents and gig workers are frontline observers who can securely report suspected illegal narcotics transit or peddling points.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '4px' }}>
                    Incident / Delivery Location (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sector 18, Commercial Market Area, Near Petrol Pump"
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '4px' }}>
                    Description of Suspicious Activity
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide relevant details (unmarked packages, suspicious pickups, unusual package weights)..."
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px', boxSizing: 'border-box' }}
                  />
                </div>

                <div style={{ backgroundColor: '#fef2f2', borderRadius: '8px', padding: '10px 14px', border: '1px solid #fecaca' }}>
                  <span style={{ fontSize: '11px', color: '#991b1b', lineHeight: 1.4, display: 'block' }}>
                    🔒 <strong>Strict Anonymity Protected:</strong> Neither your device IP, phone number, nor company rider ID will be logged or transmitted.
                  </span>
                </div>
              </div>

              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button
                  type="button"
                  onClick={onClose}
                  style={{ backgroundColor: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px 16px', fontSize: '13px', fontWeight: 600, color: '#475569', cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => setSubmitted(true)}
                  style={{ backgroundColor: '#dc2626', border: 'none', borderRadius: '8px', padding: '8px 20px', fontSize: '13px', fontWeight: 600, color: '#ffffff', cursor: 'pointer' }}
                >
                  Submit Anonymous Report
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export function ISLChatbotModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1100,
        padding: '20px'
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          width: '560px',
          maxWidth: '100%',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
          border: '1px solid #e2e8f0'
        }}
      >
        <div
          style={{
            backgroundColor: '#0d7e48',
            color: '#ffffff',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '20px' }}>🤝</span>
            <div>
              <h3 style={{ margin: 0, fontSize: '17px', fontWeight: 700 }}>Indian Sign Language (ISL) Assistant</h3>
              <div style={{ fontSize: '11px', opacity: 0.9 }}>Digital India Accessible Governance Initiative</div>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', color: '#ffffff', cursor: 'pointer', padding: '4px' }}
          >
            <X size={20} />
          </button>
        </div>

        <div style={{ padding: '24px' }}>
          <div
            style={{
              height: '200px',
              backgroundColor: '#0f172a',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '18px'
            }}
          >
            <Video size={44} color="#f43f5e" />
            <div style={{ fontWeight: 600, fontSize: '15px', marginTop: '10px' }}>ISL Video Interpreter Ready</div>
            <div style={{ fontSize: '12px', color: '#94a3b8' }}>Real-time sign language translation for hearing-impaired gig workers</div>
            <div
              style={{
                position: 'absolute',
                bottom: '12px',
                right: '12px',
                backgroundColor: 'rgba(244,63,94,0.9)',
                borderRadius: '6px',
                padding: '4px 8px',
                fontSize: '11px',
                fontWeight: 700
              }}
            >
              ISL • AI LIVE
            </div>
          </div>

          <div style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5, marginBottom: '16px' }}>
            Choose an automated sign demonstration video topic:
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {['How to apply for e-Shram Card', 'Filing an accident compensation claim', 'Checking delivery fuel deduction', 'Emergency SOS Helpline numbers'].map((topic, i) => (
              <button
                key={i}
                type="button"
                style={{
                  textAlign: 'left',
                  padding: '10px 12px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#1e293b',
                  cursor: 'pointer'
                }}
              >
                📹 {topic}
              </button>
            ))}
          </div>

          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                backgroundColor: '#0d7e48',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 20px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
