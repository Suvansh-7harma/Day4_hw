
// App.js
import React from 'react';
import MovieList from './components/movieList.js'; 
import './App.css';

const films = [
  {
    id: 1,
    title: "Night in jungle",
    subtitle: "Winter killing forest animals",
    description: " Species and Organisms becomes extinct.",
    rating: 8.8,
    Image:
      "https://img.freepik.com/free-photo/nature-tranquil-beauty-reflected-calm-water-generative-ai_188544-12798.jpg?w=826&t=st=1709802814~exp=1709803414~hmac=d97dec03b2cf4b345f532a0409fc934c4df085efd8cc152cc7b5c0adeb82b288",
  },
  {
    id: 2,
    title: "Innocense",
    subtitle: "Your mind is the scene of the crime",
    description: "A thief who enters the dreams of others.",
    Image:
      "https://img.freepik.com/free-photo/cute-kitten-with-whiskers-staring-camera-generative-ai_188544-9661.jpg?w=826&t=st=1709809323~exp=1709809923~hmac=5ddc3912d47b860ab1b8bb716c9f383668ee2c2d57f3ce8c65740066e45eb67a",
    rating: 7.3,
  },
  {
    id: 3,
    title: "Hard-Work",
    subtitle: "power of consistency with time-span",
    description: "journey from loser to pro player in London",
    Image:
      "https://img.freepik.com/free-photo/young-afroamerican-boxer-winds-boxing-bandages_171337-8286.jpg?t=st=1709809306~exp=1709809906~hmac=66196efad24c3f9bdce69567f0fe93a7fbd34a8c483c9875429bd77ddf662da4",
    rating: 8.6,
  },
];

const App = () => {
  return (
    <div className='bg-mv'>
      
      <MovieList films={films} />
    </div>
  )
}

export default App;
