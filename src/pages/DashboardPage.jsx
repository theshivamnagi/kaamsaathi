import React, { useState } from 'react'
import { Button } from '../components/common/Button'
import { FeatureCard, ContentCard } from '../components/common/Card'
import { Badge } from '../components/common/Badge'
import { AlertBanner } from '../components/ui/AlertBanner'
import { DemoDisclaimer } from '../components/ui/DemoDisclaimer'
import { useLanguage } from '../hooks/useLanguage'

// Feature Components
import { EarningsCalculator } from '../features/earnings/EarningsCalculator'
import { WorkerRightsExplorer } from '../features/worker-rights/WorkerRightsExplorer'
import { SafetyGuidance } from '../features/safety/SafetyGuidance'
import { WelfareSchemeFinder } from '../features/welfare-schemes/WelfareSchemeFinder'
import { DocumentAssistance } from '../features/document-help/DocumentAssistance'
import { GrievanceDrafting } from '../features/grievance/GrievanceDrafting'

// Icons
import { 
  Calculator, 
  ShieldCheck, 
  HeartHandshake, 
  FileEdit, 
  ShieldAlert, 
  FileText, 
  ArrowRight, 
  ArrowLeft,
  TrendingUp, 
  AlertTriangle, 
  Sparkles, 
  PhoneCall, 
  CheckCircle2, 
  RotateCcw,
  Compass,
  Play
} from 'lucide-react'

export function DashboardPage({ initialTab = 'overview', onNavigateLanding }) {
  const { t, lang } = useLanguage()

  // activeTab: 'overview' | 'earnings' | 'rights' | 'schemes' | 'grievance' | 'safety' | 'docs'
  const [activeTab, setActiveTab] = useState(initialTab)

  // Grievance prefill state passed between features
  const [grievancePrefill, setGrievancePrefill] = useState(null)

  // Guided Demo Tour state (step 1 to 5)
  const [demoTourStep, setDemoTourStep] = useState(null)

  const handleStartTour = () => {
    setDemoTourStep(1)
    setActiveTab('overview')
  }

  const handleNextTourStep = () => {
    if (demoTourStep === 1) {
      // Step 2: Open Earnings
      setDemoTourStep(2)
      setActiveTab('earnings')
    } else if (demoTourStep === 2) {
      // Step 3: Open Rights
      setDemoTourStep(3)
      setActiveTab('rights')
    } else if (demoTourStep === 3) {
      // Step 4: Open Grievance with prefill
      setDemoTourStep(4)
      setGrievancePrefill({
        company: 'Zomato',
        amount: 1850,
        whatHappened: 'Weekly payout for 06-12 Oct had an unexpected deduction of ₹1,850. No explanation was provided on the payslip.',
        desiredOutcome: 'Full refund and release of ₹1,850 to bank account.'
      })
      setActiveTab('grievance')
    } else if (demoTourStep === 4) {
      // Step 5: Tour complete, back to overview
      setDemoTourStep(5)
    } else {
      setDemoTourStep(null)
      setActiveTab('overview')
    }
  }

  const handleOpenGrievanceWithData = (prefillData) => {
    setGrievancePrefill(prefillData)
    setActiveTab('grievance')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="container" style={{ paddingTop: '28px', paddingBottom: '60px' }}>
      {/* 1. Dashboard Demo Disclaimer Notice */}
      <div style={{ marginBottom: '20px' }}>
        <DemoDisclaimer />
      </div>

      {/* 2. Guided Interactive Demo Tour Bar for Hackathon Judges */}
      <div
        style={{
          marginBottom: '24px',
          padding: '12px 18px',
          borderRadius: 'var(--rounded-lg)',
          backgroundColor: '#eff6ff',
          border: '1px solid #bfdbfe',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={16} color="#2563eb" />
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#1e40af' }}>
            {demoTourStep
              ? `Demo Tour [Step ${demoTourStep}/4]: ${
                  demoTourStep === 1
                    ? 'Reviewing Payout Discrepancy Alert'
                    : demoTourStep === 2
                    ? 'Inspecting Real Outflow in Calculator'
                    : demoTourStep === 3
                    ? 'Checking Worker Rights Protections'
                    : 'Drafting Audit-Ready Grievance Letter'
                }`
              : lang === 'hi'
              ? 'जज एवं मूल्यांकनकर्ता के लिए त्वरित एंड-टू-एंड डेमो टूर'
              : 'Interactive 60-Second Demo Tour for Hackathon Judges'}
          </span>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          {demoTourStep ? (
            <>
              <Button
                variant="primary"
                size="sm"
                icon={ArrowRight}
                iconPosition="right"
                onClick={handleNextTourStep}
              >
                {demoTourStep === 4 ? 'Complete Tour & Return' : `Next Step (${demoTourStep + 1}/4)`}
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setDemoTourStep(null)}
              >
                Exit Tour
              </Button>
            </>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              icon={Play}
              onClick={handleStartTour}
            >
              {lang === 'hi' ? 'डेमो टूर चलाएं' : 'Start Guided Demo Journey'}
            </Button>
          )}
        </div>
      </div>

      {/* 3. Dashboard Header Greeting */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <h1 className="display-sm" style={{ margin: 0 }}>
              {t.greeting}
            </h1>
            <Badge variant="teal">Online</Badge>
          </div>
          <p className="body-sm" style={{ color: 'var(--colors-body-strong)', margin: 0 }}>
            {t.workerProfile}
          </p>
        </div>

        {activeTab !== 'overview' && (
          <Button
            variant="secondary"
            size="sm"
            icon={ArrowLeft}
            onClick={() => handleTabChange('overview')}
          >
            {t.backToDashboard}
          </Button>
        )}
      </div>

      {/* Feature Navigation Tabs (Quick Switcher) */}
      <div style={{ marginBottom: '28px' }}>
        <div className="category-tab-list">
          <button
            type="button"
            className={`category-tab ${activeTab === 'overview' ? 'category-tab-active' : ''}`}
            onClick={() => handleTabChange('overview')}
          >
            ⚡ {lang === 'hi' ? 'डैशबोर्ड अवलोकन' : 'Dashboard Overview'}
          </button>

          <button
            type="button"
            className={`category-tab ${activeTab === 'earnings' ? 'category-tab-active' : ''}`}
            onClick={() => handleTabChange('earnings')}
          >
            💰 {t.actionEarningsTitle}
          </button>

          <button
            type="button"
            className={`category-tab ${activeTab === 'rights' ? 'category-tab-active' : ''}`}
            onClick={() => handleTabChange('rights')}
          >
            ⚖️ {t.actionRightsTitle}
          </button>

          <button
            type="button"
            className={`category-tab ${activeTab === 'grievance' ? 'category-tab-active' : ''}`}
            onClick={() => handleTabChange('grievance')}
          >
            📝 {t.actionGrievanceTitle}
          </button>

          <button
            type="button"
            className={`category-tab ${activeTab === 'safety' ? 'category-tab-active' : ''}`}
            onClick={() => handleTabChange('safety')}
          >
            🛡️ {t.actionSafetyTitle}
          </button>

          <button
            type="button"
            className={`category-tab ${activeTab === 'schemes' ? 'category-tab-active' : ''}`}
            onClick={() => handleTabChange('schemes')}
          >
            🏛️ {t.actionSchemesTitle}
          </button>

          <button
            type="button"
            className={`category-tab ${activeTab === 'docs' ? 'category-tab-active' : ''}`}
            onClick={() => handleTabChange('docs')}
          >
            📄 {t.actionDocsTitle}
          </button>
        </div>
      </div>

      {/* =========================================================================
          VIEW A: DASHBOARD OVERVIEW (Summary Stats + 4 Primary Cards + 2 Secondary)
         ========================================================================= */}
      {activeTab === 'overview' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* A. Critical Discrepancy Alert Banner (Primary Connected Journey Anchor) */}
          <AlertBanner
            type="warning"
            title={lang === 'hi' ? 'भुगतान विसंगति सूचना (Payout Alert)' : 'Weekly Payout Discrepancy Flagged'}
            action={
              <Button
                variant="primary"
                size="sm"
                icon={ArrowRight}
                iconPosition="right"
                onClick={() => handleTabChange('earnings')}
              >
                {t.dashAlertAction}
              </Button>
            }
          >
            {t.dashSummaryAlert}
          </AlertBanner>

          {/* B. Earnings Summary Cards (Clearly labelled Demo Data) */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span className="caption-uppercase" style={{ color: 'var(--colors-muted)' }}>
                {lang === 'hi' ? 'साप्ताहिक आय अवलोकन (डेमो डेटा)' : 'Demonstration Financial Overview (Demo Data)'}
              </span>
              <span className="caption" style={{ color: 'var(--colors-muted)' }}>
                Zomato / Swiggy Payout Cycle #41
              </span>
            </div>

            <div className="grid-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              {/* Today's Gross */}
              <ContentCard>
                <div style={{ fontSize: '12px', color: 'var(--colors-muted)', marginBottom: '4px' }}>
                  {t.todayEarnings}
                </div>
                <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--colors-ink)' }}>
                  ₹850
                </div>
                <div style={{ fontSize: '11px', color: '#15803d', marginTop: '4px' }}>
                  ↑ 14 orders completed today
                </div>
              </ContentCard>

              {/* Weekly Gross */}
              <ContentCard>
                <div style={{ fontSize: '12px', color: 'var(--colors-muted)', marginBottom: '4px' }}>
                  {t.weeklyEarnings}
                </div>
                <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--colors-ink)' }}>
                  ₹7,420
                </div>
                <div style={{ fontSize: '11px', color: 'var(--colors-muted)', marginTop: '4px' }}>
                  48 online hours logged
                </div>
              </ContentCard>

              {/* Total Expenses */}
              <ContentCard>
                <div style={{ fontSize: '12px', color: 'var(--colors-muted)', marginBottom: '4px' }}>
                  {t.totalExpenses}
                </div>
                <div style={{ fontSize: '24px', fontWeight: 700, color: '#b45309' }}>
                  ₹1,950
                </div>
                <div style={{ fontSize: '11px', color: '#b45309', marginTop: '4px' }}>
                  Fuel: ₹1,450 • Service: ₹500
                </div>
              </ContentCard>

              {/* Disputed Pending */}
              <ContentCard style={{ backgroundColor: '#fef2f2', borderColor: '#fecaca' }}>
                <div style={{ fontSize: '12px', color: '#b91c1c', marginBottom: '4px', fontWeight: 600 }}>
                  {t.pendingPayment}
                </div>
                <div style={{ fontSize: '24px', fontWeight: 700, color: '#b91c1c' }}>
                  ₹1,850
                </div>
                <div style={{ fontSize: '11px', color: '#b91c1c', marginTop: '4px' }}>
                  Dispute ticket #992144 pending
                </div>
              </ContentCard>
            </div>
          </div>

          {/* C. The Four Primary Action Cards (Prominently Displayed per Spec) */}
          <div>
            <div style={{ marginBottom: '14px' }}>
              <h2 className="title-lg">{t.primaryActionsHeading}</h2>
              <p className="body-sm">{lang === 'hi' ? 'किसी भी सेवा पर क्लिक करके तुरंत शुरू करें' : 'Tap any service to open the interactive tool'}</p>
            </div>

            <div className="grid-2" style={{ gap: '20px' }}>
              {/* Primary Action 1: Track My Earnings */}
              <div onClick={() => handleTabChange('earnings')} style={{ cursor: 'pointer' }}>
                <FeatureCard color="peach" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: 'var(--rounded-md)', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Calculator size={22} color="#0a0a0a" />
                      </div>
                      <Badge variant="ochre">Interactive Math</Badge>
                    </div>
                    <h3 className="title-md" style={{ marginBottom: '6px' }}>{t.actionEarningsTitle}</h3>
                    <p style={{ fontSize: '13px', opacity: 0.9 }}>{t.actionEarningsDesc}</p>
                  </div>
                  <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, fontSize: '13px' }}>
                    <span>{lang === 'hi' ? 'गणना शुरू करें' : 'Calculate Net Take-Home'}</span>
                    <ArrowRight size={15} />
                  </div>
                </FeatureCard>
              </div>

              {/* Primary Action 2: Get Help With a Complaint */}
              <div onClick={() => handleTabChange('grievance')} style={{ cursor: 'pointer' }}>
                <FeatureCard color="pink" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: 'var(--rounded-md)', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <FileEdit size={22} color="#ff4d8b" />
                      </div>
                      <Badge variant="default" style={{ backgroundColor: '#ffffff', color: '#0a0a0a' }}>High Priority</Badge>
                    </div>
                    <h3 className="title-md" style={{ marginBottom: '6px' }}>{t.actionGrievanceTitle}</h3>
                    <p style={{ fontSize: '13px', opacity: 0.9 }}>{t.actionGrievanceDesc}</p>
                  </div>
                  <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, fontSize: '13px' }}>
                    <span>{lang === 'hi' ? 'शिकायत ड्राफ्ट बनाएं' : 'Draft Formal Dispute'}</span>
                    <ArrowRight size={15} />
                  </div>
                </FeatureCard>
              </div>

              {/* Primary Action 3: Understand My Rights */}
              <div onClick={() => handleTabChange('rights')} style={{ cursor: 'pointer' }}>
                <FeatureCard color="lavender" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: 'var(--rounded-md)', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ShieldCheck size={22} color="#0a0a0a" />
                      </div>
                      <Badge variant="default">Protections</Badge>
                    </div>
                    <h3 className="title-md" style={{ marginBottom: '6px' }}>{t.actionRightsTitle}</h3>
                    <p style={{ fontSize: '13px', opacity: 0.9 }}>{t.actionRightsDesc}</p>
                  </div>
                  <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, fontSize: '13px' }}>
                    <span>{lang === 'hi' ? 'अधिकार देखें' : 'Explore Worker Rights'}</span>
                    <ArrowRight size={15} />
                  </div>
                </FeatureCard>
              </div>

              {/* Primary Action 4: Find Government Schemes */}
              <div onClick={() => handleTabChange('schemes')} style={{ cursor: 'pointer' }}>
                <FeatureCard color="teal" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: 'var(--rounded-md)', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <HeartHandshake size={22} color="#1a3a3a" />
                      </div>
                      <Badge variant="default" style={{ backgroundColor: '#ffffff', color: '#0a0a0a' }}>Demo Schemes</Badge>
                    </div>
                    <h3 className="title-md" style={{ marginBottom: '6px' }}>{t.actionSchemesTitle}</h3>
                    <p style={{ fontSize: '13px', opacity: 0.9 }}>{t.actionSchemesDesc}</p>
                  </div>
                  <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, fontSize: '13px' }}>
                    <span>{lang === 'hi' ? 'योजनाएं खोजें' : 'Check Eligibility'}</span>
                    <ArrowRight size={15} />
                  </div>
                </FeatureCard>
              </div>
            </div>
          </div>

          {/* D. Secondary Support Actions (Safety Guidance & Document Help) */}
          <div>
            <h3 className="title-md" style={{ marginBottom: '14px' }}>
              {lang === 'hi' ? 'अतिरिक्त सहायता सेवाएं' : 'Additional Worker Resources'}
            </h3>

            <div className="grid-2" style={{ gap: '16px' }}>
              <div onClick={() => handleTabChange('safety')} style={{ cursor: 'pointer' }}>
                <FeatureCard color="mint">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: 'var(--rounded-md)', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <ShieldAlert size={20} color="#0a0a0a" />
                    </div>
                    <div>
                      <h4 className="title-sm">{t.actionSafetyTitle}</h4>
                      <p style={{ fontSize: '12px', opacity: 0.85, margin: 0 }}>
                        {t.actionSafetyDesc}
                      </p>
                    </div>
                  </div>
                </FeatureCard>
              </div>

              <div onClick={() => handleTabChange('docs')} style={{ cursor: 'pointer' }}>
                <FeatureCard color="cream">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: 'var(--rounded-md)', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <FileText size={20} color="#0a0a0a" />
                    </div>
                    <div>
                      <h4 className="title-sm">{t.actionDocsTitle}</h4>
                      <p style={{ fontSize: '12px', opacity: 0.85, margin: 0 }}>
                        {t.actionDocsDesc}
                      </p>
                    </div>
                  </div>
                </FeatureCard>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          VIEW B: FEATURE 1 - EARNINGS CALCULATOR
         ========================================================================= */}
      {activeTab === 'earnings' && (
        <EarningsCalculator onDraftGrievance={handleOpenGrievanceWithData} />
      )}

      {/* =========================================================================
          VIEW C: FEATURE 3 - WORKER RIGHTS EXPLORER
         ========================================================================= */}
      {activeTab === 'rights' && (
        <WorkerRightsExplorer onDraftGrievance={handleOpenGrievanceWithData} />
      )}

      {/* =========================================================================
          VIEW D: FEATURE 6 - GRIEVANCE & DISPUTE DRAFTING
         ========================================================================= */}
      {activeTab === 'grievance' && (
        <GrievanceDrafting initialPrefill={grievancePrefill} />
      )}

      {/* =========================================================================
          VIEW E: FEATURE 2 - SAFETY GUIDANCE
         ========================================================================= */}
      {activeTab === 'safety' && (
        <SafetyGuidance />
      )}

      {/* =========================================================================
          VIEW F: FEATURE 4 - WELFARE SCHEMES FINDER
         ========================================================================= */}
      {activeTab === 'schemes' && (
        <WelfareSchemeFinder />
      )}

      {/* =========================================================================
          VIEW G: FEATURE 5 - DOCUMENT ASSISTANCE
         ========================================================================= */}
      {activeTab === 'docs' && (
        <DocumentAssistance onDraftGrievance={handleOpenGrievanceWithData} />
      )}
    </div>
  )
}
