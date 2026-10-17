import React from 'react'
import { 
  Home, 
  Calculator, 
  ShieldCheck, 
  FileEdit, 
  ShieldAlert, 
  HeartHandshake, 
  FolderLock, 
  Award,
  ArrowRight
} from 'lucide-react'

export function UmangSidebar({ activeTab = 'home', onSelectTab, isCollapsed = false }) {
  const menuItems = [
    {
      id: 'home',
      label: 'Home',
      icon: Home
    },
    {
      id: 'earnings',
      label: 'Earnings Calculator',
      icon: Calculator
    },
    {
      id: 'rights',
      label: 'Worker Rights',
      icon: ShieldCheck
    },
    {
      id: 'grievance',
      label: 'Grievance Drafting',
      icon: FileEdit
    },
    {
      id: 'safety',
      label: 'Safety Guidance',
      icon: ShieldAlert
    },
    {
      id: 'schemes',
      label: 'Welfare Schemes',
      icon: HeartHandshake
    },
  ]

  if (isCollapsed) {
    return null
  }

  return (
    <aside
      style={{
        width: '220px',
        backgroundColor: '#ffffff',
        borderRight: '1px solid #e5e7eb',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexShrink: 0,
        height: 'calc(100vh - 68px)',
        position: 'sticky',
        top: '68px',
        padding: '16px 12px 16px 12px',
        boxSizing: 'border-box'
      }}
    >
      {/* Top Menu List of KaamSaathi Features */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.8px', padding: '0 12px 8px 12px' }}>
          Portal Features
        </div>

        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectTab(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                width: '100%',
                padding: '9.5px 12px',
                borderRadius: '8px',
                border: isActive ? '1px solid #bbf7d0' : '1px solid transparent',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '13.5px',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? '#0d7e48' : '#334155',
                backgroundColor: isActive ? '#ecfdf5' : 'transparent',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.backgroundColor = '#f1f5f9'
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              <Icon
                size={17}
                color={isActive ? '#0d7e48' : '#64748b'}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {item.label}
              </span>
            </button>
          )
        })}
      </nav>

      {/* Bottom Footer Links */}
      <div
        style={{
          borderTop: '1px solid #f1f5f9',
          paddingTop: '14px',
          paddingLeft: '4px',
          paddingRight: '4px',
          fontSize: '11px',
          color: '#64748b',
          lineHeight: 1.6
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', alignItems: 'center' }}>
          <span style={{ cursor: 'pointer' }}>Terms of Service</span>
          <span>|</span>
          <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
          <span>|</span>
        </div>
        <div style={{ cursor: 'pointer', marginTop: '2px', color: '#0d7e48', fontWeight: 600 }}>
          Contact Us
        </div>
      </div>
    </aside>
  )
}
