import React, { useState } from 'react'
import { calculateEarningsBreakdown, formatRupee } from '../../utils/calculations'
import { 
  defaultEarningsData, 
  sixMonthEarnings, 
  incomeBySource, 
  recentPayoutTransactions, 
  workerProfiles, 
  weeklyDayLogs 
} from '../../data/earnings'
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
  Search,
  Calendar,
  Download,
  DollarSign,
  Briefcase,
  Layers,
  ArrowUpRight,
  ArrowDownRight,
  ChevronDown,
  Award,
  FileText,
  Filter,
  CheckCircle,
  HelpCircle,
  Info
} from 'lucide-react'

export function EarningsCalculator({ onDraftGrievance }) {
  const { lang } = useLanguage()

  // View mode: 'analytics' (Reference UI) | 'calculator' (Net Wage Simulator)
  const [activeSubTab, setActiveSubTab] = useState('analytics')

  // Search & Filters for Transactions
  const [searchQuery, setSearchQuery] = useState('')
  const [transactionFilter, setTransactionFilter] = useState('all') // 'all' | 'paid' | 'disputed'
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(3) // Default to Jul 2026 peak in chart

  // Calculator inputs state
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
    setInputs(prev => ({ ...prev, [field]: value }))
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

  const handleResetCalculator = () => {
    setInputs({
      grossEarnings: defaultEarningsData.grossEarnings,
      fuelExpense: defaultEarningsData.fuelExpense,
      otherExpenses: defaultEarningsData.otherExpenses,
      deductions: defaultEarningsData.deductions,
      hoursWorked: defaultEarningsData.hoursWorked
    })
    setSelectedProfile('bike_delivery')
  }

  // Filtered transactions
  const filteredTransactions = recentPayoutTransactions.filter(item => {
    const matchesSearch = item.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.type.toLowerCase().includes(searchQuery.toLowerCase())
    if (transactionFilter === 'paid') return matchesSearch && item.status === 'Paid'
    if (transactionFilter === 'disputed') return matchesSearch && item.status === 'Disputed'
    return matchesSearch
  })

  // SVG Chart Dimensions & Calculations
  const chartWidth = 560
  const chartHeight = 200
  const chartPadding = { top: 30, right: 20, bottom: 35, left: 45 }
  const maxAmount = 30000

  // Points mapped to SVG coordinates
  const chartPoints = sixMonthEarnings.map((item, idx) => {
    const x = chartPadding.left + (idx * ((chartWidth - chartPadding.left - chartPadding.right) / (sixMonthEarnings.length - 1)))
    const y = chartHeight - chartPadding.bottom - ((item.amount / maxAmount) * (chartHeight - chartPadding.top - chartPadding.bottom))
    return { x, y, ...item, idx }
  })

  // Generate smooth SVG curve path
  const curvePath = chartPoints.reduce((acc, point, i, arr) => {
    if (i === 0) return `M ${point.x} ${point.y}`
    const prev = arr[i - 1]
    const cp1x = prev.x + (point.x - prev.x) / 2
    const cp1y = prev.y
    const cp2x = prev.x + (point.x - prev.x) / 2
    const cp2y = point.y
    return `${acc} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${point.x} ${point.y}`
  }, '')

  const areaPath = `${curvePath} L ${chartPoints[chartPoints.length - 1].x} ${chartHeight - chartPadding.bottom} L ${chartPoints[0].x} ${chartHeight - chartPadding.bottom} Z`

  // Goal calculation
  const goalTarget = defaultEarningsData.targetGoal || 25000
  const goalCurrent = defaultEarningsData.currentProgress || 21320
  const goalPercentage = Math.round((goalCurrent / goalTarget) * 100)
  const goalRemaining = goalTarget - goalCurrent

  // SVG Gauge calculations
  const gaugeRadius = 45
  const gaugeCircumference = 2 * Math.PI * gaugeRadius
  const gaugeOffset = gaugeCircumference - (goalPercentage / 100) * gaugeCircumference

  // Donut chart calculations
  const donutRadius = 50
  const donutCircumference = 2 * Math.PI * donutRadius
  let accumulatedPercent = 0

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      {/* =========================================================================
          1. HEADER AREA (Matching Reference: Greeting, Subtitle, Search, Date Range)
         ========================================================================= */}
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '16px' 
        }}
      >
        <div>
          <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#0f172a', margin: '0 0 4px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>Good morning, Ramesh</span>
            <span role="img" aria-label="wave">👋</span>
          </h1>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0 }}>
            Here's how your earnings & gig performance look today across all delivery fleets.
          </p>
        </div>

        {/* Right side controls: Search, Date Filter, Mode Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {/* Search Input */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '9999px',
              padding: '7px 14px',
              boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
            }}
          >
            <Search size={15} color="#94a3b8" />
            <input
              type="text"
              placeholder="Search payouts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: 'none',
                outline: 'none',
                fontSize: '13px',
                color: '#1e293b',
                width: '130px',
                backgroundColor: 'transparent'
              }}
            />
          </div>

          {/* Date Range Selector Pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '9999px',
              padding: '7px 14px',
              fontSize: '12.5px',
              fontWeight: 600,
              color: '#334155',
              boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
              cursor: 'pointer'
            }}
          >
            <Calendar size={14} color="#0d7e48" />
            <span>Apr 1, 2026 - Apr 30, 2026</span>
            <ChevronDown size={13} color="#94a3b8" />
          </div>

          {/* Sub-tab view toggle (Analytics vs Wage Calculator) */}
          <div
            style={{
              display: 'flex',
              backgroundColor: '#f1f5f9',
              padding: '3px',
              borderRadius: '9999px',
              border: '1px solid #e2e8f0'
            }}
          >
            <button
              type="button"
              onClick={() => setActiveSubTab('analytics')}
              style={{
                backgroundColor: activeSubTab === 'analytics' ? '#ffffff' : 'transparent',
                color: activeSubTab === 'analytics' ? '#0d7e48' : '#64748b',
                fontWeight: activeSubTab === 'analytics' ? 700 : 500,
                fontSize: '12px',
                border: 'none',
                borderRadius: '9999px',
                padding: '6px 14px',
                cursor: 'pointer',
                boxShadow: activeSubTab === 'analytics' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                transition: 'all 0.15s ease'
              }}
            >
              📊 Analytics Overview
            </button>
            <button
              type="button"
              onClick={() => setActiveSubTab('calculator')}
              style={{
                backgroundColor: activeSubTab === 'calculator' ? '#ffffff' : 'transparent',
                color: activeSubTab === 'calculator' ? '#0d7e48' : '#64748b',
                fontWeight: activeSubTab === 'calculator' ? 700 : 500,
                fontSize: '12px',
                border: 'none',
                borderRadius: '9999px',
                padding: '6px 14px',
                cursor: 'pointer',
                boxShadow: activeSubTab === 'calculator' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                transition: 'all 0.15s ease'
              }}
            >
              🧮 Wage & Fuel Simulator
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. TOP 4 METRIC CARDS (Exact match to reference layout with green accent)
         ========================================================================= */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', 
          gap: '16px' 
        }}
      >
        {/* Card 1: Total Earnings */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '20px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: '#ecfdf5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span style={{ fontSize: '15px', fontWeight: 800, color: '#0d7e48' }}>₹</span>
              </div>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#64748b' }}>Total Earnings</span>
            </div>

            {/* Sparkline curve */}
            <svg width="68" height="26" viewBox="0 0 68 26" fill="none">
              <path d="M2 22 C 16 18, 28 8, 42 14 C 54 20, 60 4, 66 3" stroke="#0d7e48" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '26px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px' }}>
              ₹24,860
            </div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '3px',
                backgroundColor: '#dcfce7',
                color: '#15803d',
                fontSize: '11px',
                fontWeight: 700,
                padding: '3px 8px',
                borderRadius: '9999px'
              }}
            >
              <ArrowUpRight size={12} />
              <span>18.2% vs last month</span>
            </div>
          </div>
        </div>

        {/* Card 2: This Week */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '20px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: '#f0fdf4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Calendar size={18} color="#059669" />
              </div>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#64748b' }}>This Week</span>
            </div>

            {/* Sparkline curve */}
            <svg width="68" height="26" viewBox="0 0 68 26" fill="none">
              <path d="M2 18 C 18 12, 30 20, 44 10 C 54 4, 60 12, 66 6" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '26px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px' }}>
              ₹4,320
            </div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '3px',
                backgroundColor: '#dcfce7',
                color: '#15803d',
                fontSize: '11px',
                fontWeight: 700,
                padding: '3px 8px',
                borderRadius: '9999px'
              }}
            >
              <ArrowUpRight size={12} />
              <span>12.4% vs last week</span>
            </div>
          </div>
        </div>

        {/* Card 3: Pending / Disputed Payouts */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '20px',
            border: '1px solid #fee2e2',
            boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: '#fef2f2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <AlertTriangle size={18} color="#ef4444" />
              </div>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#b91c1c' }}>Pending / Flagged</span>
            </div>

            {/* Sparkline curve in red */}
            <svg width="68" height="26" viewBox="0 0 68 26" fill="none">
              <path d="M2 6 C 14 14, 26 8, 38 18 C 50 24, 58 16, 66 22" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '26px', fontWeight: 800, color: '#dc2626', letterSpacing: '-0.5px' }}>
              ₹1,150
            </div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '3px',
                backgroundColor: '#fee2e2',
                color: '#b91c1c',
                fontSize: '11px',
                fontWeight: 700,
                padding: '3px 8px',
                borderRadius: '9999px'
              }}
            >
              <ArrowDownRight size={12} />
              <span>-8.3% under review</span>
            </div>
          </div>
        </div>

        {/* Card 4: Active Deliveries */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '20px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: '#ecfdf5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <CheckCircle size={18} color="#0d7e48" />
              </div>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#64748b' }}>Active Services</span>
            </div>

            {/* Sparkline curve */}
            <svg width="68" height="26" viewBox="0 0 68 26" fill="none">
              <path d="M2 20 C 18 16, 30 6, 44 12 C 54 18, 60 4, 66 2" stroke="#0d7e48" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '26px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px' }}>
              7
            </div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '3px',
                backgroundColor: '#dcfce7',
                color: '#15803d',
                fontSize: '11px',
                fontWeight: 700,
                padding: '3px 8px',
                borderRadius: '9999px'
              }}
            >
              <ArrowUpRight size={12} />
              <span>15.8% vs last month</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          IF USER TOGGLED CALCULATOR SIMULATOR TAB
         ========================================================================= */}
      {activeSubTab === 'calculator' && (
        <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: '0 0 4px 0' }}>
                {lang === 'hi' ? 'वास्तविक शुद्ध कमाई एवं पेट्रोल खर्च कैलकुलेटर' : 'True Net Hourly Take-Home Simulator'}
              </h3>
              <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
                Calculate real hourly wage after subtracting fuel costs, bike maintenance, and disputed platform deductions.
              </p>
            </div>

            {/* Worker Scenarios */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {workerProfiles.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handleSelectProfile(p)}
                  style={{
                    backgroundColor: selectedProfile === p.id ? '#ecfdf5' : '#f8fafc',
                    border: selectedProfile === p.id ? '1.5px solid #0d7e48' : '1px solid #e2e8f0',
                    color: selectedProfile === p.id ? '#0d7e48' : '#334155',
                    borderRadius: '8px',
                    padding: '6px 12px',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>

          {/* Calculator Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {/* Inputs Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                  Gross App Payout (कुल सकल कमाई):
                </label>
                <input
                  type="number"
                  value={inputs.grossEarnings}
                  onChange={(e) => handleInputChange('grossEarnings', e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', fontWeight: 700 }}
                />
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                  Fuel / Petrol Expense (पेट्रोल खर्च):
                </label>
                <input
                  type="number"
                  value={inputs.fuelExpense}
                  onChange={(e) => handleInputChange('fuelExpense', e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', fontWeight: 700 }}
                />
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                  Maintenance & Data (मरम्मत व मोबाइल डाटा):
                </label>
                <input
                  type="number"
                  value={inputs.otherExpenses}
                  onChange={(e) => handleInputChange('otherExpenses', e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', fontWeight: 700 }}
                />
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#b91c1c', display: 'block', marginBottom: '4px' }}>
                  Disputed Platform Deductions (मनमानी कटौतियां):
                </label>
                <input
                  type="number"
                  value={inputs.deductions}
                  onChange={(e) => handleInputChange('deductions', e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #fca5a5', backgroundColor: '#fff5f5', fontSize: '14px', fontWeight: 700, color: '#dc2626' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                  Hours Worked (कार्य के कुल घंटे):
                </label>
                <input
                  type="number"
                  value={inputs.hoursWorked}
                  onChange={(e) => handleInputChange('hoursWorked', e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', fontWeight: 700 }}
                />
              </div>
            </div>

            {/* Live Results Card */}
            <div style={{ backgroundColor: '#f0fdf4', border: '1.5px solid #86efac', borderRadius: '16px', padding: '22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '11px', color: '#0d7e48', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '6px' }}>
                  Live Math Calculation
                </div>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#064e3b', marginBottom: '14px' }}>
                  {formatRupee(breakdown.netEarnings)}
                  <span style={{ fontSize: '13px', color: '#166534', fontWeight: 600, marginLeft: '6px' }}>Net Take-Home</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#334155' }}>
                    <span>Gross Payout:</span>
                    <strong>{formatRupee(inputs.grossEarnings)}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#dc2626' }}>
                    <span>Total Fuel & Servicing:</span>
                    <strong>-{formatRupee(breakdown.totalExpenses)}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#b91c1c' }}>
                    <span>Disputed Deductions:</span>
                    <strong>-{formatRupee(inputs.deductions)}</strong>
                  </div>
                  <div style={{ borderTop: '1px solid #bbf7d0', paddingTop: '8px', display: 'flex', justifyContent: 'space-between', color: '#0d7e48', fontSize: '15px' }}>
                    <span>Effective Hourly Rate:</span>
                    <strong>{formatRupee(breakdown.hourlyNetRate)} / hr</strong>
                  </div>
                </div>
              </div>

              {inputs.deductions > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    if (onDraftGrievance) {
                      onDraftGrievance({
                        company: 'Zomato / Swiggy / Platform',
                        amount: inputs.deductions,
                        whatHappened: `Unexplained platform deduction of ₹${inputs.deductions} applied on recent earnings settlement.`,
                        desiredOutcome: 'Full refund and waiver of disputed deductions.'
                      })
                    }
                  }}
                  style={{
                    marginTop: '20px',
                    backgroundColor: '#0d7e48',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '12px 18px',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <FileText size={16} />
                  <span>Draft Dispute for ₹{inputs.deductions} Deductions</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          3. MIDDLE SECTION (2 Columns: Earnings Overview Chart & Income by Source)
         ========================================================================= */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'minmax(0, 1.75fr) minmax(0, 1fr)', 
          gap: '20px',
          alignItems: 'stretch'
        }}
      >
        {/* Left: Earnings Overview (Curved Area Chart matching screenshot) */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            padding: '24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          {/* Chart Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: '0 0 4px 0' }}>
                Earnings Overview
              </h3>
              <p style={{ fontSize: '12.5px', color: '#64748b', margin: 0 }}>
                Your earnings over the past 6 months
              </p>
            </div>

            {/* Time period chips */}
            <div style={{ display: 'flex', gap: '4px', backgroundColor: '#f8fafc', padding: '3px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              {['1M', '3M', '6M', '1Y'].map((range, idx) => (
                <button
                  key={idx}
                  type="button"
                  style={{
                    backgroundColor: range === '6M' ? '#ffffff' : 'transparent',
                    color: range === '6M' ? '#0d7e48' : '#64748b',
                    fontWeight: range === '6M' ? 700 : 500,
                    border: 'none',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    fontSize: '11px',
                    cursor: 'pointer',
                    boxShadow: range === '6M' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none'
                  }}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* SVG Area Line Chart */}
          <div style={{ width: '100%', position: 'relative', overflowX: 'auto' }}>
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            >
              <defs>
                {/* Emerald Green Area Gradient */}
                <linearGradient id="emeraldGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0d7e48" stopOpacity="0.25" />
                  <stop offset="80%" stopColor="#0d7e48" stopOpacity="0.02" />
                  <stop offset="100%" stopColor="#0d7e48" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Horizontal Grid Lines */}
              {[25000, 20000, 15000, 10000, 5000, 0].map((val, idx) => {
                const y = chartHeight - chartPadding.bottom - ((val / maxAmount) * (chartHeight - chartPadding.top - chartPadding.bottom))
                return (
                  <g key={idx}>
                    <line
                      x1={chartPadding.left}
                      y1={y}
                      x2={chartWidth - chartPadding.right}
                      y2={y}
                      stroke="#f1f5f9"
                      strokeWidth="1"
                      strokeDasharray={val === 0 ? 'none' : '3 3'}
                    />
                    <text
                      x={chartPadding.left - 8}
                      y={y + 3}
                      fill="#94a3b8"
                      fontSize="9.5"
                      fontWeight="500"
                      textAnchor="end"
                    >
                      {val === 0 ? '$0' : `₹${val / 1000}k`}
                    </text>
                  </g>
                )
              })}

              {/* Area Under Curve */}
              <path d={areaPath} fill="url(#emeraldGradient)" />

              {/* Smooth Curve Stroke */}
              <path
                d={curvePath}
                fill="none"
                stroke="#0d7e48"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Data Points and X-Axis Labels */}
              {chartPoints.map((p, idx) => {
                const isSelected = selectedMonthIndex === idx
                return (
                  <g 
                    key={idx}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setSelectedMonthIndex(idx)}
                  >
                    {/* X-axis Month Label */}
                    <text
                      x={p.x}
                      y={chartHeight - 10}
                      fill={isSelected ? '#0d7e48' : '#64748b'}
                      fontSize="10"
                      fontWeight={isSelected ? '700' : '500'}
                      textAnchor="middle"
                    >
                      {p.shortMonth} 2026
                    </text>

                    {/* Outer glow ring for selected point */}
                    {isSelected && (
                      <circle
                        cx={p.x}
                        cy={p.y}
                        r="8"
                        fill="#ecfdf5"
                        stroke="#0d7e48"
                        strokeWidth="1.5"
                      />
                    )}

                    {/* Point Dot */}
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r={isSelected ? '4.5' : '3.5'}
                      fill={isSelected ? '#0d7e48' : '#ffffff'}
                      stroke="#0d7e48"
                      strokeWidth="2"
                    />
                  </g>
                )
              })}

              {/* Floating Tooltip Pill on the Selected Peak Point (Matching screenshot style) */}
              {chartPoints[selectedMonthIndex] && (
                <g transform={`translate(${chartPoints[selectedMonthIndex].x}, ${chartPoints[selectedMonthIndex].y - 38})`}>
                  {/* Tooltip Background */}
                  <rect
                    x="-34"
                    y="0"
                    width="68"
                    height="28"
                    rx="6"
                    fill="#0f172a"
                    filter="drop-shadow(0 2px 5px rgba(0,0,0,0.25))"
                  />
                  {/* Text value */}
                  <text
                    x="0"
                    y="18"
                    fill="#ffffff"
                    fontSize="11"
                    fontWeight="800"
                    textAnchor="middle"
                  >
                    ₹{chartPoints[selectedMonthIndex].amount.toLocaleString('en-IN')}
                  </text>
                  {/* Little bottom arrow pointer */}
                  <polygon
                    points="0,34 -4,28 4,28"
                    fill="#0f172a"
                  />
                </g>
              )}
            </svg>
          </div>
        </div>

        {/* Right: Income by Source (Donut Chart matching screenshot) */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            padding: '24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: '0 0 4px 0' }}>
              Income by Source
            </h3>
            <p style={{ fontSize: '12.5px', color: '#64748b', margin: '0 0 16px 0' }}>
              Breakdown of your gig earnings
            </p>

            {/* Circular Donut & Legend Container */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: '16px', flexWrap: 'wrap' }}>
              {/* Donut SVG */}
              <div style={{ position: 'relative', width: '130px', height: '130px', flexShrink: 0 }}>
                <svg width="130" height="130" viewBox="0 0 130 130">
                  <g transform="rotate(-90 65 65)">
                    {incomeBySource.map((seg, idx) => {
                      const strokeDash = (seg.percentage / 100) * donutCircumference
                      const strokeOffset = -((accumulatedPercent / 100) * donutCircumference)
                      accumulatedPercent += seg.percentage

                      return (
                        <circle
                          key={idx}
                          cx="65"
                          cy="65"
                          r={donutRadius}
                          fill="none"
                          stroke={seg.color}
                          strokeWidth="20"
                          strokeDasharray={`${strokeDash} ${donutCircumference}`}
                          strokeDashoffset={strokeOffset}
                        />
                      )
                    })}
                  </g>
                </svg>

                {/* Center text in Donut */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                  }}
                >
                  <span style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a' }}>
                    ₹24,860
                  </span>
                  <span style={{ fontSize: '9px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
                    Total Earnings
                  </span>
                </div>
              </div>

              {/* Legend List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1, minWidth: '130px' }}>
                {incomeBySource.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: item.color }} />
                      <span style={{ color: '#334155', fontWeight: 600 }}>{item.name}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <strong style={{ color: '#0f172a' }}>₹{item.amount.toLocaleString('en-IN')}</strong>
                      <span style={{ fontSize: '10px', color: item.trend.startsWith('+') ? '#16a34a' : '#dc2626' }}>
                        {item.trend}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          4. BOTTOM SECTION (2 Columns: Recent Transactions Table & Goal Progress)
         ========================================================================= */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'minmax(0, 1.75fr) minmax(0, 1fr)', 
          gap: '20px',
          alignItems: 'stretch'
        }}
      >
        {/* Left: Recent Transactions Table */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            padding: '24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: '0 0 4px 0' }}>
                  Recent Transactions
                </h3>
                <p style={{ fontSize: '12.5px', color: '#64748b', margin: 0 }}>
                  Latest payouts & ride activity
                </p>
              </div>

              {/* Status filter tabs */}
              <div style={{ display: 'flex', gap: '4px', backgroundColor: '#f8fafc', padding: '3px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                {[
                  { key: 'all', label: 'All' },
                  { key: 'paid', label: 'Paid' },
                  { key: 'disputed', label: 'Disputed' }
                ].map((f) => (
                  <button
                    key={f.key}
                    type="button"
                    onClick={() => setTransactionFilter(f.key)}
                    style={{
                      backgroundColor: transactionFilter === f.key ? '#ffffff' : 'transparent',
                      color: transactionFilter === f.key ? '#0d7e48' : '#64748b',
                      fontWeight: transactionFilter === f.key ? 700 : 500,
                      border: 'none',
                      borderRadius: '6px',
                      padding: '4px 10px',
                      fontSize: '11px',
                      cursor: 'pointer',
                      boxShadow: transactionFilter === f.key ? '0 1px 2px rgba(0,0,0,0.05)' : 'none'
                    }}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Table */}
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <th style={{ padding: '8px 12px 10px 4px', fontSize: '11px', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase' }}>Source / Fleet</th>
                    <th style={{ padding: '8px 12px 10px 12px', fontSize: '11px', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase' }}>Type</th>
                    <th style={{ padding: '8px 12px 10px 12px', fontSize: '11px', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase' }}>Amount</th>
                    <th style={{ padding: '8px 12px 10px 12px', fontSize: '11px', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase' }}>Status</th>
                    <th style={{ padding: '8px 4px 10px 12px', fontSize: '11px', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', textAlign: 'right' }}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.map((tx) => (
                    <tr
                      key={tx.id}
                      style={{
                        borderBottom: '1px solid #f8fafc',
                        backgroundColor: tx.isDisputed ? '#fffbfa' : 'transparent',
                        transition: 'background-color 0.15s ease'
                      }}
                    >
                      {/* Source */}
                      <td style={{ padding: '12px 12px 12px 4px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '8px',
                              backgroundColor: tx.iconBg,
                              color: '#ffffff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: 800,
                              fontSize: '13px',
                              flexShrink: 0
                            }}
                          >
                            {tx.iconLetter}
                          </div>
                          <div>
                            <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>{tx.source}</div>
                            <div style={{ fontSize: '11px', color: '#64748b' }}>{tx.category}</div>
                          </div>
                        </div>
                      </td>

                      {/* Type Pill */}
                      <td style={{ padding: '12px' }}>
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 600,
                            padding: '3px 8px',
                            borderRadius: '6px',
                            backgroundColor: tx.typeColor,
                            color: tx.typeTextColor
                          }}
                        >
                          {tx.type}
                        </span>
                      </td>

                      {/* Amount */}
                      <td style={{ padding: '12px' }}>
                        <span style={{ fontSize: '13.5px', fontWeight: 800, color: tx.amount < 0 ? '#dc2626' : '#0f172a' }}>
                          {tx.amount < 0 ? `-₹${Math.abs(tx.amount).toLocaleString('en-IN')}` : `₹${tx.amount.toLocaleString('en-IN')}`}
                        </span>
                      </td>

                      {/* Status */}
                      <td style={{ padding: '12px' }}>
                        {tx.isDisputed ? (
                          <button
                            type="button"
                            onClick={() => {
                              if (onDraftGrievance) {
                                onDraftGrievance({
                                  company: 'Zomato',
                                  amount: 1850,
                                  whatHappened: 'Zomato Cycle #41 had an unexplained deduction of ₹1,850 without itemized justification.',
                                  desiredOutcome: 'Full refund and reinstatement to bank settlement.'
                                })
                              }
                            }}
                            style={{
                              border: '1px solid #fca5a5',
                              backgroundColor: '#fee2e2',
                              color: '#b91c1c',
                              fontSize: '11px',
                              fontWeight: 700,
                              padding: '3px 8px',
                              borderRadius: '6px',
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px'
                            }}
                          >
                            <span>Dispute</span>
                            <ArrowRight size={10} />
                          </button>
                        ) : (
                          <span
                            style={{
                              fontSize: '11px',
                              fontWeight: 700,
                              padding: '3px 8px',
                              borderRadius: '6px',
                              backgroundColor: tx.statusColor,
                              color: tx.statusTextColor
                            }}
                          >
                            {tx.status}
                          </span>
                        )}
                      </td>

                      {/* Date */}
                      <td style={{ padding: '12px 4px 12px 12px', fontSize: '12px', color: '#64748b', textAlign: 'right' }}>
                        {tx.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right: Goal Progress (Radial Gauge matching reference screenshot) */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            padding: '24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: '0 0 4px 0' }}>
              Goal Progress
            </h3>
            <p style={{ fontSize: '12.5px', color: '#64748b', margin: '0 0 20px 0' }}>
              Monthly earning goal
            </p>

            {/* Radial Gauge & Progress Stats */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
              {/* Radial Progress Ring */}
              <div style={{ position: 'relative', width: '110px', height: '110px', flexShrink: 0 }}>
                <svg width="110" height="110" viewBox="0 0 110 110">
                  <circle
                    cx="55"
                    cy="55"
                    r={gaugeRadius}
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="10"
                  />
                  <circle
                    cx="55"
                    cy="55"
                    r={gaugeRadius}
                    fill="none"
                    stroke="#0d7e48"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={gaugeCircumference}
                    strokeDashoffset={gaugeOffset}
                    transform="rotate(-90 55 55)"
                  />
                </svg>

                {/* Center Content */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                  }}
                >
                  <span style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>
                    ₹4,320
                  </span>
                  <span style={{ fontSize: '9px', color: '#94a3b8' }}>
                    of ₹5,000 wk
                  </span>
                </div>
              </div>

              {/* Progress Percentage & Remaining */}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>
                  {goalPercentage}%
                </div>
                <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginTop: '2px' }}>
                  Completed
                </div>
                <div style={{ fontSize: '12px', color: '#0d7e48', fontWeight: 600, marginTop: '8px' }}>
                  🎯 ₹{goalRemaining.toLocaleString('en-IN')} remaining
                </div>
              </div>
            </div>
          </div>

          {/* Bottom On-Track Banner (Matching reference image style) */}
          <div
            style={{
              backgroundColor: '#ecfdf5',
              border: '1px solid #bbf7d0',
              borderRadius: '12px',
              padding: '12px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginTop: '16px'
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: '#dcfce7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Award size={18} color="#0d7e48" />
            </div>
            <div>
              <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#064e3b' }}>
                On track target!
              </div>
              <div style={{ fontSize: '11px', color: '#166534' }}>
                You're earning 14% faster than last month. 4 days left.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
