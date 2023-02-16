import React from 'react'
import ProjectNav from '../../Nav/ProjectNav.jsx'
import CaseStudyHeader from '../GeneralComponents/CaseStudyHeader.jsx'
import CaseStudyFooter from '../GeneralComponents/CaseStudyFooter.jsx'
import consult from './assets/consulting.svg'
import designsystem from './assets/design_services.svg'
import styles from './PagePinpoint.module.css'
import PW1 from './assets/PP-1.png'
import PW2 from './assets/PP-2.png'
import PW3 from './assets/PP-3.png'
import headerImg from './assets/header-ppw.png'

const badgeData = [
    {
        icon: consult,
        text: 'Consulting',
        alt: 'Consulting badge'
    },
    {
        icon: designsystem,
        text: 'Design System',
        alt: 'Design System badge'
    },
  ]

function PagePinpoint() {
  return (
    <>
    <ProjectNav/>
    <div className={styles.mainContainer}>
        <img className={styles.headerImage} src={headerImg} alt='Design system header'/>
        <div className={styles.subContainer}>
        <CaseStudyHeader
            title='Pinpoint works design system revamp' 
            body='Pinpoint Works is the current market leader in providing software to manage super yachts effectively with a live worklist. It was founded by super yacht Captain, James Stockdale and is made using first hand experience to solve the problems that plague the industry. The platform allows users to manage their work in real-time, with an intuitive and user-friendly design. It enables users to easily track and manage tasks, assign responsibilities, and set deadlines so that all parties involved can stay on top of their responsibilities.'
            buttonText="Visit Pinpoint Works' website"
            badgeArray={badgeData}
            showButton={true}
            buttonLink={'https://www.pinpointworks.com/'}
            />
        </div>
        <div className={styles.textContainer}>
            <h2 className={styles.title}>The Challenge</h2>
            <p>I started at the company as a Product Owner & UI Designer, and after 4 months in that role, it was apparent that there was a need to take a full-time position in UX/UI to take the software to the next level. Their flagship product did not have a complete design system for many years, and over time the inconsistencies through the app were rampant and needed to be addressed.</p>
        </div>
        <img src={PW1} alt='Design system' className={styles.images}/>
        <div className={styles.textContainer}>
            <h2 className={styles.title}>Getting Started</h2>
            <p>To get started on correcting this we first has to gather a few fundamentals for all new designs. Defining all the basic building blocs before any new feature work could begin. this included typography, colours, spacing and a few basic components build from the ground up and made as Figma components with variants to allow for easy reuse. The primary benefit is that you can easily and quickly create a library of components that can be reused and updated throughout your design process. This helps to maintain consistency, save time, and reduce errors in your design.</p>
        </div>
        <img src={PW2} alt='Design system buttons' className={styles.images}/>
        <div className={styles.textContainer}>
            <h2 className={styles.title}>Implementation to live</h2>
            <p>Now we had a solid base to build upon; we had to think of how to implement this onto a  live platform with over a billion dollars in assets managed by thousands of high-value clients. Because of the delicacy of the situation, it was decided for any new features; we would work closely with the development team to adhere perfectly to the new design system and then naturally and slowly implement global changes as an outcome, eventually refactoring the whole platform.</p>
        </div>
        <img src={PW3} alt='Design system app' className={styles.images}/>
        <div className={styles.textContainer}>
            <h2 className={styles.title}>Continuous development</h2>
            <p>Maintaining a design system requires regular and consistent effort. A design system is a living document that should be continually reviewed and updated to remain current and relevant. It’s crucial to regularly collect feedback from users and stakeholders and incorporate it into the system as appropriate. Doing this ensures the design system remains relevant and valuable. As the design system evolves, components may need to be updated or replaced, which includes updating style guides, patterns, and other elements by both design and development teams.</p>
        </div>
    </div>
    <CaseStudyFooter/>
    </>
  )
}

export default PagePinpoint