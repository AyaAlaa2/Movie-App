"use client";
import { useEffect, useState } from "react";
import getMovies from "../../../app/api/moviesAPI";
import Products from "../Products";
import SearchSide from "./SearchSide";
import PopularHeader from "./PopularHeader";
import { fetchMovies } from "../../../../lib/fetchMovies";
import ReactPaginate from "react-paginate";
import { ArrowLeft, ArrowRight } from "lucide-react";

const PopularMovies = () => {
  const [keyword, setKeyword] = useState("");
  const [type, setType] = useState("movie");
  const [resultSearch, setResultSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = async () => {
    const results = await fetchMovies(keyword, type);
    setResultSearch(results);
    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovies(page);
      setMovies(data.results);
      setTotalPages(data.total_pages);
    };

    fetchData();
  }, [page]);

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
    <div className="w-full flex flex-col items-center gap-7 my-10">
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
        <Products Movies={movies} />
      )}

      <ReactPaginate
        breakLabel="..."
        nextLabel={<ArrowRight className="w-8 h-6" />}
        previousLabel={<ArrowLeft className="w-8 h-6" />}
        pageCount={totalPages}
        onPageChange={(event) => setPage(event.selected + 1)}
        containerClassName="flex justify-center gap-2 mt-10"
        pageClassName="px-3 py-1 rounded"
        activeClassName="bg-primary text-white rounded-full"
        className="text-white flex items-center justify-center gap-2 mt-10"
      />
    </div>
  );
};

export default PopularMovies;
