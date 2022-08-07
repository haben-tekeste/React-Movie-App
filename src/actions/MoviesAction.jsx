import axios from "axios";
import { URL_FEATURE, URL_SERIES } from "../url";

const FetchMovies = (page,active='feature') => async (dispatch) => {
  const feature_data = active === 'feature' ? await axios.get(URL_FEATURE(page)) : await axios.get(URL_FEATURE(1));
  const series_data = active !== 'feature' ? await axios.get(URL_SERIES(page)) : await axios.get(URL_SERIES(1));
  dispatch({
    type:"FETCH_MOVIES",
    payload:{
        feature:feature_data,
        series:series_data,
        isLoading:false
    }
  })
};

export default FetchMovies;