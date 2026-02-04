"use client";

import { useState } from "react";
import HeroHome from "./HeroHome";
import SearchSide from "./SearchSide";
import { fetchAllMovies } from "../../../lib/fetchMovies";

const HomePage = () => {
  const [keyword, setKeyword] = useState("");
  const [type, setType] = useState("movie");

  const handleSearch = async () => {
    const results = await fetchAllMovies(keyword, type);
    console.log(results);
  };

  return (
    <>
      <HeroHome />
      <SearchSide keyword={keyword} setKeyword={setKeyword} type={type} setType={setType} handleSearch={handleSearch}/>
    </>
  );
};

export default HomePage;
