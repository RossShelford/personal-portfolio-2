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
import CaseStudyHeader from '../GeneralComponents/CaseStudyHeader';
import archetype from './assets/Archetype.svg'
import webIcon from '../GeneralComponents/icons/webicon.svg'
import brandingIcon from '../GeneralComponents/icons/format_paint.svg'
import animationIcon from '../GeneralComponents/icons/anim.svg'
import ProjectNav from '../../Nav/ProjectNav';
import CaseStudyFooter from '../GeneralComponents/CaseStudyFooter';


const badgeData = [
  {
      icon: brandingIcon,
      text: 'Branding',
      alt: 'Branding badge'
  },
  {
      icon: webIcon,
      text: 'Web Design',
      alt: 'Web Design badge'
  },
  {
      icon: animationIcon,
      text: 'Animation',
      alt: 'Animation badge'
  },
]

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
        <div className={styles.masterContainer}>
          <div>
          <ProjectNav/>

          <div className={styles.mainContainer}>
            <div className={styles.header}>
                <img src={logo} alt="Imagineear" className={styles.headerLogo}/>
            </div>

            <CaseStudyHeader 
              title='Brand identity to reflect the evolution and rapid growth of the business' 
              body='In order to move away from a simple rounded look, a new stylish font was introduced to harden up the text and reflect the challenges of the day.  The colour palette was extended to include teal, yellow, and magenta options, further asserting the competitive edge of what has become widely known as ‘the Imagineear purple’, as always accompanied by a bolder green – a far cry from the muted green over a decade earlier. The work was completed by capitalising the ‘I’ of Imagineear, signifying solid growth and a reaching of maturity, and now, armed with this capital ‘I’, Imagineear is ready to take on the post-pandemic world.'
              buttonText="Visit Imagineear's website"
              badgeArray={badgeData}
            />
            <img src={archetype} alt='Achetype creator' className={styles.Archetype}/>


              <div className={styles.webContainer}>
                <div className={styles.webVideoContainer}>
                  <div className={styles.textContainer}>
                    <h3 className={styles.title}>Website Concept</h3>
                    <p>The website concept was built with a basic component style guide of buttons, typography, colors, and layout.</p>
                  </div>
                  <MacTopBar text={'www.imagineear.com'}/>
                  <video playsInline src={ImagineearWebVid} loop="loop" className={styles.videoItem} autoplay="autoplay"></video>
                </div>
              </div>
            
            <div className={styles.textContainerLogo}>
                  <h3 className={styles.titleLogo}>Logo Concepts</h3>
                  <p>During the logo exploration process, the team built a lot of concepts. We refined one of the logo concepts. Finally, after a few iterations of the logo mark, we arrived at the completed product.</p>
            </div>
  
            <div className={styles.drawingsContainer}>
              <img src={Drawings1} width='100%' alt="Drawings Concepts 1"/>
              <img src={Drawings2} width='100%' alt="Drawings Concepts 2"/>
              <img src={Drawings3} width='100%' alt="Drawings Concepts 3"/>
              <img src={Drawings4} width='100%' alt="Drawings Concepts 4"/>
            </div>

            <div className={styles.logoContainer}>
              <div className={styles.logoGrid}>
                <img src={logo1} width='120px' alt="Logo Concept 1"/>
                <img src={logo2} width='120px' alt="Logo Concept 2"/>
                <img src={logo3} width='120px' alt="Logo Concept 3"/>
                <img src={logo4} width='120px' alt="Logo Concept 4"/>
              </div> 
            </div>
            
            <div className={styles.textContainerStory}>
              <h3 className={styles.titleLogo}>The story of Imagineear’s logo</h3>
              <p>In its very first iteration circa 2008, Imagineear was actually conceived as a retail brand, with the name coined to link an informative audio experience explicitly to a stimulated imagination, using two lower case e’s to create a unique, rather than a mere compound word. The little ‘i’ was a common trend after the success of Apple’s iMac, iPod, iPhone etc. used to denote a certain level of digital prowess, but in Imagineear’s case it also stood for ‘information’ – a double-entendre of sorts. With this, together with a ‘radio wave’ motif, signifying the dissemination of knowledge, the Imagineear brand and its promise was born.</p>
              <p>In the years that followed Apple brought out a storm of disruptive consumer devices and launched the AppStore, which presented a head-on challenge to Imagineear’s original retail concept of selling pre-recorded audio for visitors to outdoor sites, loaded onto a re-usable device. A pivot was therefore required, and by early 2011 the company’s strategy walked back from the consumer space and on to safer and more familiar ground: B2B culture and visitor attractions.</p>                      
              <p>As the company further established its competitive market position, supported by the strategic ‘ownership’ of the bold and striking colours of purple and lime green, the logo font and wave motif evolved with a cleaner, simpler look and message which supported a phase of continuous rapid growth from 2015 to 2020, working for cultural sites, sports stadia – and increasingly in healthcare.</p>        
              <p>The solution was an exercise in carefully calibrated restraint. The radio wave no longer adequately served the brand messaging as the company’s commercial offer was never genuinely defined by communication technologies alone, but the sentiment remained and the new design allowed it to morph into a distinctive ‘ping’, able to carry a subtle gradient of colour codes.</p>
              <p>The work was completed by capitalising the ‘I’ of Imagineear, signifying solid growth and a reaching of maturity, and now, armed with this capital ‘I’, Imagineear is ready to take on, and take our place in, the post-pandemic world.</p>
            </div>

          </div>
        </div>
        <div className={styles.footerWrapper}>
          <div className={styles.footerContent}>
            <CaseStudyFooter/>
          </div>
        </div>
        {topScroll()}
      </div>
    }
    </>
      )
    }
    
    export default PageImagineear