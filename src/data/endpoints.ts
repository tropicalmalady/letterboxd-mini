const Tmdb = {
  getMovie: (movie_id: string) => `/tmdb/movie/${movie_id}`,
  searchMovies: `tmdb/search-movies`,
};

export const Endpoints = {
  tmdb: Tmdb,
};
