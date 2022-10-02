import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, i) => {
        return (
          <div key={i}>
            <h4>Name: {director.name}</h4>
            Movies:{" "}
            <ol>
              {director.movies.map((movie, i) => {
                return <li key={i}>{movie}</li>;
              })}
            </ol>
          </div>
        );
      })}
    </div>
  );
}

export default Directors;
