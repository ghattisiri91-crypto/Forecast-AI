import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import DatasetUpload from './components/DatasetUpload'
import Dashboard from './components/Dashboard'
import Analytics from './components/Analytics'
import Inventory from './components/Inventory'
import Models from './components/Models'
import Industries from './components/Industries'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return true
    const saved = window.localStorage?.getItem('forecastiq-theme')
    return saved ? saved === 'dark' : true
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try {
      window.localStorage.setItem('forecastiq-theme', dark ? 'dark' : 'light')
    } catch (e) {
      // ignore storage errors (e.g. private browsing)
    }
  }, [dark])

  return (
    <div className="min-h-screen bg-paper font-body text-ink dark:bg-ink dark:text-paper">
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <About />
      <DatasetUpload />
      <Dashboard />
      <Analytics />
      <Inventory />
      <Models />
      <Industries />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
