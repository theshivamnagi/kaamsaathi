import React from 'react'
import { 
  LayoutDashboard, 
  Calculator, 
  ShieldCheck, 
  FileEdit, 
  HeartHandshake,
  AlertTriangle
} from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'

export function MobileBottomNav({ currentTab, onSelectTab, isDashboard = true }) {
  const { lang } = useLanguage()

  const tabs = [
    {
      id: 'overview',
      label: lang === 'hi' ? 'डैशबोर्ड' : 'Home',
      icon: LayoutDashboard
    },
    {
      id: 'earnings',
      label: lang === 'hi' ? 'कमाई' : 'Earnings',
      icon: Calculator
    },
    {
      id: 'rights',
      label: lang === 'hi' ? 'अधिकार' : 'Rights',
      icon: ShieldCheck
    },
    {
      id: 'grievance',
      label: lang === 'hi' ? 'शिकायत' : 'Dispute',
      icon: FileEdit
    },
    {
      id: 'safety',
      label: lang === 'hi' ? 'सुरक्षा' : 'Safety',
      icon: AlertTriangle
    },
    {
      id: 'schemes',
      label: lang === 'hi' ? 'योजनाएं' : 'Schemes',
      icon: HeartHandshake
    }
  ]

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
      {tabs.map((tab) => {
        const Icon = tab.icon
        const isActive = currentTab === tab.id
        return (
          <button
            key={tab.id}
            type="button"
            className={`mobile-bottom-nav-item ${isActive ? 'active' : ''}`}
            onClick={() => onSelectTab(tab.id)}
            aria-current={isActive ? 'page' : undefined}
          >
            <Icon size={20} color={isActive ? 'var(--colors-primary)' : 'var(--colors-muted)'} />
            <span style={{ fontSize: '10px' }}>{tab.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
