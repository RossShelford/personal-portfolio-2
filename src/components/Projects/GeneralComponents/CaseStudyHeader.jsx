import React from 'react'
import styles from './CaseStudyHeader.module.css'
import Button from '../../shared/Button'

function CaseStudyHeader( {body, title, buttonText, badgeArray, showButton} ) {
  return (
    <div className={styles.textContainer}>
        <h2> {title} </h2>
        <p> {body} </p>

<div className={styles.headerSubContainer}>

    
        <div className={styles.workTypeContainer}>
            {badgeArray.map(( badge ) => ( 
                <div className={styles.typeIcon}>
                    <img src={badge.icon} alt={badge.alt} />
                    <p>{badge.text}</p>
                </div>
            ))} 
        </div>

        {showButton ? 

        <a href='https://www.imagineear.com' rel="noreferrer" target='_blank'>
            <Button >
                {buttonText}
                <svg width="20px" height="20px" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
            </Button>
        </a>
        : null}
</div>
<hr className={styles.dividerLine}/>
    </div>
  )
}

export default CaseStudyHeader