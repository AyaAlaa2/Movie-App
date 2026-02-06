"use client";

import { useState } from "react";
import HeroHome from "./HeroHome";
import SearchSide from "./SearchSide";
import { fetchMovies } from "../../../lib/fetchMovies";
import Products from "./Products";
import PopularMovies from "./PopularMovies";

const HomePage = () => {
  const [keyword, setKeyword] = useState("");
  const [type, setType] = useState("movie");
  const [resultSearch, setResultSearch] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    const results = await fetchMovies(keyword, type);
    setResultSearch(results);
    setLoading(false);
  };

  return (
    <>
      <HeroHome />
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
        <Products Movies={resultSearch} />
      ) : (
        <PopularMovies />
      )}
    </>
  );
};

export default HomePage;
