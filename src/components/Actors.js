import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>

      {actors.map((actor, i) => {
        return (
          <div key={i}>
            <h3>Name: {actor.name}</h3>
            Movies:{" "}
            <ul>
              {actor.movies.map((movie, i) => {
                return <li key={i}> {movie} </li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
export default Actors;
