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
      <div className={styles.absolute}>
        <img src={logo1} alt='Logo' className={styles.logoStyles} style={{opacity: logoSwitch ? 1 : 0}}/>
      </div>
      <div className={styles.absolute}>
        <img src={logo2} alt='Logo' className={styles.logoStyles} style={{opacity: logoSwitch ? 0 : 1}}/>
      </div>
    </div>
  )
}

export default LogoSwitcher;