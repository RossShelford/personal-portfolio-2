import React from 'react';
import styles from './MacTopBar.module.css'

function MacTopBar( {text} ) {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.btnContainer}>
            <div className={`${styles.btn} ${styles.orange}`} />
            <div className={`${styles.btn} ${styles.yellow}`} />
            <div className={`${styles.btn} ${styles.green}`} />
        </div>
        <div className={styles.barContainer}>
            <span className={styles.text}>{text}</span>
            <svg className={styles.icon} width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.50602 4.59082L4.89809 2.73472L3.04199 1.34265" stroke-linecap="round"/>
                <path d="M9.07412 6.91096C9.07412 9.21742 7.20436 11.0872 4.8979 11.0872C2.59144 11.0872 0.72168 9.21742 0.72168 6.91096C0.72168 4.6045 2.59144 2.73474 4.8979 2.73474" stroke-linecap="round"/>
            </svg>
        </div>
    </div>
  );
}

export default MacTopBar;