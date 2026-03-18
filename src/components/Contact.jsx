import { useRef, useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nom: '', email: '', date: '', message: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => {
    e.preventDefault()
    setTimeout(() => setSent(true), 400)
  }

  return (
    <section id="contact" style={{
      padding: '140px 48px',
      background: 'linear-gradient(180deg, transparent 0%, rgba(18,8,32,0.7) 50%, rgba(10,4,16,0.9) 100%)',
    }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontFamily:'var(--font-sans)', fontSize:'10px', letterSpacing:'0.4em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'20px' }}>
          Écrivons votre Histoire
        </p>
        <h2 style={{ fontFamily:'var(--font-serif)', fontSize:'clamp(36px,5vw,60px)', fontWeight:400, fontStyle:'italic', color:'var(--cream)', marginBottom:'20px' }}>
          Commencer l'Aventure
        </h2>
        <div className="divider" style={{ margin: '0 auto 60px' }} />

        {!sent ? (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
            {[
              { name: 'nom', placeholder: 'Votre nom & prénom', type: 'text' },
              { name: 'email', placeholder: 'Votre email', type: 'email' },
              { name: 'date', placeholder: 'Date envisagée', type: 'text' },
            ].map(f => (
              <input
                key={f.name} name={f.name} type={f.type} placeholder={f.placeholder}
                value={form[f.name]} onChange={handleChange} required
                style={{
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(212,175,55,0.2)',
                  borderRadius: '0', padding: '18px 24px',
                  fontFamily: 'var(--font-elegant)', fontSize: '16px',
                  color: 'var(--cream)', outline: 'none', width: '100%',
                  transition: 'border-color 0.3s ease',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(212,175,55,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(212,175,55,0.2)'}
              />
            ))}
            <textarea
              name="message" placeholder="Parlez-nous de votre rêve..." rows={5}
              value={form.message} onChange={handleChange}
              style={{
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(212,175,55,0.2)',
                borderRadius: '0', padding: '18px 24px',
                fontFamily: 'var(--font-elegant)', fontSize: '16px',
                color: 'var(--cream)', outline: 'none', resize: 'vertical', width: '100%',
                transition: 'border-color 0.3s ease',
              }}
              onFocus={e => e.target.style.borderColor = 'rgba(212,175,55,0.6)'}
              onBlur={e => e.target.style.borderColor = 'rgba(212,175,55,0.2)'}
            />
            <button type="submit" style={{
              background: 'linear-gradient(135deg, #f0d060, #d4af37)',
              color: 'var(--deep)', border: 'none', padding: '18px 48px',
              fontFamily: 'var(--font-sans)', fontSize: '12px',
              letterSpacing: '0.3em', textTransform: 'uppercase',
              cursor: 'pointer', transition: 'all 0.3s ease',
              boxShadow: '0 0 30px rgba(212,175,55,0.3)',
            }}
              onMouseEnter={e => { e.target.style.boxShadow = '0 0 60px rgba(212,175,55,0.6)'; e.target.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.target.style.boxShadow = '0 0 30px rgba(212,175,55,0.3)'; e.target.style.transform = 'translateY(0)'; }}
            >
              Envoyer ma demande
            </button>
          </form>
        ) : (
          <div style={{
            padding: '60px 40px',
            border: '1px solid rgba(212,175,55,0.3)',
            background: 'rgba(212,175,55,0.05)',
          }}>
            <div style={{ fontSize: '48px', marginBottom: '24px' }}>💍</div>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontStyle: 'italic', color: 'var(--cream)', marginBottom: '16px' }}>
              Message envoyé !
            </p>
            <p style={{ fontFamily: 'var(--font-elegant)', fontSize: '17px', color: 'rgba(253,246,240,0.7)', lineHeight: 1.8 }}>
              Notre équipe vous contactera dans les plus brefs délais pour vous offrir une expérience de réservation à la hauteur de vos rêves.
            </p>
          </div>
        )}

        {/* Coordonnées */}
        <div style={{
          marginTop: '80px', paddingTop: '60px',
          borderTop: '1px solid rgba(212,175,55,0.1)',
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px',
        }}>
          {[
            { icon: '📍', label: 'Adresse', value: 'Le Pouzin, 07250\nArdèche, France' },
            { icon: '📞', label: 'Téléphone', value: '06 52 04 84 16' },
            { icon: '✉️', label: 'Email', value: 'contact@lunik-reception.fr' },
          ].map((c, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', marginBottom: '12px' }}>{c.icon}</div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px' }}>
                {c.label}
              </p>
              <p style={{ fontFamily: 'var(--font-elegant)', fontSize: '15px', color: 'rgba(253,246,240,0.7)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                {c.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
