// OverviewPage.jsx
import React, { useEffect, useRef, useState } from 'react'
import './Styles.css'
import Overviewbg from '../assets/Overviewbg.png'
import explorebtn from '../assets/explorebtn.png'
import LogoTopLeft from '../assets/Vector.png'
import ComingSoon2 from '../assets/ComingSoon2.png'
import MarketplaceImage from '../assets/Marketplace.png'
import MerchandiseImage from '../assets/Merchandise.png'
import LogoImage from '../assets/footprints.png'
import Question from '../assets/question.png'
import Footer from '../HomePage/Footer'
import Vector from '../assets/Vector.png'
import footertwitter from '../assets/footertwitter.png'
import footertelegram from '../assets/footertelegram.png'
import footerlinkedln from '../assets/footerlinkedln.png'
import footerfacebook from '../assets/footerfacebook.png'
import { Link } from 'react-router-dom'
const OverviewPage = () => {
  const exploreButtonRef = useRef(null)
  const [isClicked, setIsClicked] = useState(false)
  const handleExploreClick = () => {
    setIsClicked(true)
    // Get the current position of the element
    const exploreButtonPosition = exploreButtonRef.current.offsetTop

    // Scroll smoothly to the element
    window.scrollTo({
      top: exploreButtonPosition + 1000,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const buttonRef = exploreButtonRef.current

    if (buttonRef) {
      // Add event listener when the component mounts
      buttonRef.addEventListener('click', handleExploreClick)

      // Clean up the event listener when the component unmounts
      return () => {
        buttonRef.removeEventListener('click', handleExploreClick)
      }
    }

    // If exploreButtonRef.current is null, do nothing
  }, [])

  const fontStyles = `
  @import
  url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Mystery+Quest&family=Staatliches&family=Syne:wght@400;800&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Mystery+Quest&family=Proza+Libre&family=Staatliches&family=Syne:wght@400;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Mystery+Quest&family=Proza+Libre&family=Staatliches&family=Syne:wght@400;800&display=swap');@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Mystery+Quest&family=Outfit&family=Poppins:ital,wght@0,200;0,300;1,200&family=Proza+Libre&family=Staatliches&family=Syne:wght@400;800&display=swap');
`
  // Set the target date for the countdown (YYYY, MM - 1, DD, HH, mm, ss)
  const targetDate = new Date(2023, 11, 31, 18, 30, 0)

  const calculateTimeDifference = () => {
    const now = new Date()
    const difference = targetDate - now

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setDays(days)
      setHours(hours)
      setMinutes(minutes)
      setSeconds(seconds)
    } else {
      // Countdown is complete, you can handle this case as needed
      setDays(0)
      setHours(0)
      setMinutes(0)
      setSeconds(0)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the time difference every second
      calculateTimeDifference()
    }, 1000)

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval)
  }, []) // Empty dependency array ensures that the effect runs only once on mount

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const renderDigits = (value) => {
    // Convert the value to a string and split into individual digits
    const digits = value.toString().split('')
    return digits.map((digit, index) => (
      <div key={index} style={styles.number}>
        {digit}
      </div>
    ))
  }

  const mainData = [
    { img: MarketplaceImage, title: 'Marketplace', logo: LogoImage },
    { img: MerchandiseImage, title: 'Merchandise', logo: LogoImage },
  ]
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    // Update the current year on component mount
    setCurrentYear(new Date().getFullYear())
  }, [])

  const notifyButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#62EDED',
    color: 'white',
    fontFamily: 'Poppins',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
  const textBoxStyle = {
    padding: '10px ',
    width: '100%',
    fontFamily: 'Poppins',
    borderRadius: '8px',
    // marginRight: '10px',
  }
  const titleStyle = {
    fontSize: '15px',
    fontWeight: 'bold',
    fontFamily: 'Syne',
    color: '#62EDED',
    marginTop: '5px', // Add some margin for better spacing
  }
  const logoStyle = {
    width: '20%',
    height: 'auto',
  }
  const overlayStyle = {
    position: 'absolute',
    bottom: '13%',
    left: '50%', // Adjusted to center horizontally
    transform: 'translateX(-50%)', // Center horizontally
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  const cardStyle = {
    textAlign: 'center',
    maxWidth: '300px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '10px 60px',
    position: 'relative', // Add this line
  }
  const navbarStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '8px',
    width: '100%',
    position: 'absolute',
    top: 0,
    background: '#0C1A1C',
  }

  const navLinkContainerStyles = {
    display: 'flex',
    alignItems: 'center',
  }

  const navLinkStyles = {
    color: 'white',
    cursor: 'pointer',
    textDecoration: 'none',
    margin: '0 20px',
    fontSize: '16px',
    fontFamily: 'Proza+Libre',
  }

  const logoStyles = {
    width: '68.49px',
    height: '37px',
    marginRight: '28%',
  }

  const exploreButtonStyles = {
    width: '150px',
  }
  const centerContentStyles = {
    maxWidth: '800px',
    top: '20%',
    textAlign: 'center',
    margin: '10% auto 5% auto',
  }

  const headingStyles = {
    fontSize: '62px',
    fontFamily: 'Syne',
    marginBottom: '20px',
  }

  const paragraphStyles = {
    fontSize: '18px',
    width: '600px',
    textAlign: 'center',
    fontFamily: 'Proza+Libre',
    margin: '40px auto',
  }
  const paragraphStyles2 = {
    fontSize: '18px',
    width: '800px',
    // textAlign: 'center',
    fontFamily: 'Proza+Libre',
    margin: '60px auto',
  }
  const styles = {
    countdownContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '30px auto', // Center the countdown container
    },
    countdownItem: {
      textAlign: 'center',
    },
    digitContainer: {
      display: 'flex',
      margin: '0 20px', // Add margin between digit containers
    },
    number: {
      backgroundColor: 'rgb(182, 204, 205)',
      opacity: '0.6',
      color: '#ffffff',
      padding: '10px',
      fontWeight: 'bold',
      margin: '0 8px', // Add margin between digits
      borderRadius: '5px',
      fontFamily: 'sevenSegment',
      fontSize: '52px',
    },
    label: {
      fontSize: '32px',
      marginTop: '10px',
      fontFamily: 'Poppins',
    },
  }
  return (
    <div className='overview-page'>
      {' '}
      <style>{fontStyles}</style>
      <div style={navbarStyles}>
        <div style={navLinkContainerStyles}>
          {/* Use <Link> from 'react-router-dom' for navigation */}
          <a href='/marketplace' style={navLinkStyles}>
            Marketplace
          </a>
          <a href='/merchandise' style={navLinkStyles}>
            NFT Collection
          </a>
          <a href='/overview' style={navLinkStyles}>
            Overview
          </a>{' '}
          <a href='/home' style={navLinkStyles}>
            Home
          </a>
        </div>
        <img src={LogoTopLeft} alt='Logo' style={logoStyles} />
        {/* Use a button for better accessibility */}{' '}
        <img
          ref={exploreButtonRef}
          src={explorebtn}
          alt='explorebtn'
          style={exploreButtonStyles}
        />
        {/* <button style={exploreButtonStyles}>Explore</button> */}
      </div>
      <div style={centerContentStyles}>
        <div>
          <h1 style={headingStyles}>
            THE <br />
            <span style={{ color: '#0AF2CA' }}>
              FORBIDDEN <br />
              FOREST
            </span>
          </h1>
          <h4 style={{ fontFamily: 'Proza+Libre', margin: '40px 0' }}>
            {' '}
            WELCOME TO THE FORBIDDEN FOREST NFT
          </h4>
          <p style={paragraphStyles}>
            Explore the enchanted world of The Forbidden Forest NFT in this Beta
            release. Discover key features, engage with captivating content, and
            be part of shaping the future of our platform
          </p>
        </div>
        <div>
          <img
            src={ComingSoon2}
            alt='Logo'
            style={{ width: '50%', marginTop: '20%' }}
          />
          <p style={paragraphStyles2}>
            Get a sneak peek into the upcoming Marketplace of The Forbidden
            Forest. Explore a curated selection of NFTs and immerse yourself in
            the magic that awaits.
          </p>
          {/* Add your 'Coming Soon' image here */}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          // flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // Allow cards to wrap to the next line
          }}
        >
          {' '}
          {mainData.map((card, index) => (
            <div key={index} style={cardStyle}>
              <img
                src={card.img}
                alt={card.title}
                style={{
                  width: '100%',
                  opacity: '0.4',
                  height: 'auto',
                  marginBottom: '10px',
                }}
              />{' '}
              {/* Absolute positioned image at the top center */}{' '}
              {index === 0 && (
                // Absolute positioned image at the top center, only on the first card
                <img
                  src={Question}
                  alt='Top Image'
                  style={{
                    position: 'absolute',
                    top: '10%',
                    left: '120%',
                    transform: 'translateX(-50%)',
                    width: '100%', // Adjust the width as needed
                    height: 'auto',
                    zIndex: 1, // Ensure it's above the main image
                  }}
                />
              )}
              <div style={overlayStyle}>
                <div style={logoStyle}>
                  <img
                    src={card.logo}
                    alt={`${card.title} Logo`}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <h5 style={titleStyle}>{card.title}</h5>
              </div>
            </div>
          ))}{' '}
        </div>
        {/* <div style={styles.countdownContainer}>
          <div style={styles.countdownItem}>
            <div style={styles.digitContainer}>
              <div style={styles.number}>2</div>
              <div style={styles.number}>0</div>
            </div>
            <div style={styles.label}>Days</div>
          </div>
          <div style={styles.countdownItem}>
            <div style={styles.digitContainer}>
              <div style={styles.number}>2</div>
              <div style={styles.number}>2</div>
            </div>
            <div style={styles.label}>Hours</div>
          </div>
          <div style={styles.countdownItem}>
            <div style={styles.digitContainer}>
              <div style={styles.number}>5</div>
              <div style={styles.number}>6</div>
            </div>
            <div style={styles.label}>Minutes</div>
          </div>
        </div> */}
        <div style={styles.countdownContainer}>
          <div style={styles.countdownItem}>
            <div style={styles.digitContainer}>{renderDigits(days)}</div>
            <div style={styles.label}>{days > 1 ? 'Days' : 'Day'}</div>
          </div>
          <div style={styles.countdownItem}>
            <div style={styles.digitContainer}>{renderDigits(hours)}</div>
            <div style={styles.label}>{hours > 1 ? 'Hours' : 'Hour'}</div>
          </div>
          <div style={styles.countdownItem}>
            <div style={styles.digitContainer}>{renderDigits(minutes)}</div>
            <div style={styles.label}>{minutes > 1 ? 'Minutes' : 'Minute'}</div>
          </div>
          <div style={styles.countdownItem}>
            <div style={styles.digitContainer}>{renderDigits(seconds)}</div>
            <div style={styles.label}>{seconds > 1 ? 'Seconds' : 'Second'}</div>
          </div>
        </div>
        <div
          style={{
            width: '300px',
            textAlign: 'center',
            fontFamily: 'Proza+Libre',
          }}
        >
          <p style={{ marginBottom: '20px', fontSize: '16px' }}>
            We’ll let you know when we are launching
          </p>
          <div
            style={{
              marginBottom: '20px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            {/* Your text box goes here */}
            <input
              type='text'
              placeholder='Email Address'
              style={{
                width: '100%',
                padding: '10px',
                boxSizing: 'border-box',
                marginBottom: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                fontSize: '14px',
                margin: '0', // Set margin to 0
              }}
            />
            {/* Your "Notify Me" button goes here */}
            <button
              style={{
                backgroundColor: '#4DC2C0',
                color: '#fff',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '14px',
                width: '124px',
                height: '39px',
                margin: '0', // Set margin to 0
              }}
            >
              Notify Me
            </button>
          </div>
        </div>
      </div>
      <div style={{ fontFamily: 'Inter' }}>
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
    </div>
  )
}

export default OverviewPage
