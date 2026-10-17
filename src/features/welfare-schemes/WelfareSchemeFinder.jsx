import React, { useState } from 'react'
import { welfareSchemesData } from '../../data/schemes'
import { useLanguage } from '../../hooks/useLanguage'
import { 
  HeartHandshake, 
  FileText, 
  CheckSquare, 
  Users, 
  Sparkles, 
  Info,
  CheckCircle2,
  Filter,
  Search,
  ShieldPlus,
  Landmark,
  BadgeCheck,
  ArrowRight,
  ExternalLink
} from 'lucide-react'

export function WelfareSchemeFinder() {
  const { lang } = useLanguage()
  const [selectedSchemeId, setSelectedSchemeId] = useState(welfareSchemesData[0].id)
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')

  const filteredSchemes = welfareSchemesData.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.benefitSummary.toLowerCase().includes(searchQuery.toLowerCase())
    if (categoryFilter === 'all') return matchesSearch
    return matchesSearch && s.category.toLowerCase().includes(categoryFilter.toLowerCase())
  })

  const selectedScheme = welfareSchemesData.find(s => s.id === selectedSchemeId) || welfareSchemesData[0]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      {/* 1. Header with Search & Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#0f172a', margin: '0 0 4px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>Government & Welfare Aid Schemes</span>
            <HeartHandshake size={26} color="#0d7e48" />
          </h1>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0 }}>
            Central and State social security programs, accident insurance, and healthcare grants for gig workers.
          </p>
        </div>

        {/* Search */}
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
              placeholder="Search schemes & grants..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: 'none',
                outline: 'none',
                fontSize: '13px',
                color: '#1e293b',
                width: '180px',
                backgroundColor: 'transparent'
              }}
            />
          </div>

          <div
            style={{
              backgroundColor: '#ecfdf5',
              border: '1px solid #bbf7d0',
              borderRadius: '9999px',
              padding: '7px 14px',
              fontSize: '12.5px',
              fontWeight: 700,
              color: '#0d7e48',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <BadgeCheck size={14} />
            <span>e-Shram Linked</span>
          </div>
        </div>
      </div>

      {/* 2. Top 4 Metric KPI Cards (Matching unified SaaS style) */}
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
                <Landmark size={18} color="#0d7e48" />
              </div>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#64748b' }}>Welfare Schemes</span>
            </div>
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
              <path d="M2 18 C 16 14, 28 8, 42 12 C 50 16, 56 6, 58 4" stroke="#0d7e48" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '26px', fontWeight: 800, color: '#0f172a' }}>8 Programs</div>
            <span style={{ backgroundColor: '#dcfce7', color: '#15803d', fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '9999px' }}>
              Active
            </span>
          </div>
        </div>

        <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '20px', border: '1px solid #e2e8f0', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldPlus size={18} color="#059669" />
              </div>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#64748b' }}>Max Hospital Cover</span>
            </div>
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
              <path d="M2 20 C 14 16, 26 6, 40 10 C 48 14, 54 4, 58 2" stroke="#059669" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '26px', fontWeight: 800, color: '#0f172a' }}>₹5,00,000</div>
            <span style={{ backgroundColor: '#dcfce7', color: '#15803d', fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '9999px' }}>
              PM-JAY Cashless
            </span>
          </div>
        </div>

        <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '20px', border: '1px solid #e2e8f0', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BadgeCheck size={18} color="#0d7e48" />
              </div>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#64748b' }}>Enrollment Cost</span>
            </div>
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
              <path d="M2 16 C 16 12, 28 20, 42 6 C 50 2, 56 8, 58 4" stroke="#0d7e48" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '26px', fontWeight: 800, color: '#0f172a' }}>100% Free</div>
            <span style={{ backgroundColor: '#dcfce7', color: '#15803d', fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '9999px' }}>
              Zero Fees
            </span>
          </div>
        </div>

        <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '20px', border: '1px solid #e2e8f0', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users size={18} color="#059669" />
              </div>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#64748b' }}>Enrolled Gig Workers</span>
            </div>
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
              <path d="M2 18 C 16 14, 28 4, 42 8 C 50 12, 56 2, 58 1" stroke="#059669" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '26px', fontWeight: 800, color: '#0f172a' }}>2.8 Lakh+</div>
            <span style={{ backgroundColor: '#dcfce7', color: '#15803d', fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '9999px' }}>
              ▲ Verified
            </span>
          </div>
        </div>
      </div>

      {/* 3. Schemes Grid */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '16px' 
        }}
      >
        {filteredSchemes.map((scheme) => {
          const isSelected = selectedSchemeId === scheme.id
          return (
            <div
              key={scheme.id}
              onClick={() => setSelectedSchemeId(scheme.id)}
              style={{
                backgroundColor: isSelected ? '#f0fdf4' : '#ffffff',
                border: isSelected ? '2px solid #0d7e48' : '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '20px',
                cursor: 'pointer',
                boxShadow: isSelected ? '0 4px 14px rgba(13, 126, 72, 0.12)' : '0 1px 3px rgba(0,0,0,0.02)',
                transition: 'all 0.15s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#0d7e48', textTransform: 'uppercase' }}>
                    {scheme.category}
                  </span>
                  <span style={{ fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '9999px', backgroundColor: '#ecfdf5', color: '#0d7e48' }}>
                    {scheme.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px 0' }}>
                  {scheme.name}
                </h3>

                <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5, margin: '0 0 14px 0' }}>
                  {scheme.benefitSummary}
                </p>
              </div>

              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11.5px', color: '#64748b' }}>
                <span>Audience: <strong>{scheme.intendedAudience}</strong></span>
                <span style={{ color: '#0d7e48', fontWeight: 700 }}>Details →</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* 4. Selected Scheme Detail Box */}
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          padding: '28px',
          border: '1.5px solid #86efac',
          boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
          <div>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#0d7e48', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
              {selectedScheme.category} • Selected Program
            </span>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', margin: '4px 0 6px 0' }}>
              {selectedScheme.name}
            </h3>
            <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0 }}>
              <strong>Target Audience:</strong> {selectedScheme.intendedAudience}
            </p>
          </div>

          <button
            type="button"
            onClick={() => alert(`Initiating DigiLocker pre-fill verification for ${selectedScheme.name}`)}
            style={{
              backgroundColor: '#0d7e48',
              color: '#ffffff',
              border: 'none',
              borderRadius: '10px',
              padding: '11px 20px',
              fontSize: '13.5px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 12px rgba(13, 126, 72, 0.25)'
            }}
          >
            <span>Apply with DigiLocker</span>
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Benefits & Eligibility Details */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginTop: '16px' }}>
          <div style={{ backgroundColor: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <h4 style={{ fontSize: '12.5px', fontWeight: 700, color: '#0f172a', textTransform: 'uppercase', marginBottom: '8px' }}>
              Benefits Summary
            </h4>
            <p style={{ fontSize: '13px', color: '#334155', lineHeight: 1.5, margin: 0 }}>
              {selectedScheme.benefitSummary}
            </p>
          </div>

          <div style={{ backgroundColor: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <h4 style={{ fontSize: '12.5px', fontWeight: 700, color: '#0f172a', textTransform: 'uppercase', marginBottom: '8px' }}>
              Required Documents
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '12.5px', color: '#334155' }}>
              <div>• Aadhaar Card linked to Mobile</div>
              <div>• Active e-Shram UAN Card</div>
              <div>• Bank Account with Direct Benefit Transfer (DBT)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
