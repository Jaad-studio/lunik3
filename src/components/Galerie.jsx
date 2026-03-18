import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const PHOTOS = [
  {
    url: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?auto=format&fit=crop&w=800&q=80',
    label: 'Entrée Triomphale',
    sub: 'L\'arrivée des Mariés',
  },
  {
    url: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80',
    label: 'Grand Salon',
    sub: 'Dîner aux Chandelles',
  },
  {
    url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80',
    label: 'Art de la Table',
    sub: 'Porcelaine & Cristal',
  },
  {
    url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
    label: 'Gastronomie',
    sub: 'Buffet d\'Apparat',
  },
  {
    url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
    label: 'Clubbing & Lumières',
    sub: 'Lyres & Ambiance Nuit',
  },
  {
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    label: 'Loges Privées',
    sub: 'Excellence & Intimité',
  },
]

export default function Galerie() {
  const [active, setActive] = useState(null)
  const sectionRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.galerie-item', {
        opacity: 0, y: 60, scale: 0.95,
        stagger: 0.12, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.galerie-grid', start: 'top 75%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="galerie" ref={sectionRef} style={{
      padding: '120px 48px',
      background: 'radial-gradient(ellipse at 50% 0%, rgba(107,16,32,0.15) 0%, transparent 60%)',
    }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p style={{ fontFamily:'var(--font-sans)', fontSize:'10px', letterSpacing:'0.4em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'20px' }}>Nos Espaces</p>
          <h2 style={{ fontFamily:'var(--font-serif)', fontSize:'clamp(32px, 4vw, 56px)', fontWeight:400, fontStyle:'italic', color:'var(--cream)', marginBottom:'20px' }}>
            L'Univers L'UNIK
          </h2>
          <div className="divider" style={{ margin: '0 auto' }} />
        </div>

        <div className="galerie-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(2, 320px)',
          gap: '12px',
        }}>
          {PHOTOS.map((p, i) => (
            <div key={i} className="galerie-item" style={{
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              gridColumn: i === 0 ? 'span 2' : 'span 1',
              gridRow: i === 0 || i === 3 ? 'span 1' : 'span 1',
            }}
              onClick={() => setActive(i)}
            >
              <img
                src={p.url}
                alt={p.label}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  display: 'block',
                }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,4,16,0.85) 0%, transparent 60%)',
                transition: 'opacity 0.4s ease',
              }} />
              <div style={{
                position: 'absolute', bottom: '24px', left: '24px', right: '24px',
              }}>
                <p style={{ fontFamily:'var(--font-serif)', fontSize:'18px', fontStyle:'italic', color:'var(--cream)', marginBottom:'4px' }}>{p.label}</p>
                <p style={{ fontFamily:'var(--font-sans)', fontSize:'10px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gold)', opacity:0.8 }}>{p.sub}</p>
              </div>
              {/* Gold border on hover */}
              <div style={{
                position: 'absolute', inset: 0,
                border: '1px solid rgba(212,175,55,0)',
                transition: 'border-color 0.4s ease',
                pointerEvents: 'none',
              }} />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          onClick={() => setActive(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(10,4,16,0.95)',
            backdropFilter: 'blur(20px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <div style={{ maxWidth: '85vw', maxHeight: '85vh', position: 'relative' }}>
            <img src={PHOTOS[active].url} alt="" style={{
              maxWidth: '100%', maxHeight: '80vh',
              objectFit: 'contain',
              border: '1px solid rgba(212,175,55,0.3)',
              boxShadow: '0 0 80px rgba(212,175,55,0.2)',
            }} />
            <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <p style={{ fontFamily:'var(--font-serif)', fontSize:'22px', fontStyle:'italic', color:'var(--cream)' }}>{PHOTOS[active].label}</p>
              <p style={{ fontFamily:'var(--font-sans)', fontSize:'10px', letterSpacing:'0.3em', color:'var(--gold)', marginTop:'8px' }}>{PHOTOS[active].sub}</p>
            </div>
            <div style={{ position:'absolute', top:'-40px', right:0, color:'rgba(253,246,240,0.5)', fontSize:'24px', cursor:'pointer' }}>×</div>
          </div>
        </div>
      )}
    </section>
  )
}
