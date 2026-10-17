export const defaultEarningsData = {
  grossEarnings: 7420,
  fuelExpense: 1450,
  otherExpenses: 520, // bike servicing & mobile data recharge
  deductions: 1850,   // disputed platform deduction + bag security
  hoursWorked: 48,
  period: "Weekly Settlement (06 Oct - 12 Oct)"
}

export const workerProfiles = [
  {
    id: "bike_delivery",
    title: "Full-Time Food / Grocery Delivery",
    platform: "Zomato / Swiggy / Zepto",
    gross: 7420,
    fuel: 1450,
    other: 520,
    deductions: 1850,
    hours: 48
  },
  {
    id: "auto_driver",
    title: "City Auto Rickshaw Shift",
    platform: "Ola / Uber / Rapido Auto",
    gross: 8900,
    fuel: 2200,
    other: 650,
    deductions: 800,
    hours: 54
  },
  {
    id: "ev_courier",
    title: "EV Parcel / Courier Partner",
    platform: "Porter / Dunzo / Shadowfax",
    gross: 6200,
    fuel: 480, // EV charging
    other: 750, // battery rental
    deductions: 450,
    hours: 40
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
