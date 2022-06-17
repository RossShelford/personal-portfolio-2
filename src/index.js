import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Clients from'./components/Clients.jsx'
import ProjectManagmentMethodology from'./components/ProjectManagmentMethodology.jsx'
import Footer from'./components/Footer.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hero />
    <Skills />
    <Projects />
    <Clients />
    <ProjectManagmentMethodology />
    <Footer />
  </React.StrictMode>
);
