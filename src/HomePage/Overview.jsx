import React from 'react'
import './Overview.css' // Import your CSS file for styling
import OverviewImage from '../assets/Overview.png'
import money from '../assets/money.png'
import airdrop from '../assets/airdrop.png'
import airicon from '../assets/airicon.png'
import comingsoon from '../assets/comingsoon2.png'

const Overview = () => {
  const fontStyles = `
  @import
  url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Mystery+Quest&family=Staatliches&family=Syne:wght@400;800&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Mystery+Quest&family=Proza+Libre&family=Staatliches&family=Syne:wght@400;800&display=swap');@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Mystery+Quest&family=Outfit&family=Poppins:ital,wght@0,200;0,300;1,200&family=Proza+Libre&family=Staatliches&family=Syne:wght@400;800&display=swap');
`

  // JSON data
  const data = [
    {
      icon: money,
      title: 'Lorem ipsum dolor',
      para: 'Lorem ipsum dolor sit amet consectetur. Imperdiet et arcu egestas a tempus turpis arcu. Neque non nulla donec sagittis vestibulum semper nec dignissim. Habitant odio vel malesuada egestas accumsan. Id cursus adipiscing leo in hac id arcu mauris. Est elementum purus consectetur amet enim sagittis. Pretium eget ipsum',
    },
    {
      icon: money,
      title: 'Lorem ipsum dolor',
      para: 'Lorem ipsum dolor sit amet consectetur. Imperdiet et arcu egestas a tempus turpis arcu. Neque non nulla donec sagittis vestibulum semper nec dignissim. Habitant odio vel malesuada egestas accumsan. Id cursus adipiscing leo in hac id arcu mauris. Est elementum purus consectetur amet enim sagittis. Pretium eget ipsum',
    },
    {
      icon: money,
      title: 'Lorem ipsum dolor',
      para: 'Lorem ipsum dolor sit amet consectetur. Imperdiet et arcu egestas a tempus turpis arcu. Neque non nulla donec sagittis vestibulum semper nec dignissim. Habitant odio vel malesuada egestas accumsan. Id cursus adipiscing leo in hac id arcu mauris. Est elementum purus consectetur amet enim sagittis. Pretium eget ipsum',
    },
  ]

  return (
    <div className='overview-container'>
      <div
        className='overview-image'
        style={{ backgroundImage: `url(${OverviewImage})` }}
      ></div>{' '}
      <style>{fontStyles}</style>
      <div className='overview-content'>
        <h1 style={{ fontSize: '30px', fontFamily: 'Syne' }}>
          Overview: The{' '}
          <span style={{ color: '#62EDED' }}>Forbidden Forest</span> Chronicles
        </h1>
        <p style={{ marginRight: '50px', width: '780px', margin: '40px 0' }}>
          Lorem ipsum dolor sit amet consectetur. Imperdiet et arcu egestas a
          tempus turpis arcu. Neque non nulla donec sagittis vestibulum semper
          nec dignissim. Habitant odio vel malesuada egestas accumsan. Id cursus
          adipiscing leo in hac id arcu mauris. Est elementum purus consectetur
          amet enim sagittis. Pretium eget ipsum
        </p>
        <div className='row'>
          {data.map((item, index) => (
            <div key={index} className='data-row'>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: '10px 28px 20px -16px',
                }}
              >
                <img src={item.icon} alt={item.title} />
                {/* <h2>{item.title}</h2> */}
              </div>
              <p>{item.para}</p>
            </div>
          ))}
          <div
            className='styled-box'
            style={{
              backgroundImage: `url(${airdrop})`,
              backgroundSize: 'cover', // Adjust the background size as needed
              backgroundPosition: 'center', // Adjust the background position as needed
              width: '28%',
              height: '400px',
              padding: '78px',
              marginTop: '-92px',
              // display: 'flex',
              // justifyContent: 'center',
              // alignItems: 'center',
            }}
          >
            <img src={airicon} alt='' style={{ margin: '0 auto' }} />
            <h3 style={{ fontFamily: 'Outfit' }}>Connect your Airdrop</h3>
            <img
              src={comingsoon}
              alt='comingsoon'
              style={{
                width: '100%',
                textAlign: 'left',
                marginRight: '157px',
                marginTop: '30px',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
