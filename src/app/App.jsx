import React, { useState, useEffect } from 'react'
import { LanguageProvider } from '../hooks/useLanguage'
import { Navbar } from '../components/navigation/Navbar'
import { MobileBottomNav } from '../components/navigation/MobileBottomNav'
import { Footer } from '../components/layout/Footer'
import { LandingPage } from '../pages/LandingPage'
import { DashboardPage } from '../pages/DashboardPage'

export function AppContent() {
  const [currentPage, setCurrentPage] = useState('landing') // 'landing' | 'dashboard'
  const [dashboardTab, setDashboardTab] = useState('overview')

  // Handle navigation requests from anywhere in the app
  const handleNavigate = (page, targetTabOrSection) => {
    setCurrentPage(page)

    if (page === 'dashboard' && targetTabOrSection) {
      setDashboardTab(targetTabOrSection)
    } else if (page === 'dashboard') {
      setDashboardTab('overview')
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
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--colors-canvas)' }}>
      {/* Sticky Top Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

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

      {/* Footer (Warm cream - strictly per Clay design system) */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile-First Sticky Bottom Navigation */}
      <MobileBottomNav
        currentTab={currentPage === 'landing' ? '' : dashboardTab}
        onSelectTab={handleMobileTabSelect}
        isDashboard={currentPage === 'dashboard'}
      />
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
