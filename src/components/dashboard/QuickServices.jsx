import React from 'react'
import { 
  FirstAidKitGraphic, 
  MegaphoneGraphic, 
  TrainGraphic, 
  LpgCylinderGraphic 
} from './illustrations'

export function QuickServices({ onSelectCategory }) {
  const services = [
    {
      id: 'health',
      title: 'Health',
      gradient: 'linear-gradient(135deg, #168a7f 0%, #1ea79a 50%, #2fcca9 100%)',
      graphic: <FirstAidKitGraphic width={120} height={95} />,
      categoryKey: 'safety'
    },
    {
      id: 'emergency',
      title: 'Emergency',
      gradient: 'linear-gradient(135deg, #7c3182 0%, #993ea0 50%, #b84cb8 100%)',
      graphic: <MegaphoneGraphic width={130} height={95} />,
      categoryKey: 'safety'
    },
    {
      id: 'travel',
      title: 'Travel',
      gradient: 'linear-gradient(135deg, #4d8f58 0%, #68b975 50%, #86d795 100%)',
      graphic: <TrainGraphic width={140} height={90} />,
      categoryKey: 'rights'
    },
    {
      id: 'utility',
      title: 'Utility',
      gradient: 'linear-gradient(135deg, #768ca5 0%, #8ea5bf 50%, #a8bcd4 100%)',
      graphic: <LpgCylinderGraphic width={85} height={105} />,
      categoryKey: 'schemes'
    }
  ]

  return (
    <div style={{ width: '100%', marginBottom: '32px' }}>
      {/* Header: Pin icon + Quick Services */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
        <span style={{ fontSize: '18px' }}>📌</span>
        <h3
          style={{
            fontSize: '18px',
            fontWeight: 700,
            color: '#1e293b',
            margin: 0,
            letterSpacing: '-0.2px'
          }}
        >
          Quick Services
        </h3>
      </div>

      {/* 4 Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '16px'
        }}
      >
        {services.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectCategory && onSelectCategory(item.categoryKey, item.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onSelectCategory && onSelectCategory(item.categoryKey, item.id)
              }
            }}
            style={{
              position: 'relative',
              height: '135px',
              borderRadius: '16px',
              background: item.gradient,
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              overflow: 'hidden',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              boxSizing: 'border-box'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 10px 24px rgba(0,0,0,0.14)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none'
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.06)'
            }}
          >
            {/* Title on Left */}
            <div style={{ zIndex: 2 }}>
              <span
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#ffffff',
                  letterSpacing: '-0.2px'
                }}
              >
                {item.title}
              </span>
            </div>

            {/* 3D Graphic / Image on Right */}
            <div
              style={{
                position: 'absolute',
                right: '10px',
                bottom: '10px',
                zIndex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: 'scale(0.95)'
              }}
            >
              {item.graphic}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
