// 'use client';
import React from "react";
import { fetchMovies } from "../../../lib/fetchMovies";
import MoviePage from "../../components/moviePage/MoviePage";
import NotFound from "../../components/moviePage/NotFound";
import { fetchMovieDetails } from "@/lib/fetchMovieDetails";
import { Metadata } from "next";

type Props = {
  params: Promise<{ MovieID: string }>;
};

export const generateMetadata: Metadata = async ({
  params,
}: {
  params: Props;
}): Promise<Metadata> => {
  const { MovieID } = await params;
  const movieName: string = MovieID.replaceAll("%20", " ");
  return {
    title: `${movieName}`,
  };
};

const page = async ({ params }: { params: Props }) => {
  const { MovieID } = await params;
  const movieName: string = MovieID.replaceAll("%20", " ");
  const data = await fetchMovies(movieName, "movie");
  const movie = data.find(
    (item: { [key: string]: string }) =>
      item.Title.toLowerCase() == movieName.toLowerCase(),
  );
  if (!movie) {
    return <NotFound />;
  }
  const details = await fetchMovieDetails(movie.imdbID);
  return (
    <div>
      <MoviePage movieDetailes={details} />
    </div>
  );
};

export default page;
