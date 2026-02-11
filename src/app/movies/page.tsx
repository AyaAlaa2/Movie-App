import React from "react";
import { fetchMovies } from "../../../lib/fetchMovies";
import MoviePage from "../../components/moviePage/MoviePage";
import { fetchMovieDetails } from "@/lib/fetchMovieDetails";
import { Metadata } from "next";
import ReactPaginate from "react-paginate";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PopularMovies from "@/src/components/homePage/popularSection/PopularMovies";

export const metadata:Metadata = {
    title : "Movies"
}

const page =  () => {
 
  return (
    <div>
      <PopularMovies />
    </div>
  );
};

export default page;
