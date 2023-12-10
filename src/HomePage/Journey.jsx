import React, { useEffect, useState } from 'react'
import sharedStyles, { GlobalStyles } from './JourneyStyles'
import cutsword from '../assets/cutsword.png'
import { cardData } from './Cards'
import MarketplaceImage from '../assets/Marketplace.png'
import MerchandiseImage from '../assets/Merchandise.png'
import LogoImage from '../assets/footprints.png' // Replace with your logo image
import bg3 from '../assets/bg3.png'
const Journey = () => {
  const fontStyles = `
  @import
  url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Mystery+Quest&family=Staatliches&family=Syne:wght@400;800&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Mystery+Quest&family=Proza+Libre&family=Staatliches&family=Syne:wght@400;800&display=swap');
`

  // Set the target date for the countdown (YYYY, MM - 1, DD, HH, mm, ss)
  // const targetDate = new Date(2023, 11, 31, 18, 30, 0)
  const targetDate = new Date(2024, 0, 13, 17, 0, 0)

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

  const {
    container,
    background,
    content,
    titleAndStats,
    title,
    stats,
    swordImage,
    bgStyles2,
    cardStyles,
    card,
    cutswordContainer,
    cardImage,
    cardLogo,
    cardTitle,
    titleStyle,
    comingSoonCard,
    cardStyle,
    overlayStyle,
    logoStyle,
  } = sharedStyles

  const leftContent = {
    marginRight: '10px',
  }

  // Add appropriate styling for other components as needed
  const commonStyle = {
    fontSize: '60px',
    fontWeight: 'bold',
    fontFamily: 'Syne',

    // marginBottom: '5%',
  }
  const backgroundImageStyle = {
    backgroundImage: `url(${bg3})`, // Use template literal to include the image path

    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: 'auto',
    padding: '50px', // Adjust padding as needed
    textAlign: 'center',
  }
  const textBoxStyle = {
    padding: '10px ',
    width: '27%',
    fontFamily: 'Poppins',
    borderRadius: '8px',
    // marginRight: '10px',
  }

  const notifyButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#62EDED',
    color: 'white',
    fontFamily: 'Poppins',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
  const countdownContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '30px auto', // Center the countdown container
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
      color: 'white',
      padding: '10px',
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
    <div style={container}>
      {' '}
      <GlobalStyles />
      <div style={background}>
        <div style={content}>
          <div style={titleAndStats}>
            <div style={title}>Embark on the NFT Journey</div>
            <div style={stats}>
              <div>
                <p
                  style={{
                    paddingRight: '30px',
                    fontFamily: 'Proza+Libre',
                  }}
                >
                  <span
                    style={{
                      color: '#62EDED',
                      marginRight: '5px',
                      fontWeight: 'bold',
                    }}
                  >
                    7
                  </span>
                  + <br />
                  <span
                    style={{
                      fontSize: '15px',
                      color: '#ffffff',
                    }}
                  >
                    VARIENTS
                  </span>
                </p>
              </div>
              <div
                style={{
                  borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
                  paddingLeft: '30px',
                }}
              >
                <p
                  style={{
                    paddingRight: '30px',
                    fontFamily: 'Proza+Libre',
                  }}
                >
                  <span
                    style={{
                      color: '#62EDED',
                      marginRight: '5px',
                      fontWeight: 'bold',
                    }}
                  >
                    6K
                  </span>
                  +
                  <br />
                  <span
                    style={{
                      fontSize: '15px',
                      color: '#ffffff',
                    }}
                  >
                    NFT DROP
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div
            style={{ textAlign: 'center', fontSize: '16px', marginTop: '50px' }}
          >
            <p>
              Embark on an enchanting NFT journey with "The Forbidden Forest,"
              featuring 6,000 + unique cabins at the heart of the grand reveal.
              Each cabin stands as a cornerstone, a unique canvas for creativity
              and adventure. Uncover seven distinct cabin variants, each holding
              its own surprises, as we count down to an extraordinary unveiling.
              The forest beckons, inviting you to explore a world where
              imagination knows no bounds, with these cabins as the foundational
              pieces of this extraordinary experience.
            </p>
          </div>
        </div>
      </div>
      <div style={bgStyles2}>
        <div style={cardStyles}>
          <div style={cutswordContainer}>
            <img src={cutsword} alt='Cut Sword' style={swordImage} />
          </div>

          {cardData.map(({ img, title, para }, index) => (
            <div key={index} style={card}>
              <div style={cardImage}>
                <img
                  src={img}
                  alt={title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    marginBottom: '10px',
                  }}
                />
                <div style={cardTitle} className='row-container'>
                  <div className='left-content'>
                    <h3>{title}</h3>
                    {/* <p style={{ fontSize: '10px' }}>{para}</p> */}
                  </div>
                  <div className='right-content'>
                    {/* <p style={{ fontSize: '13px', color: '#EEEE9A' }}>
                      See All
                    </p> */}
                    <a
                      href='https://opensea.io/TheForbiddenForest'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        fontSize: '14px',
                        color: '#62EDED',
                        textDecoration: 'underline',
                        cursor: 'pointer',
                      }}
                    >
                      View on OpenSea
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* <div className='right-content'>
            <a
              href='https://opensea.io/TheForbiddenForest'
              target='_blank'
              rel='noopener noreferrer'
              style={{
                fontSize: '13px',
                color: '#EEEE9A',
                textDecoration: 'underline',
              }}
            >
              View on OpenSea
            </a>
          </div> */}
          <div style={comingSoonCard}>
            <h1
              style={{
                fontSize: '60px',
                fontWeight: 'bold',
                fontFamily: 'Syne',
                marginTop: '10%',
                marginBottom: '',
              }}
            >
              Coming <span style={{ color: '#62EDED' }}>Soon</span>
            </h1>{' '}
            <h1 style={{ ...commonStyle }}>
              {targetDate.getDate()}{' '}
              <span style={{ color: '#62EDED' }}>
                {targetDate.toLocaleString('default', { month: 'short' })}
              </span>
            </h1>{' '}
            <h1 style={{ ...commonStyle }}>
              <a
                href='https://opensea.io/TheForbiddenForest'
                target='_blank'
                rel='noopener noreferrer'
                style={{
                  fontSize: '14px',
                  color: '#62EDED',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
              >
                https://opensea.io/TheForbiddenForest
              </a>
            </h1>
          </div>
        </div>
      </div>
      <div style={backgroundImageStyle}>
        {' '}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap', // Allow cards to wrap to the next line
          }}
        >
          {mainData.map((card, index) => (
            <div key={index} style={cardStyle}>
              <img
                src={card.img}
                alt={card.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  marginBottom: '10px',
                }}
              />
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
          ))}
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
        {/* <div style={styles.emailContainer}>
          <p style={{ marginBottom: '20px', fontFamily: 'Proza+Libre' }}>
            We’ll let you know when we are Launching
          </p>
          <div style={{ marginBottom: '6%' }}>
           
            <input
              type='text'
              placeholder='Email Address'
              style={textBoxStyle}
            />
           
            <button style={notifyButtonStyle}>Notify Me</button>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Journey
