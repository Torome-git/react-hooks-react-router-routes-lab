import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, indx) => {
        return (
          <div key={indx}>
            <h2>Name: {movie.title}</h2>
            <p>Time {movie.time}</p>
            Genre :{" "}
            <ul>
              {movie.genres.map((genre, i) => {
                return <li key={i}>{genre}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Movies;
