import React from 'react'

const SearchSide = ({ keyword ,setKeyword , type , setType , handleSearch}) => {
  return (
    <div className="flex items-center justify-center mt-10">
        <input
          type="text"
          placeholder="Search for movies..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border-red-600 border focus:border-red-600 text-white p-2 rounded-lg w-[90vw] text-center"
        />

        <button
          onClick={handleSearch}
          className="ml-2 bg-red-600 hover:bg-black hover:border-red-600 border-2 border-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
        >
          Search
        </button>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="ml-2 bg-red-600 text-white p-2 rounded-full"
        >
          <option className="bg-black transition duration-300  " value="movie">Movie</option>
          <option className="bg-black transition duration-300 " value="series">Series</option>
          <option className="bg-black transition duration-300 " value="episode">Episode</option>
        </select>
      </div>
  )
}

export default SearchSide
