import React from 'react'
import styles from './Hero.module.css'
import Nav from '../Nav/Nav.jsx'
import heroImage from './hero-image.svg'


function Hero() {
  return (
    <section className={styles.heroMainContainer}>
      <Nav />
      <img class={styles.heroImg} src={heroImage} alt='Ross Shelford, Designer.'/>
    </section>
  )
}

export default Hero