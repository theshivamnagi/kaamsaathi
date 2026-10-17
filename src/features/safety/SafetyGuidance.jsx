import React, { useState } from 'react'
import { safetyTopics, emergencyContacts } from '../../data/safety'
import { FeatureCard, ContentCard } from '../../components/common/Card'
import { Badge } from '../../components/common/Badge'
import { Button } from '../../components/common/Button'
import { useLanguage } from '../../hooks/useLanguage'
import { 
  ShieldAlert, 
  Truck, 
  AlertTriangle, 
  CloudRain, 
  HeartPulse, 
  PhoneCall, 
  CheckCircle2, 
  XCircle,
  HelpCircle
} from 'lucide-react'

export function SafetyGuidance() {
  const { lang } = useLanguage()
  const [selectedTopicId, setSelectedTopicId] = useState(safetyTopics[0].id)

  const selectedTopic = safetyTopics.find(t => t.id === selectedTopicId) || safetyTopics[0]

  const iconMap = {
    ShieldAlert: ShieldAlert,
    Truck: Truck,
    AlertTriangle: AlertTriangle,
    CloudRain: CloudRain,
    HeartPulse: HeartPulse
  }

  const TopicIcon = iconMap[selectedTopic.icon] || ShieldAlert

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Badge variant="teal" icon={ShieldAlert}>
            {lang === 'hi' ? 'फीचर 2: सुरक्षा एवं आपातकालीन मार्गदर्शन' : 'Feature 2: Worker Safety & Incident Guidance'}
          </Badge>
          <span className="caption" style={{ color: 'var(--colors-muted)' }}>
            Practical On-Duty Protocols
          </span>
        </div>
        <h2 className="display-sm" style={{ marginBottom: '8px' }}>
          {lang === 'hi' ? 'सड़क, कार्यस्थल एवं मौसम सुरक्षा दिशा-निर्देश' : 'Road, Workplace & Severe Weather Safety'}
        </h2>
        <p className="body-md">
          {lang === 'hi'
            ? 'सड़क दुर्घटना, ग्राहक विवाद, लू (हीटवेव) या बारिश में अपनी और अपने वाहन की सुरक्षा के लिए तत्काल कदम।'
            : 'Immediate, actionable steps for road incidents, hostile customer de-escalation, heatwave hydration, and minor collision protocols.'}
        </p>
      </div>

      {/* Emergency Helplines Quick Access Banner */}
      <div
        style={{
          backgroundColor: 'var(--colors-surface-card)',
          borderRadius: 'var(--rounded-lg)',
          border: '1px solid var(--colors-hairline)',
          padding: '16px 20px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <PhoneCall size={18} color="#ef4444" />
          <h3 className="title-sm" style={{ color: 'var(--colors-ink)' }}>
            {lang === 'hi' ? 'आपातकालीन सहायता नंबर (Emergency Helplines - India)' : 'Direct Emergency Helplines (India)'}
          </h3>
        </div>

        <div className="grid-2" style={{ gap: '10px' }}>
          {emergencyContacts.map((contact, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'var(--colors-canvas)',
                padding: '10px 14px',
                borderRadius: 'var(--rounded-md)',
                border: '1px solid var(--colors-hairline)'
              }}
            >
              <div>
                <div style={{ fontWeight: 600, fontSize: '13px', color: 'var(--colors-ink)' }}>
                  {contact.name}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--colors-muted)' }}>
                  {contact.description}
                </div>
              </div>
              <a
                href={`tel:${contact.number}`}
                style={{
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#b91c1c',
                  backgroundColor: '#fee2e2',
                  padding: '4px 10px',
                  borderRadius: 'var(--rounded-pill)',
                  textDecoration: 'none'
                }}
              >
                📞 {contact.number}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Topic Selection Category Tabs */}
      <div>
        <div className="caption-uppercase" style={{ color: 'var(--colors-muted)', marginBottom: '10px' }}>
          {lang === 'hi' ? 'सुरक्षा विषय चुनें:' : 'Select Safety Topic:'}
        </div>
        <div className="category-tab-list">
          {safetyTopics.map((topic) => {
            const Icon = iconMap[topic.icon] || ShieldAlert
            const isActive = selectedTopicId === topic.id
            return (
              <button
                key={topic.id}
                type="button"
                className={`category-tab ${isActive ? 'category-tab-active' : ''}`}
                onClick={() => setSelectedTopicId(topic.id)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <Icon size={15} />
                <span>{topic.title}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Selected Topic Content Cards */}
      <div className="grid-2">
        {/* Do's card */}
        <FeatureCard color={selectedTopic.cardColor.replace('feature-card-', '')}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <TopicIcon size={24} />
            <div>
              <h3 className="title-md">{selectedTopic.title}</h3>
              <p style={{ fontSize: '12px', opacity: 0.85 }}>{selectedTopic.subtitle}</p>
            </div>
          </div>

          <div style={{ marginTop: '16px' }}>
            <h4 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} />
              {lang === 'hi' ? 'अवश्य करने योग्य कदम (Recommended Action Steps):' : 'Key Action Checklist:'}
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {selectedTopic.keyTips.map((tip, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: '13px',
                    lineHeight: 1.45,
                    backgroundColor: 'rgba(255, 255, 255, 0.4)',
                    padding: '8px 12px',
                    borderRadius: 'var(--rounded-sm)'
                  }}
                >
                  <span style={{ fontWeight: 700 }}>{idx + 1}.</span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </FeatureCard>

        {/* Don'ts and Safety Cautions Card */}
        <ContentCard>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: '#b91c1c' }}>
            <XCircle size={20} />
            <h4 className="title-md" style={{ color: '#b91c1c' }}>
              {lang === 'hi' ? 'क्या न करें (Critical Warnings & Don’ts)' : 'Crucial Don’ts & Red Lines'}
            </h4>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
            {selectedTopic.donts.map((dont, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  fontSize: '13px',
                  lineHeight: 1.45,
                  color: 'var(--colors-body-strong)'
                }}
              >
                <span style={{ color: '#ef4444', fontWeight: 700 }}>✕</span>
                <span>{dont}</span>
              </div>
            ))}
          </div>

          {/* Legal / Medical demo advisory */}
          <div
            style={{
              padding: '12px',
              borderRadius: 'var(--rounded-md)',
              backgroundColor: 'var(--colors-surface-card)',
              border: '1px solid var(--colors-hairline)',
              fontSize: '11px',
              color: 'var(--colors-muted)',
              lineHeight: 1.4
            }}
          >
            <strong>Advisory Note:</strong> This guidance is for practical demonstration and general awareness during gig work shifts. It does not substitute for emergency medical care, traffic police reports, or certified legal counsel. In critical emergencies, dial 112 or 108.
          </div>
        </ContentCard>
      </div>
    </div>
  )
}
