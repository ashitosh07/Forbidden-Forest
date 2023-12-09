import React, { useEffect, useState } from 'react'
import FooterLogo from '../assets/Footerlogo.png'
import FooterImage from '../assets/Footer.png'
import './Footer.css'
import Vector from '../assets/Vector.png'
import footertwitter from '../assets/footertwitter.png'
import footertelegram from '../assets/footertelegram.png'
import footerlinkedln from '../assets/footerlinkedln.png'
import footerfacebook from '../assets/footerfacebook.png'
import { Link } from 'react-router-dom'
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
              {/* <img src={footerfacebook} alt='footerfacebook' /> */}
              {/* <img src={footertelegram} alt='footertelegram' /> */}

              <img
                src={footertwitter} // Replace with the actual path to your Twitter icon image file
                alt='footertwitter'
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  window.location.href =
                    'https://x.com/forestcabin?s=21&t=YWp5Aaik1QyDnA9tnXj6yg'
                }}
              />

              {/* <img src={footerlinkedln} alt='footerlinkedln' /> */}
            </div>
            <p>Support@theforbiddenforest.net</p>
            {/* Add your social media icons here */}
          </div>

          <div className='right-content'>
            <img src={FooterLogo} alt='Footer Logo' className='footer-logo' />
            <nav>
              <ul>
                <li style={{ fontWeight: 'bold', cursor: 'pointer' }}>
                  <Link
                    to='/explore'
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      fontSize: '13px',
                    }}
                  >
                    Explore
                  </Link>
                </li>
                <li style={{ cursor: 'pointer' }}>
                  <Link
                    to='/nft-journey'
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      fontSize: '13px',
                    }}
                  >
                    NFT Journey
                  </Link>
                </li>
                <li style={{ cursor: 'pointer' }}>
                  <Link
                    to='/coming-soon'
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      fontSize: '13px',
                    }}
                  >
                    Coming Soon
                  </Link>
                </li>
                <li style={{ cursor: 'pointer' }}>
                  <Link
                    to='/overview'
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      fontSize: '13px',
                    }}
                  >
                    Overview
                  </Link>
                </li>
                <li style={{ cursor: 'pointer' }}>
                  <Link
                    to='/social-feed'
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      fontSize: '13px',
                    }}
                  >
                    Social Feed
                  </Link>
                </li>
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
