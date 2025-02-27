const Tmdb = {
  getMovie: (movie_id: string) => `/tmdb/movie/${movie_id}`,
  getTrendingMovies: "tmdb/trending-movies",
  searchMovies: `tmdb/search-movies`,
};

export const Endpoints = {
  tmdb: Tmdb,
};
