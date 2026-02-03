// lib/fetchMovies.js
import axios from "axios";

export async function fetchAllMovies() {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_OMDB_BASE_URL}?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`,
    );

    const data = res.data;

    if (!data.Search) return [];

    // 2️⃣ جلب التفاصيل الكاملة لكل فيلم
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    return [];
  }
}
