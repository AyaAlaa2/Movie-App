import axios from "axios";

export async function fetchAllMovies(keyword, type) {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_OMDB_BASE_URL}`, {
      params: {
        s: keyword,
        apikey: process.env.NEXT_PUBLIC_OMDB_API_KEY,
        type: type,
        page: 1,
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
