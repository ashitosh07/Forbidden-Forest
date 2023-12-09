import React from 'react'
import mainImage from '../assets/Forest.png'
import titleImage from '../assets/title.png'
import subscribeImage from '../assets/Subscribe.png'
import overlay2 from '../assets/overlay2.png'
import './Forest.css' // You can create a separate CSS file for styling
import Carousel from './Carousel'
import Carouseltwo from './Carouseltwo'

const Forest = () => {
  const fontStyles = `
  @import
  url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Mystery+Quest&family=Staatliches&family=Syne:wght@400;800&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Mystery+Quest&family=Proza+Libre&family=Staatliches&family=Syne:wght@400;800&display=swap');
 `

  const textBoxStyle = {
    padding: '10px ',
    width: '50%',
    color: 'white',
    backgroundColor: '#131E3A',
    fontFamily: 'Poppins',
    borderRadius: '8px',
    // marginRight: '10px',
  }

  const notifyButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#40A2A6',
    color: 'white',
    fontFamily: 'Poppins',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
  return (
    <div
      className='forest-container'
      style={{ backgroundImage: `url(${mainImage})` }}
    >
      {/* Main Image as Background */}
      <div
        className='overlay-image'
        style={{ backgroundImage: `url(${overlay2})` }}
      ></div>{' '}
      <style>{fontStyles}</style>
      {/* Title Image */}
      <img src={titleImage} alt='title' className='title-image' />
      {/* Subscribe Image on the left and Title, Text, and Button on the right (row-wise) */}
      <div className='content-container'>
        <img src={subscribeImage} alt='Subscribe' className='subscribe-image' />

        <div className='text-container'>
          <h1 style={{ fontFamily: 'Syne', marginBottom: '10px' }}>
            Subscribe And{' '}
            <span style={{ color: '#62EDED' }}>
              get our <br /> Updates of the
            </span>{' '}
            Forest
          </h1>
          <p
            style={{
              fontFamily: 'Proza+Libre',
              width: '371px',
              marginBottom: '25px',
            }}
          >
            Embark on a captivating NFT journey with "The Forbidden Forest."
            Witness the grand reveal of 6,000 unique cabins, each paired with a
            random avatar.{' '}
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '30px',
          // height: '100vh', // Adjust the height as needed
        }}
      >
        {/* Your content goes here */}
        <h1 style={{ fontFamily: 'Syne', marginBottom: '10px' }}>
          Stay Connected with{' '}
          <span style={{ color: '#62EDED' }}>The Forbidden Forest</span>
        </h1>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur. Imperdiet et arcu egestas a
          tempus turpis arcu. Neque non nulla donec sagittis vestibulum semper
          nec.
        </p> */}
      </div>
      <Carousel />
      <Carouseltwo />
    </div>
  )
}

export default Forest
