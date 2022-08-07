const initState = {
  feature: [],
  series: [],
  search: "",
  isLoading: true,
};

const MoviesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return {
        ...state,
        feature: action.payload.feature,
        series: action.payload.series,
        isLoading: action.payload.isLoading,
      };
    case "SEARCH_MOVIE":
      return { ...state, search: action.payload.searchData };
    default:
      return { ...state };
  }
};

export default MoviesReducer;
