"use client";
import { useEffect, useState } from "react";
import getMovies from "../../app/api/moviesAPI";
import Products from "../homePage/Products";
import SearchSide from "./SearchSide";
import { fetchMovies } from "../../../lib/fetchMovies";
import ReactPaginate from "react-paginate";
import { ArrowLeft, ArrowRight } from "lucide-react";

const MoviesPage = () => {
  const [keyword, setKeyword] = useState("");
  const [type, setType] = useState("movie");
  const [resultSearch, setResultSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    const { movies, totalPages } = await fetchMovies(keyword, type, 1);
    setResultSearch(movies);
    setTotalPages(totalPages);
    setIsSearching(true);
    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (isSearching) {
        const { movies, totalPages } = await fetchMovies(keyword, type, page);
        setResultSearch(movies);
        setTotalPages(totalPages);
      } else {
        const data = await getMovies(page);
        setMovies(data.results);
        setTotalPages(data.total_pages);
      }
    };
    fetchData();
  }, [page, isSearching, keyword, type]);

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
          `Duplicate movie found and removed: ${movie.Title || movie.title}`
        );
      }
    });
    return uniqueMovies;
  };

  const finalResults = deleteDuplicteFromResult(resultSearch);

  return (
    <div className="w-full flex flex-col items-center gap-7 mt-30 mb-10 overflow-hidden px-5 md:px-15">
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
        <Products Movies={movies} />
      )}

      <ReactPaginate
        breakLabel="..."
        nextLabel={<ArrowRight className="w-8 h-6" />}
        previousLabel={<ArrowLeft className="w-8 h-6" />}
        pageCount={totalPages}
        onPageChange={(event) => setPage(event.selected + 1)}
        containerClassName="flex justify-center gap-2 mt-10"
        pageClassName="px-3 py-1 rounded hover:text-primary transition duration-300"
        activeClassName="bg-primary text-white rounded-full"
        className="text-white flex items-center justify-center flex-wrap gap-2 mt-10 cursor-pointer text-[13px] md:text-[15px]"
      />
    </div>
  );
};

export default MoviesPage;
