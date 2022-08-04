import React from 'react'
import Hero from './components/Hero/Hero.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projects from './components/Projects/Projects.jsx'
import Clients from'./components/Clients/Clients.jsx'
import PMMethod from'./components/PMMethod/PMMethod.jsx'
import Footer from'./components/Footer/Footer.jsx'


function App() {
  return (
    <>
    <Hero />
    <div className="subRoot"> 
      <Skills />
      <hr className='mainDivider'/>
      <Projects />
      <hr className='mainDivider'/>
      <Clients />
      <hr className='mainDivider'/>
      <PMMethod />
    </div>
    <Footer />
    </>
  )
}

export default App