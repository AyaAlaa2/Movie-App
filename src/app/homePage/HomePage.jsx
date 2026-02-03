import HeroHome from "./HeroHome";
import { fetchMovieById } from "../../../lib/fetchMovies";
const HomePage = async () => {
  const movie = await fetchMovieById("tt3896198");
  console.log(movie);
  return (
    <>
      <HeroHome />
      <div className="p-8">
        <h1 className="text-3xl text-white font-bold">{movie.Title}</h1>
        <p className="text-white">{movie.Year}</p>
        <img src={movie.Poster} alt={movie.Title} className="mt-4 w-64" />
        <p className="mt-2 text-white">{movie.Plot}</p>
      </div>
      );
    </>
  );
};

export default HomePage;
