import React, { useStae } from "react";
import { Button } from "../ui/button";

const SearchSide = ({
  keyword,
  setKeyword,
  type,
  setType,
  handleSearch,
  loading,
  setLoading,
}) => {
  return (
    <div className="flex items-center justify-between gap-10 mt-10 mx-20">
      <input
        type="text"
        placeholder="Search for movies..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="border-red-600 border focus:outline-0 focus:border-red-600 text-white p-2 rounded-lg w-[50vw] text-left"
      />

      <div className="flex items-center gap-1">
        <Button
          disabled={loading}
          onClick={() => {
            setLoading(true);
            handleSearch();
          }}
        >
          Search
        </Button>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="ml-2 bg-red-600 text-white p-2 rounded-full"
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
    </div>
  );
};

export default SearchSide;
