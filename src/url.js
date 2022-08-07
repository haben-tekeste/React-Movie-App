const KEY = process.env.REACT_APP_API_KEY;
export const URL_FEATURE = (page) =>
  `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`;
export const URL_SERIES = (page) =>
  `https://api.themoviedb.org/3/discover/tv?api_key=${KEY}&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`;
export const URL_SEARCH = (TITLE) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${TITLE}`;
};
export const URL_SEARCH_TV = (TITLE) => {
  return `https://api.themoviedb.org/3/search/tv?api_key=${KEY}&language=en-US&page=1&query=${TITLE}&include_adult=false`;
};
