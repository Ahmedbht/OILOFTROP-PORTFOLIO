'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

const projects = [
 {
    id: 2,
    title: 'Discover Tetouan',
    desc: 'Tourist guide website for the city of Tétouan, launched and ranked on Google Search under (Discover Tetouan). Features local attractions, culture, and travel tips. Currently migrating to React.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    img: '/screen2.png',
    video: '/videos/tetouan.mp4',
    liveUrl: 'https://www.discovertetouan.com/',
  },
  {
    id: 5,
    title: 'Azdoud : Premium Car Rental',
desc: 'Full frontend car rental website for a Moroccan business featuring a luxury dark design, featured fleet section, WhatsApp booking integration, and fully responsive layout.',
tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
img: '/screen5.png',
liveUrl: 'https://azdoud.vercel.app',
  },
  {
    id: 3,
    title: 'Weather App',
    desc: 'A weather application that shows real-time weather data for any city worldwide, with geolocation support.',
    tags: ['Next.js', 'TypeScript', 'API'],
    img: '/screen3.png',
    video: '/videos/weather.mp4',
    liveUrl: 'https://weather-app-ruby-nine-15.vercel.app/',
  },
]

export default function Projects() {
  const [active, setActive] = useState(projects[0])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 768) return
      const middle = window.innerHeight / 2
      cardRefs.current.forEach((card, i) => {
        if (!card) return
        const rect = card.getBoundingClientRect()
        if (rect.top < middle && rect.bottom > middle) {
          setActive(projects[i])
        }
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="projects" style={{ padding: '100px 10%', background: '#000' }}>
      <h2 style={{ fontSize: '36px', marginBottom: '50px', color: 'white', textAlign: 'center' }}>
        My Projects
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '55% 45%', gap: '60px', alignItems: 'start' }} className="projects-wrapper">

        {/* LEFT: project images */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '140px' }}>
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={el => { cardRefs.current[i] = el }}
              style={{ borderRadius: '20px', padding: '20px', cursor: 'pointer' }}
            >
              <img
                src={project.img}
                alt={project.alt}
                style={{ width: '100%', height: '360px', background: '#1a1a2e', borderRadius: '15px', objectFit: 'cover', display: 'block' }}
                onError={e => { (e.target as HTMLImageElement).style.background = '#1a1a2e' }}
              />
              {/* Mobile content */}
              <div className="mobile-project-content" style={{ display: 'none', marginTop: '20px', background: 'rgba(0,229,255,0.05)', border: '1px solid rgba(0,229,255,0.2)', padding: '20px', borderRadius: '15px' }}>
                <h3 style={{ color: '#00e5ff', marginTop: 0, marginBottom: '15px' }}>{project.mobileName}</h3>
                <p style={{ color: '#fff', lineHeight: 1.5, marginBottom: '15px' }}>{project.mobileDesc}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '15px' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.08)', borderRadius: '20px', fontSize: '13px', color: 'white' }}>{tag}</span>
                  ))}
                </div>
                <a href={project.liveUrl} style={{ marginRight: '15px', color: '#00e5ff', textDecoration: 'none', fontSize: '14px' }}>Live</a>
                
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: sticky panel */}
        <div className="sticky-panel" style={{ position: 'sticky', top: '20vh', background: 'rgba(0,229,255,0.05)', border: '1px solid rgba(0,229,255,0.2)', padding: '30px', borderRadius: '15px', transition: 'all 0.4s ease' }}>
          <h3 style={{ color: '#00e5ff', marginTop: 0, marginBottom: '20px', fontSize: '24px' }}>{active.title}</h3>
          <p style={{ color: '#fff', lineHeight: 1.5, marginBottom: '20px' }}>{active.desc}</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
            {active.tags.map(tag => (
              <span key={tag} style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.08)', borderRadius: '20px', fontSize: '13px', color: 'white' }}>{tag}</span>
            ))}
          </div>
          <a href={active.liveUrl} style={{padding: '10px 26px', borderRadius: '30px', background: '#00e5ff', color: '#000', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>Website link</a>
         
        </div>
      </div>

      <div style={{ marginTop: '80px', textAlign: 'center' }}>
        <Link href="/Projects" style={{ padding: '16px 36px', borderRadius: '30px', background: '#00e5ff', color: '#000', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>
          View All Projects →
        </Link>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-wrapper { grid-template-columns: 1fr !important; }
          .sticky-panel { display: none !important; }
          .mobile-project-content { display: block !important; }
        }
      `}</style>
    </section>
  )
}
