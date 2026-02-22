import React from "react";
import Link from "next/link";
import Image from "next/image";

const MoviesCard = ({ movie }) => {
  return (
    <Link
      href={`/${movie.Title ? movie.Title : movie.title}+${movie.Year ? movie.Year : movie.release_date}`}
      key={movie.imdbID || movie.id}
    >
      <div className="rounded-lg bg-black overflow-hidden pb-4 group transition duration-300 hover:translate-y-[-5px] hover:shadow-red-400/30 ">
        {movie.Poster === "N/A" ? (
          <div className="w-full h-[300px] flex items-center justify-center bg-black">
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
              src={
                movie.Poster ||
                `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
              }
              alt={movie.Title || movie.title}
              width={100}
              height={100}
              className="w-full h-[350px] pt-2 rounded-xl"
            />
          </div>
        )}

        <div className="mt-3 flex flex-col items-start gap-2">
          <h2 className="text-white font-semibold text-lg text truncate group-hover:text-primary transition duration-300">
            {movie.Title || movie.title}
          </h2>
          <p className="text-gray-400">
            Released Year: {movie.Year || movie.release_date?.split("-")[0]}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MoviesCard;
