import React from 'react';
import logo from './assets/logo.svg';
import ImagineearWebVid from './assets/Imagineear-Website.mp4';
import logo1 from './assets/AltLogos/Logo1.png';
import logo2 from './assets/AltLogos/Logo2.png';
import logo3 from './assets/AltLogos/Logo3.png';
import logo4 from './assets/AltLogos/Logo4.png';
import Drawings1 from './assets/Drawings/Drawings1.png';
import Drawings2 from './assets/Drawings/Drawings2.png';
import Drawings3 from './assets/Drawings/Drawings3.png';
import Drawings4 from './assets/Drawings/Drawings4.png';
import MacTopBar from '../../shared/MacTopBar';
import styles from './PageImagineear.module.css';
import { useState, useEffect } from 'react'
import ProjectLoader from '../../LoaderPages/ProjectLoader';



function PageImagineear() {

  const topScroll = ()=>{window.scrollTo(0, 0)}
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    }, 700)
  }, [])

  return (
    <>
    {
      loading ? 
      <ProjectLoader/>
      :
      <div>
        <div className={styles.header}>
          <img src={logo} alt="Imagineear" className={styles.headerLogo}/>
        </div>
        
        <div className={styles.masterContainer}>
          <div className={styles.mainContainer}>
            <div className={styles.textContainer}>
              <h2>Brand identity to reflect the evolution and rapid growth of the business</h2>
              <p>
                "In order to move away from a simple rounded look, a new stylish font was introduced to harden up the text and reflect the challenges of the day.  The colour palette was extended to include teal, yellow, and magenta options, further asserting the competitive edge of what has become widely known as ‘the Imagineear purple’, as always accompanied by a bolder green – a far cry from the muted green over a decade earlier.
                The work was completed by capitalising the ‘I’ of Imagineear, signifying solid growth and a reaching of maturity, and now, armed with this capital ‘I’, Imagineear is ready to take on the post-pandemic world."
              </p>
            </div>
            <div className={styles.webVideoContainer}>
              <MacTopBar text={'www.imagineear.com'}/>
              <video playsInline src={ImagineearWebVid} loop="loop" className={styles.videoItem} autoplay="autoplay"></video>
            </div>
            <div className={styles.logoContainer}>
              <h3 className={styles.logoText}>Alternative Logos</h3>
              <div className={styles.logoGrid}>
                <img src={logo1} width='120px' alt="Logo Concept 1"/>
                <img src={logo2} width='120px' alt="Logo Concept 2"/>
                <img src={logo3} width='120px' alt="Logo Concept 3"/>
                <img src={logo4} width='120px' alt="Logo Concept 4"/>
              </div> 
            </div>
            <div className={styles.drawingsContainer}>
              <img src={Drawings1} width='100%' alt="Drawings Concepts 1"/>
              <img src={Drawings2} width='100%' alt="Drawings Concepts 2"/>
              <img src={Drawings3} width='100%' alt="Drawings Concepts 3"/>
              <img src={Drawings4} width='100%' alt="Drawings Concepts 4"/>
            </div>
          </div>
        </div>
        {topScroll()}
      </div>
    }
    </>
      )
    }
    
    export default PageImagineear