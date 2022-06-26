import React from 'react'
import styles from './Skills.module.css'

function TextDivider(props) {
  return (
    <div className={styles.textContainer}>
        <h4 className={styles.paddingRight15px}>{props.text}</h4>
        <hr className={styles.dividerLine}/>
    </div>
  )
}

export default TextDivider