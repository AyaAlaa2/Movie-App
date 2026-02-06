import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDO_BASE_URL;

const getMovies = async () => {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
      page: 1,
    },
  });

  return response.data;
};

export default getMovies;
