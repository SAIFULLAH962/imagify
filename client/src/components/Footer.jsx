import React from 'react'

const Footer = () => {
  return (
    <footer style={{
      background: '#0d0d14',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 32,
          height: 32,
          background: 'linear-gradient(135deg, #6c63ff, #ff6584)',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 16,
        }}>✨</div>
        <span style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 20,
          fontWeight: 700,
          background: 'linear-gradient(135deg, #6c63ff, #ff6584)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>Imagify</span>
      </div>

      {/* Divider */}
      <div style={{
        width: '100%',
        maxWidth: 600,
        height: 1,
        background: 'rgba(255,255,255,0.06)',
      }} />

      {/* Bottom row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: 600,
        flexWrap: 'wrap',
        gap: 12,
      }}>
        <p style={{ color: '#606070', fontSize: 13 }}>
          © 2024 Imagify. All rights reserved.
        </p>

        {/* Social Icons */}
        <div style={{ display: 'flex', gap: 16 }}>
          {['𝕏', 'in', 'f'].map((icon, i) => (
            <div key={i} style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 13,
              color: '#606070',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}>{icon}</div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
