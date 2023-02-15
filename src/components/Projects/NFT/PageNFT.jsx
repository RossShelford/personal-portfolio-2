import React from 'react'
import styles from './PageNFT.module.css'
import NFTGenVid from './assets/ExportingVideo.mp4'
import NFTslide from './assets/NFT-longSlide.png'
import Timelapse from './assets/Timelapse_Bailey.mp4'
import IPadFrame from '../../shared/IPadFrame'
import ProjectLoader from '../../LoaderPages/ProjectLoader'
import {useState, useEffect} from 'react'
import CaseStudyHeader from '../GeneralComponents/CaseStudyHeader'
import CaseStudyFooter from '../GeneralComponents/CaseStudyFooter'
import baileyPic from './assets/BaileyTheCat.png'
import illustration from './assets/palette.svg'
import terminal from './assets/terminal.svg'


const badgeData = [
  {
      icon: illustration,
      text: 'Illustration',
      alt: 'Illustration badge'
  },
  {
      icon: terminal,
      text: 'Development',
      alt: 'Development badge'
  },
]

function PageNFT() {

  const topScroll = ()=>{window.scrollTo(0, 0)}
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    }, 700)
  }, []) 

  return (
    <>
    {
      loading ? 
      <ProjectLoader/>
      :
    <div className={styles.masterContainer}>
        <img className={styles.headerImage} src={NFTslide} alt='header'/>
      <div className={styles.mainContainer}>
      <CaseStudyHeader 
              title='I am the sole creator of an NFT' 
              body='An NFT (Non-Fungible Token) is a type of digital asset that represents a unique, non-interchangeable item stored on a blockchain. NFTs are revolutionary because they can represent anything that can be digitized, including artwork, music, video, game items, and even collectibles. Unlike other digital assets, NFTs are not interchangeable, meaning that each one is unique and cannot be replaced by another. I firmly believe this technology is in its infancy and could be a pivotal tool in the verifying products and licencing.'
              showButton={false}
              badgeArray={badgeData}
            />
        <div className={styles.textContainer}>
          <h2>Getting started</h2>
          <p>
            I aimed to understand the blockchain technology to it’s fullest capacity and decided to make my own NFT from start to finish and learn everything there was to know about them. 
          </p>
          <p>
            Firstly, I needed subject matter and there’s few things in this world that I love more than my cat Bailey and thought to myself if there’s an opportunity for him to be immortalised on a blockchain in some way then I may as well do it.
          </p>
        </div>
        <img src={baileyPic} className={styles.baileyImg} alt='The best cat in the world'/>
        <div className={styles.textContainer}>
          <h2>Creating the illustration</h2>
          <p>
            As a base for the NFT I made a sketch then painted out a initial concept on my iPad using software called Procreate which is an intuitive digital illustration app which allows you to draw, paint, and design with ease. 
          </p>
        </div>
        <IPadFrame content={Timelapse}/>
        <div className={styles.textContainer}>
          <h2>Creating variety</h2>
          <p>
          To create thousands of NFT’s you must have many unique variations. To achieve this, I made a bunch of different features and items, which I layered onto the original artwork and configured an open-source script by <a className={styles.clickable} target="_Blank" rel="noreferrer" href="https://github.com/hashlips">Hashlips</a> that generates random and unique images from layers.
          </p>
        </div>
        <video playsInline className={styles.ac} src={NFTGenVid} loop="loop" autoplay="autoplay"></video>
        <div className={styles.textContainer}>
          <h2>Adding to blockchain</h2>
          <p>
            NFTs do not actually store images on the blockchain because of file size constraints. Instead, they store a hash of the image. This hash is called the NFT’s content ID (CID)  and is typically hosted on <a className={styles.clickable} target="_Blank" rel="noreferrer" href="https://ipfs.tech/">IPFS</a>. Once content is uploaded, it cannot be modified without changing the CID.
            I have used <a className={styles.clickable} target="_Blank" rel="noreferrer" href="https://www.pinata.cloud/">Pinata</a> to simplify the process of uploading my artwork on IPFS.
          </p>
      </div>
      </div>
      <div className={styles.footerWrapper}>
          <div className={styles.footerContent}>
            <CaseStudyFooter/>
          </div>
        </div>
      {topScroll()}
    </div>
    }
    </>
  )
}

export default PageNFT