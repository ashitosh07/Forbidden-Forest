import React, { useEffect, useState } from 'react'
import FooterLogo from '../assets/Footerlogo.png'
import FooterImage from '../assets/Footer.png'
import './Footer.css'
import Vector from '../assets/Vector.png'
import footertwitter from '../assets/footertwitter.png'
import footertelegram from '../assets/footertelegram.png'
import footerlinkedln from '../assets/footerlinkedln.png'
import footerfacebook from '../assets/footerfacebook.png'
const Footer = () => {
  const fontStyles = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Mystery+Quest&family=Outfit&family=Poppins:ital,wght@0,200;0,300;1,200&family=Proza+Libre&family=Staatliches&family=Syne:wght@400;800&display=swap');
`
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    // Update the current year on component mount
    setCurrentYear(new Date().getFullYear())
  }, [])
  return (
    <>
      <div
        style={{ backgroundImage: `url(${FooterImage})`, fontFamily: 'Inter' }}
      >
        {' '}
        <style>{fontStyles}</style>
        <div className='footer-container'>
          <div className='left-content'>
            <p>
              Discover NFTs by category, track the latest drop, and follow the
              collections you love. Enjoy it!
            </p>
            <div className='social-media'>
              <img src={footerfacebook} alt='footerfacebook' />
              <img src={footertelegram} alt='footertelegram' />
              <img src={footertwitter} alt='footertwitter' />
              <img src={footerlinkedln} alt='footerlinkedln' />
            </div>
            {/* Add your social media icons here */}
          </div>

          <div className='right-content'>
            <img src={FooterLogo} alt='Footer Logo' className='footer-logo' />
            <nav>
              <ul>
                <li style={{ fontWeight: 'bold' }}>Explore</li>
                <li>NFT Journey</li>
                <li>Coming Soon</li>
                <li>Overview</li>
                <li>Social Feed</li>
              </ul>
            </nav>
            <img src={Vector} alt='Vector' className='vector' />
          </div>
          {/* Divider and Copyright Information */}
          {/* <img src={FooterImage} alt='Footer Image' className='footer-image' /> */}
        </div>
        <div className='footer-divider'></div>
        <div className='copyright-info'>
          <p>© Copyright {currentYear} - Forbidden Forest</p>
          <p>Privacy Policy | Terms & Conditions</p>
        </div>{' '}
      </div>
    </>
  )
}

export default Footer
