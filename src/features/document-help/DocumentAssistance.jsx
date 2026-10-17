import React, { useState } from 'react'
import { documentCategories } from '../../data/documents'
import { FeatureCard, ContentCard } from '../../components/common/Card'
import { Badge } from '../../components/common/Badge'
import { useLanguage } from '../../hooks/useLanguage'
import { 
  FileText, 
  Receipt, 
  CreditCard, 
  FileWarning, 
  ClipboardCheck, 
  CheckCircle2, 
  AlertTriangle,
  ArrowRight,
  ShieldCheck
} from 'lucide-react'

export function DocumentAssistance({ onDraftGrievance }) {
  const { lang } = useLanguage()
  const [selectedDocId, setSelectedDocId] = useState(documentCategories[0].id)

  const selectedDoc = documentCategories.find(d => d.id === selectedDocId) || documentCategories[0]

  const iconMap = {
    Receipt: Receipt,
    CreditCard: CreditCard,
    FileWarning: FileWarning,
    ClipboardCheck: ClipboardCheck,
    FileText: FileText
  }

  const DocIcon = iconMap[selectedDoc.icon] || FileText

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Badge variant="ochre" icon={FileText}>
            {lang === 'hi' ? 'फीचर 5: दस्तावेज़ सहायता' : 'Feature 5: Document Assistance'}
          </Badge>
          <span className="caption" style={{ color: 'var(--colors-muted)' }}>
            Plain-Language Guides
          </span>
        </div>
        <h2 className="display-sm" style={{ marginBottom: '8px' }}>
          {lang === 'hi' ? 'पे-स्लिप, नोटिस एवं पहचान पत्रों को समझें' : 'Deciphering Payslips, Notices & Worker Documents'}
        </h2>
        <p className="body-md">
          {lang === 'hi'
            ? 'जटिल पे-स्लिप कोड, प्लेटफॉर्म चेतावनियां और सरकारी पहचान पत्रों में क्या देखना जरूरी है।'
            : 'Understand confusing deductions, penalty acronyms, and critical verification fields without uploading sensitive personal papers.'}
        </p>
      </div>

      {/* Category Tabs */}
      <div>
        <div className="caption-uppercase" style={{ color: 'var(--colors-muted)', marginBottom: '8px' }}>
          {lang === 'hi' ? 'दस्तावेज़ श्रेणी चुनें:' : 'Select Document Category:'}
        </div>
        <div className="category-tab-list">
          {documentCategories.map((doc) => {
            const Icon = iconMap[doc.icon] || FileText
            const isActive = selectedDocId === doc.id
            return (
              <button
                key={doc.id}
                type="button"
                className={`category-tab ${isActive ? 'category-tab-active' : ''}`}
                onClick={() => setSelectedDocId(doc.id)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <Icon size={16} />
                <span>{doc.title}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Document Detailed Breakdown */}
      <div className="grid-2" style={{ alignItems: 'start' }}>
        {/* Left: What it is & Purpose card */}
        <FeatureCard color={selectedDoc.cardColor.replace('feature-card-', '')}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <DocIcon size={24} />
            <div>
              <Badge variant="default" style={{ backgroundColor: '#ffffff', color: '#0a0a0a' }}>
                {selectedDoc.categoryLabel}
              </Badge>
              <h3 className="title-md" style={{ marginTop: '4px' }}>
                {selectedDoc.title}
              </h3>
            </div>
          </div>

          <div style={{ backgroundColor: 'rgba(255,255,255,0.8)', padding: '16px', borderRadius: 'var(--rounded-md)', color: 'var(--colors-ink)', marginBottom: '16px' }}>
            <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
              {lang === 'hi' ? 'यह दस्तावेज़ क्या है और क्यों आवश्यक है?' : 'What This Document Is For:'}
            </h4>
            <p style={{ fontSize: '14px', lineHeight: 1.5, margin: 0 }}>
              {selectedDoc.purpose}
            </p>
          </div>

          {/* Key Checklist to look for */}
          <div style={{ backgroundColor: 'rgba(255,255,255,0.8)', padding: '16px', borderRadius: 'var(--rounded-md)', color: 'var(--colors-ink)' }}>
            <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '10px' }}>
              🔍 {lang === 'hi' ? 'मुख्य बातें जो अवश्य जांचें (Checklist):' : 'Key Information to Look For:'}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {selectedDoc.keyFieldsToInspect.map((field, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px' }}>
                  <CheckCircle2 size={15} color="#15803d" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{field}</span>
                </div>
              ))}
            </div>
          </div>
        </FeatureCard>

        {/* Right: Common Mistakes & Action Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <ContentCard>
            <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px', color: '#b91c1c' }}>
              <AlertTriangle size={16} />
              {lang === 'hi' ? 'अक्सर होने वाली गलतियां (Common Mistakes to Avoid):' : 'Common Pitfalls & Mistakes:'}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
              {selectedDoc.commonMistakes.map((mistake, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--colors-body-strong)' }}>
                  <span style={{ color: '#ef4444', fontWeight: 700 }}>✕</span>
                  <span>{mistake}</span>
                </div>
              ))}
            </div>

            <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ArrowRight size={16} color="var(--colors-primary)" />
              {lang === 'hi' ? 'सुझाए गए अगले कदम (Recommended Next Steps):' : 'Suggested Action Steps:'}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {selectedDoc.nextSteps.map((step, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--colors-body)' }}>
                  <span style={{ color: 'var(--colors-primary)', fontWeight: 700 }}>{idx + 1}.</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </ContentCard>

          {/* Privacy & No OCR note */}
          <div
            style={{
              padding: '12px 16px',
              backgroundColor: 'var(--colors-surface-card)',
              borderRadius: 'var(--rounded-md)',
              border: '1px solid var(--colors-hairline)',
              fontSize: '11px',
              color: 'var(--colors-muted)',
              lineHeight: 1.45
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: 'var(--colors-ink)', marginBottom: '4px' }}>
              <ShieldCheck size={14} color="#15803d" />
              <span>100% Privacy Guaranteed</span>
            </div>
            KaamSaathi does not ask you to upload sensitive personal papers or perform automated OCR. We provide human-readable guidance so workers remain in full control of their confidential documents.
          </div>
        </div>
      </div>
    </div>
  )
}
