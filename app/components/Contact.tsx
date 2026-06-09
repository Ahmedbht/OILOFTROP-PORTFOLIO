'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.send(
        'service_xqzr0yc',
        'template_7abkc9a',
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        'NBKgYtOumoCk40OH4'
      )
      setStatus("✅ Message sent! I'll get back to you soon.")
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setStatus('❌ Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  const inputStyle = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(0,229,255,0.2)',
    borderRadius: '12px',
    padding: '15px',
    color: 'white',
    fontSize: '15px',
    fontFamily: 'inherit',
    width: '100%',
    outline: 'none',
  }
  return (
    <section id="contact" style={{ background: '#000', padding: '120px 8%' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '40px' }} className="contact-grid">

        {/*LEFT*/}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div style={{ background: 'linear-gradient(180deg, rgba(0,229,255,0.08), rgba(0,0,0,0.5))', borderRadius: '24px', padding: '35px', boxShadow: '0 0 50px rgba(0,229,255,0.18)' }}>
            {[
              { icon: '✉', text: 'ahmedbouhtit8@email.com' },
              { icon: '📞', text: '+212 600300965' },
              { icon: '📍', text: 'Tetouan, Morocco' },
            ].map(item => (
              <div key={item.text} style={{ display: 'flex', gap: '14px', alignItems: 'center', color: '#7defff', marginBottom: '18px', fontSize: '16px' }}>
                <span>{item.icon}</span>
                <p style={{ margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>

          <div style={{ background: 'linear-gradient(180deg, rgba(0,229,255,0.08), rgba(0,0,0,0.5))', borderRadius: '24px', padding: '35px', boxShadow: '0 0 50px rgba(0,229,255,0.18)' }}>
            <h3 style={{ color: '#7defff', marginBottom: '25px', fontSize: '26px', marginTop: 0 }}>Follow My Journey</h3>
            <div style={{ display: 'flex', gap: '20px' }}>
              {[
                { label: 'GitHub',   bg: '#0077b5', href: 'https://github.com/Ahmedbht' },
                { label: 'LinkedIn', bg: '#1877f2', href: 'https://www.linkedin.com/in/ahmed-bouhtit-48a880166/' },
    
              ].map(s => (
                <a key={s.label} href={s.href} style={{ flex: 1, padding: '16px', borderRadius: '16px', textAlign: 'center', fontWeight: 600, color: 'white', background: s.bg, textDecoration: 'none', transition: 'transform 0.3s' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ background: 'linear-gradient(180deg, rgba(0,229,255,0.08), rgba(0,0,0,0.5))', borderRadius: '24px', padding: '35px', boxShadow: '0 0 50px rgba(0,229,255,0.18)' }}>
          <h3 style={{ color: '#7defff', marginBottom: '10px', fontSize: '26px', marginTop: 0 }}>Start a Conversation</h3>
          <p style={{ color: '#aaa', marginBottom: '20px' }}>Fill out the form below and I'll get back to you soon</p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <input type="text" name="name" placeholder="Your Name..." value={form.name} onChange={handleChange} required style={inputStyle} />
            <input type="email" name="email" placeholder="Your Email..." value={form.email} onChange={handleChange} required style={inputStyle} />
            <input type="text" name="subject" placeholder="Subject..." value={form.subject} onChange={handleChange} style={inputStyle} />
            <textarea name="message" placeholder="Your message..." value={form.message} onChange={handleChange} required style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }} />
            {status && <p style={{ color: '#00e5ff', fontSize: '14px', margin: 0 }}>{status}</p>}
            <button type="submit" style={{ background: '#00e5ff', color: '#000', padding: '16px', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 600, cursor: 'pointer', transition: 'transform 0.3s' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
