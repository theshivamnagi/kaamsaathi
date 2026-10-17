import React from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import { Languages } from 'lucide-react'

export function LanguageSwitch({ className = '' }) {
  const { lang, setLang } = useLanguage()

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: 'var(--colors-surface-card)',
        borderRadius: 'var(--rounded-pill)',
        padding: '3px',
        border: '1px solid var(--colors-hairline)'
      }}
      className={className}
      role="group"
      aria-label="Language selection"
    >
      <button
        type="button"
        onClick={() => setLang('en')}
        style={{
          border: 'none',
          cursor: 'pointer',
          padding: '4px 10px',
          borderRadius: 'var(--rounded-pill)',
          fontSize: '13px',
          fontWeight: lang === 'en' ? 700 : 500,
          backgroundColor: lang === 'en' ? 'var(--colors-primary)' : 'transparent',
          color: lang === 'en' ? 'var(--colors-on-primary)' : 'var(--colors-muted)',
          transition: 'all 0.15s ease'
        }}
      >
        English
      </button>

      <button
        type="button"
        onClick={() => setLang('hi')}
        style={{
          border: 'none',
          cursor: 'pointer',
          padding: '4px 10px',
          borderRadius: 'var(--rounded-pill)',
          fontSize: '13px',
          fontWeight: lang === 'hi' ? 700 : 500,
          backgroundColor: lang === 'hi' ? 'var(--colors-primary)' : 'transparent',
          color: lang === 'hi' ? 'var(--colors-on-primary)' : 'var(--colors-muted)',
          transition: 'all 0.15s ease'
        }}
      >
        हिन्दी
      </button>
    </div>
  )
}
