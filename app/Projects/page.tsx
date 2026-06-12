'use client'
import Link from "next/link"

const allProjects = [
  {
    id: 9,
    title: 'Nettocar : Une agence de nettoyage de vehicules',
    desc: 'Projet Desktop de gestion intégrée pour une agence de nettoyage de véhicules. Son but principal est dautomatiser le suivi des prestations et de fluidifier lorganisation quotidienne de lagence',
    tags:['VB.NET'],
    img:'/nettvb.png',
    video:'/videos/nettocar.mp4',
    liveUrl:'#'
  },
  {
  id: 8,
title: 'OptiCloud : Optical Shop Management System',
desc: 'Full-stack web application for Moroccan optical shops featuring complete inventory management, client records, prescriptions, point of sale, PDF reports, and a role-based authentication system with a professional SaaS landing page.',
tags: ['PHP', 'MySQL', 'Bootstrap 5', 'FPDF', 'JavaScript'],
img: '/screen8.png',
video: '/videos/Opticloud.mp4',
liveUrl: '#',
  },
  {
  id: 10,
  title: 'Password Manager',
  desc: 'Desktop application for managing passwords securely. Features include adding, editing, deleting and searching passwords, random password generation, and AES-encrypted local storage using JSON.',
  tags: ['Java', 'JavaFX', 'AES Encryption', 'Gson', 'Maven'],
  img: '/JAVAAAPHOTO.png',
  video: '/videos/Javavideo.mp4',
  liveUrl: '#',
},
  {
    id: 1,
    title: 'Titawen : Dairy Company Website',
    desc: 'Full-stack website for a Moroccan dairy company featuring an AI chatbot, admin dashboard, REST API, and dynamic product management.',
    tags: ['Next.js', 'Django', 'AI Chatbot'],
    img: '/screen1.png',
    video: '/videos/titawen.mp4',
    liveUrl: 'https://titawen-frontend.vercel.app/',
  },
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
    id: 3,
    title: 'Weather App',
    desc: 'A weather application that shows real-time weather data for any city worldwide, with geolocation support.',
    tags: ['Next.js', 'TypeScript', 'API'],
    img: '/screen3.png',
    video: '/videos/weather.mp4',
    liveUrl: 'https://weather-app-ruby-nine-15.vercel.app/',
  },
  {
     id: 4,
    title: 'HTN : Haj Travaux Nord',
    desc: 'Professional construction website for a Moroccan company specializing in road infrastructure and residential buildings. Fully responsive with smooth scroll animations.',
    tags: ['Next.js', 'Tailwind CSS'],
    img: '/screen4.png',
    video: '/videos/htn.mp4',
    liveUrl: 'https://htnord.vercel.app/',
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
    id: 6,
  title: 'GitHub Stats',
  desc: 'A GitHub profile explorer that displays user stats including repositories, followers, following count, and latest repositories in real-time.',
  tags: ['Next.js', 'TypeScript', 'GitHub API'],
  img: '/screen6.png',
  video: '/videos/github-stats.mp4',
  liveUrl: 'https://github-stats-xi-dun-58.vercel.app/',
  },
  
    {
   id: 7,
    title: 'Tetouan Doctors : Medical Booking Platform',
     desc: 'Full-stack appointment booking app for doctors in Tétouan. Patients browse specialists, book available slots, and doctors manage their schedule via a personal dashboard.',
    tags: ['Next.js', 'Django', 'REST API', 'TypeScript'], 
    img: '/screen7.png',
     video: '/videos/tetouan-doctor.mp4',
      liveUrl: 'https://tetouan-doctor-vxnd.vercel.app/'
  
  },
  {
  id:11,
    title: 'Books Scraper & Analyzer',
    desc: 'A Python web scraper that collects 1000 books across 50 pages, extracts titles and prices, saves to CSV and generates a full price analysis report.',
    tags: ['Python', 'BeautifulSoup', 'Requests'],
    img: '/scraper-pro.png',
    liveUrl: 'https://github.com/Ahmedbht/books-scraper',
  },

]

export default function ProjectPage() {
  return (
    <main style={{ background: '#000', minHeight: '100vh', padding: '80px 8%' }}>
      <h1 style={{ fontSize: '36px', color: 'white', textAlign: 'center', marginBottom: '60px' }}>
        All Projects
      </h1>

      <div className="flex flex-col gap-12">
        {allProjects.map(project => (
          <div key={project.id} className="bg-[rgba(0,229,255,0.05)] border border-[rgba(0,229,255,0.2)] rounded-2xl p-5">

            {/* image + video with gap */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">

              <img
  src={project.img}
  alt={project.title}
  className="w-full h-80 object-cover bg-[#1a1a2e] block rounded-xl shadow-[0_0_20px_rgba(0,229,255,0.1)]"
  onError={e => { (e.target as HTMLImageElement).style.background = '#1a1a2e' }}
/>

<video
  src={project.video}
  controls
  className="w-full h-80 bg-[#0a0a0a] block rounded-xl shadow-[0_0_20px_rgba(0,229,255,0.1)]"
/>

            </div>

            {/* info */}
            <h3 className="text-[#00e5ff] text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-white text-sm leading-relaxed mb-4">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white">
                  {tag}
                </span>
              ))}
            </div>
            <a href={project.liveUrl} className=" text-sm no-underline border rounded-full bg-[#00e5ff] p-2">Website link</a>

          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link href="/" className="px-8 py-4 rounded-full bg-[#00e5ff] text-black font-medium text-base no-underline">
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}