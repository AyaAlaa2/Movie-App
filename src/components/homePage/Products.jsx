import React from "react";
import MoviesCard from "./MoviesCard";

const Products = ({ Movies }) => {
  if (!Movies || Movies.length === 0) {
    return (
      <h2 className="text-center text-red-700 text-md">
        No movies found. Please try searching for something else.
      </h2>
    );
  }
  return (
    <div className="grid grid-cols-4 gap-x-4 gap-y-7 mx-20">
      {Movies.map((movie) => (
        <MoviesCard key={movie.imdbID || movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Products;
