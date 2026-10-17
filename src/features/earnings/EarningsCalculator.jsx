import React, { useState } from 'react'
import { calculateEarningsBreakdown, formatRupee } from '../../utils/calculations'
import { defaultEarningsData, workerProfiles, weeklyDayLogs } from '../../data/earnings'
import { Button } from '../../components/common/Button'
import { FeatureCard, ContentCard } from '../../components/common/Card'
import { Badge } from '../../components/common/Badge'
import { AlertBanner } from '../../components/ui/AlertBanner'
import { useLanguage } from '../../hooks/useLanguage'
import { 
  Calculator, 
  Fuel, 
  Wrench, 
  AlertTriangle, 
  Clock, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  RotateCcw,
  Sparkles,
  Info
} from 'lucide-react'

export function EarningsCalculator({ onDraftGrievance }) {
  const { lang } = useLanguage()

  const [inputs, setInputs] = useState({
    grossEarnings: defaultEarningsData.grossEarnings,
    fuelExpense: defaultEarningsData.fuelExpense,
    otherExpenses: defaultEarningsData.otherExpenses,
    deductions: defaultEarningsData.deductions,
    hoursWorked: defaultEarningsData.hoursWorked
  })

  const [selectedProfile, setSelectedProfile] = useState('bike_delivery')

  const breakdown = calculateEarningsBreakdown(inputs)

  const handleInputChange = (field, value) => {
    // allow empty string for typing, otherwise clean numeric
    setInputs(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSelectProfile = (profile) => {
    setSelectedProfile(profile.id)
    setInputs({
      grossEarnings: profile.gross,
      fuelExpense: profile.fuel,
      otherExpenses: profile.other,
      deductions: profile.deductions,
      hoursWorked: profile.hours
    })
  }

  const handleReset = () => {
    setInputs({
      grossEarnings: defaultEarningsData.grossEarnings,
      fuelExpense: defaultEarningsData.fuelExpense,
      otherExpenses: defaultEarningsData.otherExpenses,
      deductions: defaultEarningsData.deductions,
      hoursWorked: defaultEarningsData.hoursWorked
    })
    setSelectedProfile('bike_delivery')
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Header & Description */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Badge variant="ochre" icon={Calculator}>
            {lang === 'hi' ? 'फीचर 1: कमाई कैलकुलेटर' : 'Feature 1: Earnings Calculator'}
          </Badge>
          <span className="caption" style={{ color: 'var(--colors-muted)' }}>
            100% Local Math • Real-time
          </span>
        </div>
        <h2 className="display-sm" style={{ marginBottom: '8px' }}>
          {lang === 'hi' ? 'वास्तविक शुद्ध कमाई एवं कटौती कैलकुलेटर' : 'True Net Take-Home & Deduction Tracker'}
        </h2>
        <p className="body-md">
          {lang === 'hi'
            ? 'प्लेटफॉर्म के सकल (Gross) आंकड़ों में पेट्रोल, वाहन मरम्मत और मनमानी कटौतियों का हिसाब लगाएं। जानें प्रति घंटे आपको वास्तव में कितना मिला।'
            : 'Uncover your actual net hourly wage after subtracting real fuel costs, bike servicing, and disputed platform deductions.'}
        </p>
      </div>

      {/* Quick Scenario Preset Chips */}
      <div>
        <div className="caption-uppercase" style={{ color: 'var(--colors-muted)', marginBottom: '8px' }}>
          {lang === 'hi' ? 'त्वरित कामगार प्रोफाइल चुनें:' : 'Load Sample Worker Scenarios:'}
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {workerProfiles.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => handleSelectProfile(p)}
              style={{
                border: '1px solid',
                borderColor: selectedProfile === p.id ? 'var(--colors-ink)' : 'var(--colors-hairline)',
                backgroundColor: selectedProfile === p.id ? 'var(--colors-surface-card)' : 'var(--colors-canvas)',
                color: 'var(--colors-ink)',
                borderRadius: 'var(--rounded-pill)',
                padding: '6px 14px',
                fontSize: '13px',
                fontWeight: selectedProfile === p.id ? 600 : 400,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {p.title}
            </button>
          ))}
          <button
            type="button"
            onClick={handleReset}
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              color: 'var(--colors-muted)',
              fontSize: '13px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer',
              marginLeft: '8px'
            }}
          >
            <RotateCcw size={13} /> {lang === 'hi' ? 'रीसेट' : 'Reset'}
          </button>
        </div>
      </div>

      {/* Severe Deduction Alert Banner (Connected Journey Trigger!) */}
      {breakdown.deductions > 0 && (
        <AlertBanner
          type={breakdown.hasSevereDeduction ? 'warning' : 'info'}
          title={
            lang === 'hi'
              ? `कटौती चेतावनी: ${formatRupee(breakdown.deductions)} की राशि काटी गई है`
              : `Disputed Deductions: ${formatRupee(breakdown.deductions)} withheld from payout`
          }
          action={
            <Button
              variant="primary"
              size="sm"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => {
                if (onDraftGrievance) {
                  onDraftGrievance({
                    amount: breakdown.deductions,
                    whatHappened: `My weekly settlement shows an unexpected deduction of ${formatRupee(breakdown.deductions)}. I request an itemized audit log explaining the deduction codes and the immediate reversal of any unjust penalties.`,
                    issueCategory: 'unexpected_deductions',
                    desiredOutcome: `Refund / release the withheld ${formatRupee(breakdown.deductions)} in the next payout cycle.`
                  })
                }
              }}
            >
              {lang === 'hi' ? 'शिकायत ड्राफ्ट करें' : 'Draft Grievance'}
            </Button>
          }
        >
          {lang === 'hi'
            ? 'यह कटौती आपकी कुल कमाई का ' + Math.round((breakdown.deductions / (breakdown.gross || 1)) * 100) + '% है। यदि यह अनुचित पेनल्टी है, तो औपचारिक शिकायत पत्र तुरंत बनाएं।'
            : `Deductions account for ${Math.round((breakdown.deductions / (breakdown.gross || 1)) * 100)}% of your gross earnings. You can auto-fill this exact amount into a formal dispute letter.`}
        </AlertBanner>
      )}

      {/* Main 2-Column Calculator Grid */}
      <div className="grid-2" style={{ alignItems: 'start' }}>
        {/* Left Col: Interactive Inputs */}
        <ContentCard>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h3 className="title-md">
              {lang === 'hi' ? '1. अपने आंकड़े दर्ज करें' : '1. Enter Weekly / Period Figures'}
            </h3>
            <span className="caption" style={{ color: 'var(--colors-muted)' }}>
              {lang === 'hi' ? 'भारतीय रुपया (₹)' : 'Indian Rupee (₹)'}
            </span>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="calc-gross">
              {lang === 'hi' ? 'सकल कमाई (Gross Earnings)' : 'Gross Platform Earnings (₹)'}
            </label>
            <input
              id="calc-gross"
              type="number"
              min="0"
              max="500000"
              className="text-input"
              value={inputs.grossEarnings}
              onChange={(e) => handleInputChange('grossEarnings', e.target.value)}
              placeholder="e.g. 7420"
            />
            <span className="form-hint">
              {lang === 'hi' ? 'ऐप में दिखाई गई कुल ट्रिप कमाई + इंसेंटिव' : 'Total trip earnings + bonus shown in app'}
            </span>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="calc-fuel">
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Fuel size={14} color="#f59e0b" />
                {lang === 'hi' ? 'पेट्रोल / ईंधन खर्च (Fuel Expense)' : 'Fuel / Charging Cost (₹)'}
              </span>
            </label>
            <input
              id="calc-fuel"
              type="number"
              min="0"
              className="text-input"
              value={inputs.fuelExpense}
              onChange={(e) => handleInputChange('fuelExpense', e.target.value)}
              placeholder="e.g. 1450"
            />
            <span className="form-hint">
              {lang === 'hi' ? 'हफ्ते भर का कुल पेट्रोल या चार्जिंग बिल' : 'Total petrol or EV recharge for the period'}
            </span>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="calc-other">
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Wrench size={14} color="#6a6a6a" />
                {lang === 'hi' ? 'अन्य खर्च (सर्विसिंग, मोबाइल डेटा)' : 'Other Operational Costs (₹)'}
              </span>
            </label>
            <input
              id="calc-other"
              type="number"
              min="0"
              className="text-input"
              value={inputs.otherExpenses}
              onChange={(e) => handleInputChange('otherExpenses', e.target.value)}
              placeholder="e.g. 520"
            />
            <span className="form-hint">
              {lang === 'hi' ? 'ऑयल चेंज, पंचर, मोबाइल रिचार्ज, टोल' : 'Oil change, mobile internet, puncture, parking'}
            </span>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="calc-deductions">
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ef4444' }}>
                <AlertTriangle size={14} />
                {lang === 'hi' ? 'प्लेटफॉर्म कटौती / पेनाल्टी (Deductions)' : 'Platform Deductions & Penalties (₹)'}
              </span>
            </label>
            <input
              id="calc-deductions"
              type="number"
              min="0"
              className="text-input"
              style={{ borderColor: inputs.deductions > 0 ? '#f87171' : undefined }}
              value={inputs.deductions}
              onChange={(e) => handleInputChange('deductions', e.target.value)}
              placeholder="e.g. 1850"
            />
            <span className="form-hint">
              {lang === 'hi' ? 'कैंसिलेशन जुर्माना, बैग सिक्योरिटी, टैक्स' : 'Cancellation fees, asset deposits, disputed cuts'}
            </span>
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" htmlFor="calc-hours">
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={14} />
                {lang === 'hi' ? 'कुल कार्य घंटे (Hours Online/Worked)' : 'Total Working / Online Hours'}
              </span>
            </label>
            <input
              id="calc-hours"
              type="number"
              min="1"
              max="168"
              className="text-input"
              value={inputs.hoursWorked}
              onChange={(e) => handleInputChange('hoursWorked', e.target.value)}
              placeholder="e.g. 48"
            />
            <span className="form-hint">
              {lang === 'hi' ? 'प्रति घंटा वास्तविक कमाई जानने के लिए' : 'Used to compute effective hourly rate'}
            </span>
          </div>
        </ContentCard>

        {/* Right Col: Pure Reactive Output Summary */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Net Take-Home Hero Card */}
          <FeatureCard color={breakdown.isLoss ? 'coral' : 'peach'}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
              <span className="caption-uppercase" style={{ opacity: 0.85 }}>
                {lang === 'hi' ? 'वास्तविक शुद्ध कमाई (Net Take-Home)' : 'Real Net Take-Home'}
              </span>
              <span className="badge-pill" style={{ backgroundColor: '#ffffff', color: '#0a0a0a' }}>
                {breakdown.takeHomePct}% {lang === 'hi' ? 'की बचत' : 'Retained'}
              </span>
            </div>

            <div style={{ fontSize: '38px', fontWeight: 700, letterSpacing: '-1px', margin: '4px 0 12px' }}>
              {formatRupee(breakdown.netEarnings)}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '12px' }}>
              <div>
                <div style={{ fontSize: '11px', opacity: 0.8 }}>
                  {lang === 'hi' ? 'प्रति घंटा शुद्ध दर' : 'Effective Hourly Pay'}
                </div>
                <div style={{ fontSize: '18px', fontWeight: 700 }}>
                  {formatRupee(breakdown.effectiveHourlyRate)} / hr
                </div>
              </div>

              <div>
                <div style={{ fontSize: '11px', opacity: 0.8 }}>
                  {lang === 'hi' ? 'कुल खर्च व कटौती' : 'Total Outflow'}
                </div>
                <div style={{ fontSize: '18px', fontWeight: 700 }}>
                  {formatRupee(breakdown.totalOutflow)}
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* Breakdown Items List */}
          <ContentCard>
            <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>
              {lang === 'hi' ? 'खर्चों का पारदर्शी विश्लेषण' : 'Transparent Outflow Breakdown'}
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: 'var(--colors-body)' }}>{lang === 'hi' ? 'सकल कमाई (Gross)' : 'Gross Earnings'}:</span>
                <span style={{ fontWeight: 600 }}>{formatRupee(breakdown.gross)}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: 'var(--colors-muted)' }}>
                  ⛽ {lang === 'hi' ? 'ईंधन / पेट्रोल खर्च' : 'Fuel / Charging'} ({breakdown.fuelExpensePct}%):
                </span>
                <span style={{ color: '#b45309', fontWeight: 600 }}>- {formatRupee(breakdown.fuel)}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: 'var(--colors-muted)' }}>
                  🔧 {lang === 'hi' ? 'सर्विसिंग एवं अन्य' : 'Maintenance & Tech'}:
                </span>
                <span style={{ color: '#6a6a6a', fontWeight: 600 }}>- {formatRupee(breakdown.other)}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', borderBottom: '1px dashed var(--colors-hairline)', paddingBottom: '8px' }}>
                <span style={{ color: 'var(--colors-muted)' }}>
                  ⚠️ {lang === 'hi' ? 'प्लेटफॉर्म पेनाल्टी / कटौती' : 'Platform Cuts / Fines'}:
                </span>
                <span style={{ color: '#ef4444', fontWeight: 600 }}>- {formatRupee(breakdown.deductions)}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px', fontWeight: 700, paddingTop: '4px' }}>
                <span>{lang === 'hi' ? 'शुद्ध बचत (Take-Home)' : 'Net Profit (Pocket)'}:</span>
                <span style={{ color: breakdown.isLoss ? '#ef4444' : '#15803d' }}>
                  {formatRupee(breakdown.netEarnings)}
                </span>
              </div>
            </div>
          </ContentCard>

          {/* Action Link for Dispute */}
          <div style={{ textAlign: 'center' }}>
            <button
              type="button"
              className="btn-text-link"
              onClick={() => {
                if (onDraftGrievance) {
                  onDraftGrievance({
                    amount: breakdown.deductions,
                    issueCategory: 'unexpected_deductions',
                    whatHappened: `Discrepancy in weekly payout. Gross earnings: ${formatRupee(breakdown.gross)}, Deductions applied: ${formatRupee(breakdown.deductions)}.`
                  })
                }
              }}
              style={{ fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <span>{lang === 'hi' ? 'क्या आपकी कटौती गलत है? शिकायत फॉर्म भरें' : 'Wrong deductions? Transfer figures to Complaint Drafter'}</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
