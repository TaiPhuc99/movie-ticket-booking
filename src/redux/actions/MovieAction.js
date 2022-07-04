import { MovieService } from "../../services/movieService/MovieService";
import {
  GET_BANNER_LIST,
  GET_MOVIE,
  GET_MOVIE_LIST,
} from "../constants/MovieConstant";

export const movieDetailAction = (idMovie) => {
  return async (dispatch) => {
    try {
      const result = await MovieService.getDetailMovie(idMovie);
      const data = result.data;
      // console.log(data);
      dispatch({
        type: GET_MOVIE,
        payload: data.content,
      });
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
