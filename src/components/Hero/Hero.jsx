import React from 'react'
import styles from './Hero.module.css'
import Nav from '../Nav/Nav.jsx'

function Hero() {
  return (
    <section className={styles.heroMainContainer}>
      <Nav />
      <h1 className={styles.heroText}>Hello, I'm Ross.</h1>
      <h3 className={styles.heroSubText}>This is currently a work in progress!</h3>
    </section>
  )
}

export default Hero