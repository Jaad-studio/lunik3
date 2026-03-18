import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Philosophie() {
  const sectionRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.philo-label', { opacity: 0, y: 40, duration: 1, scrollTrigger: { trigger: '.philo-label', start: 'top 80%' } })
      gsap.from('.philo-title', { opacity: 0, y: 60, duration: 1.2, delay: 0.2, scrollTrigger: { trigger: '.philo-title', start: 'top 80%' } })
      gsap.from('.philo-text', { opacity: 0, y: 30, duration: 1, delay: 0.4, scrollTrigger: { trigger: '.philo-text', start: 'top 80%' } })
      gsap.from('.philo-stat', { opacity: 0, y: 30, stagger: 0.2, duration: 0.8, scrollTrigger: { trigger: '.philo-stats', start: 'top 80%' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const stats = [
    { value: '500+', label: 'Mariages célébrés' },
    { value: '1 200', label: 'm² de magnificence' },
    { value: '15', label: 'Ans de prestige' },
    { value: '∞', label: 'Souvenirs inoubliables' },
  ]

  return (
    <section id="philosophie" ref={sectionRef} style={{
      padding: '140px 48px',
      background: 'linear-gradient(180deg, rgba(10,4,16,0) 0%, rgba(18,8,32,0.6) 50%, rgba(10,4,16,0) 100%)',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <p className="philo-label" style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '10px',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          marginBottom: '24px',
        }}>
          Notre Promesse
        </p>
        <h2 className="philo-title" style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 400,
          fontStyle: 'italic',
          lineHeight: 1.2,
          marginBottom: '32px',
          color: 'var(--cream)',
        }}>
          Une Odyssée Féerique
        </h2>
        <div className="divider" style={{ margin: '0 auto 40px' }} />
        <p className="philo-text" style={{
          fontFamily: 'var(--font-elegant)',
          fontSize: 'clamp(17px, 2vw, 22px)',
          fontWeight: 300,
          lineHeight: 1.9,
          color: 'rgba(253,246,240,0.75)',
          maxWidth: '680px',
          margin: '0 auto',
        }}>
          Bien plus qu'une salle, L'UNIK est une scène de théâtre dédiée à l'amour.
          Imaginez des volumes impériaux où le marbre blanc reflète l'éclat de mille pampilles de cristal.
          Conçu pour éblouir, notre espace module la lumière et le son pour créer des atmosphères progressives —
          de la solennité de l'accueil à l'euphorie de la fête.
        </p>
      </div>

      {/* Stats */}
      <div className="philo-stats" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1px',
        background: 'rgba(212,175,55,0.1)',
        border: '1px solid rgba(212,175,55,0.1)',
      }}>
        {stats.map((s, i) => (
          <div key={i} className="philo-stat" style={{
            padding: '40px 20px',
            textAlign: 'center',
            background: 'rgba(10,4,16,0.8)',
            transition: 'background 0.4s ease',
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(212,175,55,0.08)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(10,4,16,0.8)'}
          >
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontStyle: 'italic',
              background: 'linear-gradient(135deg, #f0d060, #d4af37)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '8px',
            }}>{s.value}</div>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '10px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(253,246,240,0.5)',
            }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
