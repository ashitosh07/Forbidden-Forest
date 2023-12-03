import React, { useState, useEffect } from 'react'
import './Carouseltwo.css' // Make sure to create a CSS file for styling
import Subtract from '../assets/Subtract.png'
import profile from '../assets/profile.png'
import carouselbg from '../assets/carouselbg.png'
const Carouseltwo = () => {
  const fontStyles = `
  @import
  url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Mystery+Quest&family=Staatliches&family=Syne:wght@400;800&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Mystery+Quest&family=Proza+Libre&family=Staatliches&family=Syne:wght@400;800&display=swap');@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Mystery+Quest&family=Outfit&family=Poppins:ital,wght@0,200;0,300;1,200&family=Proza+Libre&family=Staatliches&family=Syne:wght@400;800&display=swap');
`

  const items = [
    {
      id: 1,
      profileImg: profile,
      followText: 'Follow',
      subtractImg: Subtract,
      rowText: 'Some text here for item 1',
      likeCount: 12,
      commentCount: 34,
      shareCount: 5,
    },
    {
      id: 2,
      profileImg: profile,
      followText: 'Follow',
      subtractImg: Subtract,
      rowText: 'Some text here for item 2',
      likeCount: 18,
      commentCount: 22,
      shareCount: 8,
    },
    {
      id: 3,
      profileImg: profile,
      followText: 'Follow',
      subtractImg: Subtract,
      rowText: 'Some text here for item 3',
      likeCount: 25,
      commentCount: 15,
      shareCount: 3,
    },
    {
      id: 4,
      profileImg: profile,
      followText: 'Follow',
      subtractImg: Subtract,
      rowText: 'Some text here for item 4',
      likeCount: 10,
      commentCount: 40,
      shareCount: 7,
    },
    {
      id: 5,
      profileImg: profile,
      followText: 'Follow',
      subtractImg: Subtract,
      rowText: 'Some text here for item 5',
      likeCount: 30,
      commentCount: 28,
      shareCount: 12,
    },
  ]

  const [position, setPosition] = useState(1)

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the position based on your desired logic
      // For simplicity, this example increments the position cyclically
      setPosition((prevPosition) => (prevPosition % 5) + 1)
    }, 1000) // Change the interval duration as needed (in milliseconds)
    // Clear the interval on component unmount to prevent memory leaks
    return () => clearInterval(intervalId)
  }, []) // The empty dependency array ensures the effect runs once on mount

  return (
    <div className='Carousel'>
      <style>{fontStyles}</style>
      <main id='carousel' style={{ '--position': position }}>
        {items.map((item) => (
          <div
            className='item'
            key={item.id}
            style={{ backgroundImage: `url(${carouselbg})` }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px',
              }}
            >
              <img
                src={item.profileImg}
                alt={`Profile ${item.id}`}
                className='profile-img'
              />{' '}
              <span className='follow-text'>{item.followText}</span>
            </div>
            <div className='follow-container'>
              <img
                src={item.subtractImg}
                alt={`Subtract ${item.id}`}
                className='subtract-img'
              />
            </div>
            {/* <div className='row-text'>{item.rowText}</div> */}
            <div className='interaction-container'>
              <div
                className='interaction-item'
                style={{ fontFamily: 'Outfit' }}
              >
                Like <br /> {item.likeCount}
              </div>
              <div
                className='interaction-item'
                style={{ fontFamily: 'Outfit' }}
              >
                Comment <br />
                {item.commentCount}
              </div>
              <div
                className='interaction-item'
                style={{ fontFamily: 'Outfit' }}
              >
                Share <br />
                {item.shareCount}
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}

export default Carouseltwo
