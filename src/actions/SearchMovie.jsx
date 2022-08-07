import axios from "axios";
import { URL_SEARCH,URL_SEARCH_TV } from "../url";

const SearchMovie = (title,type) => async (dispatch) => {
  const searchData = type === 'feature' ? await axios.get(URL_SEARCH(title)) : await axios.get(URL_SEARCH_TV(title));
  dispatch({
    type: "SEARCH_MOVIE",
    payload: {
      searchData,
    },
  });
};

export default SearchMovie;
