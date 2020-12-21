import {combineReducers} from 'redux';



const songsReducer = () => {
  return [
    {title:'song-1', duration: '4'},
    {title:'song-2', duration: '2'},
    {title:'song-3', duration: '2'},
    {title:'song-4', duration: '1'}
  ];
};


const selectedSongReducer = (selestedSong=null, action) => {
  if (action.type === 'SONG_SELECTED'){
    return action.payload;
  }
  return selestedSong;
};



export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
