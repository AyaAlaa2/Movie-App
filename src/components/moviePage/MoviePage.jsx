"use client";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import getMovies from "../../app/api/moviesAPI";
import HeaderOfSection from "../homePage/HeaderOfSection";
import SwiperComponent from "../homePage/SwiperComponent";

const MoviePage = ({ movieDetailes }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovies(1);
      setMovies(data.results);
    };

    fetchData();
  }, []);

  const movie = movieDetailes;
  return (
    <div>
      <div
        style={{
          backgroundImage:
            movie.Poster !== "N/A" ? `url(${movie.Poster})` : "none",
        }}
        className={`relative w-full min-h-[100vh] flex flex-col md:flex-row gap-5 md:gap-10 px-10 md:px-20 items-center bg-cover bg-center bg-no-repeat mt-20 md:mt-0 pb-8`}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm"></div>
        <div className={`z-3 w-2/4 md:w-1/4 rounded-lg p-2 `}>
          {movie.Poster === "N/A" ? (
            <div className="w-full h-[400px] flex items-center justify-center bg-gray-400">
              <span className="text-primary">No Image Available</span>
            </div>
          ) : (
            <div
              className="relative w-full 
                after:content-['']
                after:absolute
                after:z-10
                after:inset-0
                after:bg-gradient-to-t
                after:from-black/80
                after:via-black/30
                after:to-transparent "
            >
              <Image
                src={movie.Poster}
                alt={movie.Title}
                width={100}
                height={100}
                className="w-full h-[400px] rounded-lg"
              />
            </div>
          )}
        </div>
        <div className="z-3 w-full md:w-3/4 pt-8 flex flex-col gap-[8px]">
          <span className="inline-block w-20 text-gray-500 font-semibold text-[18px] border-1 border-primary rounded-full px-3">
            {movie.Type}
          </span>
          <p className="text-white font-semibold text-[33px]">
            {movie.Title || movie.title}
          </p>
          <p className="text-gray-300 ps-3 text-[20px]">{movie.Plot}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-gray-300 mt-3 text-[18px]">
            <p className="ps-3">Year : {movie.Year}</p>
            <p className="ps-3">Language : {movie.Language}</p>
            <p className="hidden md:inline-block "></p>
            <p className="ps-3">Released : {movie.Released}</p>
            <p className="ps-3">Runtime : {movie.Runtime}</p>
            <p className="hidden md:inline-block "></p>
            <p className="ps-3">Director : {movie.Director}</p>
            <p className="ps-3">Writer : {movie.Writer}</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-start gap-7 my-10 overflow-hidden px-20">
        <HeaderOfSection header="related movies" />
        <SwiperComponent movies={movies} />
      </div>
    </div>
  );
};

export default MoviePage;
