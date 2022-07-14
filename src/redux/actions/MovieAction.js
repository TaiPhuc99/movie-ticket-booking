import { MovieService } from "../../services/movieService/MovieService";
import { GET_BANNER_LIST, GET_MOVIE_LIST } from "../constants/MovieConstant";
import { GET_MOVIE_DETAIL_BY_THEATERS } from "../constants/TheaterConstant";

export const movieDetailByTheatersAction = (idMovie) => {
  return async (dispatch) => {
    try {
      const result = await MovieService.getMovieDetailByTheaters(idMovie);
      const data = result.data;
      // console.log(data);
      if (data.statusCode === 200) {
        dispatch({
          type: GET_MOVIE_DETAIL_BY_THEATERS,
          payload: data.content,
        });
      }
    } catch (error) {
      throw error;
    }
  };
};

export const movieListAction = () => {
  return async (dispatch) => {
    try {
      const result = await MovieService.getMovieList();
      const data = result.data;
      dispatch({
        type: GET_MOVIE_LIST,
        payload: data.content,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const bannerMovieAction = () => {
  return async (dispatch) => {
    try {
      const result = await MovieService.getMovieBanners();
      const data = result.data;
      dispatch({
        type: GET_BANNER_LIST,
        payload: data.content,
      });
    } catch (error) {
      throw error;
    }
  };
};
