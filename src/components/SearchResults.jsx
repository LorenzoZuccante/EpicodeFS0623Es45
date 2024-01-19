import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSong } from '../store/action';
import { Heart, HeartFill } from 'react-bootstrap-icons';

const SearchResults = ({ searchQuery }) => {
  const [fetchedData, setFetchedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favoriteSongs');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if (!searchQuery) {
        setFetchedData(null);
        return;
      }

      setLoading(true);

      try {
        const response = await fetch(
          `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchQuery}`,
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '5c5442c31amsh21a7d16eed953d6p172833jsnee319271633b',
              'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setFetchedData(data);
      } catch (error) {
        console.error("Error during API request for query '" + searchQuery + "':", error);
        setFetchedData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleSongClick = (song) => {
    dispatch(setSong(song.album.cover_medium, song.title));
  };

  const handleFavoriteClick = (e, song) => {
    e.stopPropagation(); 

    const newFavorites = favorites.some(fav => fav.id === song.id) 
      ? favorites.filter(fav => fav.id !== song.id) 
      : [...favorites, { id: song.id, title: song.title, image: song.album.cover_medium }];

    setFavorites(newFavorites);
    localStorage.setItem('favoriteSongs', JSON.stringify(newFavorites));
  };

  const isFavorite = (songId) => {
    return favorites.some(fav => fav.id === songId);
  };

  return (
    <div style={{ marginTop: '10px', marginLeft: '250px', marginBottom: '70px', width: 'calc(100% - 250px)' }}>
      <h1>{searchQuery ? `Results for "${searchQuery}"` : 'Enter a search query'}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : fetchedData && fetchedData.data ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {fetchedData.data.slice(0, 16).map((song) => (
            <div key={song.id} style={{ width: '15%', padding: '10px', boxSizing: 'border-box' }}>
              <div onClick={() => handleSongClick(song)} style={{ cursor: 'pointer' }}>
                <img
                  src={song.album.cover_medium}
                  alt={song.title}
                  style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
                />
                <p style={{ textAlign: 'center', fontSize: '14px' }}>{song.title}</p>
              </div>
              <span onClick={(e) => handleFavoriteClick(e, song)} style={{ cursor: 'pointer' }}>
                {isFavorite(song.id) ? <HeartFill color="red" /> : <Heart />}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p>No data fetched</p>
      )}
    </div>
  );
};

export default SearchResults;
