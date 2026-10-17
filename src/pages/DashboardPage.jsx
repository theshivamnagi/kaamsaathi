import React, { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'

// UMANG Dashboard Components
import { UmangHeader } from '../components/dashboard/UmangHeader'
import { UmangSidebar } from '../components/dashboard/UmangSidebar'
import { HeroBannerCarousel } from '../components/dashboard/HeroBannerCarousel'
import { DigiPinBanner } from '../components/dashboard/DigiPinBanner'
import { QuickServices } from '../components/dashboard/QuickServices'
import { FloatingChatbot } from '../components/dashboard/FloatingChatbot'
import { DigiPinModal, ManasModal, ISLChatbotModal } from '../components/dashboard/DashboardModals'

// Feature Components
import { EarningsCalculator } from '../features/earnings/EarningsCalculator'
import { WorkerRightsExplorer } from '../features/worker-rights/WorkerRightsExplorer'
import { SafetyGuidance } from '../features/safety/SafetyGuidance'
import { WelfareSchemeFinder } from '../features/welfare-schemes/WelfareSchemeFinder'
import { DocumentAssistance } from '../features/document-help/DocumentAssistance'
import { GrievanceDrafting } from '../features/grievance/GrievanceDrafting'

// UI Components
import { ContentCard, FeatureCard } from '../components/common/Card'
import { Badge } from '../components/common/Badge'
import { Button } from '../components/common/Button'
import { AlertBanner } from '../components/ui/AlertBanner'
import { DemoDisclaimer } from '../components/ui/DemoDisclaimer'

// Icons
import {
  ArrowLeft,
  ArrowRight,
  Calculator,
  ShieldCheck,
  FileEdit,
  HeartHandshake,
  ShieldAlert,
  FileText,
  Briefcase,
  Award,
  Sparkles,
  MapPin,
  Building2,
  AlertTriangle,
  Play
} from 'lucide-react'

export function DashboardPage({ initialTab = 'home', onNavigateLanding }) {
  const { t, lang } = useLanguage()

  // activeTab can be: 'home' | 'services' | 'digilocker' | 'punjab' | 'schemes' | 'jobs' | 'dashboard' | 'earnings' | 'rights' | 'grievance' | 'safety' | 'docs'
  const [activeTab, setActiveTab] = useState(
    initialTab === 'overview' ? 'home' : initialTab
  )
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  // Modals state
  const [showDigiPinModal, setShowDigiPinModal] = useState(false)
  const [showManasModal, setShowManasModal] = useState(false)
  const [showISLModal, setShowISLModal] = useState(false)

  // Grievance prefill state
  const [grievancePrefill, setGrievancePrefill] = useState(null)

  // Guided demo tour state
  const [demoTourStep, setDemoTourStep] = useState(null)

  const handleStartTour = () => {
    setDemoTourStep(1)
    setActiveTab('home')
  }

  const handleNextTourStep = () => {
    if (demoTourStep === 1) {
      setDemoTourStep(2)
      setActiveTab('earnings')
    } else if (demoTourStep === 2) {
      setDemoTourStep(3)
      setActiveTab('rights')
    } else if (demoTourStep === 3) {
      setDemoTourStep(4)
      setGrievancePrefill({
        company: 'Zomato',
        amount: 1850,
        whatHappened:
          'Weekly payout for 06-12 Oct had an unexpected deduction of ₹1,850. No explanation was provided on the payslip.',
        desiredOutcome: 'Full refund and release of ₹1,850 to bank account.'
      })
      setActiveTab('grievance')
    } else if (demoTourStep === 4) {
      setDemoTourStep(5)
    } else {
      setDemoTourStep(null)
      setActiveTab('home')
    }
  }

  const handleOpenGrievanceWithData = (prefillData) => {
    setGrievancePrefill(prefillData)
    setActiveTab('grievance')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleAccessNow = (actionKey) => {
    if (actionKey === 'manas') {
      setShowManasModal(true)
    } else if (actionKey === 'schemes') {
      setActiveTab('schemes')
    } else if (actionKey === 'digilocker') {
      setActiveTab('docs')
    }
  }

  const handleSelectCategory = (categoryKey, serviceId) => {
    if (serviceId === 'health') {
      setActiveTab('schemes')
    } else if (serviceId === 'emergency') {
      setActiveTab('safety')
    } else if (serviceId === 'travel') {
      setActiveTab('rights')
    } else if (serviceId === 'utility') {
      setActiveTab('schemes')
    } else {
      setActiveTab(categoryKey)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSearch = (query) => {
    if (!query) return
    const q = query.toLowerCase()
    if (q.includes('digipin') || q.includes('pin') || q.includes('address')) {
      setShowDigiPinModal(true)
    } else if (q.includes('manas') || q.includes('drug') || q.includes('ncb')) {
      setShowManasModal(true)
    } else if (q.includes('earn') || q.includes('pay') || q.includes('fuel')) {
      setActiveTab('earnings')
    } else if (q.includes('right') || q.includes('law')) {
      setActiveTab('rights')
    } else if (q.includes('grievance') || q.includes('dispute') || q.includes('complaint')) {
      setActiveTab('grievance')
    } else if (q.includes('safe') || q.includes('emergency')) {
      setActiveTab('safety')
    } else if (q.includes('scheme') || q.includes('health') || q.includes('ayushman') || q.includes('ekyc')) {
      setActiveTab('schemes')
    } else if (q.includes('doc') || q.includes('digilocker')) {
      setActiveTab('docs')
    } else {
      setActiveTab('schemes')
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f8fafc',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
      }}
    >
      {/* 1. UMANG Top Sticky Header */}
      <UmangHeader
        onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
        onSearch={handleSearch}
        onOpenISL={() => setShowISLModal(true)}
        unreadCount={2}
        onNavigateLanding={onNavigateLanding}
        onSelectService={(tab) => setActiveTab(tab)}
      />

      {/* 2. Main Two-Column Layout (Sidebar + Content Canvas) */}
      <div style={{ display: 'flex', flex: 1, minHeight: 'calc(100vh - 68px)' }}>
        {/* Left Sidebar */}
        <UmangSidebar
          activeTab={activeTab}
          onSelectTab={(tabId) => {
            setActiveTab(tabId)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          isCollapsed={sidebarCollapsed}
        />

        {/* Right Content Area */}
        <main
          style={{
            flex: 1,
            padding: '24px 32px 64px 32px',
            backgroundColor: '#f8fafc',
            overflowY: 'auto',
            boxSizing: 'border-box'
          }}
        >
          {/* Back button if navigating into deep subfeatures */}
          {activeTab !== 'home' && (
            <div style={{ marginBottom: '18px' }}>
              <button
                type="button"
                onClick={() => setActiveTab('home')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #bbf7d0',
                  borderRadius: '8px',
                  padding: '7px 14px',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#0d7e48',
                  cursor: 'pointer',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ecfdf5'
                  e.currentTarget.style.borderColor = '#86efac'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff'
                  e.currentTarget.style.borderColor = '#bbf7d0'
                }}
              >
                <ArrowLeft size={16} />
                <span>Back to Dashboard Home</span>
              </button>
            </div>
          )}

          {/* =========================================================
              VIEW 1: HOME (Exact match to provided screenshot)
             ========================================================= */}
          {activeTab === 'home' && (
            <div>
              {/* 1. Hero Carousel Banner (MANAS / Gig welfare) */}
              <HeroBannerCarousel onAccessNow={handleAccessNow} />

              {/* 2. "Know Your DigiPin" Bar */}
              <DigiPinBanner onOpenDigiPin={() => setShowDigiPinModal(true)} />

              {/* 3. "📌 Quick Services" Grid (Health, Emergency, Travel, Utility) */}
              <QuickServices onSelectCategory={handleSelectCategory} />

              {/* 4. Worker Payout Discrepancy & Live Analytics Section */}
              <div style={{ marginTop: '28px', borderTop: '1px solid #e2e8f0', paddingTop: '24px' }}>
                {/* Discrepancy Alert */}
                <div style={{ marginBottom: '20px' }}>
                  <AlertBanner
                    type="warning"
                    title={lang === 'hi' ? 'भुगतान विसंगति सूचना (Payout Alert)' : 'Weekly Payout Discrepancy Flagged'}
                    action={
                      <Button
                        variant="primary"
                        size="sm"
                        icon={ArrowRight}
                        iconPosition="right"
                        onClick={() => setActiveTab('earnings')}
                      >
                        {t.dashAlertAction}
                      </Button>
                    }
                  >
                    {t.dashSummaryAlert}
                  </AlertBanner>
                </div>

                {/* Demonstration Financial Overview */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span className="caption-uppercase" style={{ color: '#64748b', fontWeight: 600, fontSize: '12px' }}>
                      {lang === 'hi' ? 'साप्ताहिक आय अवलोकन (डेमो डेटा)' : 'Demonstration Financial Overview (Demo Data)'}
                    </span>
                    <span className="caption" style={{ color: '#64748b', fontSize: '12px' }}>
                      Zomato / Swiggy Payout Cycle #41
                    </span>
                  </div>

                  <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '16px' }}>
                    <ContentCard>
                      <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>{t.todayEarnings}</div>
                      <div style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a' }}>₹850</div>
                      <div style={{ fontSize: '11px', color: '#15803d', marginTop: '4px', fontWeight: 500 }}>↑ 14 orders completed today</div>
                    </ContentCard>

                    <ContentCard>
                      <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>{t.weeklyEarnings}</div>
                      <div style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a' }}>₹7,420</div>
                      <div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>48 online hours logged</div>
                    </ContentCard>

                    <ContentCard>
                      <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>{t.totalExpenses}</div>
                      <div style={{ fontSize: '24px', fontWeight: 700, color: '#b45309' }}>₹1,950</div>
                      <div style={{ fontSize: '11px', color: '#b45309', marginTop: '4px' }}>Fuel: ₹1,450 • Service: ₹500</div>
                    </ContentCard>

                    <ContentCard style={{ backgroundColor: '#fef2f2', borderColor: '#fecaca' }}>
                      <div style={{ fontSize: '12px', color: '#b91c1c', marginBottom: '4px', fontWeight: 600 }}>{t.pendingPayment}</div>
                      <div style={{ fontSize: '24px', fontWeight: 700, color: '#b91c1c' }}>₹1,850</div>
                      <div style={{ fontSize: '11px', color: '#b91c1c', marginTop: '4px', fontWeight: 500 }}>Dispute ticket #992144 pending</div>
                    </ContentCard>
                  </div>
                </div>

                {/* Primary Interactive Worker Services Cards */}
                <div>
                  <div style={{ marginBottom: '14px' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#1e293b', margin: 0 }}>
                      Featured Worker Assistance Tools
                    </h4>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: '2px 0 0 0' }}>
                      Launch automated calculation, dispute notices and welfare verification
                    </p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                    {/* Tool 1 */}
                    <div onClick={() => setActiveTab('earnings')} style={{ cursor: 'pointer' }}>
                      <FeatureCard color="peach" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                            <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <Calculator size={20} color="#0a0a0a" />
                            </div>
                            <Badge variant="ochre">Earnings Math</Badge>
                          </div>
                          <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>{t.actionEarningsTitle}</h4>
                          <p style={{ fontSize: '12px', opacity: 0.9 }}>{t.actionEarningsDesc}</p>
                        </div>
                        <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, fontSize: '12px' }}>
                          <span>Calculate Take-Home</span>
                          <ArrowRight size={14} />
                        </div>
                      </FeatureCard>
                    </div>

                    {/* Tool 2 */}
                    <div onClick={() => setActiveTab('grievance')} style={{ cursor: 'pointer' }}>
                      <FeatureCard color="pink" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                            <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <FileEdit size={20} color="#ff4d8b" />
                            </div>
                            <Badge variant="default" style={{ backgroundColor: '#ffffff', color: '#0a0a0a' }}>Audit Ready</Badge>
                          </div>
                          <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>{t.actionGrievanceTitle}</h4>
                          <p style={{ fontSize: '12px', opacity: 0.9 }}>{t.actionGrievanceDesc}</p>
                        </div>
                        <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, fontSize: '12px' }}>
                          <span>Draft Dispute Letter</span>
                          <ArrowRight size={14} />
                        </div>
                      </FeatureCard>
                    </div>

                    {/* Tool 3 */}
                    <div onClick={() => setActiveTab('rights')} style={{ cursor: 'pointer' }}>
                      <FeatureCard color="lavender" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                            <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <ShieldCheck size={20} color="#0a0a0a" />
                            </div>
                            <Badge variant="default">Protections</Badge>
                          </div>
                          <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>{t.actionRightsTitle}</h4>
                          <p style={{ fontSize: '12px', opacity: 0.9 }}>{t.actionRightsDesc}</p>
                        </div>
                        <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, fontSize: '12px' }}>
                          <span>Explore Protections</span>
                          <ArrowRight size={14} />
                        </div>
                      </FeatureCard>
                    </div>

                    {/* Tool 4 */}
                    <div onClick={() => setActiveTab('schemes')} style={{ cursor: 'pointer' }}>
                      <FeatureCard color="teal" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                            <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <HeartHandshake size={20} color="#1a3a3a" />
                            </div>
                            <Badge variant="default" style={{ backgroundColor: '#ffffff', color: '#0a0a0a' }}>Direct Benefit</Badge>
                          </div>
                          <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>{t.actionSchemesTitle}</h4>
                          <p style={{ fontSize: '12px', opacity: 0.9 }}>{t.actionSchemesDesc}</p>
                        </div>
                        <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, fontSize: '12px' }}>
                          <span>Verify Eligibility</span>
                          <ArrowRight size={14} />
                        </div>
                      </FeatureCard>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================
              VIEW 2: SERVICES DIRECTORY
             ========================================================= */}
          {activeTab === 'services' && (
            <div>
              <div style={{ marginBottom: '20px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', margin: 0 }}>UMANG Services Catalog</h2>
                <p style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>
                  Unified access to all government social security schemes and gig worker support utilities.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                <div onClick={() => setActiveTab('earnings')} style={{ cursor: 'pointer' }}>
                  <ContentCard style={{ borderLeft: '4px solid #ea580c' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#fff7ed', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Calculator size={22} color="#ea580c" />
                      </div>
                      <div>
                        <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>Real Outflow & Take-Home Calculator</h4>
                        <p style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>Audit fuel, platform commissions, maintenance and net hourly earnings.</p>
                      </div>
                    </div>
                  </ContentCard>
                </div>

                <div onClick={() => setActiveTab('grievance')} style={{ cursor: 'pointer' }}>
                  <ContentCard style={{ borderLeft: '4px solid #db2777' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#fdf2f8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <FileEdit size={22} color="#db2777" />
                      </div>
                      <div>
                        <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>Formal Grievance Drafter</h4>
                        <p style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>Generate legal notice drafts with statutory citations for wrongful deductions.</p>
                      </div>
                    </div>
                  </ContentCard>
                </div>

                <div onClick={() => setActiveTab('rights')} style={{ cursor: 'pointer' }}>
                  <ContentCard style={{ borderLeft: '4px solid #7c3aed' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#f5f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ShieldCheck size={22} color="#7c3aed" />
                      </div>
                      <div>
                        <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>Worker Rights & Protections</h4>
                        <p style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>Social Security Code 2026, de-activation shields, and maximum working hours.</p>
                      </div>
                    </div>
                  </ContentCard>
                </div>

                <div onClick={() => setActiveTab('schemes')} style={{ cursor: 'pointer' }}>
                  <ContentCard style={{ borderLeft: '4px solid #0d9488' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#f0fdfa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <HeartHandshake size={22} color="#0d9488" />
                      </div>
                      <div>
                        <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>Welfare Scheme Finder</h4>
                        <p style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>Ayushman Bharat PM-JAY, e-Shram insurance, PM-SYM pension and state benefits.</p>
                      </div>
                    </div>
                  </ContentCard>
                </div>

                <div onClick={() => setActiveTab('safety')} style={{ cursor: 'pointer' }}>
                  <ContentCard style={{ borderLeft: '4px solid #e11d48' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#fff1f2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ShieldAlert size={22} color="#e11d48" />
                      </div>
                      <div>
                        <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>Safety & SOS Guidance</h4>
                        <p style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>Night delivery safety protocols, accident helpline 112/1075, and legal backing.</p>
                      </div>
                    </div>
                  </ContentCard>
                </div>

                <div onClick={() => setActiveTab('docs')} style={{ cursor: 'pointer' }}>
                  <ContentCard style={{ borderLeft: '4px solid #2563eb' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <FileText size={22} color="#2563eb" />
                      </div>
                      <div>
                        <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>DigiLocker Document Vault</h4>
                        <p style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>Store vehicle registration, driving license and digital e-Shram pass.</p>
                      </div>
                    </div>
                  </ContentCard>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================
              VIEW 3: PUNJAB STATE GIG WORKER BOARD
             ========================================================= */}
          {activeTab === 'punjab' && (
            <div>
              <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '24px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <Award size={32} color="#d97706" />
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                      The Punjab State Platform Based Gig Workers Welfare Board
                    </h3>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>Department of Labour, Government of Punjab</div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '20px' }}>
                  <div style={{ backgroundColor: '#fffbeb', border: '1px solid #fef3c7', borderRadius: '12px', padding: '16px' }}>
                    <div style={{ fontSize: '11px', color: '#b45309', fontWeight: 600 }}>CESS FUND ACCUMULATION</div>
                    <div style={{ fontSize: '22px', fontWeight: 800, color: '#92400e', marginTop: '4px' }}>1-2% Fee on App Orders</div>
                    <div style={{ fontSize: '11px', color: '#78350f', marginTop: '4px' }}>Funded by aggregators for worker healthcare</div>
                  </div>

                  <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #dcfce7', borderRadius: '12px', padding: '16px' }}>
                    <div style={{ fontSize: '11px', color: '#166534', fontWeight: 600 }}>ACCIDENTAL COVER</div>
                    <div style={{ fontSize: '22px', fontWeight: 800, color: '#14532d', marginTop: '4px' }}>₹2,00,000 Free Cover</div>
                    <div style={{ fontSize: '11px', color: '#166534', marginTop: '4px' }}>Punjab gig delivery riders enrolled</div>
                  </div>

                  <div style={{ backgroundColor: '#eff6ff', border: '1px solid #dbeafe', borderRadius: '12px', padding: '16px' }}>
                    <div style={{ fontSize: '11px', color: '#1e40af', fontWeight: 600 }}>STATE DISPUTE REDRESSAL</div>
                    <div style={{ fontSize: '22px', fontWeight: 800, color: '#1e3a8a', marginTop: '4px' }}>90-Day Resolution</div>
                    <div style={{ fontSize: '11px', color: '#1d4ed8', marginTop: '4px' }}>App deactivations require notice</div>
                  </div>
                </div>

                <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6 }}>
                  Under the Punjab Gig Workers Bill, delivery partners and drivers in Ludhiana, Amritsar, Jalandhar, Mohali, and Patiala enjoy statutory legal protections, transparent algorithmic payout audits, and health insurance.
                </p>
              </div>
            </div>
          )}

          {/* =========================================================
              VIEW 4: JOBS / FAIR WORK BOARD
             ========================================================= */}
          {activeTab === 'jobs' && (
            <div>
              <div style={{ marginBottom: '20px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', margin: 0 }}>Verified Fair-Work Gig Opportunities</h2>
                <p style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>
                  Aggregator partners benchmarked against the Fairwork India Ratings 2026.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { title: 'Zepto Quick Commerce Fleet Delivery Partner', city: 'Delhi NCR • Ludhiana • Chandigarh', rate: '₹35 - ₹65 per order', badge: 'Fairwork Rating: 8/10', insurance: '₹5L Cover Provided' },
                  { title: 'Zomato Food Express Rider', city: 'All Tier 1 & Tier 2 Hubs', rate: '₹40 - ₹80 per order + Surge', badge: 'Fairwork Rating: 7/10', insurance: 'Instant Emergency SOS' },
                  { title: 'Urban Company Skilled Electrician / Plumber Partner', city: 'Metro Hubs', rate: '₹750 - ₹1,800 daily take-home', badge: 'Fairwork Rating: 9/10', insurance: 'Health & Skill Card' }
                ].map((job, idx) => (
                  <ContentCard key={idx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                      <div>
                        <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>{job.title}</h4>
                        <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>{job.city} • <span style={{ color: '#16a34a', fontWeight: 600 }}>{job.rate}</span></div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '11px', backgroundColor: '#eff6ff', color: '#1d4ed8', fontWeight: 600, padding: '4px 8px', borderRadius: '6px' }}>{job.badge}</span>
                        <Button variant="primary" size="sm">Apply with DigiLocker</Button>
                      </div>
                    </div>
                  </ContentCard>
                ))}
              </div>
            </div>
          )}

          {/* =========================================================
              VIEW 5: SPECIFIC FEATURE SUB-VIEWS
             ========================================================= */}
          {activeTab === 'earnings' && (
            <EarningsCalculator onDraftGrievance={handleOpenGrievanceWithData} />
          )}

          {activeTab === 'rights' && (
            <WorkerRightsExplorer onDraftGrievance={handleOpenGrievanceWithData} />
          )}

          {activeTab === 'grievance' && (
            <GrievanceDrafting initialPrefill={grievancePrefill} />
          )}

          {activeTab === 'safety' && (
            <SafetyGuidance />
          )}

          {activeTab === 'schemes' && (
            <WelfareSchemeFinder />
          )}

          {activeTab === 'docs' && (
            <DocumentAssistance onDraftGrievance={handleOpenGrievanceWithData} />
          )}
        </main>
      </div>

      {/* 3. Floating Bottom-Right Chatbot Avatar */}
      <FloatingChatbot onNavigateFeature={(tab) => {
        if (tab === 'digipin') {
          setShowDigiPinModal(true)
        } else {
          setActiveTab(tab)
        }
      }} />

      {/* 4. Interactive Dialog Modals */}
      <DigiPinModal isOpen={showDigiPinModal} onClose={() => setShowDigiPinModal(false)} />
      <ManasModal isOpen={showManasModal} onClose={() => setShowManasModal(false)} />
      <ISLChatbotModal isOpen={showISLModal} onClose={() => setShowISLModal(false)} />
    </div>
  )
}
