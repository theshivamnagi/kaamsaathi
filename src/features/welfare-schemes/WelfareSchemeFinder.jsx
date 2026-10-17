import React, { useState } from 'react'
import { welfareSchemesData } from '../../data/schemes'
import { FeatureCard, ContentCard } from '../../components/common/Card'
import { Badge } from '../../components/common/Badge'
import { Button } from '../../components/common/Button'
import { useLanguage } from '../../hooks/useLanguage'
import { 
  HeartHandshake, 
  FileText, 
  CheckSquare, 
  Users, 
  Sparkles, 
  Info,
  CheckCircle2,
  Filter
} from 'lucide-react'

export function WelfareSchemeFinder() {
  const { lang } = useLanguage()
  const [selectedSchemeId, setSelectedSchemeId] = useState(welfareSchemesData[0].id)
  const [workerTypeFilter, setWorkerTypeFilter] = useState('all') // 'all' | 'delivery' | 'driver' | 'informal'

  const selectedScheme = welfareSchemesData.find(s => s.id === selectedSchemeId) || welfareSchemesData[0]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Badge variant="teal" icon={HeartHandshake}>
            {lang === 'hi' ? 'फीचर 4: कल्याणकारी योजना खोजक' : 'Feature 4: Welfare Scheme Discovery'}
          </Badge>
          <span className="caption" style={{ color: 'var(--colors-muted)' }}>
            Fictional Demonstration Data
          </span>
        </div>
        <h2 className="display-sm" style={{ marginBottom: '8px' }}>
          {lang === 'hi' ? 'कामगार कल्याण एवं सुरक्षा योजनाएं (डेमो)' : 'Government & Welfare Aid Schemes (Demo)'}
        </h2>
        <p className="body-md">
          {lang === 'hi'
            ? 'दुर्घटना बीमा, परिवार स्वास्थ्य सहायता और टूल अनुदान की पात्रता एवं आवश्यक दस्तावेजों की सरल जानकारी।'
            : 'Explore prototype welfare programs demonstrating how future versions could match informal workers with state and central social security nets.'}
        </p>
      </div>

      {/* Mandatory Hackathon Demonstration Callout Banner */}
      <div
        style={{
          padding: '12px 16px',
          borderRadius: 'var(--rounded-md)',
          backgroundColor: '#fffbeb',
          border: '1px solid #fef3c7',
          color: '#92400e',
          fontSize: '12px',
          lineHeight: 1.5,
          display: 'flex',
          gap: '10px',
          alignItems: 'center'
        }}
      >
        <Sparkles size={18} color="#b45309" style={{ flexShrink: 0 }} />
        <div>
          <strong>Fictional Demonstration Notice:</strong> The schemes shown below are realistic illustrative examples designed for hackathon evaluation. They do not represent official government gazettes, actual enrollment portals, or guaranteed financial disbursals.
        </div>
      </div>

      {/* Scheme Cards Grid */}
      <div className="grid-3">
        {welfareSchemesData.map((scheme) => {
          const isSelected = selectedSchemeId === scheme.id
          return (
            <div
              key={scheme.id}
              onClick={() => setSelectedSchemeId(scheme.id)}
              style={{
                cursor: 'pointer',
                borderRadius: 'var(--rounded-xl)',
                border: '2px solid',
                borderColor: isSelected ? 'var(--colors-ink)' : 'transparent',
                transition: 'all 0.15s ease'
              }}
            >
              <FeatureCard color={scheme.cardColor.replace('feature-card-', '')} style={{ height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <Badge variant="default" style={{ backgroundColor: '#ffffff', color: '#0a0a0a' }}>
                    {scheme.badge}
                  </Badge>
                  {isSelected && <CheckCircle2 size={18} color="currentColor" />}
                </div>

                <h3 className="title-md" style={{ marginBottom: '8px' }}>
                  {scheme.name}
                </h3>

                <p style={{ fontSize: '13px', opacity: 0.9, marginBottom: '14px' }}>
                  {scheme.benefitSummary}
                </p>

                <div style={{ fontSize: '12px', opacity: 0.85, borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '10px' }}>
                  <strong>Target:</strong> {scheme.intendedAudience}
                </div>
              </FeatureCard>
            </div>
          )
        })}
      </div>

      {/* Detailed View for Selected Scheme */}
      <ContentCard>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
          <div>
            <span className="caption-uppercase" style={{ color: 'var(--colors-muted)' }}>
              {selectedScheme.category}
            </span>
            <h3 className="title-lg" style={{ marginTop: '4px' }}>
              {selectedScheme.name}
            </h3>
            <p className="body-md" style={{ marginTop: '4px' }}>
              <strong>{lang === 'hi' ? 'लक्षित लाभार्थी:' : 'Intended Beneficiaries:'}</strong> {selectedScheme.intendedAudience}
            </p>
          </div>

          <Badge variant="teal">
            {selectedScheme.badge}
          </Badge>
        </div>

        <div className="grid-2" style={{ gap: '24px' }}>
          {/* Eligibility checklist */}
          <div style={{ backgroundColor: 'var(--colors-surface-card)', padding: '18px', borderRadius: 'var(--rounded-md)', border: '1px solid var(--colors-hairline)' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckSquare size={16} color="#15803d" />
              {lang === 'hi' ? 'पात्रता शर्तें (Eligibility Criteria):' : 'Eligibility Conditions:'}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {selectedScheme.eligibility.map((cond, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px' }}>
                  <span style={{ color: '#15803d', fontWeight: 700 }}>✓</span>
                  <span>{cond}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <div style={{ backgroundColor: 'var(--colors-surface-card)', padding: '18px', borderRadius: 'var(--rounded-md)', border: '1px solid var(--colors-hairline)' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <FileText size={16} color="#0a0a0a" />
              {lang === 'hi' ? 'आवश्यक दस्तावेज़ (Required Documents):' : 'Documents Needed:'}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {selectedScheme.requiredDocuments.map((doc, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px' }}>
                  <span style={{ color: 'var(--colors-muted)', fontWeight: 600 }}>•</span>
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Process Steps */}
        <div style={{ marginTop: '24px', borderTop: '1px solid var(--colors-hairline)', paddingTop: '20px' }}>
          <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '12px' }}>
            {lang === 'hi' ? 'आवेदन के चरण (Demonstration Process Steps):' : 'Application Process Walkthrough:'}
          </h4>
          <div className="grid-2" style={{ gap: '12px' }}>
            {selectedScheme.applicationSteps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  padding: '12px 14px',
                  backgroundColor: 'var(--colors-canvas)',
                  borderRadius: 'var(--rounded-md)',
                  border: '1px solid var(--colors-hairline)',
                  fontSize: '13px',
                  lineHeight: 1.45
                }}
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </ContentCard>
    </div>
  )
}
