import React from 'react'
import { Button } from '../components/common/Button'
import { FeatureCard, ContentCard } from '../components/common/Card'
import { Badge } from '../components/common/Badge'
import { DemoDisclaimer } from '../components/ui/DemoDisclaimer'
import { useLanguage } from '../hooks/useLanguage'
import { 
  Calculator, 
  ShieldCheck, 
  HeartHandshake, 
  FileEdit, 
  ShieldAlert, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  PhoneCall,
  LayoutDashboard,
  Clock,
  TrendingUp,
  AlertTriangle,
  ChevronRight,
  Compass
} from 'lucide-react'

export function LandingPage({ onNavigate }) {
  const { t, lang } = useLanguage()

  const features = [
    {
      id: 'earnings',
      title: lang === 'hi' ? 'कमाई एवं कटौती कैलकुलेटर' : 'Earnings & Deduction Tracker',
      desc: lang === 'hi' 
        ? 'पेट्रोल, बाइक सर्विसिंग और ऐप पेनाल्टी के बाद वास्तविक शुद्ध प्रति घंटा मजदूरी जानें।' 
        : 'Compute real net hourly wages after petrol, bike servicing, and hidden platform fines.',
      icon: Calculator,
      color: 'peach',
      targetFeature: 'earnings',
      badge: lang === 'hi' ? 'सटीक गणित' : 'Pure Math'
    },
    {
      id: 'grievance',
      title: lang === 'hi' ? 'औपचारिक शिकायत ड्राफ्टर' : 'Grievance & Dispute Drafter',
      desc: lang === 'hi'
        ? 'रोके गए भुगतान या गलत पेनल्टी के विरुद्ध कंपनी सपोर्ट के लिए पेशेवर शिकायत पत्र बनाएं।'
        : 'Generate formal, audit-ready dispute letters in English & Hindi ready to copy into support.',
      icon: FileEdit,
      color: 'pink',
      targetFeature: 'grievance',
      badge: lang === 'hi' ? 'प्रमुख सुविधा' : 'Core Demo'
    },
    {
      id: 'rights',
      title: lang === 'hi' ? 'कामगार अधिकार मार्गदर्शिका' : 'Worker Rights & Fair Pay',
      desc: lang === 'hi'
        ? 'खाता बंद होने, देर से भुगतान या गायब ट्रिप रिकॉर्ड्स पर अपने कानूनी विकल्प समझें।'
        : 'Know your statutory protections against arbitrary bans, payment delays, and ghost trips.',
      icon: ShieldCheck,
      color: 'lavender',
      targetFeature: 'rights',
      badge: lang === 'hi' ? 'जागरूकता' : 'Protection'
    },
    {
      id: 'schemes',
      title: lang === 'hi' ? 'कल्याणकारी योजना खोजक' : 'Welfare Scheme Finder (Demo)',
      desc: lang === 'hi'
        ? 'दुर्घटना बीमा, ई-श्रम और परिवार स्वास्थ्य सहायता योजनाओं की पात्रता आसानी से जांचें।'
        : 'Explore demo social security schemes, accident covers, and family health grants.',
      icon: HeartHandshake,
      color: 'teal',
      targetFeature: 'schemes',
      badge: lang === 'hi' ? 'डेमो योजनाएं' : 'Social Security'
    },
    {
      id: 'safety',
      title: lang === 'hi' ? 'सड़क एवं कार्यस्थल सुरक्षा' : 'On-Duty Safety Guidance',
      desc: lang === 'hi'
        ? 'भीषण गर्मी, बारिश, दुर्घटना और ग्राहक विवादों के समय व्यावहारिक दिशा-निर्देश।'
        : 'Crucial on-road protocols for heatwaves, floods, emergency numbers, and accidents.',
      icon: ShieldAlert,
      color: 'mint',
      targetFeature: 'safety',
      badge: lang === 'hi' ? 'आपातकालीन' : 'Life Safety'
    },
    {
      id: 'docs',
      title: lang === 'hi' ? 'दस्तावेज़ एवं पे-स्लिप गाइड' : 'Document Assistance',
      desc: lang === 'hi'
        ? 'जटिल पे-स्लिप कोड, बैंक केवाईसी और प्लेटफॉर्म नोटिस को सरल भाषा में समझें।'
        : 'Demystify confusing deduction codes, Aadhaar KYC, and platform warning notices.',
      icon: FileText,
      color: 'cream',
      targetFeature: 'docs',
      badge: lang === 'hi' ? 'सरल भाषा' : 'Checklists'
    }
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
      {/* 1. Hero Section (7-5 Split on Desktop per Clay spec) */}
      <section className="container" style={{ paddingTop: '40px' }}>
        <div style={{ marginBottom: '20px' }}>
          <DemoDisclaimer />
        </div>

        <div className="grid-2" style={{ alignItems: 'center', gap: '48px' }}>
          {/* Left Column: Headline & Action CTAs */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <Badge variant="ochre" icon={Sparkles}>
                {t.heroTag}
              </Badge>
            </div>

            <h1 className="display-lg" style={{ marginBottom: '20px' }}>
              {t.heroHeading}
            </h1>

            <p className="body-md" style={{ fontSize: '17px', lineHeight: 1.6, marginBottom: '32px', color: 'var(--colors-body-strong)' }}>
              {t.heroDesc}
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Button
                variant="primary"
                size="lg"
                icon={LayoutDashboard}
                onClick={() => onNavigate('dashboard')}
              >
                {t.ctaTryDashboard}
              </Button>

              <Button
                variant="secondary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                onClick={() => {
                  const el = document.getElementById('features-section')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {t.ctaWatchDemo}
              </Button>
            </div>

            {/* Quick trust metrics */}
            <div style={{ display: 'flex', gap: '24px', marginTop: '36px', borderTop: '1px solid var(--colors-hairline)', paddingTop: '20px' }}>
              <div>
                <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--colors-ink)' }}>100%</div>
                <div style={{ fontSize: '12px', color: 'var(--colors-muted)' }}>Offline / Local Math</div>
              </div>
              <div>
                <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--colors-ink)' }}>6 Core</div>
                <div style={{ fontSize: '12px', color: 'var(--colors-muted)' }}>Worker Features</div>
              </div>
              <div>
                <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--colors-ink)' }}>Bilingual</div>
                <div style={{ fontSize: '12px', color: 'var(--colors-muted)' }}>English & हिन्दी</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Interactive Preview Card */}
          <div>
            <FeatureCard color="peach" style={{ position: 'relative' }}>
              {/* Card top badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span className="badge-pill" style={{ backgroundColor: '#ffffff', color: '#0a0a0a' }}>
                  Live Worker Dashboard Preview
                </span>
                <span style={{ fontSize: '12px', fontWeight: 600 }}>Ramesh Kumar (Delhi)</span>
              </div>

              {/* Sample simulated stats */}
              <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--rounded-lg)', padding: '18px', marginBottom: '16px', boxShadow: 'var(--shadow-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--colors-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                      Weekly Settlement Shortfall
                    </div>
                    <div style={{ fontSize: '26px', fontWeight: 700, color: '#b91c1c' }}>
                      ₹1,850 Pending
                    </div>
                  </div>
                  <Badge variant="warning">Discrepancy</Badge>
                </div>

                <div style={{ fontSize: '12px', color: 'var(--colors-body)', lineHeight: 1.45, backgroundColor: 'var(--colors-surface-card)', padding: '10px 12px', borderRadius: 'var(--rounded-sm)', marginBottom: '12px' }}>
                  ⚡ <strong>Dispute detected:</strong> 4 cancelled trips marked as partner fault during waterlogged rain shift.
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <Button
                    variant="primary"
                    size="sm"
                    fullWidth
                    icon={FileEdit}
                    onClick={() => onNavigate('dashboard', 'grievance')}
                  >
                    Draft Dispute Letter
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    icon={Calculator}
                    onClick={() => onNavigate('dashboard', 'earnings')}
                  >
                    Calculate
                  </Button>
                </div>
              </div>

              {/* Secondary micro features preview row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.6)', padding: '10px 12px', borderRadius: 'var(--rounded-sm)', fontSize: '12px' }}>
                  <strong>Safety SOS:</strong> Quick 112 & road trauma helplines
                </div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.6)', padding: '10px 12px', borderRadius: 'var(--rounded-sm)', fontSize: '12px' }}>
                  <strong>Rights Q&A:</strong> Algorithm penalty escalation steps
                </div>
              </div>
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* 2. Feature Overview (All 6 Features in Saturated Cards Palette) */}
      <section id="features-section" className="container">
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 48px' }}>
          <Badge variant="teal" icon={Sparkles} style={{ marginBottom: '12px' }}>
            {lang === 'hi' ? '6 प्रमुख सुविधाएं' : 'Complete Support Suite'}
          </Badge>
          <h2 className="display-md" style={{ marginBottom: '14px' }}>
            {t.featuresTitle}
          </h2>
          <p className="body-md">
            {t.featuresSub}
          </p>
        </div>

        <div className="grid-3">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.id}
                onClick={() => onNavigate('dashboard', f.targetFeature)}
                style={{ cursor: 'pointer', height: '100%' }}
              >
                <FeatureCard color={f.color} style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: 'var(--rounded-md)',
                          backgroundColor: 'rgba(255,255,255,0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Icon size={22} color="currentColor" />
                      </div>
                      <span className="badge-pill" style={{ backgroundColor: 'rgba(255,255,255,0.5)', color: 'inherit' }}>
                        {f.badge}
                      </span>
                    </div>

                    <h3 className="title-md" style={{ marginBottom: '8px' }}>
                      {f.title}
                    </h3>

                    <p style={{ fontSize: '14px', lineHeight: 1.5, opacity: 0.9 }}>
                      {f.desc}
                    </p>
                  </div>

                  <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600 }}>
                    <span>{lang === 'hi' ? 'सुविधा खोलें' : 'Open Feature'}</span>
                    <ChevronRight size={16} />
                  </div>
                </FeatureCard>
              </div>
            )
          })}
        </div>
      </section>

      {/* 3. How It Works (Simple 3-Step Section) */}
      <section id="how-it-works-section" className="container">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
          <h2 className="display-md" style={{ marginBottom: '12px' }}>
            {t.howItWorksTitle}
          </h2>
          <p className="body-md">
            {t.howItWorksSub}
          </p>
        </div>

        <div className="grid-3">
          <ContentCard>
            <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--colors-brand-pink)', marginBottom: '12px' }}>
              01
            </div>
            <h3 className="title-md" style={{ marginBottom: '8px' }}>
              {t.step1Title}
            </h3>
            <p className="body-sm" style={{ fontSize: '14px' }}>
              {t.step1Desc}
            </p>
          </ContentCard>

          <ContentCard>
            <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--colors-brand-teal)', marginBottom: '12px' }}>
              02
            </div>
            <h3 className="title-md" style={{ marginBottom: '8px' }}>
              {t.step2Title}
            </h3>
            <p className="body-sm" style={{ fontSize: '14px' }}>
              {t.step2Desc}
            </p>
          </ContentCard>

          <ContentCard>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#e8b94a', marginBottom: '12px' }}>
              03
            </div>
            <h3 className="title-md" style={{ marginBottom: '8px' }}>
              {t.step3Title}
            </h3>
            <p className="body-sm" style={{ fontSize: '14px' }}>
              {t.step3Desc}
            </p>
          </ContentCard>
        </div>
      </section>

      {/* 4. Pre-Footer Closing CTA Band (Clay spec: surface-soft cream) */}
      <section className="container">
        <div
          style={{
            backgroundColor: 'var(--colors-surface-soft)',
            borderRadius: 'var(--rounded-xl)',
            padding: '56px 40px',
            textAlign: 'center',
            border: '1px solid var(--colors-hairline)'
          }}
        >
          <Badge variant="teal" style={{ marginBottom: '16px' }}>
            {lang === 'hi' ? 'तुरंत शुरुआत करें' : 'Try the Live Prototype'}
          </Badge>
          <h2 className="display-md" style={{ marginBottom: '14px' }}>
            {lang === 'hi' ? 'अपने काम और कमाई को आसान बनाएं' : 'Take Control of Your Gig Earnings & Rights Today'}
          </h2>
          <p className="body-md" style={{ maxWidth: '580px', margin: '0 auto 28px' }}>
            {lang === 'hi'
              ? 'बिना किसी पंजीकरण या ऐप डाउनलोड के, सीधे ब्राउज़र में कामगार डैशबोर्ड का अनुभव करें।'
              : 'Experience the full worker journey: identify payout deductions, calculate true earnings, and copy a complaint draft in under 2 minutes.'}
          </p>

          <Button
            variant="primary"
            size="lg"
            icon={LayoutDashboard}
            onClick={() => onNavigate('dashboard')}
          >
            {t.ctaTryDashboard}
          </Button>
        </div>
      </section>
    </div>
  )
}
