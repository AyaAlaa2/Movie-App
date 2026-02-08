import axios from "axios";

export async function fetchMovies(keyword, type, year) {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_OMDB_BASE_URL}`, {
      params: {
        s: keyword,
        y: year,
        type: type,
        page: 1,
        apikey: process.env.NEXT_PUBLIC_OMDB_API_KEY,
      },
    });
    const data = res.data;
    if (!data.Search) return [];
    return data.Search;
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    return [];
  }
}
