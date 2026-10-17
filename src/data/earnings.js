export const defaultEarningsData = {
  grossEarnings: 24860,
  thisWeekEarnings: 4320,
  pendingDeductions: 1850,
  activeDeliveries: 42,
  fuelExpense: 3850,
  otherExpenses: 1240, // bike servicing & mobile data recharge
  deductions: 1850,   // disputed platform deduction + bag security
  hoursWorked: 52,
  period: "Monthly Cycle (01 Apr - 30 Apr 2026)",
  targetGoal: 25000,
  currentProgress: 21320
}

export const sixMonthEarnings = [
  { month: 'Apr 2026', shortMonth: 'Apr', amount: 12400, trips: 180 },
  { month: 'May 2026', shortMonth: 'May', amount: 15600, trips: 220 },
  { month: 'Jun 2026', shortMonth: 'Jun', amount: 17200, trips: 245 },
  { month: 'Jul 2026', shortMonth: 'Jul', amount: 21780, trips: 310, isPeak: true },
  { month: 'Aug 2026', shortMonth: 'Aug', amount: 20100, trips: 290 },
  { month: 'Sep 2026', shortMonth: 'Sep', amount: 24860, trips: 342, isLatest: true }
]

export const incomeBySource = [
  {
    id: 'zomato',
    name: 'Zomato Delivery',
    amount: 10441,
    percentage: 42,
    color: '#0d7e48', // Primary emerald accent
    trend: '+4%',
    trips: 148,
    category: 'Food Delivery'
  },
  {
    id: 'swiggy',
    name: 'Swiggy Instamart',
    amount: 6960,
    percentage: 28,
    color: '#059669', // Medium teal
    trend: '+2%',
    trips: 96,
    category: 'Quick Grocery'
  },
  {
    id: 'zepto_blinkit',
    name: 'Zepto & Blinkit',
    amount: 4475,
    percentage: 18,
    color: '#d97706', // Warm amber
    trend: '-1%',
    trips: 62,
    category: '10-Min Fleet'
  },
  {
    id: 'tips_others',
    name: 'Customer Tips & Direct',
    amount: 2984,
    percentage: 12,
    color: '#2563eb', // Indigo blue
    trend: '+8%',
    trips: 36,
    category: 'Incentives'
  }
]

export const recentPayoutTransactions = [
  {
    id: 'TXN-98421',
    source: 'Zomato Fleet Delivery',
    category: 'Weekly Cycle Payout',
    type: 'Direct Deposit',
    typeColor: '#ecfdf5',
    typeTextColor: '#0d7e48',
    amount: 2450,
    status: 'Paid',
    statusColor: '#dcfce7',
    statusTextColor: '#15803d',
    date: 'Apr 16, 2026',
    iconLetter: 'Z',
    iconBg: '#e23744'
  },
  {
    id: 'TXN-98319',
    source: 'Swiggy Instamart Surge',
    category: 'Peak Hours Incentive',
    type: 'Surge Bonus',
    typeColor: '#fef3c7',
    typeTextColor: '#b45309',
    amount: 680,
    status: 'Paid',
    statusColor: '#dcfce7',
    statusTextColor: '#15803d',
    date: 'Apr 15, 2026',
    iconLetter: 'S',
    iconBg: '#fc8019'
  },
  {
    id: 'TXN-98205',
    source: 'Zepto Express Logistics',
    category: 'Orders Batch Settlement',
    type: 'Order Payout',
    typeColor: '#eff6ff',
    typeTextColor: '#1d4ed8',
    amount: 3210,
    status: 'Paid',
    statusColor: '#dcfce7',
    statusTextColor: '#15803d',
    date: 'Apr 14, 2026',
    iconLetter: 'Z',
    iconBg: '#800080'
  },
  {
    id: 'TXN-98114',
    source: 'Zomato Cycle #41 Discrepancy',
    category: 'Unexplained Cash Deduction',
    type: 'Disputed COD',
    typeColor: '#fef2f2',
    typeTextColor: '#dc2626',
    amount: -1850,
    status: 'Disputed',
    statusColor: '#fee2e2',
    statusTextColor: '#b91c1c',
    date: 'Apr 12, 2026',
    iconLetter: '!',
    iconBg: '#ef4444',
    isDisputed: true
  },
  {
    id: 'TXN-98042',
    source: 'Amazon Flex Station',
    category: 'Last Mile Fuel Allowance',
    type: 'Fuel Allowance',
    typeColor: '#f0fdf4',
    typeTextColor: '#059669',
    amount: 820,
    status: 'Paid',
    statusColor: '#dcfce7',
    statusTextColor: '#15803d',
    date: 'Apr 10, 2026',
    iconLetter: 'A',
    iconBg: '#232f3e'
  },
  {
    id: 'TXN-97910',
    source: 'Rapido Bike Taxi Rides',
    category: 'Daily Evening Settlement',
    type: 'Daily Deposit',
    typeColor: '#f8fafc',
    typeTextColor: '#475569',
    amount: 1430,
    status: 'Paid',
    statusColor: '#dcfce7',
    statusTextColor: '#15803d',
    date: 'Apr 08, 2026',
    iconLetter: 'R',
    iconBg: '#ffc107'
  }
]

export const workerProfiles = [
  {
    id: "bike_delivery",
    title: "Full-Time Food / Grocery Delivery",
    platform: "Zomato / Swiggy / Zepto",
    gross: 24860,
    fuel: 3850,
    other: 1240,
    deductions: 1850,
    hours: 52
  },
  {
    id: "auto_driver",
    title: "City Auto Rickshaw Shift",
    platform: "Ola / Uber / Rapido Auto",
    gross: 31500,
    fuel: 7200,
    other: 2100,
    deductions: 1200,
    hours: 58
  },
  {
    id: "ev_courier",
    title: "EV Parcel / Courier Partner",
    platform: "Porter / Dunzo / Shadowfax",
    gross: 21400,
    fuel: 1480, // EV charging
    other: 1850, // battery rental
    deductions: 650,
    hours: 44
  }
]

export const weeklyDayLogs = [
  { day: "Mon", trips: 18, gross: 1150, fuel: 240, net: 910 },
  { day: "Tue", trips: 20, gross: 1280, fuel: 250, net: 1030 },
  { day: "Wed", trips: 16, gross: 1020, fuel: 220, net: 800 },
  { day: "Thu", trips: 22, gross: 1390, fuel: 260, net: 1130 },
  { day: "Fri", trips: 24, gross: 1540, fuel: 280, net: 1260 },
  { day: "Sat", trips: 14, gross: 920, fuel: 200, net: -930, deductionNote: "₹1,850 penalty applied" },
  { day: "Sun", trips: 12, gross: 120, fuel: 0, net: 120 }
]
