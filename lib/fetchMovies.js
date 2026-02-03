export async function fetchMovieById(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_OMDB_BASE_URL}?i=${id}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movie");
  }

  const data = await res.json();
  return data;
}
