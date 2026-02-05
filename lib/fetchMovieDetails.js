import axios from "axios";

export async function fetchMovieDetails(imdbID) {
  const res = await axios.get(process.env.NEXT_PUBLIC_OMDB_BASE_URL, {
    params: {
      apikey: process.env.NEXT_PUBLIC_OMDB_API_KEY,
      i: imdbID, 
      plot: "full",
    },
  });

  return res.data;
}

