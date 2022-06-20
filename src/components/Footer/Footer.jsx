import React from 'react'
import styles from './Footer.module.css'


function Footer() {

  let currentDate = new Date(); 
  let copyright = "© Ross Shelford " + currentDate.getFullYear() 

  return (
    <footer className={styles.footerMainContainer}>

      <div className={styles.contentGrid}>
        <section className={styles.sectionText}>
          <span>Navigation</span>
          <span>Home</span>
          <span>Skills</span>
          <span>Work</span>
          <span>Project Managment Methodology</span>
        </section>

        <section className={styles.sectionText}>
          <span>Socials</span>
          <span>Dribble</span>
          <span>Github</span>
          <span>Linkedin</span>
        </section>
      </div>

      <div className={styles.bottomBarContainer}>
        <hr className={styles.bottomBarLine}/>
        <section className={styles.bottomBarContent}>
          <span className={styles.bottomBarText}>{copyright}</span>
          <a className={styles.bottomBarText} href='./Privacy'>Privacy</a>
        </section>
      </div>
    </footer>
  )
}

export default Footer