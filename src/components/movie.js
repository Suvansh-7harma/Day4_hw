import React from 'react';
import '../styles/movie.css';
const Movie = ({title, subtitle, description, Image,  rating}) => {
  return (
    <>
        
      <div className="movie-card" style={{ backgroundImage: `url(${Image})` }}>
        <div className="movie-details">
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>{description}</p>
          {/* <div className='pic-1'><img src={Image}/></div> */}
          <p>Rating: {rating}/10</p>
        </div>
      </div>
    </>
  );
};

export default Movie;