import React from 'react'
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
import { useNavigate } from 'react-router-dom' // Use useNavigate instead of useHistory
const Explore = () => {
  const navigate = useNavigate() // useNavigate for navigation
  const fontStyles = `
  @import
  url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Mystery+Quest&family=Staatliches&family=Syne:wght@400;800&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Mystery+Quest&family=Proza+Libre&family=Staatliches&family=Syne:wght@400;800&display=swap');
`

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
    padding: '20px 12px',
    width: 'auto', // Let the width adjust to content
  }

  const socialMediaIconStyles = {
    width: '20px', // Adjust the width of the social media icons
    height: 'auto',
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
    width: '20%',
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
  }

  return (
    <div style={containerStyles}>
      <div style={overlayStyles}></div>
      <style>{fontStyles}</style>
      <div style={socialMediaOverlayStyles}>
        {/* Add your social media icons here */}
        <img src={twitterIcon} alt='Twitter' style={socialMediaIconStyles} />
        <img
          src={instagramIcon}
          alt='Instagram'
          style={socialMediaIconStyles}
        />
        <img src={discordIcon} alt='Instagram' style={socialMediaIconStyles} />
        <img
          src={facebookIcon}
          alt='Facebook'
          style={{ width: '13px', height: 'auto', margin: '5px' }}
        />
      </div>

      <div style={navbarStyles}>
        <div style={navLinkContainerStyles}>
          <a onClick={() => navigate('/marketplace')} style={navLinkStyles}>
            Marketplace
          </a>
          <a
            href='#'
            style={navLinkStyles}
            onClick={() => navigate('/merchandise')}
          >
            NFT Collection
          </a>
          <a
            href='#'
            style={navLinkStyles}
            onClick={() => navigate('/overview')}
          >
            Overview
          </a>
        </div>
        <img src={LogoTopLeft} alt='Logo' style={logoStyles} />
        {/* <button style={exploreButtonStyles}>Explore</button>{' '} */}
        <img src={explorebtn} alt='explorebtn' style={exploreButtonStyles} />
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
          <img src={button} alt='button' style={buttonStyles} />
        </div>
        <img src={sword} alt='Sword' style={swordStyles} />
      </div>

      <img src={overlay} alt='Overlay' style={overlayBottomStyles} />
    </div>
  )
}

export default Explore
