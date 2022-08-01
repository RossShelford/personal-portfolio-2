import React from 'react'
import styles from './Hero.module.css'
import Nav from '../Nav/Nav.jsx'

function Hero() {
  return (
    <section className={styles.heroMainContainer}>
      <Nav />
    </section>
  )
}

export default Hero