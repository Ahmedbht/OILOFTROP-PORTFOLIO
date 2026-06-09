'use client'

import { useEffect, useState } from 'react'

const FULL_TEXT = 'Ahmed Bouhtit'
const SPEED = 120

export default function Hero() {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let i = 0
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < FULL_TEXT.length) {
          setDisplayed(FULL_TEXT.slice(0, i + 1))
          i++
        } else {
          clearInterval(interval)
        }
      }, SPEED)
      return () => clearInterval(interval)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 20px',
        background: 'linear-gradient(to bottom, #002a3a 0%, #001a24 40%, #02060f 70%, #000000 100%)',
      }}
    >
      <p style={{ color: '#aaa', fontSize: '55px', letterSpacing: '2px', marginBottom: '14px' }}>
        Full Stack Developer
      </p>
      <h1 style={{ fontSize: '72px', fontWeight: 700, color: '#fff', margin: 0, minHeight: '60px' }}>
        {displayed}
      </h1>
      <p style={{ color: '#aaa', marginTop: '15px', maxWidth: '520px', lineHeight: 1.6 , fontSize: '20px'}}>
        I design and develop experiences that make people's lives simple.
      </p>
      <div style={{ marginTop: '35px', display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a
          href="#contact"
          style={{
            padding: '14px 26px',
            borderRadius: '30px',
            background: '#00e5ff',
            color: '#000',
            textDecoration: 'none',
            fontSize: '20px',
            fontWeight: 500,
            transition: 'transform 0.3s, opacity 0.3s',
  
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
        >
          Connect with me →
        </a>
        <a
          href="/AHMEDBOUHTIT-CV.pdf"
          download
          style={{
            padding: '14px 26px',
            borderRadius: '30px',
            background: 'rgba(255,255,255,0.08)',
            color: '#fff',
            textDecoration: 'none',
            fontSize: '20px',
            transition: 'transform 0.3s',
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
        >
          Download Resume ↓
        </a>
      </div>
    </section>
  )
}
