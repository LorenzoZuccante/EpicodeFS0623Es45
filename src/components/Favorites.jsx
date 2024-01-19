import React, { useEffect, useState } from 'react';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteSongs');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const favoriteStyle = {
    marginTop: '20px',
    marginLeft: '250px',
    marginBottom: '70px',
    width: 'calc(100% - 250px)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const songStyle = {
    width: '15%',
    padding: '10px',
    boxSizing: 'border-box',
    textAlign: 'center',
    fontSize: '14px',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    marginBottom: '10px',
  };

  return (
    <div style={favoriteStyle}>
      <h1>Your Favorites</h1>
      {favorites.length > 0 ? (
        favorites.map((song) => (
          <div key={song.id} style={songStyle}>
            <img src={song.image} alt={song.title} style={imageStyle} />
            <p>{song.title}</p>
          </div>
        ))
      ) : (
        <p>No favorite songs found.</p>
      )}
    </div>
  );
};

export default Favorites;
