import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Scene3D from './components/Scene3D'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Philosophie from './components/Philosophie'
import Galerie from './components/Galerie'
import Services from './components/Services'
import Contact from './components/Contact'
import './index.css'

function CustomCursor() {
  const dotRef = useRef()
  const ringRef = useRef()

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const onMove = e => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = mouseX + 'px'
        dotRef.current.style.top = mouseY + 'px'
      }
    }
    window.addEventListener('mousemove', onMove)

    let raf
    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ringX + 'px'
        ringRef.current.style.top = ringY + 'px'
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor" style={{ position: 'fixed', pointerEvents: 'none', zIndex: 99999 }}>
        <div className="cursor-dot" />
      </div>
      <div ref={ringRef} className="cursor" style={{ position: 'fixed', pointerEvents: 'none', zIndex: 99998 }}>
        <div className="cursor-ring" />
      </div>
    </>
  )
}

function Footer() {
  return (
    <footer style={{
      padding: '40px 48px',
      borderTop: '1px solid rgba(212,175,55,0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'rgba(10,4,16,0.95)',
    }}>
      <div style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '18px',
        fontStyle: 'italic',
        background: 'linear-gradient(135deg, #f0d060, #d4af37)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>L'UNIK</div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: 'rgba(212,175,55,0.4)', letterSpacing: '0.2em' }}>
        © 2024 L'UNIK Réception · Le Pouzin, Ardèche
      </div>
      <div style={{ display: 'flex', gap: '24px' }}>
        {['Mentions Légales', 'CGV'].map(l => (
          <a key={l} href="#" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: 'rgba(212,175,55,0.4)', letterSpacing: '0.15em', textDecoration: 'none', transition: 'color 0.3s' }}
            onMouseEnter={e => e.target.style.color = 'var(--gold)'}
            onMouseLeave={e => e.target.style.color = 'rgba(212,175,55,0.4)'}
          >{l}</a>
        ))}
      </div>
    </footer>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Loader cinématographique
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return p + Math.random() * 8 + 2
      })
    }, 60)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <CustomCursor />

      {/* LOADER */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'fixed', inset: 0, zIndex: 99990,
              background: 'var(--deep)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(48px, 8vw, 96px)',
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, #f0d060, #d4af37, #a07830)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '48px',
              }}
            >L'UNIK</motion.div>
            <div style={{ width: '200px', height: '1px', background: 'rgba(212,175,55,0.15)', position: 'relative', overflow: 'hidden' }}>
              <div style={{
                position: 'absolute', top: 0, left: 0,
                width: Math.min(progress, 100) + '%', height: '100%',
                background: 'linear-gradient(90deg, var(--gold-dark), var(--gold-light))',
                transition: 'width 0.1s ease',
                boxShadow: '0 0 8px var(--gold)',
              }} />
            </div>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: '9px',
              letterSpacing: '0.4em', textTransform: 'uppercase',
              color: 'rgba(212,175,55,0.4)', marginTop: '20px',
            }}>Préparation de votre expérience</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Canvas 3D en background fixe */}
      <Scene3D />

      {/* Gradient de fond global */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'linear-gradient(180deg, rgba(10,4,16,0.4) 0%, rgba(18,8,32,0.2) 50%, rgba(10,4,16,0.6) 100%)',
      }} />

      {/* Overlay haut de page vignette */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: '200px', zIndex: 2,
        background: 'linear-gradient(to bottom, rgba(10,4,16,0.5), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Contenu */}
      <div className="content-layer">
        <Navigation />
        <Hero />

        {/* Séparateur */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)', margin: '0 48px' }} />

        <Philosophie />

        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.15), transparent)', margin: '0 48px' }} />

        <Galerie />

        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.15), transparent)', margin: '0 48px' }} />

        <Services />

        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.15), transparent)', margin: '0 48px' }} />

        <Contact />
        <Footer />
      </div>
    </>
  )
}
