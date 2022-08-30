import React from 'react'
import styles from './Skills.module.css'
import '../../index.css'
import TextDivider from './TextDivider.jsx'
import data from './data'

function Skills() {

  return (
    <section className={styles.skillsMainContainer}>
        <h1>Skills</h1>
        <h3 className='paddingBottom50px'>Knowledge of some software that I have aquired over the years</h3>
        <TextDivider>DEVELOPMENT</TextDivider>
        <div className={styles.logoContainer}>
          {data[1].map((item) => {
            return (
              <a href={item.url} target="_blank" key={item.image} rel="noreferrer">
              <img className={styles.logoIcon} key={item.image} src={item.image} alt='img'/>
              </a>
          )})}
        </div>
        <TextDivider>DESIGN</TextDivider>
        <div className={styles.logoContainer}>
          {data[0].map((item) => {
            return (
              <a href={item.url} target="_blank" key={item.image} rel="noreferrer">
              <img className={styles.logoWide} key={item.image} src={item.image} alt='img'/>
              </a>
          )})}
        </div>
        <TextDivider>PROJECT MANAGEMENT</TextDivider>
        <div className={styles.logoContainer}>
          {data[2].map((item) => {
            return (
              <a href={item.url} target="_blank" key={item.image} rel="noreferrer">
              <img className={styles.logoWide} key={item.image} src={item.image} alt='img'/>
              </a>
          )})}
        </div>
    </section>
  )
}

export default Skills