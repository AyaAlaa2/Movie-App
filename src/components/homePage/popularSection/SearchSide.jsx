import { Button } from "../../ui/button";

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
    <div className="w-full px-20">
      <form className="flex items-center justify-between gap-10">
        <input
          type="text"
          placeholder="Search for movies..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border-transparent border focus:outline-0 focus:border-transparent text-white p-2 rounded-lg w-[50vw] text-left"
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
            className="ml-2 bg-red-600 text-white p-2 rounded-full focus:outline-0"
          >
            <option
              className="bg-black transition duration-300  "
              value="movie"
            >
              Movie
            </option>
            <option
              className="bg-black transition duration-300 "
              value="series"
            >
              Series
            </option>
            <option
              className="bg-black transition duration-300 "
              value="episode"
            >
              Episode
            </option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default SearchSide;
