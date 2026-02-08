"use client";
import { useEffect, useState } from "react";
import getMovies from "../../../app/api/moviesAPI";
import Products from "../Products";
import SearchSide from "./SearchSide";
import PopularHeader from "./PopularHeader";
import { fetchMovies } from "../../../../lib/fetchMovies";

const PopularMovies = () => {
  const [keyword, setKeyword] = useState("");
  const [type, setType] = useState("movie");
  const [resultSearch, setResultSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    const results = await fetchMovies(keyword, type);
    setResultSearch(results);
    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovies();
      setMovies(data);
    };

    fetchData();
  }, []);

  const deleteDuplicteFromResult = (resultSearch) => {
    const uniqueMovies = [];
    const seenIds = new Set();
    resultSearch.forEach((movie) => {
      const id = movie.imdbID || movie.id;
      if (!seenIds.has(id)) {
        seenIds.add(id);
        uniqueMovies.push(movie);
      } else {
        console.log(
          `Duplicate movie found and removed: ${movie.Title || movie.title}`,
        );
      }
    });
    return uniqueMovies;
  };

  const finalResults = deleteDuplicteFromResult(resultSearch);

  return (
    <div className="w-full flex flex-col items-center gap-5">
      <PopularHeader />
      <SearchSide
        keyword={keyword}
        setKeyword={setKeyword}
        type={type}
        setType={setType}
        handleSearch={handleSearch}
        loading={loading}
        setLoading={setLoading}
      />
      {resultSearch && resultSearch.length > 0 ? (
        <Products Movies={finalResults} />
      ) : (
        <Products Movies={movies.results} />
      )}
    </div>
  );
};

export default PopularMovies;
