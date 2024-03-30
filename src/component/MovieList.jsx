import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className=" px-2">
      <h1 className="text-3xl font-semibold py-5 text-white">{title}</h1>
      <div className="flex overflow-x-scroll" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        <div className="flex">
          {/* {movies.map((m) => (
            <MovieCard key={m.id} poster_path={m.poster_path} />
          ))} */}

          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterpath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
