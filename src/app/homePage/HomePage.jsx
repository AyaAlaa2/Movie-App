import HeroHome from "./HeroHome";
import { fetchAllMovies } from "../../../lib/fetchMovies";
import Image from "next/image";

const HomePage = async () => {
  const movies = await fetchAllMovies();
  console.log(movies);

  return (
    <>
      <HeroHome />
      <div className="flex items-center justify-center mt-10">
        <input
          type="text"
          placeholder="Search for movies..."
          className="border-red-600 border active:border-red-600 text-white p-2 rounded-lg w-[90vw] text-center "
        />
        <button className="ml-2 bg-red-600 hover:bg-black hover:border-red-600 border-2 border-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
          Search
        </button>
      </div>
    </>
  );
};

export default HomePage;
