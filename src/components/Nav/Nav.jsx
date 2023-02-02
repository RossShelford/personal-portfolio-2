import React from 'react'
import styles from './Nav.module.css'
import logo from './nameLogo.svg'

function Nav() {
  return (
    <nav  className={styles.container}>
        <img src={logo} alt='Ross Shelford Logo'className={styles.logo}/>
        <ul className={styles.subContainer}>
            <li className={styles.navText} onClick={()=>{window.scrollTo({top:620,behavior:'smooth'})}}>skills</li>
            <li className={styles.navText} onClick={()=>{window.scrollTo({top:1350,behavior:'smooth'})}}>projects</li>
            <li className={styles.navText} onClick={()=>{window.scrollTo({top:2050,behavior:'smooth'})}}>clients</li>
            <li className={styles.navText} onClick={()=>{window.scrollTo({top:2750,behavior:'smooth'})}}>methods</li>
        </ul>
    </nav>
  )
}

export default Nav