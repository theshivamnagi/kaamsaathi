import React, { useState } from 'react'
import { Button } from '../components/common/Button'
import { Badge } from '../components/common/Badge'
import { useLanguage } from '../hooks/useLanguage'
import { 
  ArrowRight, 
  Search, 
  QrCode, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle,
  FileText,
  Heart,
  Briefcase,
  GraduationCap,
  Home,
  Scale,
  Cpu,
  TrendingUp,
  Users,
  Truck,
  Wrench,
  Building2,
  Wheat,
  Smile,
  ShieldCheck,
  ClipboardList,
  FolderSearch,
  MousePointerClick,
  ChevronRight,
  MessageSquare,
  Calculator,
  FileEdit,
  ShieldAlert,
  HeartHandshake,
  FolderLock,
  MapPin,
  Award
} from 'lucide-react'

export function LandingPage({ onNavigate }) {
  const { lang } = useLanguage()
  const [activeCategory, setActiveCategory] = useState(null)
  const [botOpen, setBotOpen] = useState(false)

  // 8 Specific Gig Worker Support Categories aligned with KaamSaathi's mission
  const categories = [
    {
      id: 'earnings',
      title: 'Net Earnings & Fuel Audit',
      count: 'Instant Math',
      desc: 'Deduct fuel, maintenance & platform commission cuts',
      icon: Calculator,
      bg: '#eefcf5',
      color: '#0d7e48',
      target: 'earnings'
    },
    {
      id: 'grievance',
      title: 'Grievance & Dispute Drafter',
      count: 'Audit-Ready Letters',
      desc: 'Formal notices for withheld payouts and penalties',
      icon: FileEdit,
      bg: '#fdf2f8',
      color: '#db2777',
      target: 'grievance'
    },
    {
      id: 'rights',
      title: 'Worker Rights & Protections',
      count: 'Social Security Code',
      desc: 'Working hour limits, deactivation protection & rights',
      icon: ShieldCheck,
      bg: '#eff6ff',
      color: '#2563eb',
      target: 'rights'
    },
    {
      id: 'safety',
      title: 'Road Safety & Emergency SOS',
      count: '112/1075 Helplines',
      desc: 'Night delivery protocols, weather alert & accident response',
      icon: ShieldAlert,
      bg: '#fff1f2',
      color: '#e11d48',
      target: 'safety'
    },
    {
      id: 'schemes',
      title: 'e-Shram & Welfare Schemes',
      count: '₹2L Accidental + PM-JAY',
      desc: 'Ayushman Bharat, pension & state welfare funds',
      icon: HeartHandshake,
      bg: '#f0fdfa',
      color: '#0d9488',
      target: 'schemes'
    },
    {
      id: 'docs',
      title: 'DigiLocker Document Vault',
      count: 'Digital Identity Pass',
      desc: 'Store verified driving licenses, RC & e-Shram cards',
      icon: FolderLock,
      bg: '#fefce8',
      color: '#ca8a04',
      target: 'docs'
    },
    {
      id: 'digipin',
      title: 'National DigiPin Navigation',
      count: '4m x 4m Precision',
      desc: 'Department of Posts verified delivery doorstep codes',
      icon: MapPin,
      bg: '#f0fdf4',
      color: '#16a34a',
      target: 'home'
    },
    {
      id: 'punjab',
      title: 'Punjab Gig Workers Board',
      count: 'Statutory Protections',
      desc: '1-2% aggregator cess tracking & 90-day dispute redressal',
      icon: Award,
      bg: '#fff7ed',
      color: '#ea580c',
      target: 'punjab'
    }
  ]

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', position: 'relative' }}>
      {/* =========================================================================
          SECTION 1: HERO BANNER
         ========================================================================= */}
      <section 
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'radial-gradient(ellipse 90% 80% at 80% 30%, #ffedd5 0%, #f0fdf4 45%, #ffffff 85%)',
          borderBottom: '1px solid #f1f5f9',
          paddingTop: '36px',
          paddingBottom: '54px'
        }}
      >
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '32px' }}>
            {/* Left Column: Headlines & CTA */}
            <div style={{ zIndex: 2 }}>
              {/* Brand heading */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '42px', fontWeight: 900, color: '#0d7e48', letterSpacing: '-1px', fontFamily: 'Inter, sans-serif' }}>
                  kaamSaathi
                </span>
              </div>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', color: '#64748b', textTransform: 'uppercase', marginBottom: '20px' }}>
                THE SPIRIT OF NEW INDIA • GIG WORKER ASSISTANT
              </div>

              {/* Bold Title */}
              <h1 style={{ fontSize: 'clamp(34px, 5vw, 54px)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-1.5px', marginBottom: '16px' }}>
                <span style={{ color: '#1e40af', display: 'block' }}>One Platform,</span>
                <span style={{ color: '#ea580c', display: 'block' }}>Endless Opportunities</span>
              </h1>

              {/* Subtitle */}
              <p style={{ fontSize: '16px', color: '#334155', lineHeight: 1.6, maxWidth: '520px', marginBottom: '28px' }}>
                Empowering India's delivery partners, drivers, and informal workers with transparent earnings, rights protection, and formal dispute drafting.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '32px' }}>
                <button
                  type="button"
                  onClick={() => onNavigate('dashboard')}
                  style={{
                    backgroundColor: '#ea580c',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '14px 28px',
                    fontSize: '17px',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    cursor: 'pointer',
                    boxShadow: '0 8px 20px rgba(234, 88, 12, 0.3)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#c2410c')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ea580c')}
                >
                  <span>Open Worker Dashboard</span>
                  <div style={{ backgroundColor: '#ffffff', color: '#ea580c', width: '28px', height: '28px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ArrowRight size={18} />
                  </div>
                </button>

                {/* Secondary Button */}
                <button
                  type="button"
                  onClick={() => onNavigate('dashboard', 'earnings')}
                  style={{
                    backgroundColor: '#ffffff',
                    color: '#0f172a',
                    border: '1.5px solid #cbd5e1',
                    borderRadius: '12px',
                    padding: '13px 22px',
                    fontSize: '15px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#0d7e48')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#cbd5e1')}
                >
                  Track Earnings & Cuts
                </button>
              </div>

              {/* QR Code and Mobile Callout */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div 
                  style={{ 
                    backgroundColor: '#ffffff', 
                    padding: '8px', 
                    borderRadius: '12px', 
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <QrCode size={36} color="#0f172a" />
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>
                    Scan the QR Code
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>
                    Access instantly on any Android or iPhone
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Worker Illustration with Phone App */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              {/* Main Worker Hero Image Frame */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '460px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                  border: '4px solid #ffffff'
                }}
              >
                <img 
                  src="/assets/worker_hero.jpg" 
                  alt="Young Indian Delivery Worker with KaamSaathi App" 
                  style={{ width: '100%', height: 'auto', display: 'block' }} 
                />

                {/* Overlay live chip */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    right: '16px',
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(8px)',
                    padding: '12px 16px',
                    borderRadius: '14px',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>
                      Settlement Protected
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#0d7e48' }}>
                      ₹1,850 Payout Dispute Resolved
                    </div>
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: 700, backgroundColor: '#dcfce7', color: '#166534', padding: '4px 8px', borderRadius: '6px' }}>
                    100% Local
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hashtag Bar */}
      <div 
        style={{ 
          backgroundColor: '#ffffff', 
          borderBottom: '1px solid #e2e8f0', 
          padding: '14px 0', 
          textAlign: 'center',
          fontSize: '13px',
          fontWeight: 700,
          color: '#334155',
          letterSpacing: '0.8px'
        }}
      >
        #KAAMSAATHI &nbsp;•&nbsp; #GIGWORKERSRIGHTS &nbsp;•&nbsp; #TRANSPARENTEARNINGS &nbsp;•&nbsp; #STATUTORYDISPUTES &nbsp;•&nbsp; #ESHRAMSOCIALSECURITY
      </div>

      {/* =========================================================================
          SECTION 2: GIG WORKER ASSISTANCE CATEGORIES
         ========================================================================= */}
      <section style={{ padding: '64px 0 48px', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px', marginBottom: '8px' }}>
              Gig Worker Support & Protection Categories
            </h2>
            <p style={{ fontSize: '15px', color: '#64748b', maxWidth: '680px', margin: '0 auto' }}>
              Auditing tools, dispute letter templates, safety protocols, and statutory welfare benefits designed specifically for frontline delivery partners and drivers.
            </p>
          </div>

          {/* Grid of Categories */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
              gap: '20px' 
            }}
          >
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <div
                  key={cat.id}
                  onClick={() => onNavigate('dashboard', cat.target)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    cursor: 'pointer',
                    padding: '20px',
                    borderRadius: '16px',
                    transition: 'all 0.2s ease',
                    border: '1px solid #e2e8f0',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f8fafc'
                    e.currentTarget.style.borderColor = cat.color
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.06)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff'
                    e.currentTarget.style.borderColor = '#e2e8f0'
                    e.currentTarget.style.transform = 'none'
                    e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.02)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '14px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        backgroundColor: cat.bg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: cat.color
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: cat.color, backgroundColor: cat.bg, padding: '3px 8px', borderRadius: '6px' }}>
                      {cat.count}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                    {cat.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.45, margin: 0 }}>
                    {cat.desc}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Launch Dashboard Button */}
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <button
              type="button"
              onClick={() => onNavigate('dashboard')}
              style={{
                backgroundColor: 'transparent',
                color: '#0d7e48',
                border: '1.5px solid #0d7e48',
                borderRadius: '8px',
                padding: '10px 24px',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ecfdf5'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              <span>Explore All Features on Dashboard</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: HOW IT WORKS
         ========================================================================= */}
      <section 
        style={{ 
          padding: '72px 0', 
          backgroundColor: '#f8fafc',
          backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          borderTop: '1px solid #e2e8f0',
          borderBottom: '1px solid #e2e8f0'
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#0d7e48', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
              How it works
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px' }}>
              3 Simple Steps to Audit Earnings & Claim Protections
            </h2>
          </div>

          {/* 3 Step Cards */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              flexWrap: 'wrap', 
              gap: '24px' 
            }}
          >
            {/* Step 1: Log Payout & Outflow */}
            <div 
              style={{ 
                backgroundColor: '#ffffff', 
                borderRadius: '16px', 
                padding: '36px 28px', 
                width: '100%', 
                maxWidth: '320px', 
                textAlign: 'center',
                boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                border: '1px solid #f1f5f9'
              }}
            >
              <div 
                style={{ 
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '12px', 
                  backgroundColor: '#ecfdf5', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 18px',
                  color: '#0d7e48'
                }}
              >
                <Calculator size={32} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                1. Calculate Real Net Pay
              </h3>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.5 }}>
                Enter gross weekly payouts, fuel costs, and maintenance to uncover <strong>true net take-home earnings</strong>.
              </p>
            </div>

            {/* Connecting Chevron */}
            <div className="desktop-only" style={{ color: '#cbd5e1' }}>
              <ChevronRight size={36} strokeWidth={2.5} />
            </div>

            {/* Step 2: Audit & Detect Violations */}
            <div 
              style={{ 
                backgroundColor: '#ffffff', 
                borderRadius: '16px', 
                padding: '36px 28px', 
                width: '100%', 
                maxWidth: '320px', 
                textAlign: 'center',
                boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                border: '1px solid #f1f5f9'
              }}
            >
              <div 
                style={{ 
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '12px', 
                  backgroundColor: '#eff6ff', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 18px',
                  color: '#1d4ed8'
                }}
              >
                <Scale size={32} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                2. Audit Deductions & Law
              </h3>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.5 }}>
                Automated detection flags <strong>unexpected deduction cuts</strong> and violations against statutory Social Security rules.
              </p>
            </div>

            {/* Connecting Chevron */}
            <div className="desktop-only" style={{ color: '#cbd5e1' }}>
              <ChevronRight size={36} strokeWidth={2.5} />
            </div>

            {/* Step 3: Draft Dispute Letter or Claim Benefit */}
            <div 
              style={{ 
                backgroundColor: '#ffffff', 
                borderRadius: '16px', 
                padding: '36px 28px', 
                width: '100%', 
                maxWidth: '320px', 
                textAlign: 'center',
                boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                border: '1px solid #f1f5f9'
              }}
            >
              <div 
                style={{ 
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '12px', 
                  backgroundColor: '#fdf2f8', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 18px',
                  color: '#db2777'
                }}
              >
                <FileEdit size={32} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                3. Draft Notice or Claim Aid
              </h3>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.5 }}>
                Generate an <strong>audit-ready legal dispute letter</strong> to the company or claim eligible government accident covers.
              </p>
            </div>
          </div>

          {/* Quick CTA to try dashboard */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button
              type="button"
              onClick={() => onNavigate('dashboard')}
              style={{
                backgroundColor: '#0d7e48',
                color: '#ffffff',
                border: 'none',
                borderRadius: '10px',
                padding: '12px 28px',
                fontSize: '15px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(13, 126, 72, 0.25)',
                transition: 'background-color 0.15s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#15803d')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0d7e48')}
            >
              <span>Try Interactive Steps on Dashboard</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FLOATING CHATBOT WIDGET
         ========================================================================= */}
      <div 
        style={{ 
          position: 'fixed', 
          bottom: '24px', 
          right: '24px', 
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '10px'
        }}
      >
        {botOpen && (
          <div
            style={{
              width: '320px',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.18)',
              border: '1px solid #e2e8f0',
              overflow: 'hidden',
              animation: 'fadeIn 0.2s ease'
            }}
          >
            <div style={{ backgroundColor: '#0d7e48', color: '#ffffff', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '18px' }}>🤖</span>
                <span style={{ fontWeight: 700, fontSize: '14px' }}>KaamSaathi AI Sahayak</span>
              </div>
              <button onClick={() => setBotOpen(false)} style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '16px' }}>✕</button>
            </div>
            <div style={{ padding: '16px', fontSize: '13px', color: '#334155', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div>नमस्ते! मैं कामसाथी सहायक बोट हूँ। आप क्या करना चाहते हैं?</div>
              <button 
                onClick={() => { setBotOpen(false); onNavigate('dashboard', 'earnings'); }}
                style={{ textAlign: 'left', padding: '8px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#f8fafc', cursor: 'pointer', fontSize: '12px' }}
              >
                💰 मेरी कमाई व पेट्रोल कटौती जांचें
              </button>
              <button 
                onClick={() => { setBotOpen(false); onNavigate('dashboard', 'grievance'); }}
                style={{ textAlign: 'left', padding: '8px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#f8fafc', cursor: 'pointer', fontSize: '12px' }}
              >
                📝 कंपनी सपोर्ट के लिए शिकायत पत्र ड्राफ्ट करें
              </button>
              <button 
                onClick={() => { setBotOpen(false); onNavigate('dashboard', 'schemes'); }}
                style={{ textAlign: 'left', padding: '8px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#f8fafc', cursor: 'pointer', fontSize: '12px' }}
              >
                🏛️ सरकारी कल्याणकारी योजनाएं खोजें
              </button>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setBotOpen(!botOpen)}
          title="Ask KaamSaathi AI"
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: '#0d7e48',
            color: '#ffffff',
            border: '3px solid #ffffff',
            boxShadow: '0 6px 18px rgba(13, 126, 72, 0.4)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.15s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
        >
          <span style={{ fontSize: '26px' }}>🤖</span>
        </button>
      </div>
    </div>
  )
}
