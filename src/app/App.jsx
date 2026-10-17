import React, { useState } from 'react'
import { LanguageProvider } from '../hooks/useLanguage'
import { Navbar } from '../components/navigation/Navbar'
import { MobileBottomNav } from '../components/navigation/MobileBottomNav'
import { Footer } from '../components/layout/Footer'
import { LandingPage } from '../pages/LandingPage'
import { DashboardPage } from '../pages/DashboardPage'

export function AppContent() {
  // 'landing' | 'dashboard'
  const [currentPage, setCurrentPage] = useState('landing')
  const [dashboardTab, setDashboardTab] = useState('home')

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

      {/* Footer for Public Landing Page only (Dashboard sidebar has its own footer links) */}
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
