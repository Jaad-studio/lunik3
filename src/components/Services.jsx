import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
  {
    icon: '🏛️',
    title: 'Le Lieu',
    desc: 'Privatisation exclusive d\'un espace de 1 200 m². Sol marbre, loges privées, espace climatisé et hauteur de plafond cathédrale.',
  },
  {
    icon: '🍽️',
    title: 'Gastronomie',
    desc: 'Traiteurs d\'élite partenaires (Halal, Oriental & Gastronomique). Buffets d\'apparat ou service à l\'assiette selon vos désirs.',
  },
  {
    icon: '💐',
    title: 'Design',
    desc: 'Trônes baroques majestueux, fleurs de soie, nappage damassé, arches florales. Une décoration féerique signée.',
  },
  {
    icon: '🎭',
    title: 'Spectacle',
    desc: 'Zaffa grandiose, danseuses orientales, orchestres live. Entrée de mariés à couper le souffle garantie.',
  },
  {
    icon: '✨',
    title: 'Lumière & Tech',
    desc: 'Lyres robotisées, fumée lourde froide, mapping vidéo, ambiance visuelle évolutive. Du cocktail au clubbing.',
  },
  {
    icon: '💍',
    title: 'Wedding Planner',
    desc: 'Coordination complète Jour J. Une équipe dédiée pour que vous viviez chaque instant en sérénité totale.',
  },
]

export default function Services() {
  const sectionRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-card-item', {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.services-grid', start: 'top 75%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={sectionRef} style={{
      padding: '120px 48px',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: '10px',
          letterSpacing: '0.4em', textTransform: 'uppercase',
          color: 'var(--gold)', marginBottom: '20px',
        }}>Signature</p>
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(32px, 4vw, 56px)',
          fontWeight: 400, fontStyle: 'italic',
          color: 'var(--cream)', marginBottom: '20px',
        }}>Services d'Exception</h2>
        <div className="divider" style={{ margin: '0 auto' }} />
      </div>

      <div className="services-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1px',
        background: 'rgba(212,175,55,0.08)',
      }}>
        {SERVICES.map((s, i) => (
          <div key={i} className="service-card-item glass-card" style={{
            padding: '48px 36px',
            cursor: 'default',
            transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            position: 'relative',
            overflow: 'hidden',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(212,175,55,0.06)'
              e.currentTarget.style.transform = 'translateY(-8px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            {/* Glow en hover */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)',
            }} />

            <div style={{ fontSize: '36px', marginBottom: '24px' }}>{s.icon}</div>
            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '22px',
              fontStyle: 'italic',
              color: 'var(--cream)',
              marginBottom: '16px',
            }}>{s.title}</h3>
            <p style={{
              fontFamily: 'var(--font-elegant)',
              fontSize: '16px',
              fontWeight: 300,
              lineHeight: 1.8,
              color: 'rgba(253,246,240,0.65)',
            }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
