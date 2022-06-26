import React from 'react'
import styles from './Skills.module.css'
import '../../index.css'
import TextDivider from './TextDivider.jsx'
// import data from './data.js'


function Skills() {

  return (
    <section className={styles.skillsMainContainer}>
        <h1>Skills</h1>
        <h3 className={styles.paddingBottom50px}>Some skills that I have aquired over the years</h3>
        <TextDivider text={'PROJECT MANAGEMENT'}/>
        <TextDivider text={'DESIGN'}/>
        <TextDivider text={'DEVELOPMENT'}/>
    </section>
  )
}

export default Skills