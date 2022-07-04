import {
  GET_MOVIE_COMING,
  GET_MOVIE_LIST,
  GET_MOVIE_SHOWING,
} from "../constants/MovieConstant";

let initialState = {
  movieList: null,
  movieListDefault: null,
  showing: false,
  coming: false,
};

export const movieListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MOVIE_LIST:
      state.movieList = payload;
      state.movieListDefault = state.movieList;
      return {
        ...state,
      };

    case GET_MOVIE_SHOWING: {
      state.showing = true;
      state.coming = false;
      state.movieList = state.movieListDefault.filter((movie) => {
        return (
          movie.dangChieu === state.showing && movie.sapChieu === state.coming
        );
      });
      return { ...state };
    }

    case GET_MOVIE_COMING: {
      state.coming = true;
      state.showing = false;
      state.movieList = state.movieListDefault.filter((movie) => {
        return (
          movie.sapChieu === state.coming && movie.dangChieu === state.showing
        );
      });
      return { ...state };
    }

    default:
      return state;
  }
};
