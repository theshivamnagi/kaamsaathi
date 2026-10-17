import React, { useState } from 'react'
import { 
  Menu, 
  Search, 
  Moon, 
  Sun, 
  Bell, 
  Accessibility, 
  ChevronDown, 
  CheckCircle2, 
  X,
  ExternalLink,
  User,
  LogOut,
  ArrowRight
} from 'lucide-react'

export function UmangHeader({ 
  onToggleSidebar, 
  onSearch, 
  onOpenISL, 
  onOpenNotifications,
  unreadCount = 2,
  onNavigateLanding,
  onSelectService
}) {
  const [searchVal, setSearchVal] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(searchVal)
    }
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle('dark-mode')
  }

  const toggleAccessibility = () => {
    document.body.classList.toggle('high-contrast-mode')
  }

  return (
    <header
      style={{
        height: '68px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
      }}
    >
      {/* Left side: Hamburger + KaamSaathi Branding */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <button
          type="button"
          onClick={onToggleSidebar}
          aria-label="Toggle Navigation Menu"
          style={{
            background: 'transparent',
            border: 'none',
            color: '#0d7e48',
            cursor: 'pointer',
            padding: '6px',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.15s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#ecfdf5')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <Menu size={24} strokeWidth={2.5} />
        </button>

        {/* KaamSaathi Official Branding with Emblem */}
        <div
          onClick={() => onSelectService && onSelectService('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
            userSelect: 'none'
          }}
          title="KaamSaathi - Gig Worker Support Portal"
        >
          <img 
            src="/assets/emblem.svg" 
            alt="Government of India Emblem" 
            style={{ height: '36px', width: 'auto' }} 
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
              <span
                style={{
                  fontSize: '22px',
                  fontWeight: 900,
                  color: '#0f172a',
                  letterSpacing: '-0.5px',
                  fontFamily: 'Inter, system-ui, sans-serif'
                }}
              >
                kaam
              </span>
              <span
                style={{
                  fontSize: '22px',
                  fontWeight: 900,
                  color: '#0d7e48',
                  letterSpacing: '-0.5px',
                  fontFamily: 'Inter, system-ui, sans-serif'
                }}
              >
                Saathi
              </span>
            </div>
            <span
              style={{
                fontSize: '9.5px',
                fontWeight: 700,
                color: '#64748b',
                letterSpacing: '0.5px',
                marginTop: '-2px'
              }}
            >
              कामगार सेवा पोर्टल
            </span>
          </div>
        </div>
      </div>

      {/* Middle: Clean Search Bar */}
      <div style={{ flex: 1, maxWidth: '540px', margin: '0 24px' }}>
        <form onSubmit={handleSearchSubmit} style={{ position: 'relative', width: '100%' }}>
          <input
            type="text"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder='Search schemes, earnings, rights, or DigiPin...'
            style={{
              width: '100%',
              height: '42px',
              padding: '0 40px 0 16px',
              borderRadius: '8px',
              border: '1px solid #d1d5db',
              backgroundColor: '#ffffff',
              fontSize: '13.5px',
              color: '#1f2937',
              outline: 'none',
              transition: 'border-color 0.2s, box-shadow 0.2s'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#0d7e48'
              e.target.style.boxShadow = '0 0 0 3px rgba(13,126,72,0.12)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#d1d5db'
              e.target.style.boxShadow = 'none'
            }}
          />
          <button
            type="submit"
            aria-label="Search"
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'transparent',
              border: 'none',
              color: '#9ca3af',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '4px'
            }}
          >
            <Search size={18} />
          </button>
        </form>
      </div>

      {/* Right Tools: ISL Chatbot, Accessibility, Bell, Moon, Profile */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>


        {/* Notification Bell button */}
        <div style={{ position: 'relative' }}>
          <button
            type="button"
            onClick={() => setShowNotifications(!showNotifications)}
            title="Notifications"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              backgroundColor: '#f1f5f9',
              border: 'none',
              color: '#1e293b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              position: 'relative',
              transition: 'background-color 0.15s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e2e8f0')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f1f5f9')}
          >
            <Bell size={18} />
            {unreadCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '6px',
                  right: '6px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#ef4444'
                }}
              />
            )}
          </button>

          {/* Notifications Dropdown Popover */}
          {showNotifications && (
            <div
              style={{
                position: 'absolute',
                top: '46px',
                right: 0,
                width: '320px',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                boxShadow: '0 10px 25px -5px rgba(0,0,0,0.15), 0 8px 10px -6px rgba(0,0,0,0.1)',
                border: '1px solid #e2e8f0',
                padding: '16px',
                zIndex: 200
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontWeight: 700, fontSize: '14px', color: '#0f172a' }}>Notifications</span>
                <span style={{ fontSize: '11px', color: '#0d7e48', cursor: 'pointer', fontWeight: 600 }}>Mark all read</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ padding: '8px 10px', backgroundColor: '#fef2f2', borderRadius: '8px', borderLeft: '3px solid #ef4444' }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#991b1b' }}>Payout Discrepancy Flagged</div>
                  <div style={{ fontSize: '11px', color: '#7f1d1d', marginTop: '2px' }}>₹1,850 unexpected deduction in Zomato cycle #41. Tap to draft complaint.</div>
                </div>

                <div style={{ padding: '8px 10px', backgroundColor: '#f0fdf4', borderRadius: '8px', borderLeft: '3px solid #16a34a' }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#166534' }}>e-Shram Insurance Active</div>
                  <div style={{ fontSize: '11px', color: '#14532d', marginTop: '2px' }}>₹2,00,000 accidental cover linked to worker ID KS-992144.</div>
                </div>

                <div style={{ padding: '8px 10px', backgroundColor: '#f8fafc', borderRadius: '8px', borderLeft: '3px solid #94a3b8' }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#334155' }}>MANAS Confidential Tip Desk</div>
                  <div style={{ fontSize: '11px', color: '#475569', marginTop: '2px' }}>Direct anonymous NCB narcotics reporting available.</div>
                </div>
              </div>
            </div>
          )}
        </div>



        {/* User Profile Pill: SN Shivam Nagi */}
        <div style={{ position: 'relative' }}>
          <button
            type="button"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '4px 6px',
              borderRadius: '8px'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f8fafc')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            {/* Initials circle */}
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                backgroundColor: '#dcfce7',
                color: '#0d7e48',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '13px'
              }}
            >
              SN
            </div>
            <span style={{ fontSize: '14px', fontWeight: 500, color: '#1e293b' }}>
              Shivam Nagi
            </span>
            <ChevronDown size={14} color="#64748b" />
          </button>

          {/* Profile Dropdown */}
          {showProfileMenu && (
            <div
              style={{
                position: 'absolute',
                top: '46px',
                right: 0,
                width: '240px',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                boxShadow: '0 10px 25px -5px rgba(0,0,0,0.15), 0 8px 10px -6px rgba(0,0,0,0.1)',
                border: '1px solid #e2e8f0',
                padding: '12px',
                zIndex: 200
              }}
            >
              <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '8px', marginBottom: '8px' }}>
                <div style={{ fontWeight: 700, fontSize: '14px', color: '#0f172a' }}>Shivam Nagi</div>
                <div style={{ fontSize: '11px', color: '#64748b' }}>Gig Worker • ID: KS-992144</div>
                <div style={{ fontSize: '11px', color: '#16a34a', fontWeight: 600, marginTop: '2px' }}>● Verified e-Shram Worker</div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setShowProfileMenu(false)
                  if (onSelectService) onSelectService('rights')
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px',
                  border: 'none',
                  background: 'transparent',
                  textAlign: 'left',
                  fontSize: '13px',
                  color: '#334155',
                  cursor: 'pointer',
                  borderRadius: '6px'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f1f5f9')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <User size={15} />
                <span>Worker Profile & Rights</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowProfileMenu(false)
                  if (onNavigateLanding) onNavigateLanding()
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px',
                  border: 'none',
                  background: 'transparent',
                  textAlign: 'left',
                  fontSize: '13px',
                  color: '#0d7e48',
                  fontWeight: 600,
                  cursor: 'pointer',
                  borderRadius: '6px'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#ecfdf5')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <ArrowRight size={15} />
                <span>Return to Landing Portal</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
