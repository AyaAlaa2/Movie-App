import React from "react";
import { fetchMovies } from "../../../lib/fetchMovies";
import MoviePage from "../../components/moviePage/MoviePage";
import NotFound from "./not-found";
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
  const movieTitle = decodeURIComponent(MovieID);
  const movieName = movieTitle.split("+")[0];
  return {
    title: `${movieName}`,
  };
};

const page = async ({ params }: { params: Props }) => {
  const { MovieID } = await params;
  const movieTitle = decodeURIComponent(MovieID);
  const movieName = movieTitle.split("+")[0];
  const moviedate = movieTitle.split("+")[1];
  const movieYear = moviedate.split("-")[0].trim();
  const data = await fetchMovies(movieName, "movie", 1, movieYear);
  const movie = data.movies.find(
    (item: { [key: string]: string }) =>
      item.Title.toLowerCase() == movieName.toLowerCase() &&
      item.Year == movieYear
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
