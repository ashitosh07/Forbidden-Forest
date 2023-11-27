import React from 'react'
import IntroImage from '../assets/Intro.png'
import SwordsmenImage from '../assets/Swordsmen.png'
import EpicButtonImage from '../assets/epicButton.png'
import LogoTopLeft from '../assets/Vector.png'
import './IntroScreen.css' // Import the CSS file

const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Staatliches&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Mystery+Quest&family=Staatliches&display=swap');`

const IntroScreen = () => {
  const textStyle = {
    fontFamily: 'Mystery Quest',
    fontSize: '36px',
    letterSpacing: '4px', // Adjusted letter-spacing value
    textAlign: 'left',
  }

  const splitText = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {index > 0 && <br />} {/* Add <br /> after the first line */}
        {line}
      </React.Fragment>
    ))
  }
  return (
    <div className='intro-screen'>
      {' '}
      <style>{fontStyles}</style>
      <img src={SwordsmenImage} alt='Swordsmen' className='swordsmen' />
      <img src={LogoTopLeft} alt='Top Left Logo' className='logo-top-left' />
      <div className='content'>
        <p style={textStyle}>
          {splitText('WELCOME TO THE\nFORBIDDEN FOREST NFT\nEXPERIENCE')}
        </p>
        <p
          style={{ textAlign: 'left', marginRight: '150px', marginTop: '20px' }}
        >
          As you cross the threshold, anticipate a realm of endless trees,
          majestic mountains, and the magic of NFT artistry. Click 'Enter the
          Realm' to unlock the mysteries within 'The Forbidden Forest.'
        </p>
        <img
          src={EpicButtonImage}
          alt='Epic Button'
          width='200px'
          style={{ float: 'left', marginTop: '30px' }}
        />
      </div>
    </div>
  )
}

export default IntroScreen
