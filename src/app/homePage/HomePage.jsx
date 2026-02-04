"use client";

import { useState } from "react";
import HeroHome from "./HeroHome";
import { fetchAllMovies } from "../../../lib/fetchMovies";
import Products from "./Products";

const HomePage = () => {
  const [keyword, setKeyword] = useState("");
  const [type, setType] = useState("movie");
  const [Movie, setMovie] = useState([]);


  const handleSearch = async () => {
    const results = await fetchAllMovies(keyword, type);
    console.log(results);
    setMovie(results);
  };

  return (
    <>
      <HeroHome />

      <div className="flex items-center justify-center mt-10">
        <input
          type="text"
          placeholder="Search for movies..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border-red-600 border focus:border-red-600 text-white p-2 rounded-lg w-[90vw] text-center"
        />

        <button
          onClick={handleSearch}
          className="ml-2 bg-red-600 hover:bg-black hover:border-red-600 border-2 border-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
        >
          Search
        </button>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="ml-2 bg-red-600 text-white p-2 rounded-full text-center border-red-600 border-2 hover:bg-black transition duration-300"
        >
          <option className="bg-black transition duration-300  " value="movie">
            Movie
          </option>
          <option className="bg-black transition duration-300 " value="series">
            Series
          </option>
          <option className="bg-black transition duration-300 " value="episode">
            Episode
          </option>
        </select>
      </div>
      <Products Movie={Movie} />
    </>
  );
};

export default HomePage;
