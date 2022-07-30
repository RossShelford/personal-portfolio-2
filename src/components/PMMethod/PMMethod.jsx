import React, { useState } from 'react'
import styles from './PMMethod.module.css'
import '../../index.css'
import Button from '../shared/Button.jsx'
import data from './data.js'
import ProgressDots from '../shared/ProgressDots.jsx'

function ProjectManagmentMethodology() {

const [activeIndex, setActiveIndex] = useState(0);

const updateIndex = (newIndex) => {
  if (newIndex < 0) {
    newIndex = 0;
  } else if (newIndex >= 6) {
    newIndex = 5;
  }
  setActiveIndex(newIndex);
}

  return (
    <section className={styles.projectsMainContainer}>
      <h1>Project Management Methodology</h1>


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
              {/* Content */}
              <div className={styles.carouselItemContainer}>
                <img className={styles.carouselItemImage} src={item.image} alt={item.title}></img>
                <div className={styles.carouselTextContainer}>
                  <h2 className={styles.carouselText} style={{color: item.titleColor}}>{item.title}</h2>
                  <h3 className={styles.carouselText}>{item.copytext}</h3>
                </div>
              </div>

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
        <ProgressDots activeIndex={activeIndex} items={data} />
      </div>
    </section>
  )
}

export default ProjectManagmentMethodology