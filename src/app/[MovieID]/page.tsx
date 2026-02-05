// 'use client';
import React from "react";
import { fetchMovies } from "../../../lib/fetchMovies";
import MoviePage from "../../components/moviePage/MoviePage";
import { fetchMovieDetails } from "@/lib/fetchMovieDetails";

const page = async ({ params }: { params: Promise<{ MovieID: string }> }) => {
  const { MovieID } = await params;
  const movieName: string = MovieID.replaceAll("%20", " ");
  const data = await fetchMovies(movieName, "movie");
  const movie = data.find(
    (item: { [key: string]: string }) =>
      item.Title.toLowerCase() == movieName.toLowerCase(),
  );
  if (!movie) {
    console.log("Movie not found");
    return;
  }
  const details = await fetchMovieDetails(movie.imdbID);
  return (
    <div>
      <MoviePage movieDetailes={details} />
    </div>
  );
};

export default page;
