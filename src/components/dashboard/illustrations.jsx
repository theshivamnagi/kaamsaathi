import React from 'react'

/**
 * UMANG Logo Icon - Smartphone with orange hand finger tapping the screen
 */
export function UmangLogo({ size = 38 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      {/* Smartphone body */}
      <rect
        x="8"
        y="4"
        width="28"
        height="40"
        rx="6"
        stroke="#1a56db"
        strokeWidth="3.5"
        fill="#ffffff"
      />
      {/* Speaker top */}
      <line x1="18" y1="8" x2="26" y2="8" stroke="#1a56db" strokeWidth="2.5" strokeLinecap="round" />
      {/* Screen area subtle gradient */}
      <rect x="11.5" y="12" width="21" height="26" rx="2" fill="#eff6ff" />
      {/* Orange hand with pointing finger tapping screen */}
      <path
        d="M24 16C24 14.3431 22.6569 13 21 13C19.3431 13 18 14.3431 18 16V28C18 28.5 17.5 29 16.5 28C15.5 27 14.5 26.5 13.5 27.5C12.5 28.5 13 30 14.5 32C16.5 34.5 19 39 24 39C29 39 31 35 31 31V23C31 21.3431 29.6569 20 28 20C27.5 20 27 20.2 26.5 20.5V19C26.5 17.3431 25.1569 16 23.5 16H24Z"
        fill="#f97316"
        stroke="#ea580c"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Tap ripples */}
      <circle cx="21" cy="13" r="3" stroke="#f97316" strokeWidth="1" strokeDasharray="2 2" fill="none" opacity="0.7" />
    </svg>
  )
}

/**
 * MANAS Drug Prohibition Illustration (Stop Drug Trafficking Banner)
 * Features hands holding red circle with syringe, pills, cannabis leaf crossed out
 */
export function ManasIllustration({ width = 360, height = 220 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 380 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
    >
      <defs>
        {/* Drop shadow filter */}
        <filter id="bannerShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000000" floodOpacity="0.4" />
        </filter>
        <radialGradient id="circleBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#0a192f" />
        </radialGradient>
        <linearGradient id="armLeft" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="armRight" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fed7aa" />
          <stop offset="100%" stopColor="#fdba74" />
        </linearGradient>
        <linearGradient id="syringeLiquid" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
      </defs>

      {/* Background glow circle */}
      <circle cx="190" cy="115" r="95" fill="url(#circleBg)" opacity="0.6" />

      {/* Right Arm & Sleeve */}
      <path d="M350 0L310 65C305 73 300 80 295 90L275 110" stroke="url(#armRight)" strokeWidth="36" strokeLinecap="round" />
      <path d="M285 100C295 105 310 110 320 95L305 85" fill="url(#skin)" />
      {/* Right Hand fingers holding the rim */}
      <ellipse cx="282" cy="108" rx="10" ry="16" transform="rotate(30 282 108)" fill="url(#skin)" />
      <ellipse cx="288" cy="122" rx="8" ry="14" transform="rotate(20 288 122)" fill="url(#skin)" />
      <ellipse cx="286" cy="136" rx="8" ry="13" transform="rotate(10 286 136)" fill="url(#skin)" />
      <ellipse cx="280" cy="148" rx="7" ry="12" fill="url(#skin)" />

      {/* Left Arm & Sleeve */}
      <path d="M30 0L70 65C75 73 80 80 85 90L105 110" stroke="url(#armLeft)" strokeWidth="36" strokeLinecap="round" />
      {/* Left Hand fingers holding the rim */}
      <ellipse cx="98" cy="108" rx="10" ry="16" transform="rotate(-30 98 108)" fill="url(#skin)" />
      <ellipse cx="92" cy="122" rx="8" ry="14" transform="rotate(-20 92 122)" fill="url(#skin)" />
      <ellipse cx="94" cy="136" rx="8" ry="13" transform="rotate(-10 94 136)" fill="url(#skin)" />
      <ellipse cx="100" cy="148" rx="7" ry="12" fill="url(#skin)" />

      {/* Inner items inside the prohibited circle */}
      <g id="prohibitedItems" transform="translate(190, 115)">
        {/* Blister strip of medicine pills (top right) */}
        <g transform="translate(25, -60) rotate(15)">
          <rect x="0" y="0" width="38" height="52" rx="6" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2" />
          <ellipse cx="12" cy="14" rx="6" ry="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1.5" />
          <ellipse cx="26" cy="14" rx="6" ry="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1.5" />
          <ellipse cx="12" cy="28" rx="6" ry="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1.5" />
          <ellipse cx="26" cy="28" rx="6" ry="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1.5" />
          <ellipse cx="12" cy="42" rx="6" ry="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1.5" />
          <ellipse cx="26" cy="42" rx="6" ry="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1.5" />
        </g>

        {/* Cannabis leaf (bottom left) */}
        <g transform="translate(-65, 10) scale(0.75)">
          <path
            d="M20 50 C10 40 0 35 -15 32 C-5 37 5 44 12 55
               C0 46 -15 45 -30 46 C-18 52 -5 58 8 62
               C-5 62 -22 66 -35 75 C-18 76 0 73 14 68
               C0 76 -10 90 -12 105 C-2 95 8 82 18 72
               C18 88 18 100 20 115 C22 100 22 88 22 72
               C32 82 42 95 52 105 C50 90 40 76 26 68
               C40 73 58 76 75 75 C62 66 45 62 32 62
               C45 58 58 52 70 46 C55 45 40 46 28 55
               C35 44 45 37 55 32 C40 35 30 40 20 50 Z"
            fill="#22c55e"
            opacity="0.9"
          />
        </g>

        {/* Medical Syringe with red liquid & measurement marks (center diagonal) */}
        <g transform="translate(-15, -45) rotate(45)">
          {/* Needle */}
          <line x1="12" y1="-30" x2="12" y2="0" stroke="#e2e8f0" strokeWidth="2.5" strokeLinecap="round" />
          {/* Syringe barrel */}
          <rect x="2" y="0" width="20" height="75" rx="3" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" opacity="0.95" />
          {/* Red liquid inside */}
          <rect x="4" y="25" width="16" height="48" fill="url(#syringeLiquid)" />
          {/* Measurement tick marks */}
          <line x1="16" y1="10" x2="20" y2="10" stroke="#334155" strokeWidth="1.5" />
          <line x1="14" y1="20" x2="20" y2="20" stroke="#334155" strokeWidth="1.5" />
          <line x1="16" y1="30" x2="20" y2="30" stroke="#ffffff" strokeWidth="1.5" />
          <line x1="14" y1="40" x2="20" y2="40" stroke="#ffffff" strokeWidth="1.5" />
          <line x1="16" y1="50" x2="20" y2="50" stroke="#ffffff" strokeWidth="1.5" />
          <line x1="14" y1="60" x2="20" y2="60" stroke="#ffffff" strokeWidth="1.5" />
          {/* Plunger */}
          <rect x="7" y="75" width="10" height="25" fill="#64748b" />
          <rect x="2" y="100" width="20" height="6" rx="2" fill="#475569" />
        </g>

        {/* Loose capsules & pills */}
        <g transform="translate(30, 30) rotate(-20)">
          <rect x="0" y="0" width="14" height="28" rx="7" fill="#3b82f6" />
          <path d="M0 14 H14 V21 A7 7 0 0 1 0 21 Z" fill="#ffffff" />
        </g>
        <circle cx="-35" cy="-20" r="8" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
        <line x1="-39" y1="-20" x2="-31" y2="-20" stroke="#94a3b8" strokeWidth="1.5" />
      </g>

      {/* Red Prohibition Circle and Diagonal Slash */}
      <circle
        cx="190"
        cy="115"
        r="88"
        stroke="#dc2626"
        strokeWidth="15"
        fill="none"
        filter="url(#bannerShadow)"
      />
      <line
        x1="128"
        y1="53"
        x2="252"
        y2="177"
        stroke="#dc2626"
        strokeWidth="15"
        strokeLinecap="round"
      />
    </svg>
  )
}

/**
 * Health Graphic - Red 3D Emergency First Aid Kit Box with White Cross
 */
export function FirstAidKitGraphic({ width = 110, height = 90 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 140 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.25))' }}
    >
      <defs>
        <linearGradient id="kitFront" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#b91c1c" />
        </linearGradient>
        <linearGradient id="kitTop" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#f87171" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
        <linearGradient id="kitHandle" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
      </defs>

      {/* Handle */}
      <path
        d="M48 28 C48 14 92 14 92 28"
        stroke="url(#kitHandle)"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />

      {/* 3D Top bevel */}
      <path
        d="M20 36 L120 36 L110 26 L30 26 Z"
        fill="url(#kitTop)"
        opacity="0.9"
      />

      {/* Main Kit Front Box */}
      <rect
        x="18"
        y="34"
        width="104"
        height="76"
        rx="14"
        fill="url(#kitFront)"
      />

      {/* Silver metallic clasps / latches */}
      <rect x="36" y="32" width="10" height="10" rx="2" fill="#cbd5e1" stroke="#64748b" strokeWidth="1" />
      <rect x="94" y="32" width="10" height="10" rx="2" fill="#cbd5e1" stroke="#64748b" strokeWidth="1" />

      {/* Center White Cross */}
      <path
        d="M70 50 V94 M48 72 H92"
        stroke="#ffffff"
        strokeWidth="15"
        strokeLinecap="square"
      />
    </svg>
  )
}

/**
 * Emergency Graphic - Stylized hand holding 3D Purple Megaphone / Loudspeaker
 */
export function MegaphoneGraphic({ width = 120, height = 95 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 150 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.25))' }}
    >
      <defs>
        <linearGradient id="megaCone" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#f3e8ff" />
          <stop offset="100%" stopColor="#9333ea" />
        </linearGradient>
        <linearGradient id="megaBack" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#7e22ce" />
        </linearGradient>
        <linearGradient id="handSkin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fed7aa" />
          <stop offset="100%" stopColor="#fdba74" />
        </linearGradient>
      </defs>

      {/* Hand holding the handle */}
      <g transform="translate(32, 60)">
        {/* Forearm */}
        <path d="M45 45 L58 60 L75 42 L62 28 Z" fill="url(#handSkin)" />
        {/* Fingers wrapped around handle */}
        <rect x="36" y="22" width="22" height="8" rx="4" fill="url(#handSkin)" />
        <rect x="34" y="30" width="24" height="8" rx="4" fill="url(#handSkin)" />
        <rect x="35" y="38" width="23" height="8" rx="4" fill="url(#handSkin)" />
        <rect x="37" y="46" width="20" height="8" rx="4" fill="url(#handSkin)" />
        {/* Thumb */}
        <ellipse cx="48" cy="18" rx="7" ry="10" transform="rotate(-30 48 18)" fill="url(#handSkin)" />
      </g>

      {/* Megaphone Handle */}
      <path
        d="M80 55 L70 85 L78 87 L88 57 Z"
        fill="#581c87"
      />

      {/* Megaphone Cone Body pointing to left */}
      <path
        d="M75 42 L25 22 L20 62 L75 52 Z"
        fill="url(#megaCone)"
      />

      {/* Megaphone Open Bell/Rim (left ellipse) */}
      <ellipse
        cx="22"
        cy="42"
        rx="9"
        ry="22"
        fill="#ffffff"
        stroke="#9333ea"
        strokeWidth="3.5"
      />
      <ellipse
        cx="22"
        cy="42"
        rx="5"
        ry="14"
        fill="#7e22ce"
      />

      {/* Back cylindrical cap of megaphone */}
      <path
        d="M75 36 C75 36 96 34 100 47 C100 58 75 56 75 56 Z"
        fill="url(#megaBack)"
      />
      <circle cx="86" cy="46" r="6" fill="#e9d5ff" />
    </svg>
  )
}

/**
 * Travel Graphic - Modern High Speed Bullet Train (Vande Bharat Express Style)
 */
export function TrainGraphic({ width = 135, height = 90 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 170 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.22))' }}
    >
      <defs>
        <linearGradient id="trainBody" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#f1f5f9" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="windshield" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
      </defs>

      {/* Streamlined train nose facing left */}
      <path
        d="M10 70 C15 52 40 40 75 38 L170 38 L170 82 L35 82 C20 82 12 76 10 70 Z"
        fill="url(#trainBody)"
      />

      {/* Dark Panoramic Windshield Glass */}
      <path
        d="M20 62 C26 50 45 44 65 44 L90 44 L80 62 Z"
        fill="url(#windshield)"
      />
      {/* Windshield reflection glare */}
      <path d="M30 54 L55 46 L50 56 Z" fill="#38bdf8" opacity="0.6" />

      {/* Aerodynamic Blue / Orange Racing Stripe (Vande Bharat livery) */}
      <path d="M12 70 L170 70 L170 75 L22 75 Z" fill="#0284c7" />
      <path d="M15 75 L170 75 L170 78 L25 78 Z" fill="#ea580c" />

      {/* Passenger side windows */}
      <rect x="98" y="46" width="18" height="12" rx="3" fill="#0f172a" />
      <rect x="122" y="46" width="18" height="12" rx="3" fill="#0f172a" />
      <rect x="146" y="46" width="18" height="12" rx="3" fill="#0f172a" />

      {/* High-beam LED Headlight */}
      <polygon points="12,68 18,65 18,71" fill="#facc15" />
      {/* Under-carriage bogie track */}
      <rect x="35" y="82" width="135" height="6" fill="#475569" />
      <circle cx="55" cy="88" r="4" fill="#334155" />
      <circle cx="85" cy="88" r="4" fill="#334155" />
      <circle cx="125" cy="88" r="4" fill="#334155" />
      <circle cx="155" cy="88" r="4" fill="#334155" />
    </svg>
  )
}

/**
 * Utility Graphic - Green Indian LPG Cooking Gas Cylinder
 */
export function LpgCylinderGraphic({ width = 80, height = 100 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.25))' }}
    >
      <defs>
        <linearGradient id="cylinderBody" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#15803d" />
          <stop offset="35%" stopColor="#22c55e" />
          <stop offset="70%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#14532d" />
        </linearGradient>
        <linearGradient id="collarRing" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#15803d" />
          <stop offset="50%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#14532d" />
        </linearGradient>
      </defs>

      {/* Top Protective Collar Ring */}
      <path
        d="M30 14 C30 10 70 10 70 14 V26 C70 28 65 30 60 30 H40 C35 30 30 28 30 26 Z"
        fill="url(#collarRing)"
        stroke="#14532d"
        strokeWidth="1.5"
      />
      {/* Handle cutout in collar */}
      <rect x="42" y="15" width="16" height="6" rx="3" fill="#0f172a" opacity="0.3" />

      {/* Brass Valve */}
      <rect x="46" y="24" width="8" height="8" rx="1.5" fill="#eab308" stroke="#ca8a04" strokeWidth="1" />

      {/* Upper Dome */}
      <path
        d="M20 46 C20 32 80 32 80 46 Z"
        fill="url(#cylinderBody)"
      />

      {/* Main Cylinder Tank Body */}
      <rect
        x="20"
        y="46"
        width="60"
        height="64"
        fill="url(#cylinderBody)"
      />

      {/* Bottom Rounded Base */}
      <path
        d="M20 110 C20 118 80 118 80 110 Z"
        fill="url(#cylinderBody)"
      />

      {/* Bottom Foot Ring */}
      <ellipse cx="50" cy="120" rx="24" ry="5" fill="#14532d" stroke="#166534" strokeWidth="2" />

      {/* Central White Flame / Emblem Badge */}
      <circle cx="50" cy="74" r="14" fill="#ffffff" opacity="0.9" />
      {/* Flame Icon */}
      <path
        d="M50 64 C50 64 56 69 56 74 C56 77.3 53.3 80 50 80 C46.7 80 44 77.3 44 74 C44 70 48 67 50 64 Z"
        fill="#15803d"
      />
    </svg>
  )
}

/**
 * Floating Assistant Avatar Graphic (Indian Virtual Assistant / Saathi)
 */
export function ChatbotAvatarGraphic({ size = 52 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', borderRadius: '50%' }}
    >
      <defs>
        <linearGradient id="avatarBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#fde047" />
        </linearGradient>
        <linearGradient id="saree" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#c2410c" />
        </linearGradient>
      </defs>

      {/* Circular backdrop */}
      <circle cx="32" cy="32" r="32" fill="url(#avatarBg)" />

      {/* Hair Bun */}
      <circle cx="32" cy="18" r="14" fill="#18181b" />

      {/* Neck & Shoulders / Saree */}
      <path
        d="M12 60 C12 46 22 42 32 42 C42 42 52 46 52 60 Z"
        fill="url(#saree)"
      />
      {/* Saree gold border pallu */}
      <path d="M22 43 L38 60 L44 60 L28 43 Z" fill="#fbbf24" />

      {/* Face & Ears */}
      <circle cx="21" cy="28" r="3.5" fill="#fdba74" />
      <circle cx="43" cy="28" r="3.5" fill="#fdba74" />
      <ellipse cx="32" cy="28" rx="10" ry="12" fill="#fed7aa" />

      {/* Hair front parting */}
      <path d="M22 24 C26 18 38 18 42 24 C38 20 26 20 22 24 Z" fill="#18181b" />

      {/* Red Bindi */}
      <circle cx="32" cy="24" r="1.5" fill="#dc2626" />

      {/* Eyes & Smile */}
      <circle cx="28" cy="27" r="1.2" fill="#18181b" />
      <circle cx="36" cy="27" r="1.2" fill="#18181b" />
      <path d="M29 32 C30.5 34 33.5 34 35 32" stroke="#b45309" strokeWidth="1.2" strokeLinecap="round" />

      {/* Assistant Headset */}
      <path d="M21 28 C20 18 44 18 43 28" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" fill="none" />
      <rect x="19" y="26" width="3" height="6" rx="1.5" fill="#1d4ed8" />
      {/* Mic boom */}
      <path d="M21 30 L26 35" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="27" cy="35" r="1.5" fill="#1d4ed8" />
    </svg>
  )
}
