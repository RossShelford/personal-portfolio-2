import React from 'react'
import styles from './Clients.module.css'
import RandomLogoPicker from './RandomLogoPicker'

function Clients() {
  return (
    <section className={styles.clientsMainContainer}>
      <h1>Clients</h1>
      <h3 className='paddingBottom50px'>I’m proud to work with such great people</h3>

      <RandomLogoPicker />

    </section>
  )
}

export default Clients