import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HouseDoor, Book, Search } from 'react-bootstrap-icons';

const SideBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    onSearch(searchQuery);
  };

  const sideBarStyle = {
    backgroundColor: 'black',
    color: 'white',
    height: '94.2vh',
    width: '200px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
  };

  const logoContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '20px',
  };

  const logoStyle = {
    width: '50px',
    height: '50px',
  };

  const logoTextStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '5px',
  };

  const navStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    textDecoration: 'none',
    marginBottom: '10px',
  };

  const iconStyle = {
    marginRight: '10px',
  };

  const buttonsContainerStyle = {
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'column',
  };

  const buttonStyle = {
    marginBottom: '10px',
    borderRadius: '15px',
    padding: '15px',
    fontSize: '18px',
  };

  const whiteButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'white',
    color: 'black',
  };

  const darkGrayButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#363636',
    color: 'white',
  };

  const searchInputStyle = {
    padding: '10px',
    margin: '0 10px 10px 0',
    width: '100%', 
    
  };

  const searchButtonStyle = {
    width: '100%',
    padding: '10px',
    
  };

  return (
    <div style={sideBarStyle}>
      <div style={logoContainerStyle}>
        <img
          src={'https://cantabrialabsdifacooper.it/wp-content/uploads/2021/03/png-clipart-spotify-logo-spotify-computer-icons-podcast-music-apps-miscellaneous-angle-1-e1614848134495.png'}
          alt="Spotify Logo"
          style={logoStyle}
        />
        <span style={logoTextStyle}>Spotify</span>
      </div>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>
          <HouseDoor style={iconStyle} />
          Home
        </Link>
        <Link to="/favorites" style={linkStyle}>
          <Book style={iconStyle} />
          Favorites
        </Link>
      </nav>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          style={searchInputStyle}
        />
        <button
          className="btn btn-outline-light"
          onClick={handleSearchSubmit}
          style={searchButtonStyle}
        >
          <Search style={{ fontSize: '20px' }} />
        </button>
      </div>
      <div style={buttonsContainerStyle}>
        <button className="btn btn-outline-light" style={whiteButtonStyle}>
          Sign Up
        </button>
        <button className="btn btn-outline-light" style={darkGrayButtonStyle}>
          Login
        </button>
      </div>
    </div>
  );
};

export default SideBar;
