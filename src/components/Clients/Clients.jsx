import React, { useEffect } from 'react'
import styles from './Clients.module.css'
import LogoSwitcher from './LogoSwitcher'
import logoData from './logoData.js'
import { useState } from 'react'

function Clients() {

const [randomNumber, setRandomNumber] = useState(2);
  
const rN = Math.floor(Math.random() * 8) + 1

useEffect(() => {
  setTimeout(() => {
    setRandomNumber(rN)
    console.log('Random updated: ' + randomNumber);
  }, 200);
  }, [randomNumber])

  return (
    <section className={styles.clientsMainContainer}>
      <h1>Clients</h1>
      <h3 className='pb-4'>I’m proud to work with such great people {randomNumber}</h3>

      <div className={styles.logoContainer}>
        <LogoSwitcher
          logo1={logoData.CFC}
          logo2={logoData.LFC}
          id={1}
          randomNumber={randomNumber}

        />
        <LogoSwitcher
          logo1={logoData.CFC}
          logo2={logoData.LFC}
          id={2}
          randomNumber={randomNumber}
        />
        <LogoSwitcher
          logo1={logoData.CFC}
          logo2={logoData.LFC}
          id={3}
          randomNumber={randomNumber}
        />
        <LogoSwitcher
          logo1={logoData.CFC}
          logo2={logoData.LFC}
          id={4}
          randomNumber={randomNumber}
        />
        <LogoSwitcher
          logo1={logoData.CFC}
          logo2={logoData.LFC}
          id={5}
          randomNumber={randomNumber}
        />
        <LogoSwitcher
          logo1={logoData.CFC}
          logo2={logoData.LFC}
          id={6}
          randomNumber={randomNumber}
        />
        <LogoSwitcher
          logo1={logoData.CFC}
          logo2={logoData.LFC}
          id={7}
          randomNumber={randomNumber}
        />
        <LogoSwitcher
          logo1={logoData.CFC}
          logo2={logoData.LFC}
          id={8}
          randomNumber={randomNumber}
        />
      </div>

    </section>
  )
}

export default Clients