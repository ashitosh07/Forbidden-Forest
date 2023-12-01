import React from 'react'
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
                    60
                  </span>
                  K <br />
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
              Embark on a captivating NFT journey with "The Forbidden Forest."
              Witness the grand reveal of 6,000 unique cabins, each paired with
              a random avatar. These cabins serve as the focal point in an
              immersive metaverse game, promising a blend of art and adventure.
              Uncover seven distinct cabin variants, each a surprise in its own
              right, as we count down to an extraordinary unveiling. The forest
              beckons, inviting you to explore a world where creativity knows no
              bounds.
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
                    <p style={{ fontSize: '10px' }}>{para}</p>
                  </div>
                  <div className='right-content'>
                    <p style={{ fontSize: '13px', color: '#EEEE9A' }}>
                      See All
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div style={comingSoonCard}>
            <h1
              style={{
                fontSize: '60px',
                fontWeight: 'bold',
                fontFamily: 'Syne',
                marginTop: '10%',
                marginBottom: '5%',
              }}
            >
              Coming <span style={{ color: '#62EDED' }}>Soon</span>
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
        <div style={styles.countdownContainer}>
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
        </div>
        <div style={styles.emailContainer}>
          <p style={{ marginBottom: '20px', fontFamily: 'Proza+Libre' }}>
            We’ll let you know when we are Launching
          </p>
          <div style={{ marginBottom: '6%' }}>
            {/* Your text box goes here */}
            <input
              type='text'
              placeholder='Email Address'
              style={textBoxStyle}
            />
            {/* Your "Notify Me" button goes here */}
            <button style={notifyButtonStyle}>Notify Me</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Journey
