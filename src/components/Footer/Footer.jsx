import React from 'react'
import styles from './Footer.module.css'


function Footer() {

  let currentDate = new Date(); 
  let copyright = "© Ross Shelford " + currentDate.getFullYear() 

  return (
    <footer className={styles.footerMainContainer}>
      <div className={styles.footerMainContent}>
          <div className={styles.LetsChatContainer}> 
            <span className={styles.letsChat}>Let's Chat</span>
            <span className={styles.letsChat}><svg width="100px" height='50px' fill="none" stroke='#030439' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
          </div>
          <span className={styles.downloadCV}>Download CV</span>
          <a href='r.shelford@hotmail.co.uk' className={styles.mailMe}>r.shelford@hotmail.co.uk</a>
      </div>

      <div className={styles.bottomBarContainer}>
        <hr className={styles.bottomBarLine}/>
        <div className={styles.bottomBarContent}>
          <span className={styles.bottomBarText}>{copyright}</span>
          <a className={styles.bottomBarText} href='./Privacy'>Privacy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer