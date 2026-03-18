import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const titleRef = useRef()
  const subtitleRef = useRef()
  const scrollRef = useRef()

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 })
    tl.from('.hero-ornament', { opacity: 0, scale: 0.5, duration: 1.5, ease: 'power3.out' })
      .from('.hero-eyebrow', { opacity: 0, letterSpacing: '0.5em', duration: 1, ease: 'power2.out' }, '-=0.8')
      .from('.hero-title-1', { opacity: 0, y: 60, duration: 1.2, ease: 'power3.out' }, '-=0.5')
      .from('.hero-title-2', { opacity: 0, y: 60, duration: 1.2, ease: 'power3.out' }, '-=0.9')
      .from('.hero-subtitle', { opacity: 0, y: 30, duration: 1, ease: 'power2.out' }, '-=0.6')
      .from('.hero-divider', { scaleX: 0, duration: 1.2, ease: 'power2.inOut' }, '-=0.5')
      .from('.hero-cta', { opacity: 0, y: 20, stagger: 0.15, duration: 0.8, ease: 'power2.out' }, '-=0.6')
      .from('.hero-scroll', { opacity: 0, duration: 1 }, '-=0.3')
  }, [])

  return (
    <section id="hero" style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      background: 'radial-gradient(ellipse at 50% 60%, rgba(107,16,32,0.25) 0%, rgba(10,4,16,0) 70%)',
    }}>
      {/* Vignette overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,4,16,0.8) 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{ textAlign: 'center', padding: '0 24px', maxWidth: '900px' }}>
        {/* Ornement supérieur */}
        <div className="hero-ornament" style={{ marginBottom: '32px' }}>
          <svg width="200" height="30" viewBox="0 0 200 30" fill="none">
            <line x1="0" y1="15" x2="70" y2="15" stroke="url(#goldGrad)" strokeWidth="0.5"/>
            <circle cx="90" cy="15" r="3" stroke="#d4af37" strokeWidth="0.5" fill="none"/>
            <circle cx="100" cy="15" r="5" stroke="#d4af37" strokeWidth="0.5" fill="none"/>
            <circle cx="110" cy="15" r="3" stroke="#d4af37" strokeWidth="0.5" fill="none"/>
            <line x1="130" y1="15" x2="200" y2="15" stroke="url(#goldGrad2)" strokeWidth="0.5"/>
            <defs>
              <linearGradient id="goldGrad" x1="0" y1="0" x2="70" y2="0">
                <stop offset="0%" stopColor="#d4af37" stopOpacity="0"/>
                <stop offset="100%" stopColor="#d4af37" stopOpacity="1"/>
              </linearGradient>
              <linearGradient id="goldGrad2" x1="0" y1="0" x2="70" y2="0">
                <stop offset="0%" stopColor="#d4af37" stopOpacity="1"/>
                <stop offset="100%" stopColor="#d4af37" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <p className="hero-eyebrow" style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '11px',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          marginBottom: '24px',
          opacity: 0.9,
        }}>
          Le Pouzin · Ardèche · France
        </p>

        <h1 ref={titleRef} style={{
          fontFamily: 'var(--font-serif)',
          lineHeight: 1,
          marginBottom: '24px',
        }}>
          <span className="hero-title-1" style={{
            display: 'block',
            fontSize: 'clamp(72px, 12vw, 160px)',
            fontWeight: 700,
            fontStyle: 'italic',
            background: 'linear-gradient(135deg, #f0d060 0%, #d4af37 40%, #a07830 70%, #d4af37 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'shimmer 4s linear infinite',
          }}>L'UNIK</span>
        </h1>

        <p className="hero-subtitle" ref={subtitleRef} style={{
          fontFamily: 'var(--font-elegant)',
          fontSize: 'clamp(16px, 2.5vw, 22px)',
          fontWeight: 300,
          fontStyle: 'italic',
          color: 'rgba(253,246,240,0.8)',
          maxWidth: '560px',
          margin: '0 auto 40px',
          lineHeight: 1.7,
        }}>
          "Un écrin de prestige où vos rêves deviennent éternité.<br/>
          Mariages d'exception &amp; atmosphères envoûtantes."
        </p>

        <div className="hero-divider" style={{
          width: '80px', height: '1px',
          background: 'linear-gradient(90deg, transparent, #d4af37, transparent)',
          margin: '0 auto 48px',
        }} />

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#philosophie" className="hero-cta" style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '12px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--deep)',
            background: 'linear-gradient(135deg, #f0d060, #d4af37)',
            padding: '16px 36px',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'all 0.4s ease',
            boxShadow: '0 0 30px rgba(212,175,55,0.3)',
          }}
            onMouseEnter={e => { e.target.style.boxShadow = '0 0 50px rgba(212,175,55,0.6)'; e.target.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.target.style.boxShadow = '0 0 30px rgba(212,175,55,0.3)'; e.target.style.transform = 'translateY(0)'; }}
          >
            Découvrir l'univers
          </a>
          <a href="#contact" className="hero-cta" style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '12px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            border: '1px solid rgba(212,175,55,0.4)',
            padding: '16px 36px',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'all 0.4s ease',
            backdropFilter: 'blur(10px)',
          }}
            onMouseEnter={e => { e.target.style.borderColor='var(--gold)'; e.target.style.background='rgba(212,175,55,0.1)'; }}
            onMouseLeave={e => { e.target.style.borderColor='rgba(212,175,55,0.4)'; e.target.style.background='transparent'; }}
          >
            Nous contacter
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll" style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        opacity: 0.5,
      }}>
        <span style={{ fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)' }}>Défiler</span>
        <div style={{ width: '1px', height: '50px', background: 'linear-gradient(to bottom, var(--gold), transparent)', animation: 'float 2s ease-in-out infinite' }} />
      </div>
    </section>
  )
}
