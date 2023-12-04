import React from 'react'
import { useNavigate } from 'react-router-dom' // Use useNavigate instead of useHistory
import Vector from '../assets/Vector.png'
import MerchandiseWarrior from '../assets/MerchandiseWarrior.png'
import comingsoon2 from '../assets/ComingSoon2.png'
import LogoTopLeft from '../assets/Vector.png'

import tree from '../assets/tree.png'

import marketsocialtwitter from '../assets/marketsocialtwitter.png'
import marketsocialfacebook from '../assets/marketsocialfacebook.png'
import marketsocialinstagram from '../assets/marketsocialinstagram.png'
import marketsocialweb from '../assets/marketsocialweb.png'
import marketsociallinkedln from '../assets/marketsociallinkedln.png'

import './MerchandiseStyles.css'

const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Staatliches&display=swap');
    @import
  url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Mystery+Quest&family=Staatliches&family=Syne:wght@400;800&display=swap');
`

const Merchandise = () => {
  const navigate = useNavigate()
  const textBoxStyle = {
    padding: '15px ',
    width: '47%',
    fontFamily: 'Poppins',
    fontSize: '20px',
    borderRadius: '8px',
    // marginRight: '10px',
  }

  const notifyButtonStyle = {
    padding: '18px 30px',
    backgroundColor: '#62EDED',
    color: 'white',
    fontFamily: 'Poppins',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
  const textStyle = {
    fontFamily: 'Syne',
    // marginTop: '10%',
    fontSize: '40px',
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
    margin: '0 20px',
    fontSize: '16px',
    fontFamily: 'Proza+Libre',
  }

  return (
    <div className='merchandise-screen'>
      <style>{fontStyles}</style>
      <div style={navbarStyles}>
        <div style={navLinkContainerStyles}>
          <a style={navLinkStyles} onClick={() => navigate('/marketplace')}>
            Marketplace
          </a>
          <a style={navLinkStyles} onClick={() => navigate('/merchandise')}>
            NFT Collection
          </a>
          <a style={navLinkStyles} onClick={() => navigate('/overview')}>
            Overview
          </a>

          {/* <a onClick={() => navigate('/marketplace')} style={navLink}>
            Marketplace
          </a>
          <a style={navLink} onClick={() => navigate('/merchandise')}>
            NFT Collection
          </a>
          <a style={navLink} onClick={() => navigate('/overview')}>
            Overview
          </a> */}
        </div>
        <img src={LogoTopLeft} alt='Logo' style={logoStyles} />
      </div>
      <img
        src={MerchandiseWarrior}
        alt='MerchandiseWarrior'
        className='MerchandiseWarrior'
      />
      <div className='content-merchandise'>
        <p style={textStyle}>The Forbidden Forest Marketplace</p>
        <img
          src={comingsoon2}
          alt='comingsoon'
          style={{
            width: '109%',
            textAlign: 'left',
            marginRight: '157px',
            marginTop: '30px',
            zIndex: -1,
          }}
        />
        <img
          src={tree}
          alt='tree'
          className='tree'
          style={{ position: 'fixed', bottom: 0, left: 0, height: '70%' }}
        />
        {/* <div style={{ textAlign: 'left', marginLeft: '32px' }}>
          <p
            style={{
              marginBottom: '20px',
              fontFamily: 'Proza+Libre',
              fontSize: '34px',
              textAlign: 'left',
            }}
          >
            We’ll let you know when we are Launching
          </p>
          <div style={{}}>
            <input
              type='text'
              placeholder='Email Address'
              style={textBoxStyle}
            />

            <button style={notifyButtonStyle}>Notify Me</button>
          </div>
        </div> */}
        {/* Warriors */}
      </div>{' '}
      <div className='social-icons-column-merchandise'>
        {/* <img
          src={marketsocialfacebook}
          alt='marketsocialfacebook'
          className='social-icon-merchandise'
        /> */}
        <img
          src={marketsocialtwitter}
          alt='marketsocialtwitter'
          className='social-icon-merchandise'
        />
        {/* Add more social icons as needed */}
        {/* <img
          src={marketsociallinkedln}
          alt='marketsociallinkedln'
          className='social-icon-merchandise'
        /> */}
        {/* <img
          src={marketsocialinstagram}
          alt='marketsocialinstagram'
          className='social-icon-merchandise'
        />
        <img
          src={marketsocialweb}
          alt='marketsocialweb'
          className='social-icon-merchandise'
        /> */}
        {/* ... Add more social icons as needed */}
      </div>
    </div>
  )
}

export default Merchandise
