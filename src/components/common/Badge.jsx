import React from 'react'

export function Badge({ children, variant = 'default', icon: Icon, className = '' }) {
  const variantClass = {
    default: '',
    pink: 'badge-pill-pink',
    teal: 'badge-pill-teal',
    ochre: 'badge-pill-ochre',
    success: 'badge-pill-success',
    warning: 'badge-pill-warning'
  }[variant] || ''

  return (
    <span className={`badge-pill ${variantClass} ${className}`}>
      {Icon && <Icon size={12} />}
      <span>{children}</span>
    </span>
  )
}
