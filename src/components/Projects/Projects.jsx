import React from 'react'
import '../../index.css'
import styles from './Projects.module.css'
import Imagienear from './Imagineear/LogoMorph.mp4'
import { useState } from 'react'

const activeStyles = {
  backgroundColor: 'red',
  transform: 'translateX(calc(-33% + 24px))',
}

function Projects() {
  
  const [activeProject, setActiveProject] = useState()

  return (
    
    <section className={styles.projectsMainContainer}>
        <h1>Projects</h1>
        <h3 className='paddingBottom50px'>A few selected projects of my own work</h3>


        <div className={styles.carouselContainer} 
          style={activeStyles}>
          <div id="1" className={styles.childContainer}>
            <video src={Imagienear} playsInline muted autoPlay="autoplay" loop="loop"/>
            <h3>Imagineear Rebrand</h3>
          </div>
          <div id="2" className={styles.childContainer}>
            <video src={Imagienear} playsInline muted autoPlay="autoplay" loop="loop"/>
            <h3>NFT Project</h3>
          </div>
          <div id="3" className={styles.childContainer}>
            <video src={Imagienear} playsInline muted autoPlay="autoplay" loop="loop"/>
            <h3>Accordion</h3>
          </div>
        </div>

<div id="testButtons">
  <button onClick={()=> console.log({activeProject})}>
    log
  </button>
  <button onClick={()=>setActiveProject(1)}>
    1
  </button>
  <button onClick={()=>setActiveProject(2)}>
    2
  </button>
  <button onClick={()=>setActiveProject(3)}>
    3
  </button>
</div>


    </section>
  )
}

export default Projects