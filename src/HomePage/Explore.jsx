import React, { useEffect, useRef, useState } from 'react'
import homepage from '../assets/homepage2.png'
import sword from '../assets/sword2.png'
import overlay from '../assets/overlay.png'
import LogoTopLeft from '../assets/Vector.png'
import facebookIcon from '../assets/facebook.png'
import twitterIcon from '../assets/twitter.png'
import instagramIcon from '../assets/instagram.png'
import discordIcon from '../assets/discord.png'
import rectangle from '../assets/Rectangle.png'
import button from '../assets/Button.png'
import explorebtn from '../assets/explorebtn.png'
import { useNavigate } from 'react-router-dom'
import { useAnimation } from '../AnimationContext.jsx'
import swordanimate from '../assets/Sword.png'
const Explore = () => {
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
  }, []) // Empty dependency array ensures the effect runs only once during mount

  const { isSwordAnimating, resetSwordAnimation } = useAnimation()
  const [isSwordVisible, setIsSwordVisible] = useState(true)
  const navigate = useNavigate() // useNavigate for navigation

  useEffect(() => {
    if (isSwordAnimating || !isSwordAnimating) {
      // Perform any additional animations or logic here
      setTimeout(() => {
        resetSwordAnimation()
        setIsSwordVisible(false) // Hide the sword after the animation
      }, 1)
    }
  }, [])

  // useNavigate for navigation
  const fontStyles = `
  @import
  url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Mystery+Quest&family=Staatliches&family=Syne:wght@400;800&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Mystery+Quest&family=Proza+Libre&family=Staatliches&family=Syne:wght@400;800&display=swap');
`
  const swordanimateStyles = {
    width: '60%',
    height: 'auto',
    position: 'absolute',
    bottom: 0,
    right: isSwordAnimating ? '50%' : 0, // Move the sword to the right when animating
    transition: 'all 0.5s ease',
    zIndex: 2,
    visibility: isSwordVisible ? 'visible' : 'hidden',
    // Add any other styling properties you need
  }
  const containerStyles = {
    position: 'relative',
    backgroundImage: `url(${homepage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '24px',
  }

  const overlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  }

  const socialMediaOverlayStyles = {
    backgroundImage: `url(${rectangle})`,
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px 12px',
    width: 'auto', // Let the width adjust to content
  }

  const socialMediaIconStyles = {
    width: '20px', // Adjust the width of the social media icons
    height: 'auto',
    cursor: 'pointer',
    margin: '5px',
  }

  const navbarStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px',
    width: '90%',
    position: 'absolute',
    top: 0,
    background: 'rgba(0, 0, 0, 0.3)',
  }

  const navLinkContainerStyles = {
    display: 'flex',
    alignItems: 'center',
  }

  const navLink = {
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
    ':hover': {
      border: '2px solid blue',
      // Add any other styles for hover
    },

    // ...(isClicked && {
    //   // Styles to apply when the button is clicked
    //   border: '2px solid red',
    //   // Add any other styles you want to change on click
    // }),
  }

  const contentWrapperStyles = {
    display: 'flex',

    justifyContent: 'space-between',
    alignItems: 'center',
    width: '75%',
    flex: 1,
  }

  const contentStyles = {
    maxWidth: '50%',
    marginTop: '10%',
    textAlign: 'left',
  }

  const swordStyles = {
    width: '63%',
    height: 'auto',
  }

  const headingStyles = {
    fontSize: '48px',
    fontFamily: 'Syne',
    marginBottom: '10px',
    color: '#0AF2CA',
    fontWeight: 'bold',
  }
  const headingStyles2 = {
    fontSize: '48px',
    fontFamily: 'Syne',

    color: '#ffffff',
    fontWeight: 'bold',
  }
  const subHeadingStyles = {
    fontSize: '32px',
    fontFamily: 'Syne',
    fontWeight: '200',
    marginBottom: '10px',
  }

  const paragraphStyles = {
    fontSize: '12px',
    fontFamily: 'Proza+Libre',
    marginBottom: '20px',
    color: '#ac9e9ef',
  }

  const buttonStyles = {
    // padding: '6px 14px',
    fontSize: '12px',
    width: '35%',
    border: 'none',
    borderRadius: '6px',
    color: 'black',
  }

  const overlayBottomStyles = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 'auto',
    pointerEvents: 'none',
  }

  return (
    <div style={containerStyles}>
      <div style={overlayStyles}></div>
      <style>{fontStyles}</style>{' '}
      <div
        style={{
          position: 'absolute',
          top: '70px',
          right: '20px',

          color: '#fff',
          padding: '8px 12px',
          borderRadius: '5px',
          fontSize: '16px',
          fontWeight: 'bold',
        }}
      >
        Website in Beta
      </div>
      <div style={socialMediaOverlayStyles}>
        {/* Add your social media icons here */}
        <img
          src={twitterIcon} // Replace with the actual path to your Twitter icon image file
          alt='Twitter'
          style={socialMediaIconStyles} // Add your icon styles here
          onClick={() => {
            window.location.href =
              'https://x.com/forestcabin?s=21&t=YWp5Aaik1QyDnA9tnXj6yg'
          }}
        />
        {/* <img
          src={instagramIcon}
          alt='Instagram'
          style={socialMediaIconStyles}
        />
        <img src={discordIcon} alt='Instagram' style={socialMediaIconStyles} />
        <img
          src={facebookIcon}
          alt='Facebook'
          style={{ width: '13px', height: 'auto', margin: '5px' }}
        /> */}
      </div>
      <img src={swordanimate} alt='Sword' style={swordanimateStyles} />
      <div style={navbarStyles}>
        <div style={navLinkContainerStyles}>
          <a onClick={() => navigate('/marketplace')} style={navLink}>
            Marketplace
          </a>
          <a style={navLink} onClick={() => navigate('/merchandise')}>
            NFT Collection
          </a>
          <a style={navLink} onClick={() => navigate('/overview')}>
            Overview
          </a>
        </div>
        <img src={LogoTopLeft} alt='Logo' style={logoStyles} />
        {/* <button style={exploreButtonStyles}>Explore</button>{' '} */}
        <img
          ref={exploreButtonRef}
          src={explorebtn}
          alt='explorebtn'
          style={exploreButtonStyles}
        />
      </div>
      <div style={contentWrapperStyles}>
        <div style={contentStyles}>
          <h2 style={subHeadingStyles}>Explore and Experience</h2>
          <h2 style={headingStyles2}>THE</h2>
          <h2 style={headingStyles}>
            FORBIDDEN <br /> FOREST
          </h2>
          <h4 style={subHeadingStyles}>NFT Collection</h4>
          <p style={paragraphStyles}>
            Immerse yourself in the mystical allure of 'The Forbidden Forest.'
            Discover a world <br />
            where art, nature, and technology converge to create a captivating
            NFT experience.
          </p>
          {/* <button style={buttonStyles}>Enter Forest</button>{' '} */}
          <img
            src={button}
            alt='button'
            style={buttonStyles}
            onClick={() => navigate('/overview')}
          />
        </div>
        <img src={sword} alt='Sword' style={swordStyles} />
      </div>
      <img src={overlay} alt='Overlay' style={overlayBottomStyles} />
    </div>
  )
}

export default Explore
