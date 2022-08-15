import React, { useState } from 'react'
import styles from './Projects.module.css'
import '../../index.css'
import data from './data.js'
import Button from '../shared/Button.jsx'
import ProgressDots from '../shared/ProgressDots.jsx'
import { Link } from 'react-router-dom'

function Projects() {

const [activeIndex, setActiveIndex] = useState(0);

const updateIndex = (newIndex) => {
  if (newIndex < 0) {
    newIndex = 0;
  } else if (newIndex >= 2) {
    newIndex = 1;
  }

  setActiveIndex(newIndex);
}

  return (
    <section className={styles.projectsMainContainer}>
      <h1>Projects</h1>
      <h3 className='paddingBottom50px'>A few selected projects of my own work</h3>

      {/* Caroursel */}
        <div className={styles.carouselContainer}>
          {data.map((item, index) => {
            return (
              <div 
              className={(activeIndex !== index) ? styles.carouselItemInactive : styles.carouselItem} 
              key={item.title + ' item'} 
              style={{ 
                transform: `translateX(-${(activeIndex * 100)}% )` 
              }}
              >
                <Link to={item.link}>
                  <video src={item.src} playsInline muted alt={item.title + ' video'} autoPlay="autoplay" loop="loop"/>
                </Link>
                <Link to={item.link}>
                  <h3 className={styles.carouselText}>{item.title}</h3> <svg height='20px' width='20px' fill="none" stroke="lightgrey" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </Link>
              </div>
            )})}
        </div>

      {/* Buttons */}
      <div className={styles.btnContainer}>
        <Button iconOnly={true} onClick={()=>{ updateIndex(activeIndex - 1) }}>
          <svg width="26px" height="26px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg> 
        </Button>
        <Button iconOnly={true} onClick={()=>{ updateIndex(activeIndex + 1) }}>
          <svg width="26px" height="26px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg> 
        </Button>
        <ProgressDots items={data} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>
    </section>
  )
}

export default Projects