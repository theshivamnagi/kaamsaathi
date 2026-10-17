/**
 * Pure JavaScript template generator for worker grievance & formal dispute letters.
 * Generates structured, polite, professional, and audit-ready letters in English and Hindi.
 */

export function generateGrievanceDraft({
  workerName = 'Ramesh Kumar',
  workerPhone = '+91 98765 43210',
  workerId = 'DL-882194',
  company = 'Zomato',
  issueCategory = 'payment_withheld',
  whatHappened = '',
  amount = 0,
  datePeriod = '',
  ticketReference = '',
  desiredOutcome = '',
  tone = 'formal', // 'formal' | 'urgent'
  language = 'en'
}) {
  const currentDate = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const formattedAmount = amount && Number(amount) > 0 ? `₹${Number(amount).toLocaleString('en-IN')}` : 'N/A'

  if (language === 'hi') {
    return generateHindiGrievance({
      currentDate,
      workerName,
      workerPhone,
      workerId,
      company,
      issueCategory,
      whatHappened,
      formattedAmount,
      datePeriod,
      ticketReference,
      desiredOutcome,
      tone
    })
  }

  return generateEnglishGrievance({
    currentDate,
    workerName,
    workerPhone,
    workerId,
    company,
    issueCategory,
    whatHappened,
    formattedAmount,
    datePeriod,
    ticketReference,
    desiredOutcome,
    tone
  })
}

function generateEnglishGrievance(data) {
  const {
    currentDate,
    workerName,
    workerPhone,
    workerId,
    company,
    whatHappened,
    formattedAmount,
    datePeriod,
    ticketReference,
    desiredOutcome,
    tone
  } = data

  const urgencyTag = tone === 'urgent' ? 'PRIORITY GRIEVANCE ESCALATION' : 'FORMAL GRIEVANCE SUBMISSION'

  return `To:
The Partner Support & Grievance Redressal Team
${company} Support Operations
Date: ${currentDate}

Subject: [${urgencyTag}] Notice regarding unresolved partner issue - Partner ID: ${workerId}

Dear Support & Operations Team,

I am writing this formal communication as an active registered partner on the ${company} platform (Partner ID: ${workerId}, Registered Mobile: ${workerPhone}). 

I am seeking your immediate assistance in resolving a critical issue that directly affects my livelihood and earnings:

1. SUMMARY OF OCCURRENCE:
${whatHappened.trim()}

2. RELEVANT DETAILS:
- Platform / Company: ${company}
- Disputed / Withheld Amount: ${formattedAmount !== 'N/A' ? formattedAmount : 'Not applicable / Policy issue'}
- Date / Period of Incident: ${datePeriod || 'Past weekly settlement cycle'}
- Prior Support Ticket Reference: ${ticketReference ? ticketReference : 'Raised in-app chat (unresolved)'}

3. REQUESTED OUTCOME & RECTIFICATION:
${desiredOutcome.trim() || 'Please review the trip logs and account records, and release the legitimate withheld payout immediately.'}

4. IMPACT & COMPLIANCE NOTE:
As an honest delivery / transport partner who completes orders in strict compliance with safety guidelines, unexpected deductions or arbitrary withheld payouts severely impact my daily operational expenses, fuel costs, and family livelihood. 

I request a fair review by a human grievance officer, a written explanation of the deduction/audit log, and a resolution within 48 to 72 hours.

Thank you for your prompt attention and co-operation.

Yours sincerely,
${workerName}
Partner ID: ${workerId}
Contact: ${workerPhone}
(Generated locally via KaamSaathi Support Assistant - Ready for Partner Support submission)`
}

function generateHindiGrievance(data) {
  const {
    currentDate,
    workerName,
    workerPhone,
    workerId,
    company,
    whatHappened,
    formattedAmount,
    datePeriod,
    ticketReference,
    desiredOutcome,
    tone
  } = data

  const urgencyTag = tone === 'urgent' ? 'अति आवश्यक शिकायत (URGENT ESCALATION)' : 'औपचारिक शिकायत एवं समाधान अनुरोध'

  return `सेवा में,
पार्टनर सपोर्ट एवं शिकायत निवारण अधिकारी,
${company} सपोर्ट ऑपरेशन्स
दिनांक: ${currentDate}

विषय: [${urgencyTag}] पार्टनर समस्या के संबंध में शिकायत - पार्टनर आईडी: ${workerId}

महोदय / महोदया,

मैं ${company} प्लेटफॉर्म पर एक सक्रिय एवं पंजीकृत पार्टनर हूँ (पार्टनर आईडी: ${workerId}, पंजीकृत मोबाइल: ${workerPhone})। 

मैं अपनी आजीविका और दैनिक भुगतान से जुड़ी एक गंभीर समस्या के समाधान हेतु यह औपचारिक पत्र लिख रहा हूँ:

1. घटना का विवरण (समस्या क्या हुई):
${whatHappened.trim()}

2. संबंधित मुख्य जानकारी:
- कंपनी / प्लेटफॉर्म: ${company}
- बकाया या काटी गई राशि: ${formattedAmount !== 'N/A' ? formattedAmount : 'लागू नहीं / खाता संबंधित'}
- घटना की तिथि / समयावधि: ${datePeriod || 'गत साप्ताहिक भुगतान चक्र'}
- पूर्व टिकट संख्या: ${ticketReference ? ticketReference : 'ऐप सहायता में दर्ज (लंबित)'}

3. अपेक्षित समाधान:
${desiredOutcome.trim() || 'कृपया रिकॉर्ड की पुनः जांच करें और बकाया राशि तुरंत जारी करने की कृपा करें।'}

4. निवेदन:
एक समर्पित पार्टनर के रूप में हम सभी दिशा-निर्देशों का पालन करते हुए काम करते हैं। बिना स्पष्ट ऑडिट अथवा सूचना के भुगतान रोकना या पेनाल्टी लगाना हमारे दैनिक भरण-पोषण और ईंधन खर्च को गंभीर रूप से प्रभावित करता है। 

अतः आपसे विनम्र अनुरोध है कि इस मामले की 48-72 घंटों के भीतर निष्पक्ष जांच कर उचित समाधान प्रदान करें।

धन्यवाद,
भवदीय,
${workerName}
पार्टनर आईडी: ${workerId}
मोबाइल: ${workerPhone}
(कामसाथी सहायता सहायक द्वारा स्थानीय रूप से तैयार - पार्टनर सपोर्ट में भेजने हेतु तैयार)`
}
