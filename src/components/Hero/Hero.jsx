import React from 'react'
import styles from './Hero.module.css'
import Nav from '../Nav/Nav.jsx'

function Hero() {
  return (
    <section className={styles.heroMainContainer}>
      <Nav />
      <div className={styles.subContainer}>
        <h1 className={styles.heroText}>Hello, I'm Ross.</h1>
      <h3 className={styles.heroSubText}>This is currently under construction. You can view the progress on my <a target='_blank' href='https://github.com/RossShelford' rel='noreferrer' className={styles.highlightedText}>GitHub</a> or view my design work on <a target='_blank' href='https://dribbble.com/RossShelford' rel='noreferrer' className={styles.highlightedText}>Dribbble</a>.</h3>
      </div>
    </section>
  )
}

export default Hero