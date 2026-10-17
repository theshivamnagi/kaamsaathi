import React, { useState } from 'react'
import { workerRightsData } from '../../data/rights'
import { FeatureCard, ContentCard } from '../../components/common/Card'
import { Badge } from '../../components/common/Badge'
import { Button } from '../../components/common/Button'
import { useLanguage } from '../../hooks/useLanguage'
import { 
  ShieldCheck, 
  HelpCircle, 
  ArrowRight, 
  CheckCircle, 
  AlertCircle,
  FileText,
  ChevronRight
} from 'lucide-react'

export function WorkerRightsExplorer({ onDraftGrievance }) {
  const { lang } = useLanguage()
  const [selectedIssueId, setSelectedIssueId] = useState(workerRightsData[0].id)

  const selectedIssue = workerRightsData.find(item => item.id === selectedIssueId) || workerRightsData[0]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Badge variant="pink" icon={ShieldCheck}>
            {lang === 'hi' ? 'फीचर 3: कामगार अधिकार एवं समाधान' : 'Feature 3: Worker Rights & Fair Pay Protections'}
          </Badge>
          <span className="caption" style={{ color: 'var(--colors-muted)' }}>
            Empowerment Knowledge Base
          </span>
        </div>
        <h2 className="display-sm" style={{ marginBottom: '8px' }}>
          {lang === 'hi' ? 'दैनिक समस्याओं पर आपके अधिकार एवं समाधान' : 'Practical Rights for Common Platform Disputes'}
        </h2>
        <p className="body-md">
          {lang === 'hi'
            ? 'देर से भुगतान, बिना कारण कटौती या अचानक खाता ब्लॉक होने पर आपके क्या विकल्प हैं? जानें शिकायत की सही प्रक्रिया।'
            : 'Clear, step-by-step guidance on handling arbitrary penalties, delayed weekly cycles, account suspensions, and missing trip logs.'}
        </p>
      </div>

      {/* Main 2-Column Layout */}
      <div className="grid-2" style={{ alignItems: 'start' }}>
        {/* Left Column: Problem Cards List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="caption-uppercase" style={{ color: 'var(--colors-muted)', marginBottom: '4px' }}>
            {lang === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न:' : 'Common Problem Scenarios:'}
          </div>

          {workerRightsData.map((item) => {
            const isSelected = selectedIssueId === item.id
            return (
              <div
                key={item.id}
                onClick={() => setSelectedIssueId(item.id)}
                style={{
                  padding: '16px',
                  borderRadius: 'var(--rounded-lg)',
                  border: '1px solid',
                  borderColor: isSelected ? 'var(--colors-ink)' : 'var(--colors-hairline)',
                  backgroundColor: isSelected ? 'var(--colors-surface-card)' : 'var(--colors-canvas)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  boxShadow: isSelected ? 'var(--shadow-hover)' : 'none'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                  <span className="caption-uppercase" style={{ color: 'var(--colors-muted)', fontSize: '11px' }}>
                    {item.category}
                  </span>
                  <Badge variant={item.badgeType}>
                    {item.badge}
                  </Badge>
                </div>

                <div style={{ fontWeight: 600, fontSize: '15px', color: 'var(--colors-ink)', marginBottom: '4px' }}>
                  {item.title}
                </div>

                <p className="body-sm" style={{ margin: 0, fontSize: '12px', color: 'var(--colors-body)' }}>
                  {item.summary}
                </p>
              </div>
            )
          })}
        </div>

        {/* Right Column: Selected Issue Guidance & Action Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <FeatureCard color={selectedIssue.cardColor.replace('feature-card-', '')}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
              <Badge variant="default" style={{ backgroundColor: '#ffffff', color: '#0a0a0a' }}>
                {selectedIssue.category}
              </Badge>
              <HelpCircle size={20} />
            </div>

            <h3 className="title-lg" style={{ marginBottom: '8px' }}>
              {selectedIssue.title}
            </h3>
            <p style={{ fontSize: '14px', lineHeight: 1.5, opacity: 0.9, marginBottom: '20px' }}>
              {selectedIssue.summary}
            </p>

            {/* Steps to Resolve */}
            <div style={{ backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 'var(--rounded-md)', padding: '16px', color: 'var(--colors-ink)' }}>
              <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.5px' }}>
                {lang === 'hi' ? 'समाधान के कदम (Action Steps):' : 'Recommended Resolution Steps:'}
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {selectedIssue.steps.map((step, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px' }}>
                    <CheckCircle size={15} color="#15803d" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Connect to Grievance Drafter */}
            <div style={{ marginTop: '20px' }}>
              <Button
                variant="on-color"
                fullWidth
                icon={FileText}
                onClick={() => {
                  if (onDraftGrievance) {
                    onDraftGrievance({
                      issueCategory: selectedIssue.scenarioKey,
                      amount: selectedIssue.defaultAmount,
                      whatHappened: `Issue regarding: ${selectedIssue.title}. Summary: ${selectedIssue.summary}`,
                      desiredOutcome: `Requesting a formal audit and immediate resolution per platform partner policies.`
                    })
                  }
                }}
              >
                {lang === 'hi' ? 'इस समस्या के लिए शिकायत पत्र ड्राफ्ट करें' : selectedIssue.recommendedActionText}
              </Button>
            </div>
          </FeatureCard>

          {/* Demonstration Notice */}
          <ContentCard>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <AlertCircle size={18} color="var(--colors-muted)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '12px', color: 'var(--colors-muted)', lineHeight: 1.45 }}>
                <strong>Demonstration Material:</strong> {selectedIssue.disclaimer} This application aims to make standard industry grievance practices accessible without technical jargon.
              </div>
            </div>
          </ContentCard>
        </div>
      </div>
    </div>
  )
}
