export const workerRightsData = [
  {
    id: "delayed_payments",
    title: "Delayed or Withheld Weekly Payout",
    summary: "What to do when your weekly payout cycle date passes and funds have not reached your registered bank account.",
    category: "Payment & Settlement",
    cardColor: "feature-card-peach",
    badge: "Most Common",
    badgeType: "warning",
    steps: [
      "Check in-app payout status: Confirm whether the settlement is marked as 'Pending', 'Failed', or 'Completed'.",
      "Verify Bank IFSC & Name: Over 60% of delayed transfers occur due to penny-drop or account freeze checks by partner banks.",
      "Collect Evidence: Take a screenshot of the trip completion summary and your bank statement showing no inward NEFT/IMPS credit.",
      "Formal Escalation: If the platform chat bot responds with generic automated replies for over 48 hours, escalate to the platform Grievance Officer with your Partner ID."
    ],
    recommendedActionText: "Draft a Delayed Payment Grievance",
    scenarioKey: "payment_withheld",
    defaultAmount: 1850,
    disclaimer: "Illustrative demonstration guide. For unresolved financial disputes, consult official platform grievance officers or registered worker unions."
  },
  {
    id: "unexpected_deductions",
    title: "Unexpected Penalties & Order Cancellations",
    summary: "How to challenge algorithm-generated fines for customer cancellations, transit delays, or damaged packaging.",
    category: "Deductions & Penalties",
    cardColor: "feature-card-pink",
    badge: "High Impact",
    badgeType: "pink",
    steps: [
      "Request Itemized Deduction Reason: Platforms are required under transparent terms to cite the specific Order ID and penalty clause.",
      "Check Weather & Traffic Records: If the delay was caused by waterlogging, severe rain, or road blockages, save news alerts or GPS time-stamps.",
      "File Re-audit Request: File a deduction dispute within 7 days of the settlement cycle. Cite force majeure / conditions beyond partner control.",
      "Escalation Route: If automated systems reject the dispute, request review by a human fleet manager or internal appeals panel."
    ],
    recommendedActionText: "Draft an Unjust Deduction Grievance",
    scenarioKey: "penalty_dispute",
    defaultAmount: 450,
    disclaimer: "Demonstration material based on common gig economy dispute practices. Not formal legal advice."
  },
  {
    id: "account_deactivation",
    title: "Sudden Account Deactivation or Shadow-Banning",
    summary: "Steps to take if your partner ID is abruptly blocked without prior written warning or hearing.",
    category: "Account & Access",
    cardColor: "feature-card-teal",
    badge: "Urgent",
    badgeType: "teal",
    steps: [
      "Identify the Trigger: Determine if deactivation was due to low completion rate, customer complaint, selfie verification failure, or fraud flags.",
      "Biometric / Selfie Glitches: If blocked due to facial mismatch during night shifts, request a manual selfie reverification at your city hub.",
      "Request Written Cause Notice: Workers have the right to request the specific clause and customer report that led to the termination.",
      "Hub Visit & Appeal: Visit the local partner onboarding hub with your physical Aadhaar, Driving License, and smartphone for an in-person appeal."
    ],
    recommendedActionText: "Draft an Account Deactivation Appeal",
    scenarioKey: "account_deactivation",
    defaultAmount: 0,
    disclaimer: "Illustrative guidance. Platform terms of service vary across delivery and mobility operators."
  },
  {
    id: "missing_records",
    title: "Missing Trip or Order Records in Daily Ledger",
    summary: "When trips you completed do not appear on your earnings screen or fuel surge was omitted.",
    category: "Ledger & Records",
    cardColor: "feature-card-lavender",
    badge: "Technical",
    badgeType: "default",
    steps: [
      "Keep Local Log: Note down Customer Order numbers, pickup time, and drop-off time on your phone notepad during shifts.",
      "Match GPS Timeline: Use Google Maps Timeline or phone location history as secondary proof of distance traveled.",
      "Check Sync Delays: Server synchronization can take up to 4 hours during peak rush hours or festival sales.",
      "Submit Batch Audit: Raise a single consolidated ticket with Order IDs, distance, and expected pay card rates."
    ],
    recommendedActionText: "Draft a Missing Records Inquiry",
    scenarioKey: "payment_lower",
    defaultAmount: 1200,
    disclaimer: "Demo guide for maintaining personal work records."
  },
  {
    id: "complaint_escalation",
    title: "How to Formally Escalate When Support Bots Loop",
    summary: "Escalation framework when automated support tickets are repeatedly closed without human resolution.",
    category: "Dispute Process",
    cardColor: "feature-card-ochre",
    badge: "Strategy",
    badgeType: "ochre",
    steps: [
      "Level 1 (In-App Support): Raise the ticket under the specific category with concise bullet points.",
      "Level 2 (Hub Supervisor): If unanswered in 48 hours, speak with the city field supervisor or fleet lead.",
      "Level 3 (Grievance Officer Email): Send a structured formal email to the designated nodal grievance officer under IT Rules.",
      "Level 4 (Worker Collective / Labour Helpline): Approach registered informal labor welfare boards or Ministry of Labour helplines (14434)."
    ],
    recommendedActionText: "Draft a Formal Escalation Letter",
    scenarioKey: "complaint_unanswered",
    defaultAmount: 0,
    disclaimer: "Illustrative information regarding standard dispute escalation channels in India."
  }
]
