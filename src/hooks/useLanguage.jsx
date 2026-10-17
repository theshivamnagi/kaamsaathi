import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../data/translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  // Load preferred language from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem('kaamsaathi_lang')
      if (saved === 'en' || saved === 'hi') {
        setLang(saved)
      }
    } catch {
      // Fallback safely if localStorage is restricted
    }
  }, [])

  const changeLang = (newLang) => {
    setLang(newLang)
    try {
      localStorage.setItem('kaamsaathi_lang', newLang)
    } catch {
      // Ignore
    }
  }

  const t = translations[lang] || translations.en

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    return {
      lang: 'en',
      setLang: () => {},
      t: translations.en
    }
  }
  return context
}
