import React from 'react'
import styles from './Hero.module.css'
import Nav from '../Nav/Nav.jsx'
import designLibrary from './images/design-library.svg'
import newUserFlow from './images/newUserFlow.svg'
import titleComp from './images/title.svg'

function Hero() {
  return (
    <section className={styles.heroMainContainer}>
      <Nav />
      <div className={styles.subContainer}>
        <img src={designLibrary} alt="Design Library example"/>
        <img src={newUserFlow} alt="New user flow example"/>
        <img src={titleComp} alt="Design Library example"/>
      </div>
    </section>
  )
}

export default Hero