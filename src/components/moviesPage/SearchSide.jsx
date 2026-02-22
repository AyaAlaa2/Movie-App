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
    <div className="w-full">
      <form className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-10">
        <input
          type="text"
          placeholder="Search for movies..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border-primary border focus:outline-0 focus:border-primary text-white p-3 rounded-md  w-full text-left"
        />

        <div className="flex items-center gap-1">
          <Button
            disabled={loading}
            onClick={() => {
              setLoading(true);
              handleSearch();
            }}
            className="rounded-md"
          >
            Search
          </Button>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="ml-2 bg-red-600 text-white p-2 rounded-md focus:outline-0 cursor-pointer"
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
