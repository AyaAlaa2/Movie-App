import axios from 'axios'

export async function fetchMovies (
  keyword: string,
  type: string,
  page: number,
  year?: string
) {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_OMDB_BASE_URL}`, {
      params: {
        s: keyword,
        y: year,
        type: type,
        page: page,
        apikey: process.env.NEXT_PUBLIC_OMDB_API_KEY
      }
    })
    const data = res.data
    if (!data.Search) {
      return { movies: [], totalPages: 1 }
    }

    return {
      movies: data.Search,
      totalPages: Math.ceil(res.data.totalResults / 10)
    }
  } catch (error) {
    console.error('Failed to fetch movies:', error)
    return []
  }
}
