import React from 'react'
import styles from './CaseStudyFooter.module.css'
import Button from '../../shared/Button'
import { Link } from 'react-router-dom'

function CaseStudyFooter() {

    let currentDate = new Date(); 
    let copyright = "© Ross Shelford " + currentDate.getFullYear() 

  return (
    <footer className={styles.footerMainContainer}>
      <div className={styles.subContentContainer}>
        <section className={styles.sectionBtn}>
        
        <div className={styles.returnHomeContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth={3} stroke="currentColor" width='24px' height='24px' color='#2E2E39'>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <Link to='/' >
                <h2 >return to home</h2>
            </Link>
        </div>

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
          <a className={styles.bottomBarText} href='./'>Privacy</a>
        </section>
      </div>
    </footer>
  )
}

export default CaseStudyFooter