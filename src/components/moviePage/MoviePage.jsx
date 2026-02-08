import React from "react";
import Image from "next/image";

const MoviePage = ({ movieDetailes }) => {
  const movie = movieDetailes;
  return (
    <div className="flex gap-10 mx-20 items-center">
      <div className="w-1/4 border-1 border-primary rounded-lg p-2 shadow-md shadow-primary/80">
        {movie.Poster === "N/A" ? (
          <div className="w-full h-[350px] flex items-center justify-center bg-gray-400">
            <span className="text-primary">No Image Available</span>
          </div>
        ) : (
          <Image
            src={movie.Poster}
            alt={movie.Title}
            width={100}
            height={100}
            className="w-[280px] h-[350px] rounded-lg"
          />
        )}
      </div>
      <div className="w-3/4 self-start pt-8 flex flex-col gap-[8px]">
        <span className="inline-block w-20 text-gray-500 font-semibold text-[18px] border-1 border-gray-500 rounded-full px-3">
          {movie.Type}
        </span>
        <p className="text-white font-semibold text-[33px]">
          {movie.Title || movie.title}
        </p>
        <p className="text-gray-500 ps-3">{movie.Plot}</p>
        <div className="grid grid-cols-3 gap-3 text-gray-400 mt-3 text-[17px]">
          <p className="ps-3">Year : {movie.Year}</p>
          <p className="ps-3">Language : {movie.Language}</p>
          <p></p>
          <p className="ps-3">Released : {movie.Released}</p>
          <p className="ps-3">Runtime : {movie.Runtime}</p>
          <p></p>
          <p className="ps-3">Director : {movie.Director}</p>
          <p className="ps-3">Writer : {movie.Writer}</p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
