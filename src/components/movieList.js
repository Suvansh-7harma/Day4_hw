import React from "react";
import Movie from "./movie.js";
import "../styles/movieList.css";

const MovieList = ({ films }) => {
  return (
    <div className="movies-list">
      <h1 className="heading-mv">Movies Mania</h1>
      {films.map((film) => (
        <Movie
          key={film.id}
          title={film.title}
          subtitle={film.subtitle}
          description={film.description}
          Image={film.Image}
          rating={film.rating}
        />
      ))}
    </div>
  );
};

export default MovieList;
