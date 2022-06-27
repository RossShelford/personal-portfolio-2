import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './components/Hero.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projects from './components/Projects/Projects.jsx'
import Clients from'./components/Clients.jsx'
import ProjectManagmentMethodology from'./components/ProjectManagmentMethodology.jsx'
import Footer from'./components/Footer/Footer.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hero />
    <Skills />
    <hr className='mainDivider'/>
    <Projects />
    <Clients />
    <ProjectManagmentMethodology />
    <Footer />
  </React.StrictMode>
);
