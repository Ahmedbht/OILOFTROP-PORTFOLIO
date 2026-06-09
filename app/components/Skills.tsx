'use client'

const skills = [
  'React','FastAPI','Python', 'TypeScript', 'Next.js', 'C', 'django','Java','Git', 'GitHub','HTML', 'CSS', 'JavaScript', 'PHP', 'VB.NET', 'Responsive Design', 'UI / UX Basics',
  
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '60px 10%', textAlign: 'center', background: '#000' }}>
      <h2 style={{ fontSize: '36px', marginBottom: '10px', color: 'white' }}>Skills</h2>
      <p style={{ color: '#aaa', letterSpacing: '2px', fontSize: '17px', marginTop: '10px' }}>
        I constantly try to improve
      </p>
      <div style={{ marginTop: '26px', display: 'flex', flexWrap: 'wrap', gap: '18px', justifyContent: 'center' }}>
        {skills.map(skill => (
          <span
            key={skill}
            style={{
              padding: '12px 22px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.06)',
              color: '#fff',
              fontSize: '14px',
              border: '1px solid rgba(255,255,255,0.12)',
              cursor: 'default',
              transition: 'all 0.35s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.transform = 'translateY(-4px)'
              el.style.background = 'rgba(0,229,255,0.15)'
              el.style.borderColor = '#00e5ff'
              el.style.color = '#00e5ff'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.transform = 'none'
              el.style.background = 'rgba(255,255,255,0.06)'
              el.style.borderColor = 'rgba(255,255,255,0.12)'
              el.style.color = '#fff'
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
