import React from 'react';
import { useSelector } from 'react-redux';
import { PlayFill, SkipForwardFill, SkipBackwardFill, VolumeUpFill } from 'react-bootstrap-icons';

const playerStyle = {
  backgroundColor: '#282828',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  padding: '15px',
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
};

const iconStyle = {
  fontSize: '30px',
  cursor: 'pointer',
};

const songInfoStyle = {
  display: 'flex',
  alignItems: 'center',
  marginRight: '20px', 
};

const coverImageStyle = {
  width: '50px',
  height: '50px',
  marginRight: '10px',
};

const songTitleStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  maxWidth: '150px',
};

const Player = () => {
  
 /*  const song = useSelector(state => state.song);
console.log(song)
  
  if (!song) {
    
    return null;
  } */

  return (
    <div style={playerStyle}>
      
{/*       {song.songTitle && (
        <div style={songInfoStyle}>
          <img src={song.songImage} alt={song.songTitle} style={coverImageStyle} />
          <p style={songTitleStyle}>{song.songTitle}</p>
        </div>
      )} */}

      <div>
        <SkipBackwardFill style={iconStyle} />
        <PlayFill style={iconStyle} />
        <SkipForwardFill style={iconStyle} />
      </div>

      <VolumeUpFill style={iconStyle} />
    </div>
  );
};

export default Player;
