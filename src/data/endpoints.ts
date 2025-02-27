const Auth = {
  signUp: "auth/sign-up",
  signIn: "auth/login",
};

const Tmdb = {
  getMovie: (movie_id: string) => `/tmdb/movie/${movie_id}`,
  getTrendingMovies: "tmdb/trending-movies",
  searchMovies: `tmdb/search-movies`,
};

const List = {
  getLists: "/film-lists",
  createList: `/film-lists`,
  getList: (listId: string) => `/film-lists/${listId}`,
  updateList: (listId: string) => `/film-lists/${listId}`,
  deleteList: (listId: string) => `/film-lists/${listId}`,
};

export const Endpoints = {
  tmdb: Tmdb,
  auth: Auth,
  list: List,
};
