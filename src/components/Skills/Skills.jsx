import React from 'react'
import styles from './Skills.module.css'
import '../../index.css'
import TextDivider from './TextDivider.jsx'
import data from './data'

function Skills() {

  return (
    <section className={styles.skillsMainContainer}>
        <h1>Skills</h1>
        <h3 className={styles.paddingBottom50px}>Some skills that I have aquired over the years</h3>
        <TextDivider text={'PROJECT MANAGEMENT'}/>
        <div className={styles.logoContainer}>
          {data.map((item) => {
            return (
              <a href={item.url} target="_blank" rel="noreferrer">
              <img className={styles.logoWide} key={item.image} src={item.image} alt='img'/>
              </a>
          )})}
        </div>
        <TextDivider text={'DESIGN'}/>
        
        <TextDivider text={'DEVELOPMENT'}/>
    </section>
  )
}

export default Skills