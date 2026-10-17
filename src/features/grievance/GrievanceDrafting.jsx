import React, { useState, useEffect } from 'react'
import { generateGrievanceDraft } from '../../utils/grievanceGenerator'
import { FeatureCard, ContentCard } from '../../components/common/Card'
import { Button } from '../../components/common/Button'
import { Badge } from '../../components/common/Badge'
import { AlertBanner } from '../../components/ui/AlertBanner'
import { useLanguage } from '../../hooks/useLanguage'
import { 
  FileEdit, 
  Copy, 
  Check, 
  ArrowLeft, 
  RotateCcw, 
  Sparkles, 
  Send, 
  Building2, 
  IndianRupee, 
  Calendar, 
  AlertCircle,
  Share2,
  FileText
} from 'lucide-react'

export const sampleScenarios = [
  {
    id: 'payment_withheld',
    label: '1. Payment Not Arrived (₹1,850)',
    company: 'Zomato',
    whatHappened: 'My weekly payout for the cycle 06 Oct - 12 Oct (amounting to ₹1,850) was scheduled for Tuesday settlement. The app marks the payout as completed, but no funds were credited to my ICICI Bank account. Bank branch confirms no incoming NEFT.',
    amount: 1850,
    datePeriod: '06 Oct - 12 Oct (Past Week)',
    ticketReference: 'TKT-992144',
    desiredOutcome: 'Immediate bank re-transfer or manual reversal of the ₹1,850 pending payout.',
    tone: 'formal'
  },
  {
    id: 'penalty_dispute',
    label: '2. Unexpected Deduction (₹450 Penalty)',
    company: 'Swiggy',
    whatHappened: 'A deduction penalty of ₹450 was debited from my earnings under code "LATE-CAN-03" on 11 Oct. On that day, torrential rain and flash waterlogging caused an unavoidable delay. I had already informed customer care via SOS chat.',
    amount: 450,
    datePeriod: '11 Oct (Monsoon Shift)',
    ticketReference: 'SWG-84721',
    desiredOutcome: 'Waiver of the weather-related penalty and credit of ₹450 to partner wallet.',
    tone: 'formal'
  },
  {
    id: 'payment_lower',
    label: '3. Payment Lower Than Expected (₹1,200)',
    company: 'Porter',
    whatHappened: 'Completed 6 outstation logistics trips with extra heavy loading. The promised surge distance multiplier (1.4x) was not reflected in the trip ledger, creating a shortfall of ₹1,200 compared to the verified rate card.',
    amount: 1200,
    datePeriod: 'Last Weekend (12-13 Oct)',
    ticketReference: 'PRT-LOG-551',
    desiredOutcome: 'Audit of odometer logs and credit of ₹1,200 distance differential.',
    tone: 'formal'
  },
  {
    id: 'account_deactivation',
    label: '4. Sudden Account Deactivation',
    company: 'Uber',
    whatHappened: 'My driver partner account was deactivated without warning after a late-night selfie verification failed due to poor street lighting. I have 4.88 star rating and over 2,400 completed trips without previous infractions.',
    amount: 0,
    datePeriod: '13 Oct (Night Shift)',
    ticketReference: 'UBR-ACT-009',
    desiredOutcome: 'Immediate physical hub reverification appointment and reinstatement of driver ID.',
    tone: 'urgent'
  },
  {
    id: 'complaint_unanswered',
    label: '5. Complaint Without Response (10 Days)',
    company: 'Zepto',
    whatHappened: 'Raised support ticket TKT-44102 on 03 Oct regarding an order cancellation dispute. Automated bot replied with "resolving in 24 hours", but 10 days have elapsed without any human response or status update.',
    amount: 600,
    datePeriod: 'Ticket raised on 03 Oct',
    ticketReference: 'TKT-44102',
    desiredOutcome: 'Human escalation by Nodal Grievance Officer and definitive closure of ticket.',
    tone: 'urgent'
  }
]

export function GrievanceDrafting({ initialPrefill = null }) {
  const { lang } = useLanguage()

  // Form State
  const [formData, setFormData] = useState({
    workerName: 'Ramesh Kumar',
    workerPhone: '+91 98765 43210',
    workerId: 'DL-882194',
    company: 'Zomato',
    whatHappened: sampleScenarios[0].whatHappened,
    amount: sampleScenarios[0].amount,
    datePeriod: sampleScenarios[0].datePeriod,
    ticketReference: sampleScenarios[0].ticketReference,
    desiredOutcome: sampleScenarios[0].desiredOutcome,
    preferredLanguage: lang || 'en',
    tone: 'formal'
  })

  // Selected scenario ID
  const [selectedScenarioId, setSelectedScenarioId] = useState('payment_withheld')

  // Mode: 'form' | 'result'
  const [mode, setMode] = useState('form')
  const [generatedDraft, setGeneratedDraft] = useState('')
  const [copySuccess, setCopySuccess] = useState(false)
  const [validationError, setValidationError] = useState('')

  // Check if incoming prefill was provided from another feature (e.g. Earnings or Rights)
  useEffect(() => {
    if (initialPrefill) {
      setFormData(prev => ({
        ...prev,
        ...initialPrefill,
        amount: initialPrefill.amount !== undefined ? initialPrefill.amount : prev.amount,
        whatHappened: initialPrefill.whatHappened || prev.whatHappened,
        desiredOutcome: initialPrefill.desiredOutcome || prev.desiredOutcome
      }))
    }
  }, [initialPrefill])

  const handleScenarioSelect = (scenario) => {
    setSelectedScenarioId(scenario.id)
    setFormData(prev => ({
      ...prev,
      company: scenario.company,
      whatHappened: scenario.whatHappened,
      amount: scenario.amount,
      datePeriod: scenario.datePeriod,
      ticketReference: scenario.ticketReference,
      desiredOutcome: scenario.desiredOutcome,
      tone: scenario.tone
    }))
    setValidationError('')
  }

  const handleGenerate = (e) => {
    e?.preventDefault()

    if (!formData.company || !formData.company.trim()) {
      setValidationError(lang === 'hi' ? 'कृपया कंपनी या प्लेटफॉर्म का नाम दर्ज करें।' : 'Please specify the company or platform.')
      return
    }

    if (!formData.whatHappened || !formData.whatHappened.trim()) {
      setValidationError(lang === 'hi' ? 'कृपया समस्या का संक्षिप्त विवरण दर्ज करें।' : 'Please describe what happened.')
      return
    }

    setValidationError('')

    const draft = generateGrievanceDraft({
      workerName: formData.workerName,
      workerPhone: formData.workerPhone,
      workerId: formData.workerId,
      company: formData.company,
      issueCategory: selectedScenarioId,
      whatHappened: formData.whatHappened,
      amount: formData.amount,
      datePeriod: formData.datePeriod,
      ticketReference: formData.ticketReference,
      desiredOutcome: formData.desiredOutcome,
      tone: formData.tone,
      language: formData.preferredLanguage
    })

    setGeneratedDraft(draft)
    setMode('result')
    setCopySuccess(false)
  }

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(generatedDraft)
      } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea')
        textarea.value = generatedDraft
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
      }
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 3500)
    } catch {
      setCopySuccess(true)
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Badge variant="pink" icon={FileEdit}>
            {lang === 'hi' ? 'फीचर 6: शिकायत एवं विवाद समाधान' : 'Feature 6: Grievance & Dispute Drafting'}
          </Badge>
          <span className="caption" style={{ color: 'var(--colors-muted)' }}>
            Core Problem-Solving Engine
          </span>
        </div>
        <h2 className="display-sm" style={{ marginBottom: '8px' }}>
          {lang === 'hi' ? 'औपचारिक शिकायत पत्र जनरेटर' : 'Formal Partner Dispute Letter Drafter'}
        </h2>
        <p className="body-md">
          {lang === 'hi'
            ? 'कंपनी चैटबॉट के गोलमोल जवाबों से बचें। अपने अधिकारों पर आधारित, स्पष्ट एवं पेशेवर शिकायत पत्र तैयार करें।'
            : 'Break out of automated support loops. Prepare structured, audit-ready grievance letters citing timeline, financial loss, and requested rectification.'}
        </p>
      </div>

      {mode === 'form' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Quick Scenario Prefill Selector */}
          <div>
            <div className="caption-uppercase" style={{ color: 'var(--colors-muted)', marginBottom: '8px' }}>
              {lang === 'hi' ? 'त्वरित उदाहरण परिदृश्य चुनें (Prefill Realistic Data):' : 'Prefill Realistic Demonstration Scenarios:'}
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {sampleScenarios.map((sc) => (
                <button
                  key={sc.id}
                  type="button"
                  onClick={() => handleScenarioSelect(sc)}
                  style={{
                    border: '1px solid',
                    borderColor: selectedScenarioId === sc.id ? 'var(--colors-ink)' : 'var(--colors-hairline)',
                    backgroundColor: selectedScenarioId === sc.id ? 'var(--colors-surface-card)' : 'var(--colors-canvas)',
                    color: 'var(--colors-ink)',
                    borderRadius: 'var(--rounded-pill)',
                    padding: '8px 14px',
                    fontSize: '13px',
                    fontWeight: selectedScenarioId === sc.id ? 600 : 400,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {sc.label}
                </button>
              ))}
            </div>
          </div>

          {validationError && (
            <AlertBanner type="warning" title="Required Details Missing">
              {validationError}
            </AlertBanner>
          )}

          {/* Form Card */}
          <ContentCard>
            <form onSubmit={handleGenerate}>
              <div className="grid-2">
                {/* Platform / Company */}
                <div className="form-group">
                  <label className="form-label" htmlFor="company-name">
                    {lang === 'hi' ? 'कंपनी / प्लेटफॉर्म का नाम' : 'Company / Gig Platform *'}
                  </label>
                  <select
                    id="company-name"
                    className="text-input"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  >
                    <option value="Zomato">Zomato</option>
                    <option value="Swiggy">Swiggy</option>
                    <option value="Uber">Uber</option>
                    <option value="Ola">Ola</option>
                    <option value="Porter">Porter</option>
                    <option value="Zepto">Zepto</option>
                    <option value="Blinkit">Blinkit</option>
                    <option value="Rapido">Rapido</option>
                    <option value="Urban Company">Urban Company</option>
                    <option value="Shadowfax">Shadowfax</option>
                    <option value="Other">Other Informal Contractor</option>
                  </select>
                </div>

                {/* Amount Involved */}
                <div className="form-group">
                  <label className="form-label" htmlFor="dispute-amount">
                    {lang === 'hi' ? 'संबंधित राशि (₹) यदि कोई हो' : 'Disputed Amount (₹) if applicable'}
                  </label>
                  <input
                    id="dispute-amount"
                    type="number"
                    min="0"
                    className="text-input"
                    placeholder="e.g. 1850"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  />
                  <span className="form-hint">
                    {lang === 'hi' ? 'खाता बंद होने की स्थिति में 0 रखें' : 'Enter 0 if account issue or policy warning'}
                  </span>
                </div>
              </div>

              <div className="grid-2">
                {/* Worker Details */}
                <div className="form-group">
                  <label className="form-label" htmlFor="worker-id">
                    {lang === 'hi' ? 'पार्टनर आईडी / रजिस्टर्ड मोबाइल' : 'Partner ID & Registered Mobile'}
                  </label>
                  <input
                    id="worker-id"
                    type="text"
                    className="text-input"
                    value={formData.workerId}
                    onChange={(e) => setFormData({ ...formData, workerId: e.target.value })}
                    placeholder="e.g. DL-882194"
                  />
                </div>

                {/* Date or Period */}
                <div className="form-group">
                  <label className="form-label" htmlFor="date-period">
                    {lang === 'hi' ? 'घटना की तिथि / भुगतान चक्र' : 'Incident Date or Settlement Cycle'}
                  </label>
                  <input
                    id="date-period"
                    type="text"
                    className="text-input"
                    value={formData.datePeriod}
                    onChange={(e) => setFormData({ ...formData, datePeriod: e.target.value })}
                    placeholder="e.g. 06 Oct - 12 Oct Cycle"
                  />
                </div>
              </div>

              {/* What Happened */}
              <div className="form-group">
                <label className="form-label" htmlFor="what-happened">
                  {lang === 'hi' ? 'समस्या क्या हुई? (विवरण) *' : 'What Happened? (Detailed Description) *'}
                </label>
                <textarea
                  id="what-happened"
                  className="text-input"
                  style={{ minHeight: '100px' }}
                  value={formData.whatHappened}
                  onChange={(e) => setFormData({ ...formData, whatHappened: e.target.value })}
                  placeholder="Describe the issue, order numbers, weather conditions, or prior chat history..."
                  rows={4}
                />
              </div>

              {/* Desired Outcome */}
              <div className="form-group">
                <label className="form-label" htmlFor="desired-outcome">
                  {lang === 'hi' ? 'आप क्या समाधान चाहते हैं?' : 'Desired Outcome / Rectification Requested'}
                </label>
                <input
                  id="desired-outcome"
                  type="text"
                  className="text-input"
                  value={formData.desiredOutcome}
                  onChange={(e) => setFormData({ ...formData, desiredOutcome: e.target.value })}
                  placeholder="e.g. Release withheld amount within 48 hours or reinstate partner ID..."
                />
              </div>

              {/* Output Language & Tone */}
              <div className="grid-2" style={{ marginTop: '8px' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="pref-lang">
                    {lang === 'hi' ? 'पत्र की भाषा' : 'Draft Language'}
                  </label>
                  <select
                    id="pref-lang"
                    className="text-input"
                    value={formData.preferredLanguage}
                    onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
                  >
                    <option value="en">English (Professional Corporate Standard)</option>
                    <option value="hi">हिन्दी (Hindi Formal Escalation)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="pref-tone">
                    {lang === 'hi' ? 'पत्र की शैली (Tone)' : 'Communication Tone'}
                  </label>
                  <select
                    id="pref-tone"
                    className="text-input"
                    value={formData.tone}
                    onChange={(e) => setFormData({ ...formData, tone: e.target.value })}
                  >
                    <option value="formal">Formal & Polite (Best for First Appeal)</option>
                    <option value="urgent">Priority Regulatory Escalation (Unanswered Tickets)</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={Sparkles}
                >
                  {lang === 'hi' ? 'शिकायत पत्र तैयार करें (Generate Draft)' : 'Generate Dispute Letter (Instant)'}
                </Button>
              </div>
            </form>
          </ContentCard>
        </div>
      ) : (
        /* Result View with Editable Textarea & Copy Actions */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Success / Action banner */}
          <div
            style={{
              padding: '16px 20px',
              borderRadius: 'var(--rounded-lg)',
              backgroundColor: '#f0fdf4',
              border: '1px solid #bbf7d0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Check size={20} color="#15803d" />
              <div>
                <strong style={{ color: '#166534', fontSize: '14px' }}>
                  {lang === 'hi' ? 'शिकायत पत्र तैयार है!' : 'Formal Dispute Letter Generated Successfully!'}
                </strong>
                <div style={{ fontSize: '12px', color: '#15803d' }}>
                  {lang === 'hi'
                    ? 'स्थानीय जावास्क्रिप्ट टेम्पलेट द्वारा तैयार • आप नीचे इसे संपादित भी कर सकते हैं।'
                    : 'Generated via local JavaScript template • Fully editable before copying.'}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <Button
                variant="secondary"
                size="sm"
                icon={ArrowLeft}
                onClick={() => setMode('form')}
              >
                {lang === 'hi' ? 'विवरण बदलें' : 'Back to Edit Details'}
              </Button>

              <Button
                variant="primary"
                size="sm"
                icon={copySuccess ? Check : Copy}
                onClick={handleCopy}
                style={{ backgroundColor: copySuccess ? '#15803d' : undefined }}
              >
                {copySuccess
                  ? (lang === 'hi' ? 'कॉपी हो गया! ✓' : 'Copied to Clipboard! ✓')
                  : (lang === 'hi' ? 'पत्र कॉपी करें' : 'Copy Dispute Letter')}
              </Button>
            </div>
          </div>

          {/* Editable Textarea Preview */}
          <ContentCard>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span className="caption-uppercase" style={{ color: 'var(--colors-muted)' }}>
                {formData.preferredLanguage === 'hi' ? 'पत्र का पूर्वावलोकन (Editable Preview)' : 'Generated Text Draft (You can edit below):'}
              </span>
              <span className="caption" style={{ color: 'var(--colors-muted)' }}>
                {formData.company} Grievance Cell
              </span>
            </div>

            <textarea
              className="text-input"
              style={{
                fontFamily: 'monospace',
                fontSize: '13px',
                minHeight: '380px',
                lineHeight: '1.6',
                whiteSpace: 'pre-wrap',
                backgroundColor: '#ffffff'
              }}
              value={generatedDraft}
              onChange={(e) => setGeneratedDraft(e.target.value)}
              aria-label="Editable complaint text"
            />

            {/* Copy Notification Toast */}
            {copySuccess && (
              <div
                style={{
                  marginTop: '12px',
                  padding: '10px 14px',
                  borderRadius: 'var(--rounded-md)',
                  backgroundColor: '#dcfce7',
                  border: '1px solid #86efac',
                  color: '#166534',
                  fontSize: '13px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Check size={16} />
                <span>
                  {lang === 'hi'
                    ? 'पत्र सफलतापूर्वक क्लिपबोर्ड पर कॉपी हो गया! अब आप इसे पार्टनर ऐप चैट या ईमेल में पेस्ट कर सकते हैं।'
                    : 'Letter copied to clipboard! You can now paste this directly into your partner app support chat or email.'}
                </span>
              </div>
            )}
          </ContentCard>

          {/* Next Steps Card */}
          <div className="grid-2">
            <FeatureCard color="cream">
              <h4 className="title-sm" style={{ marginBottom: '8px' }}>
                {lang === 'hi' ? 'अगला कदम: इसे कहां भेजें?' : 'Where to Submit This Letter?'}
              </h4>
              <ul style={{ paddingLeft: '18px', fontSize: '13px', lineHeight: 1.5, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>{formData.company} In-App Help: Paste in "Report Payout Issue" or "Grievance Appeal".</li>
                <li>Email Support: Send to partner-support@{formData.company.toLowerCase().replace(/\s+/g, '')}.com.</li>
                <li>WhatsApp Support: Forward to your city fleet manager or supervisor.</li>
              </ul>
            </FeatureCard>

            <ContentCard>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <AlertCircle size={18} color="var(--colors-muted)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ fontSize: '12px', color: 'var(--colors-muted)', lineHeight: 1.45 }}>
                  <strong>Disclaimer:</strong> This is a locally generated demonstration draft to empower workers with clear communication. It is not an automated submission to any external platform or legal body.
                </div>
              </div>
            </ContentCard>
          </div>
        </div>
      )}
    </div>
  )
}
