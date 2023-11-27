// Banner component
import React from 'react'
import { motion } from 'framer-motion'
import WelcomeScreen from '../../assets/WelcomeScreen.png'
import LogoTopLeft from '../../assets/Vector.png'
import LogoBottomCenter from '../../assets/footprints.png'

const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Staatliches&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Mystery+Quest&family=Staatliches&display=swap');
`

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${WelcomeScreen})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh',
    zIndex: '122',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between', // Adjust to distribute space between top and bottom
    position: 'relative', // Make sure to set a relative position
  }

  const textStyle = {
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
    marginTop: '10%', // Adjust the marginTop to center vertically
  }

  const logoTopLeftStyle = {
    position: 'absolute',
    top: '30px',
    left: '10%',
    width: '68.49px', // Adjust the width as needed
    height: '37px', // Adjust the height as needed
    zIndex: 2,
  }

  const logoBottomCenterStyle = {
    position: 'absolute',
    bottom: '20px', // Adjust the bottom spacing as needed
    left: '50%',
    transform: 'translateX(-50%)', // Center horizontally
    width: '75px', // Adjust the width as needed
    height: '90px', // Adjust the height as needed
    zIndex: 2,
    marginBottom: '10px',
  }

  const redirectToIntroScreen = () => {
    // Use the history object to navigate to the intro screen
    // You should have a route set up for the intro screen
    history.push('/intro')
  }

  const splitText = (text, fontFamily, fontSize, letterSpacing) => {
    return text.split('').map((letter, index) => (
      <span key={index} style={{ fontFamily, fontSize, letterSpacing }}>
        {letter}
      </span>
    ))
  }

  return (
    <div>
      {/* Include the font styles */}
      <style>{fontStyles}</style>

      <div style={bannerStyle}>
        <motion.div style={textStyle}>
          {/* Your content goes here */}
          <h1
            style={{
              fontFamily: 'Staatliches',
              fontSize: '16px',
              marginBottom: '30px',
            }}
          >
            {splitText(
              'Embark on a Digital Journey into Enchantment',
              'Staatliches',
              '16px',
              '2px'
            )}
          </h1>
          <p style={{ fontFamily: 'Mystery Quest', fontSize: '36px' }}>
            BEYOND THE VEIL LIES THE <br /> FORBIDDEN FOREST
          </p>
        </motion.div>
        <img src={LogoTopLeft} alt='Top Left Logo' style={logoTopLeftStyle} />
        <a href='/intro' onClick={redirectToIntroScreen}>
          <img
            src={LogoBottomCenter}
            alt='Bottom Center Logo'
            style={logoBottomCenterStyle}
          />
        </a>
      </div>
    </div>
  )
}

export default Banner
