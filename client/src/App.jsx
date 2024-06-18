import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
