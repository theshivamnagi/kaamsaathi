import React from 'react'
import { Sparkles, ShieldCheck } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'

export function DemoDisclaimer({ className = '' }) {
  const { lang } = useLanguage()

  return (
    <div
      style={{
        backgroundColor: 'rgba(232, 185, 74, 0.15)',
        border: '1px solid rgba(232, 185, 74, 0.4)',
        borderRadius: 'var(--rounded-md)',
        padding: '8px 14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '8px',
        fontSize: '12px',
        color: '#784d00'
      }}
      className={className}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <Sparkles size={14} color="#b45309" />
        <span style={{ fontWeight: 600 }}>
          {lang === 'hi'
            ? 'हैकथॉन डेमो प्रोटोटाइप: 100% स्थानीय जावास्क्रिप्ट लॉजिक • शून्य बाहरी एपीआई कॉल • यथार्थवादी डमी डेटा'
            : 'Hackathon Demo Prototype: 100% Local Logic • Zero External API Calls • Demonstration Data Only'}
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#92400e' }}>
        <ShieldCheck size={13} />
        <span>{lang === 'hi' ? 'गोपनीयता सुरक्षित' : 'Privacy Preserved'}</span>
      </div>
    </div>
  )
}
