// styles.js
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Mystery+Quest&family=Proza+Libre&family=Staatliches&family=Syne:wght@400;800&display=swap');
   @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Mystery+Quest&family=Proza+Libre&family=Staatliches&family=Syne:wght@400;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&family=Mukta:wght@200&family=Mystery+Quest&family=Poppins:ital,wght@0,200;0,300;1,200&family=Proza+Libre&family=Staatliches&family=Syne:wght@400;800&display=swap');
  /* Add global styles here if needed */
`
import bg2 from '../assets/bg2.png'
import bg1 from '../assets/overlay.png'
const sharedStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
    fontSize: '24px',
  },
  background: {
    backgroundImage: `url(${bg1})`,
    backgroundSize: 'cover',
    opacity: '0.9',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: 'auto',
    padding: '50px', // Adjust padding as needed
    textAlign: 'center',
  },
  bgStyles2: {
    backgroundImage: `url(${bg2})`,
    opacity: '0.8',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: 'auto',
    padding: '50px', // Adjust padding as needed
    textAlign: 'center',
  },
  content: {
    padding: '0 100px',
    maxWidth: 'auto', // Adjust the maximum width as needed
    margin: '0 auto',
  },
  titleAndStats: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px', // Adjust margin as needed
  },
  title: {
    fontFamily: 'Syne',
    fontSize: '45px',
    marginRight: '30px',
    textAlign: 'left',
  },
  stats: {
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'flex-end',
  },
  divider: {
    width: '100%',
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    margin: '20px 0',
  },

  bgStyles2: {
    backgroundImage: `url(${bg2})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: 'auto',
    padding: '5% 10% 0 14%',
    textAlign: 'center',
  },

  cardStyles: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    // marginTop: '20px',
  },
  card: {
    position: 'relative',
    width: '22%',
    padding: '10px',
    marginBottom: '20px',
    textAlign: 'left',
    borderRadius: '10px',
    background: 'rgb(26,111,96)',
  },

  cutswordContainer: {
    position: 'absolute',
    top: '23%',
    left: '5%',
    transform: 'translate(-50%, -50%)',
    width: '10%',
    // maxWidth: '200px', // Adjust as needed
  },

  swordImage: {
    width: '100%',
    height: '1000px',
    borderRadius: '10px',
  },
  comingSoonCard: {
    width: '100%', // Adjust as needed
    textAlign: 'center',
  },

  cardStyle: {
    textAlign: 'center',
    maxWidth: '300px',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 100px',
    position: 'relative', // Add this line
  },

  overlayStyle: {
    position: 'absolute',
    bottom: '13%',
    left: '50%', // Adjusted to center horizontally
    transform: 'translateX(-50%)', // Center horizontally
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  logoStyle: {
    width: '20%',
    height: 'auto',
  },

  titleStyle: {
    fontSize: '15px',
    fontWeight: 'bold',
    fontFamily: 'Syne',
    color: '#62EDED',
    marginTop: '5px', // Add some margin for better spacing
  },
  cardTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}

export default sharedStyles
