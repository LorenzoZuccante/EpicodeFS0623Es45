import React, { useState } from 'react';
import SideBar from './SideBar';
import Player from './Player';
import PreRender from './PreRender';
import SearchResults from './SearchResults';

const homeContainerStyle = {
  display: 'flex',
  minHeight: '100vh',
};

const contentContainerStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
};

const mainContentStyle = {
  flex: 1,
  padding: '20px',
  overflowY: 'auto',
};

const playerStyle = {
  marginTop: 'auto',
};

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false); 

  const handleSearch = (query) => {
    setSearchQuery(query);
    setShowSearchResults(true); 
  };

  return (
    <div style={homeContainerStyle}>
      <SideBar onSearch={handleSearch} />
      <div style={contentContainerStyle}>
        <main style={mainContentStyle}>
          <h1>SpotifyApp</h1>
          <input
            type="text"
            placeholder="Search for an artist or album..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {showSearchResults ? (
            <SearchResults searchQuery={searchQuery} />
          ) : (
            <PreRender />
          )}
        </main>
        <Player style={playerStyle} />
      </div>
    </div>
  );
};

export default Home;
