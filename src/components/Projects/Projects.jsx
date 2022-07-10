import React, { useState } from 'react'
import styles from './Projects.module.css'
import '../../index.css'
import data from './data.js'

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
      <div className={styles.carouselContainer}>
        {data.map((item) => {
          return (
            <div 
            className={styles.carouselItem} 
            key={item.title + ' item'} 
            style={{ transform: `translateX(-${(activeIndex * 100)}% )` }}
            >
              <video src={item.src} playsInline muted key={item.title + ' video'} autoPlay="autoplay" loop="loop"/>
              <h3 className={styles.carouselText} key={item.title + ' title'}>{item.title}</h3>
            </div>
        )})}
      </div>
      
      <button
        onClick={()=>{
          updateIndex(activeIndex + 1)
        }}
      >
        Next
      </button>
      <button
        onClick={()=>{
          updateIndex(activeIndex - 1)
        }}
      >
        Prev
      </button>
    </section>
  )
}

export default Projects