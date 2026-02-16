"use client";
import { useEffect, useState } from "react";
import getMovies from "../../../app/api/moviesAPI";
import HeaderOfSection from "../HeaderOfSection"
import SwiperComponent from "../SwiperComponent"

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovies(1);
      setMovies(data.results);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-col items-start gap-7 my-10 overflow-hidden px-20">
      <HeaderOfSection header="popular movies" />
      <SwiperComponent movies={movies} />
    </div>
  );
};

export default PopularMovies;
