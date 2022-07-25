import { useEffect, useState } from 'react'
import styles from './Clients.module.css'
import LogoSwitcher from './LogoSwitcher'
import logoData from './logoData.js'

function Clients() {

const [randomNumber, setRandomNumber] = useState(0);
  
const timeMS = 2000

useEffect(() => {
  const randomNumberInterval = setTimeout(() => {
    setRandomNumber(prevState => {
      let generateRandomNumber = Math.floor(Math.random() * 6) + 1
      if (prevState === generateRandomNumber) {
        generateRandomNumber = Math.floor(Math.random() * 2) + 1
      } else {
        return generateRandomNumber
      } 
    });
  }, timeMS);
  return () => clearTimeout(randomNumberInterval);
}, [randomNumber]);


  return (
    <section className={styles.clientsMainContainer}>
      <h1>Clients</h1>
      <h3 className='pb-2'>I’m proud to work with such great people</h3>

      <div className={styles.logoContainer}>
        <LogoSwitcher
          logo1={logoData.AM}
          logo2={logoData.LS}
          id={1}
          randomNumber={randomNumber}
        />
        <LogoSwitcher
          logo1={logoData.CM}
          logo2={logoData.KX}
          id={2}
          randomNumber={randomNumber}
        />
        <LogoSwitcher
          logo1={logoData.NHS}
          logo2={logoData.DPG}
          id={3}
          randomNumber={randomNumber}
        />
        <LogoSwitcher
          logo1={logoData.MC}
          logo2={logoData.CFC}
          id={4}
          randomNumber={randomNumber}
        />
        <LogoSwitcher
          logo1={logoData.SF}
          logo2={logoData.KSC}
          id={5}
          randomNumber={randomNumber}
        />
        <LogoSwitcher
          logo1={logoData.LFC}
          logo2={logoData.MU}
          id={6}
          randomNumber={randomNumber}
        />
      </div>

    </section>
  )
}

export default Clients