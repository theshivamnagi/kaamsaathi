import React, { useState } from 'react'
import { workerRightsData } from '../../data/rights'
import { useLanguage } from '../../hooks/useLanguage'
import { 
  ShieldCheck, 
  HelpCircle, 
  ArrowRight, 
  CheckCircle, 
  AlertCircle,
  FileText,
  ChevronRight,
  Search,
  Scale,
  Clock,
  PhoneCall,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
  Filter,
  Sparkles
} from 'lucide-react'

export function WorkerRightsExplorer({ onDraftGrievance }) {
  const { lang } = useLanguage()
  const [selectedIssueId, setSelectedIssueId] = useState(workerRightsData[0].id)
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')

  const filteredIssues = workerRightsData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.summary.toLowerCase().includes(searchQuery.toLowerCase())
    if (categoryFilter === 'all') return matchesSearch
    return matchesSearch && item.category.toLowerCase().includes(categoryFilter.toLowerCase())
  })

  const selectedIssue = workerRightsData.find(item => item.id === selectedIssueId) || workerRightsData[0]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      {/* 1. Header with Search & Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#0f172a', margin: '0 0 4px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>Worker Rights & Fair Pay Protections</span>
            <ShieldCheck size={26} color="#0d7e48" />
          </h1>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0 }}>
            Legal rights, statutory protections, and dispute solutions under the Code on Social Security 2020.
          </p>
        </div>

        {/* Search & Helpline */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
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
              placeholder="Search rights & disputes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: 'none',
                outline: 'none',
                fontSize: '13px',
                color: '#1e293b',
                width: '160px',
                backgroundColor: 'transparent'
              }}
            />
          </div>

          <a
            href="tel:14434"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#ecfdf5',
              border: '1px solid #bbf7d0',
              color: '#0d7e48',
              borderRadius: '9999px',
              padding: '7px 14px',
              fontSize: '12.5px',
              fontWeight: 700,
              textDecoration: 'none'
            }}
          >
            <PhoneCall size={14} />
            <span>National Helpline 14434</span>
          </a>
        </div>
      </div>

      {/* 2. Top 4 Metric KPI Cards (Unified SaaS Layout) */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', 
          gap: '16px' 
        }}
      >
        <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '20px', border: '1px solid #e2e8f0', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Scale size={18} color="#0d7e48" />
              </div>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#64748b' }}>Protected Rights</span>
            </div>
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
              <path d="M2 18 C 16 12, 28 20, 42 8 C 50 4, 56 10, 58 6" stroke="#0d7e48" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '26px', fontWeight: 800, color: '#0f172a' }}>6 Acts</div>
            <span style={{ backgroundColor: '#dcfce7', color: '#15803d', fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '9999px' }}>
              Social Security 2020
            </span>
          </div>
        </div>

        <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '20px', border: '1px solid #e2e8f0', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Clock size={18} color="#059669" />
              </div>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#64748b' }}>Statutory Turnaround</span>
            </div>
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
              <path d="M2 20 C 14 16, 26 8, 40 12 C 48 16, 54 4, 58 2" stroke="#059669" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '26px', fontWeight: 800, color: '#0f172a' }}>7 Days</div>
            <span style={{ backgroundColor: '#dcfce7', color: '#15803d', fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '9999px' }}>
              Mandatory Nodal SLA
            </span>
          </div>
        </div>

        <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '20px', border: '1px solid #e2e8f0', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CheckCircle2 size={18} color="#0d7e48" />
              </div>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#64748b' }}>Dispute Success Rate</span>
            </div>
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
              <path d="M2 18 C 16 14, 28 6, 42 10 C 50 14, 56 4, 58 2" stroke="#0d7e48" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '26px', fontWeight: 800, color: '#0f172a' }}>89.4%</div>
            <span style={{ backgroundColor: '#dcfce7', color: '#15803d', fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '9999px' }}>
              ▲ Reversal Rate
            </span>
          </div>
        </div>

        <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '20px', border: '1px solid #fee2e2', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#fef2f2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AlertTriangle size={18} color="#ef4444" />
              </div>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#b91c1c' }}>Deplatforming Protection</span>
            </div>
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
              <path d="M2 6 C 14 12, 26 8, 40 18 C 48 22, 54 16, 58 20" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '26px', fontWeight: 800, color: '#dc2626' }}>Zero Tolerance</div>
            <span style={{ backgroundColor: '#fee2e2', color: '#b91c1c', fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '9999px' }}>
              Notice Required
            </span>
          </div>
        </div>
      </div>

      {/* 3. Main 2-Column Content (Left: Problem Scenarios List, Right: Selected Right Solution) */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1.4fr)', 
          gap: '20px',
          alignItems: 'start'
        }}
      >
        {/* Left Column: Problem Scenarios List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
              Common Dispute Scenarios ({filteredIssues.length})
            </span>
          </div>

          {filteredIssues.map((item) => {
            const isSelected = selectedIssueId === item.id
            return (
              <div
                key={item.id}
                onClick={() => setSelectedIssueId(item.id)}
                style={{
                  padding: '18px 20px',
                  borderRadius: '16px',
                  border: isSelected ? '2px solid #0d7e48' : '1px solid #e2e8f0',
                  backgroundColor: isSelected ? '#f0fdf4' : '#ffffff',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  boxShadow: isSelected ? '0 4px 12px rgba(13, 126, 72, 0.12)' : '0 1px 3px rgba(0,0,0,0.02)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: isSelected ? '#0d7e48' : '#64748b', textTransform: 'uppercase' }}>
                    {item.category}
                  </span>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: '9999px',
                      backgroundColor: isSelected ? '#dcfce7' : '#f1f5f9',
                      color: isSelected ? '#15803d' : '#475569'
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <div style={{ fontWeight: 700, fontSize: '15px', color: '#0f172a', marginBottom: '6px' }}>
                  {item.title}
                </div>

                <p style={{ margin: 0, fontSize: '13px', color: '#475569', lineHeight: 1.5 }}>
                  {item.summary}
                </p>
              </div>
            )
          })}
        </div>

        {/* Right Column: Selected Issue Resolution Detail Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '28px',
              border: '1.5px solid #86efac',
              boxShadow: '0 8px 24px rgba(13, 126, 72, 0.08)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#ecfdf5',
                  color: '#0d7e48',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  fontWeight: 700
                }}
              >
                <ShieldCheck size={14} />
                {selectedIssue.category} • Statutory Right
              </span>

              <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>
                Case ID: #{selectedIssue.id.toUpperCase()}
              </span>
            </div>

            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
              {selectedIssue.title}
            </h3>

            <p style={{ fontSize: '14px', color: '#334155', lineHeight: 1.6, marginBottom: '22px' }}>
              {selectedIssue.summary}
            </p>

            {/* Resolution Steps Box */}
            <div
              style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                padding: '20px',
                marginBottom: '22px'
              }}
            >
              <h4 style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.6px', color: '#0f172a', margin: '0 0 14px 0' }}>
                {lang === 'hi' ? 'समाधान के अनिवार्य कदम (Mandatory Steps):' : 'Recommended Resolution Steps:'}
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {selectedIssue.steps.map((step, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#1e293b' }}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: '#dcfce7',
                        color: '#15803d',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '11px',
                        fontWeight: 800,
                        flexShrink: 0,
                        marginTop: '2px'
                      }}
                    >
                      {idx + 1}
                    </div>
                    <span style={{ lineHeight: 1.5 }}>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button: 1-Click Grievance Drafter */}
            <button
              type="button"
              onClick={() => {
                if (onDraftGrievance) {
                  onDraftGrievance({
                    issueCategory: selectedIssue.scenarioKey,
                    amount: selectedIssue.defaultAmount,
                    whatHappened: `Dispute regarding: ${selectedIssue.title}. Summary: ${selectedIssue.summary}`,
                    desiredOutcome: 'Formal audit and immediate resolution per platform partner policies and Code on Social Security 2020.'
                  })
                }
              }}
              style={{
                width: '100%',
                backgroundColor: '#0d7e48',
                color: '#ffffff',
                border: 'none',
                borderRadius: '12px',
                padding: '14px 20px',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(13, 126, 72, 0.25)',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0a6439')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0d7e48')}
            >
              <FileText size={16} />
              <span>{lang === 'hi' ? 'इस समस्या के लिए शिकायत पत्र ड्राफ्ट करें' : selectedIssue.recommendedActionText}</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Legal Advisory Footer Notice */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '14px',
              padding: '16px 20px',
              border: '1px solid #e2e8f0',
              display: 'flex',
              gap: '12px',
              alignItems: 'center'
            }}
          >
            <AlertCircle size={20} color="#0d7e48" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.45 }}>
              <strong>KaamSaathi Legal Assurance:</strong> {selectedIssue.disclaimer} All drafts comply with the official Ministry of Labour & Employment guidelines.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
