import React, { useState } from 'react'
import { ChatbotAvatarGraphic } from './illustrations'
import { X, Send, Sparkles, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react'

export function FloatingChatbot({ onNavigateFeature }) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'नमस्ते Shivam! मैं KaamSaathi AI सहायक हूँ। मैं आपकी कमाई की कटौती, योजनाएं, DigiPin या शिकायत दर्ज कराने में कैसे सहायता करूँ?'
    }
  ])
  const [inputText, setInputText] = useState('')

  const quickChips = [
    { label: '₹1,850 Payout Deduction', target: 'earnings' },
    { label: 'Know My DigiPin', target: 'digipin' },
    { label: 'Draft Grievance Letter', target: 'grievance' },
    { label: 'Ayushman Bharat Card', target: 'schemes' }
  ]

  const handleSend = (textToSend) => {
    const query = (textToSend || inputText).trim()
    if (!query) return

    const newMsgs = [...messages, { sender: 'user', text: query }]
    setMessages(newMsgs)
    setInputText('')

    // Generate responsive reply based on query
    setTimeout(() => {
      let reply = 'आपके सवाल के लिए धन्यवाद। '
      const lower = query.toLowerCase()

      if (lower.includes('deduct') || lower.includes('payout') || lower.includes('1850') || lower.includes('cut') || lower.includes('earn')) {
        reply = 'हमने आपके Zomato/Swiggy पेआउट साइकिल #41 में ₹1,850 की अस्पष्ट कटौती पहचानी है। आप अर्निंग्स कैलकुलेटर में नेट टेक-होम देख सकते हैं और सीधे शिकायत दर्ज कर सकते हैं।'
      } else if (lower.includes('digipin') || lower.includes('pin') || lower.includes('address')) {
        reply = 'DigiPin भारत सरकार के डाक विभाग द्वारा विकसित 10-अंकों का डिजिटल पता कोड है। यह गिग डिलीवरी पार्टनर्स को सटीक 4m x 4m लोकेशन तक पहुंचाने में मदद करता है।'
      } else if (lower.includes('grievance') || lower.includes('complaint') || lower.includes('dispute')) {
        reply = 'आप औपचारिक शिकायत ड्राफ्टर का उपयोग करके तुरंत श्रम मंत्रालय या कंपनी नोडल अधिकारी के लिए कानूनी नोटिस पत्र तैयार कर सकते हैं।'
      } else if (lower.includes('scheme') || lower.includes('ayushman') || lower.includes('hospital')) {
        reply = 'आयुष्मान भारत (PM-JAY) के तहत गिग वर्कर को ₹5,00,000 तक का कैशलेस इलाज मिलता है। ई-श्रम कार्ड धारक बिना किसी प्रीमियम के इसके पात्र हैं।'
      } else {
        reply = 'मैं आपकी इस विषय में पूरी मदद करूँगा। आप ऊपर दिए गए क्विक सर्विसेज मेनू से हेल्थ, इमरजेंसी, ट्रैवल और योजनाओं का विकल्प चुन सकते हैं।'
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: reply }])
    }, 600)
  }

  return (
    <>
      {/* Floating Avatar Button (Bottom Right) */}
      <div
        style={{
          position: 'fixed',
          right: '24px',
          bottom: '24px',
          zIndex: 999
        }}
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open UMANG Saathi Assistant"
          style={{
            position: 'relative',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            border: '2px solid #ffffff',
            boxShadow: '0 8px 24px rgba(0,0,0,0.22), 0 2px 6px rgba(0,0,0,0.12)',
            cursor: 'pointer',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.08)'
            e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.28)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.22), 0 2px 6px rgba(0,0,0,0.12)'
          }}
        >
          <ChatbotAvatarGraphic size={56} />

          {/* Online green indicator badge */}
          <span
            style={{
              position: 'absolute',
              bottom: '2px',
              right: '2px',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              backgroundColor: '#22c55e',
              border: '2px solid #ffffff'
            }}
          />
        </button>
      </div>

      {/* Interactive Chat Dialog Drawer */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            right: '24px',
            bottom: '96px',
            width: '360px',
            maxWidth: 'calc(100vw - 48px)',
            height: '490px',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.1)',
            border: '1px solid #e2e8f0',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            zIndex: 1000
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: '#0d7e48',
              color: '#ffffff',
              padding: '14px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}
              >
                <ChatbotAvatarGraphic size={36} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '15px' }}>KaamSaathi AI Sahayak</div>
                <div style={{ fontSize: '11px', opacity: 0.9, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4ade80' }} />
                  <span>Online • Gig Worker Support</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Quick Prompt Chips */}
          <div
            style={{
              padding: '10px 14px',
              backgroundColor: '#f8fafc',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              gap: '6px',
              overflowX: 'auto',
              scrollbarWidth: 'none'
            }}
          >
            {quickChips.map((chip, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  if (chip.target === 'digipin') {
                    onNavigateFeature && onNavigateFeature('digipin')
                  } else {
                    onNavigateFeature && onNavigateFeature(chip.target)
                  }
                  handleSend(chip.label)
                }}
                style={{
                  whiteSpace: 'nowrap',
                  fontSize: '11px',
                  fontWeight: 600,
                  padding: '5px 10px',
                  borderRadius: '9999px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: '#ffffff',
                  color: '#1e293b',
                  cursor: 'pointer'
                }}
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Messages Body */}
          <div
            style={{
              flex: 1,
              padding: '14px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              backgroundColor: '#f8fafc'
            }}
          >
            {messages.map((m, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  padding: '10px 14px',
                  borderRadius: m.sender === 'user' ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                  backgroundColor: m.sender === 'user' ? '#0d7e48' : '#ffffff',
                  color: m.sender === 'user' ? '#ffffff' : '#1e293b',
                  fontSize: '13px',
                  lineHeight: 1.45,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                  border: m.sender === 'user' ? 'none' : '1px solid #e2e8f0'
                }}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            style={{
              padding: '10px 14px',
              backgroundColor: '#ffffff',
              borderTop: '1px solid #e2e8f0',
              display: 'flex',
              gap: '8px'
            }}
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask anything / कुछ भी पूछें..."
              style={{
                flex: 1,
                border: '1px solid #cbd5e1',
                borderRadius: '8px',
                padding: '8px 12px',
                fontSize: '13px',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: '#0d7e48',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '0 14px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
