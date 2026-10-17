import React from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export function DigiPinBanner({ onOpenDigiPin }) {
  return (
    <div
      onClick={onOpenDigiPin}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onOpenDigiPin && onOpenDigiPin()
        }
      }}
      style={{
        width: '100%',
        backgroundColor: '#ecfdf5',
        border: '1px solid #a7f3d0',
        borderRadius: '12px',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        marginBottom: '26px',
        transition: 'all 0.2s ease',
        boxSizing: 'border-box'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#d1fae5'
        e.currentTarget.style.borderColor = '#6ee7b7'
        e.currentTarget.style.transform = 'translateY(-1px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#ecfdf5'
        e.currentTarget.style.borderColor = '#a7f3d0'
        e.currentTarget.style.transform = 'none'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        {/* Dark circular checkmark icon */}
        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            border: '2px solid #0d7e48',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <CheckCircle2 size={18} color="#0d7e48" strokeWidth={2.5} />
        </div>

        <span
          style={{
            fontSize: '15px',
            fontWeight: 700,
            color: '#064e3b',
            letterSpacing: '-0.2px'
          }}
        >
          Know Your DigiPin
        </span>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#0d7e48'
        }}
      >
        <ArrowRight size={20} strokeWidth={2.5} />
      </div>
    </div>
  )
}
