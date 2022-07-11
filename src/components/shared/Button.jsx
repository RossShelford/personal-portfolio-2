import React from 'react'
import styles from './Button.module.css'


function Button(props) {
  return (
    <button 
    onClick={props.onClick} 
    className={props.iconOnly ? styles.buttonIconOnly : styles.button}>
      {props.children}
    </button>
  )
}

export default Button