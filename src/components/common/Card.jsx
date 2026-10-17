import React from 'react'

export function FeatureCard({
  color = 'cream', // 'pink' | 'teal' | 'lavender' | 'peach' | 'ochre' | 'cream' | 'mint' | 'coral'
  children,
  className = '',
  onClick,
  ...props
}) {
  const colorClass = `feature-card-${color}`
  const clickableStyle = onClick ? { cursor: 'pointer' } : {}

  return (
    <div
      className={`feature-card ${colorClass} ${className}`}
      style={clickableStyle}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  )
}

export function ContentCard({ children, className = '', ...props }) {
  return (
    <div className={`content-card ${className}`} {...props}>
      {children}
    </div>
  )
}
