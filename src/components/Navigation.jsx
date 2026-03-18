import { useEffect, useRef, useState } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#philosophie', label: 'Philosophie' },
    { href: '#galerie', label: 'Galerie' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: '20px 48px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'all 0.5s ease',
      background: scrolled ? 'rgba(10,4,16,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(212,175,55,0.1)' : 'none',
    }}>
      <div style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '22px',
        fontStyle: 'italic',
        background: 'linear-gradient(135deg, #f0d060, #d4af37)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        letterSpacing: '0.05em',
      }}>
        L'UNIK
      </div>

      <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        {links.map(l => (
          <a key={l.href} href={l.href} style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(253,246,240,0.7)',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
            position: 'relative',
          }}
            onMouseEnter={e => e.target.style.color = 'var(--gold)'}
            onMouseLeave={e => e.target.style.color = 'rgba(253,246,240,0.7)'}
          >
            {l.label}
          </a>
        ))}
        <a href="tel:0652048416" style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '11px',
          letterSpacing: '0.15em',
          color: 'var(--gold)',
          border: '1px solid rgba(212,175,55,0.4)',
          padding: '9px 20px',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
        }}
          onMouseEnter={e => { e.target.style.background = 'rgba(212,175,55,0.1)'; e.target.style.borderColor = 'var(--gold)'; }}
          onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.borderColor = 'rgba(212,175,55,0.4)'; }}
        >
          06 52 04 84 16
        </a>
      </div>
    </nav>
  )
}
