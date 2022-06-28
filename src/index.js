import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './components/Hero/Hero.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projects from './components/Projects/Projects.jsx'
import Clients from'./components/Clients/Clients.jsx'
import PMMethod from'./components/PMMethod/PMMethod.jsx'
import Footer from'./components/Footer/Footer.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
        <Hero />
    <div className="subRoot"> 
        <Skills />
        <Projects />
        <Clients />
        <PMMethod />
    </div>
        <Footer />

  </React.StrictMode>

  
);
