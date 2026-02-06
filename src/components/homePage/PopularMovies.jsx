"use client";
import React, { useEffect, useState } from "react";
import getMovies from "../../app/api/moviesAPI";
import Products from "./Products";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovies();
      setMovies(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Products Movies={movies.results} />
    </>
  );
};

export default PopularMovies;
