import React from 'react'
import styles from './Skills.module.css'

function TextDivider({children}) {
  return (
    <div className={styles.textContainer}>
        <h4 className={styles.paddingRight15px}>{children}</h4>
        <hr className={styles.dividerLine}/>
    </div>
  )
}

export default TextDivider