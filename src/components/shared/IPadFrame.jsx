import React from 'react'
import ipad from './assets/ipad-frame.png'
import styles from './IPadFrame.module.css'

function IPadFrame( {content} ) {
  return (
    <div className={styles.container}>
      <img className={styles.frame} src={ipad} alt='iPad'/>
      <video playsInline className={styles.inner} src={content} loop="loop" autoPlay="autoplay"></video>
    </div>
  )
}

export default IPadFrame