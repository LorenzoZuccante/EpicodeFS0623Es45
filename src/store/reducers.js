
const initialState = {
    songImage: '',
    songTitle: '',
  };
  
  const songReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SONG':
        return {
          ...state,
          songImage: action.payload.image,
          songTitle: action.payload.title,
        };
      default:
        return state;
    }
  };
  
  export default songReducer;
  