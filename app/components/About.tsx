'use client'
const socials = [
  { label: 'GitHub',    sub: 'Currently on',   href: 'https://github.com/Ahmedbht' },
  { label: 'LinkedIn',  sub: "Let's connect",  href: 'https://www.linkedin.com/in/ahmed-bouhtit-48a880166/' },
  { label: 'Instagram', sub: 'Follow me',href: 'https://www.instagram.com/call_me_tigre1' },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '80px 6%', background: '#000' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '20px' }} className="about-grid">

        {/* Main card */}
        <div style={{ gridRow: 'span 2', background: '#000', border: '1px solid #222', borderRadius: '20px', padding: '40px' }}>
          <img
            src="/ana.png"
            alt="Ahmed"
            style={{ width: '170px', marginBottom: '30px', borderRadius: '30px' }}
            onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
          />
          <h2 style={{ fontSize: '36px', lineHeight: 1.2, color: 'white' }}>
            Hi, I'm <span style={{ color: '#00e0ff' }}>Ahmed</span>. I build cool{' '}
            <span style={{ color: '#999' }}>websites like this one.</span>
          </h2>
          <a href="#contact" style={{ display: 'inline-block', marginTop: '30px', color: '#00e0ff', textDecoration: 'none', fontSize: '18px' }}>
            Contact me →
          </a>
        </div>

        {/* Social cards */}
        {socials.map(s => (
          <a
            key={s.label}
            href={s.href}
            style={{
              background: 'linear-gradient(145deg, #000, #111)',
              border: '1px solid #222',
              borderRadius: '20px',
              padding: '30px',
              color: 'white',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-6px)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
          >
            <small style={{ color: '#aaa', fontSize: '13px' }}>{s.sub}</small>
            <h3 style={{ margin: '6px 0 0', fontSize: '20px' }}>{s.label}</h3>
          </a>
        ))}
      </div>

      <h2 style={{ marginTop: '40px', textAlign: 'center', color: '#aaa', fontSize: '18px', lineHeight: 1.6, fontWeight: 400 }}>
        I'm passionate about creating meaningful experiences. I design and build solutions that make life easier and more enjoyable, blending functionality with thoughtful, intuitive design.
      </h2>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; grid-template-rows: auto !important; }
          .about-grid > div:first-child { grid-row: span 1 !important; }
        }
      `}</style>
    </section>
  )
}
