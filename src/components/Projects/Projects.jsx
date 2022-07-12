import React, { useState } from 'react'
import styles from './Projects.module.css'
import '../../index.css'
import data from './data.js'
import Button from '../shared/Button.jsx'

function Projects() {

const [activeIndex, setActiveIndex] = useState(0);

const updateIndex = (newIndex) => {
  if (newIndex < 0) {
    newIndex = 0;
  } else if (newIndex >= 3) {
    newIndex = 2;
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
            className={(activeIndex !== index) ? styles.carouselItemActive : styles.carouselItem} 
            key={item.title + ' item'} 
            style={{ 
              transform: `translateX(-${(activeIndex * 100)}% )` 
            }}
            >
              <video src={item.src} playsInline muted key={item.title + ' video'} autoPlay="autoplay" loop="loop"/>
              <h3 className={styles.carouselText} key={item.title + ' title'}>{item.title}</h3>      
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
      </div>
    </section>
  )
}

export default Projects