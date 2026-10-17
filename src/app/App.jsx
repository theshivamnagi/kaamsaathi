import React, { useState } from 'react'
import { LanguageProvider, useLanguage } from '../hooks/useLanguage'
import { Navbar } from '../components/navigation/Navbar'
import { MobileBottomNav } from '../components/navigation/MobileBottomNav'
import { Footer } from '../components/layout/Footer'
import { LandingPage } from '../pages/LandingPage'
import { DashboardPage } from '../pages/DashboardPage'
import { SplashScreen } from '../components/common/SplashScreen'
import { LanguageModal } from '../components/common/LanguageModal'

export function AppContent() {
  const { lang, setLang } = useLanguage()

  // Onboarding Animation & Language Selection Flow
  const [showSplash, setShowSplash] = useState(true)
  const [showLangModal, setShowLangModal] = useState(false)

  // 'landing' | 'dashboard'
  const [currentPage, setCurrentPage] = useState('landing')
  const [dashboardTab, setDashboardTab] = useState('home')

  const handleSplashFinish = () => {
    setShowSplash(false)
    setShowLangModal(true)
  }

  const handleSelectLanguage = (selectedLang) => {
    setLang(selectedLang)
    setShowLangModal(false)
  }

  // Handle navigation requests from anywhere in the app
  const handleNavigate = (page, targetTabOrSection) => {
    setCurrentPage(page)

    if (page === 'dashboard' && targetTabOrSection) {
      setDashboardTab(targetTabOrSection)
    } else if (page === 'dashboard') {
      setDashboardTab('home')
    }

    if (page === 'landing' && targetTabOrSection) {
      setTimeout(() => {
        const el = document.getElementById(targetTabOrSection)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 50)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Handle mobile bottom navigation
  const handleMobileTabSelect = (tabId) => {
    setCurrentPage('dashboard')
    setDashboardTab(tabId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: currentPage === 'dashboard' ? '#f8fafc' : 'var(--colors-canvas)'
      }}
    >
      {/* 1. Animated Logo Splash Screen (Shows before landing page) */}
      {showSplash && <SplashScreen onFinish={handleSplashFinish} durationMs={2200} />}

      {/* 2. Regional Language vs English Pop-up (Hindi pre-selected by default) */}
      <LanguageModal
        isOpen={showLangModal}
        initialLang={lang || 'hi'}
        onSelectLanguage={handleSelectLanguage}
      />

      {/* Sticky Top Navigation for Public Landing Page only */}
      {currentPage === 'landing' && (
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      )}

      {/* Main Page Area */}
      <main style={{ flexGrow: 1 }}>
        {currentPage === 'landing' ? (
          <LandingPage onNavigate={handleNavigate} />
        ) : (
          <DashboardPage
            key={dashboardTab}
            initialTab={dashboardTab}
            onNavigateLanding={() => handleNavigate('landing')}
          />
        )}
      </main>

      {/* Footer for Public Landing Page only */}
      {currentPage === 'landing' && (
        <Footer onNavigate={handleNavigate} />
      )}

      {/* Mobile-First Sticky Bottom Navigation for mobile screens */}
      {currentPage === 'landing' && (
        <MobileBottomNav
          currentTab={currentPage === 'landing' ? '' : dashboardTab}
          onSelectTab={handleMobileTabSelect}
          isDashboard={currentPage === 'dashboard'}
        />
      )}
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}
