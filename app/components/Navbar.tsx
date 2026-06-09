'use client'

import { useState, useEffect } from 'react'
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'contact']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Hamburger button - mobile only */}
      <button
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Toggle menu"
        style={{
          display: 'none',
          position: 'fixed',
          top: '18px',
          right: '20px',
          zIndex: 1100,
          flexDirection: 'column',
          gap: '5px',
          background: 'transparent',
          border: 'none',
          padding: '8px',
          cursor: 'pointer',
        }}
        className="hamburger-btn"
      >
        <span style={{ display: 'block', width: '24px', height: '2px', background: '#fff', borderRadius: '2px', transition: 'all 0.3s', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
        <span style={{ display: 'block', width: '24px', height: '2px', background: '#fff', borderRadius: '2px', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
        <span style={{ display: 'block', width: '24px', height: '2px', background: '#fff', borderRadius: '2px', transition: 'all 0.3s', transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
      </button>

      {/* Mobile fullscreen menu */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(17,17,17,0.98)',
        flexDirection: 'column',
        transition: 'opacity 0.3s, visibility 0.3s',
        opacity: menuOpen ? 1 : 0,
        visibility: menuOpen ? 'visible' : 'hidden',
        display: 'flex',
      }} className="mobile-menu">
        <ul style={{ listStyle: 'none', margin: 0, padding: '100px 30px 0', display: 'flex', flexDirection: 'column' }}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <li key={link.href} style={{ padding: '20px 0', fontSize: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ textDecoration: 'none', color: isActive ? '#00e5ff' : '#fff', transition: 'color 0.3s' }}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Desktop nav */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: '20px',
        zIndex: 1000,
        pointerEvents: 'none',
      }}>
        <nav style={{
          pointerEvents: 'auto',
          border: '0.5px solid rgba(255,255,255,0.3)',
          background: 'rgba(17,17,17,0.85)',
          backdropFilter: 'blur(10px)',
          padding: '10px 30px',
          borderRadius: '50px',
          boxShadow: '0 0 15px rgba(0,229,255,0.15)',
          display: 'flex',
          gap: '47px',
          alignItems: 'center',
        }}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  color: isActive ? '#00e5ff' : '#fff',
                  fontSize: '16px',
                  transition: 'color 0.3s',
                }}
              >
                {link.label}
              </a>
            )
          })}
        </nav>
      </header>

      <style>{`
        @media (max-width: 1024px) {
          .hamburger-btn { display: flex !important; }
          .mobile-menu { display: flex !important; }
          header nav { display: none !important; }
        }
      `}</style>
    </>
  )
}
