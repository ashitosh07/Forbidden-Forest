import React from 'react'
import { useNavigate } from 'react-router-dom' // Use useNavigate instead of useHistory
import IntroImage from '../assets/Intro.png'
import SwordsmenImage from '../assets/Swordsmen.png'
import EpicButtonImage from '../assets/epicButton.png'
import LogoTopLeft from '../assets/Vector.png'
import Sword from '../assets/Sword.png'
import './IntroScreen.css'
import { useAnimation } from '../AnimationContext.jsx'
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Staatliches&display=swap');
`

const IntroScreen = () => {
  const { startSwordAnimation, isSwordAnimating } = useAnimation()
  const navigate = useNavigate()

  const textStyle = {
    fontFamily: 'Mystery Quest',
    fontSize: '36px',
    letterSpacing: '4px',
    textAlign: 'left',
  }

  const splitText = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {index > 0 && <br />}
        {line}
      </React.Fragment>
    ))
  }

  const handleButtonClick = () => {
    startSwordAnimation()
    // Redirect to /home when the button is clicked
    setTimeout(() => {
      navigate('/home')
    }, 100) // Change the duration as needed
  }

  return (
    <div className={`intro-screen ${isSwordAnimating ? 'animate-sword' : ''}`}>
      <style>{fontStyles}</style>
      <img src={SwordsmenImage} alt='Swordsmen' className='swordsmen' />
      <img src={Sword} alt='Swordsmen' className='Sword' />
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
          style={{ float: 'left', marginTop: '30px', cursor: 'pointer' }}
          onClick={handleButtonClick}
        />
      </div>
    </div>
  )
}

export default IntroScreen
