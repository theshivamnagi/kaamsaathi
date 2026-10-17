/**
 * Pure calculation utilities for KaamSaathi worker earnings
 */

/**
 * Formats a number into Indian Rupee representation (e.g. ₹1,25,000 or -₹450)
 * @param {number} amount
 * @returns {string}
 */
export function formatRupee(amount) {
  if (isNaN(amount) || amount === null || amount === undefined) {
    return '₹0'
  }
  const isNegative = amount < 0
  const absAmount = Math.round(Math.abs(amount))
  const formatted = absAmount.toLocaleString('en-IN')
  return isNegative ? `-₹${formatted}` : `₹${formatted}`
}

/**
 * Sanitizes and validates numeric inputs, guaranteeing safe non-negative numbers
 * @param {string|number} value
 * @param {number} fallback
 * @param {number} max
 * @returns {number}
 */
export function sanitizeNumber(value, fallback = 0, max = 500000) {
  if (value === '' || value === null || value === undefined) return 0
  const parsed = Number(value)
  if (isNaN(parsed) || parsed < 0) return fallback
  return Math.min(parsed, max)
}

/**
 * Pure function to calculate comprehensive worker net take-home and metrics
 * @param {Object} inputs
 * @param {number} inputs.grossEarnings
 * @param {number} inputs.fuelExpense
 * @param {number} inputs.otherExpenses
 * @param {number} inputs.deductions
 * @param {number} inputs.hoursWorked
 * @returns {Object}
 */
export function calculateEarningsBreakdown({
  grossEarnings = 0,
  fuelExpense = 0,
  otherExpenses = 0,
  deductions = 0,
  hoursWorked = 0
}) {
  const gross = sanitizeNumber(grossEarnings)
  const fuel = sanitizeNumber(fuelExpense)
  const other = sanitizeNumber(otherExpenses)
  const ded = sanitizeNumber(deductions)
  const hours = Math.max(0, sanitizeNumber(hoursWorked, 0, 168))

  const totalExpenses = fuel + other
  const totalOutflow = totalExpenses + ded
  const netEarnings = gross - totalOutflow

  const effectiveHourlyRate = hours > 0 ? Math.round(netEarnings / hours) : 0
  const fuelExpensePct = gross > 0 ? Math.min(100, Math.round((fuel / gross) * 100)) : 0
  const totalOutflowPct = gross > 0 ? Math.min(100, Math.round((totalOutflow / gross) * 100)) : 0
  const takeHomePct = gross > 0 ? Math.max(0, Math.round((netEarnings / gross) * 100)) : 0

  return {
    gross,
    fuel,
    other,
    deductions: ded,
    hours,
    totalExpenses,
    totalOutflow,
    netEarnings,
    effectiveHourlyRate,
    fuelExpensePct,
    totalOutflowPct,
    takeHomePct,
    isLoss: netEarnings < 0,
    hasSevereDeduction: gross > 0 && (ded / gross) >= 0.2
  }
}
