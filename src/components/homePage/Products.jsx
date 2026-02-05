import Image from "next/image";
import Link from "next/link";

const Products = ({ Movies }) => {
  if (!Movies || Movies.length === 0) {
    return (
      <h2 className="text-center text-red-700 mt-10 text-md">
        No movies found. Please try searching for something else.
      </h2>
    );
  }
  return (
    <>
      <div className="grid grid-cols-4 gap-5 mx-20 mt-10">
        {Movies.map((movie) => (
          <Link href={`/${movie.Title}`} key={movie.imdbID}>
            <div className="px-4 rounded-lg shadow-2xl shadow-red-600/50 bg-black border-red-600 border-1 overflow-hidden pb-4">
              <Image
                src={movie.Poster}
                alt={movie.Title}
                width={100}
                height={100}
                className="w-full h-[300px] pt-2 rounded-lg"
              />

              <div className="mt-3">
                <h2 className="text-white font-semibold text-lg text truncate">
                  {movie.Title}
                </h2>
                <p className="text-gray-400">Released Year: {movie.Year}</p>
                <p className="text-gray-400">Type : {movie.Type}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Products;
