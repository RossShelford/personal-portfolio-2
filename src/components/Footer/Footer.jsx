import React from 'react'
import Button from '../shared/Button.jsx'
import styles from './Footer.module.css'


function Footer() {

  let currentDate = new Date(); 
  let copyright = "© Ross Shelford " + currentDate.getFullYear() 

  return (
    <footer className={styles.footerMainContainer}>

      <div className={styles.subContentContainer}>
        <section className={styles.textSectionContainer}>
          <ul className={styles.title}>Navigation</ul>
          <li className={styles.underline}>Home</li>
          <li className={styles.underline}>Skills</li>
          <li className={styles.underline}>Work</li>
          <li className={styles.underline}>PM Method</li>
        </section>

        <section className={styles.textSectionContainer}>
          <ul className={styles.title}>Socials</ul>
            <a href="https://dribbble.com/RossShelford" target="_blank" rel="noreferrer" >
              <li className={styles.underline}>Dribble</li>
            </a>
            <a href="https://github.com/RossShelford" target="_blank" rel="noreferrer" >
              <li className={styles.underline}>Github</li>
            </a>
             <a href="https://www.linkedin.com/in/ross-shelford-32a7a6136/" target="_blank" rel="noreferrer" >
              <li className={styles.underline}>Linkedin</li>
            </a>
        </section>

        <section className={styles.sectionBtn}>
          <a href="https://pdfhost.io/v/iSiHhFsko_CV2022" target="_blank" rel="noreferrer">
            <Button>
              <svg width="26px" height="26px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> 
              Download CV 
            </Button>
          </a>
          <a href="mailto:R.Shelford@hotmail.co.uk">
            <Button>
            <svg width="26px" height="26px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Contact
            </Button>
          </a>
        </section>
      </div>

      <div>
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