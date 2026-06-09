import React from 'react'

const items = [
  { side: 'left',  icon: '🎓', degree: 'Bachelor in Computer Science',   place: 'SUPISI',            date: '2024 – 2027' },
  { side: 'right', icon: '🎓', degree: 'Licence (University Degree)',     place: 'ABDELMALE ESSAIDI', date: '2020 – 2022' },
  { side: 'left',  icon: '📚', degree: 'Online Courses & Certifications', place: 'UDEMY - COURSERA',  date: '2019 – 2023' },
]

export default function Education() {
  return (
    <section style={{ background: '#000', padding: '120px 0', color: 'white', overflow: 'hidden' }}>
      <h2 style={{ fontSize: '36px', marginBottom: '50px', textAlign: 'center' }}>Education</h2>
      <div style={{ maxWidth: '900px', margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '29px', padding: '0 20px' }}>
        {items.map((item, i) => (
          <React.Fragment key={item.degree}>
            <div
              style={{
                width: '520px',
                height: '170px',
                maxWidth: '100%',
                padding: '30px',
                background: 'rgba(255,255,255,0.06)',
                borderRadius: '20px',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 0 40px rgba(0,229,255,0.12)',
                alignSelf: item.side === 'left' ? 'flex-start' : 'flex-end',
              }}
            >
              <h3 style={{ margin: '0 0 8px', fontSize: '18px' }}>{item.icon} {item.degree}</h3>
              <p style={{ color: '#aaa', margin: '4px 0' }}>{item.place}</p>
              <span style={{ color: '#00e5ff', fontSize: '13px' }}>{item.date}</span>
            </div>
            {i < items.length - 1 && (
              <div style={{ width: '14px', height: '14px', background: '#00e5ff', borderRadius: '50%', boxShadow: '0 0 20px rgba(0,229,255,0.9)' }} />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}