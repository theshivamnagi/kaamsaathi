import React from 'react'
import { AlertCircle, AlertTriangle, CheckCircle, Info } from 'lucide-react'

export function AlertBanner({
  type = 'warning', // 'warning' | 'info' | 'success'
  title,
  children,
  action,
  className = ''
}) {
  const Icon = {
    warning: AlertTriangle,
    info: Info,
    success: CheckCircle
  }[type] || AlertCircle

  return (
    <div className={`alert-banner alert-banner-${type} ${className}`}>
      <div style={{ flexShrink: 0, marginTop: '2px' }}>
        <Icon size={18} />
      </div>
      <div style={{ flexGrow: 1 }}>
        {title && <div style={{ fontWeight: 600, marginBottom: '2px' }}>{title}</div>}
        <div>{children}</div>
      </div>
      {action && <div style={{ flexShrink: 0 }}>{action}</div>}
    </div>
  )
}
