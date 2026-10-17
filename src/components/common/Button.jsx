import React from 'react'

export function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'on-color' | 'text-link'
  size = 'md', // 'sm' | 'md' | 'lg'
  fullWidth = false,
  className = '',
  icon: Icon,
  iconPosition = 'left',
  ...props
}) {
  const variantClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    'on-color': 'btn-on-color',
    'text-link': 'btn-text-link'
  }[variant] || 'btn-primary'

  const sizeClass = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg'
  }[size] || ''

  const widthStyle = fullWidth ? { width: '100%' } : {}

  return (
    <button
      className={`btn ${variantClass} ${sizeClass} ${className}`}
      style={widthStyle}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 15 : size === 'lg' ? 18 : 16} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 15 : size === 'lg' ? 18 : 16} />}
    </button>
  )
}
