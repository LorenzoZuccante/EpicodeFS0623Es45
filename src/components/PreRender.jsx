import React, { useEffect, useState } from 'react';

const PreRender = () => {
  const [fetchedData, setFetchedData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const query = 'Eminem';

      try {
        const response = await fetch(
          `https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`,
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
        console.error(`Errore durante la richiesta API per la query '${query}':`, error);
        setFetchedData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ marginTop: '10px', marginLeft: '250px', marginBottom: '70px', width: 'calc(100% - 250px)' }}>
      <h1>Best artist</h1>
      {loading ? (
        <p>Loading...</p>
      ) : fetchedData && fetchedData.data ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {fetchedData.data.slice(0, 16).map((item) => (
            <div key={item.id} style={{ width: '25%', padding: '10px', boxSizing: 'border-box' }}>
              <img
                src={item.album.cover_medium}
                alt={item.title}
                style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
              />
              <p style={{ textAlign: 'center', fontSize: '14px' }}>{item.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No data fetched</p>
      )}
    </div>
  );
};

export default PreRender;
