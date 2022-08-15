import React from 'react'
import styles from './PageNFT.module.css'
import NFTGenVid from './assets/ExportingVideo.mp4'
import NFTslide from './assets/NFT-longSlide.png'
import Timelapse from './assets/Timelapse_Bailey.mp4'
import IPadFrame from '../../shared/IPadFrame'
import ProjectLoader from '../../LoaderPages/ProjectLoader'
import {useState, useEffect} from 'react'

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
        <div className={styles.textContainer}>
          <h2>What is an NFT?</h2>
          <p>
            Put simply, NFT's (Non-Fungible Token) are currently most know for digital art that a person who buys an NFT art piece is actually buying the only verifiable version of that piece as minted by the artist. When an artist mints a work, it's at that point that all other copies are just that, copies. The monetary value of that work is attached to the actual NFT connected to the blockchain. NFT's a whole is a technology still in its infancy and I personally believe it will become a pivotal tool in verifying products and licencing.
          </p>
          <h2>How Do NFTs Work?</h2>
          <p>
            NFTs are powered by smart contracts, most commonly on the Ethereum blockchain. NFTs are created by the process of “minting”. This is when a digital file is transformed into a digital asset. The asset is given a unique fingerprint (hash), token name, and token symbol. Once minted, this asset can then be stored on the blockchain, traded, or sold. Like other cryptocurrency transactions, records of ownership and transfers of digital assets will be stored on the blockchain for all to see.
          </p>
        </div>
        <IPadFrame content={Timelapse}/>
        <p className={styles.textContainer}>
          The first necessary part of my Project was to have illustration to use, so I drew my cat Bailey. From there to be able to I then drew a bunch of different variants for the eyes, mouth, body and accessories allowing me to layer and generate thousands of unique artworks using open source software by <a className={styles.clickable} target="_Blank" rel="noreferrer" href="https://github.com/hashlips">Hashlips</a>.
        </p>
        <video playsInline className={styles.ac} src={NFTGenVid} loop="loop" autoplay="autoplay"></video>
        <p className={styles.textContainer}>
          NFTs do not actually store images on the blockchain because of file size constraints. Instead, they store a hash of the image. This hash is called the NFT’s content ID (CID)  and is typically hosted on <a className="underline text-lavender" target="_Blank" rel="noreferrer" href="https://ipfs.io/">IPFS</a>. Once content is uploaded, it cannot be modified without changing the CID.
          I have used <a className={styles.clickable} target="_Blank" rel="noreferrer" href="https://www.pinata.cloud/">Pinata</a> to simplify   the process of uploading my artwork on IPFS.
        </p>
      </div>
      {topScroll()}
    </div>
    }
    </>
  )
}

export default PageNFT