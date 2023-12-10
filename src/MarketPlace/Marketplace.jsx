import React from 'react'
import { useNavigate } from 'react-router-dom' // Use useNavigate instead of useHistory
import Vector from '../assets/Vector.png'
import MarketplaceWarrior from '../assets/MarketplaceWarrior.png'
import comingsoon from '../assets/comingsoon.png'
import LogoTopLeft from '../assets/Vector.png'
import Warrior1 from '../assets/Warrior1.png'
import Warrior2 from '../assets/Warrior2.png'
import Warrior3 from '../assets/Warrior3.png'
import Artboard from '../assets/Artboard.png'
import markettwitter from '../assets/markettwitter.png'
import marketdiscord from '../assets/marketdiscord.png'
import marketsocialtwitter from '../assets/marketsocialtwitter.png'
import marketsocialfacebook from '../assets/marketsocialfacebook.png'
import marketsocialinstagram from '../assets/marketsocialinstagram.png'
import marketsocialweb from '../assets/marketsocialweb.png'
import marketsociallinkedln from '../assets/marketsociallinkedln.png'

import WarriorOverlay from '../assets/WarriorOverlay.png'
import Forbidden from '../assets/Forbidden.png'
import './Market.css'

const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Staatliches&display=swap');
    @import
  url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Mystery+Quest&family=Staatliches&family=Syne:wght@400;800&display=swap');
`

const Marketplace = () => {
  const navigate = useNavigate() // useNavigate for navigation

  const textStyle = {
    fontFamily: 'Syne',
    marginTop: '10%',
    fontSize: '20px',
    letterSpacing: '4px',
    textAlign: 'left',
  }
  const logoStyles = {
    width: '68.49px',
    height: '37px',
    marginRight: '7%',
  }
  const navbarStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: '1',
    padding: '8px',
    width: '90%',
    position: 'absolute',
    top: '20px',
  }

  const navLinkContainerStyles = {
    display: 'flex',
    alignItems: 'center',
  }

  const navLinkStyles = {
    color: 'white',
    cursor: 'pointer',
    textDecoration: 'none',
    zIndex: '1',
    margin: '0 20px',
    fontSize: '16px',
    fontFamily: 'Proza+Libre',
  }

  return (
    <div className='market-screen'>
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
      <div className='forbidden-overlay'>
        <img src={Forbidden} alt='Forbidden' className='forbidden-image' />
      </div>
      <div style={navbarStyles}>
        <div style={navLinkContainerStyles}>
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
        {/* <button style={exploreButtonStyles}>Explore</button>{' '} */}
      </div>
      <img
        src={MarketplaceWarrior}
        alt='MarketplaceWarrior'
        className='MarketplaceWarrior'
      />
      {/* <img src={Vector} alt='Top Left Logo' className='logo-top-left' /> */}
      <div className='content-market'>
        <p style={textStyle}>THE FORBIDDEN FOREST MARKETPLACE</p>
        <img
          src={comingsoon}
          alt='comingsoon'
          style={{
            width: '80%',
            textAlign: 'left',
            marginRight: '157px',
            marginTop: '10px',
          }}
        />
        <img
          src={Artboard}
          alt='Artboard'
          className='artboard-image'
          style={{ position: 'fixed', bottom: 0, right: 0 }}
        />
        {/* Social Media Icons */}
        <div className='social-icons'>
          <img
            src={markettwitter} // Replace with the actual path to your Twitter icon image file
            alt='markettwitter'
            className='social-icon'
            onClick={() => {
              window.location.href =
                'https://x.com/forestcabin?s=21&t=YWp5Aaik1QyDnA9tnXj6yg'
            }}
          />
          <img src={marketdiscord} alt='Warrior 2' className='social-icon' />
        </div>
        <div className='social-icons-column'>
          {/* <img
            src={marketsocialfacebook}
            alt='marketsocialfacebook'
            className='social-icon-market'
          /> */}
          <img
            src={marketsocialtwitter}
            alt='marketsocialtwitter'
            className='social-icon-market'
            onClick={() => {
              window.location.href =
                'https://x.com/forestcabin?s=21&t=YWp5Aaik1QyDnA9tnXj6yg'
            }}
          />

          {/* Add more social icons as needed */}
          {/* <img
            src={marketsociallinkedln}
            alt='marketsociallinkedln'
            className='social-icon-market'
          />
          <img
            src={marketsocialinstagram}
            alt='marketsocialinstagram'
            className='social-icon-market'
          />
          <img
            src={marketsocialweb}
            alt='marketsocialweb'
            className='social-icon-market'
          /> */}
          {/* ... Add more social icons as needed */}
        </div>
        {/* Warriors */}
        <div className='warrior-row'>
          <div
            className='warrior-image'
            style={{ background: `url(${WarriorOverlay})` }}
          >
            <img src={Warrior1} alt='Warrior 1' />
          </div>
          <div
            className='warrior-image'
            style={{ background: `url(${WarriorOverlay})` }}
          >
            <img src={Warrior2} alt='Warrior 2' />
          </div>
          <div
            className='warrior-image'
            style={{ background: `url(${WarriorOverlay})` }}
          >
            <img src={Warrior3} alt='Warrior 3' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Marketplace
