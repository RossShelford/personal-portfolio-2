import React from 'react'
import styles from './Hero.module.css'
import Nav from '../Nav/Nav.jsx'

function Hero() {
  return (
    <section className={styles.heroMainContainer}>
      <Nav />
      <div className={styles.subContainer}>
        <h1 className={styles.heroText}>Hello, I'm Ross.</h1>
        <h3 className={styles.heroSubText}>Currently a Product manager with extensive hands-on experience focused on building beautiful interfaces & experiences.</h3>
      </div>
    </section>
  )
}

export default Hero