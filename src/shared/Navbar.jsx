// Navbar component
import React from 'react'

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: '#000000',
    padding: '0.5rem',
    zIndex: '1',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }

  const logoStyle = {
    color: '#8dce19',
    fontSize: '1.5rem',
    zIndex: '1',
    fontWeight: 'bold',
    marginRight: '2rem',
  }

  const leftContentStyle = {
    display: 'flex',
    zIndex: '1',
    alignItems: 'center',
  }

  return (
    <div style={navbarStyle}>
      <div style={leftContentStyle}>
        {/* Replace the text with your logo or an actual logo component */}
        <div style={logoStyle}>Your Logo</div>
      </div>
    </div>
  )
}

export default Navbar
