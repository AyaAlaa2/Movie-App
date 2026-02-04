import Image from "next/image";

const Products = ({ Movie }) => {
  if (!Movie || Movie.length === 0) {
    return (
      <h2 className="text-center text-red-700 mt-10 text-8xl">
        No movies found. Please try searching for something else.
      </h2>
    );
  }
  return (
    <>
      <div className="flex justify-center flex-wrap mt-10">
        {Movie.map((movie) => (
          <div
            key={movie.imdbID}
            className="p-4 m-2 rounded-lg shadow-2xl shadow-red-600/50 bg-black border-red-600 border-2"
          >
            <h2 className="text-white">{movie.Title}</h2>
            <Image
              src={movie.Poster}
              alt={movie.Title}
              width={300}
              height={200}
            />
            <span className="text-gray-400">{movie.Year}</span>
            <span className="text-gray-400">{movie.Type}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
