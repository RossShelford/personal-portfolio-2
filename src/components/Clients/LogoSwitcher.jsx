import React, { useState } from 'react'
import { useEffect } from 'react';
import styles from './LogoSwitcher.module.css'

function LogoSwitcher( {logo1, logo2, id, randomNumber} ) {
  const [logoSwitch, setLogoSwitch] = useState(true);

useEffect(()=>{
  if (id === randomNumber) {
   setLogoSwitch((p) => !p)
}}, [id, randomNumber])
 
  return (
    <div className={styles.logoGroup}>
      <div className={styles.logos}>
        <img src={logo1} alt='Logo' style={{opacity: logoSwitch ? 1 : 0}}/>
      </div>
      <div className={styles.logos}>
        <img src={logo2} alt='Logo' style={{opacity: logoSwitch ? 0 : 1}}/>
      </div>
    </div>
  )
}


export default LogoSwitcher;