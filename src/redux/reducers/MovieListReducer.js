import { GET_MOVIE_LIST } from "../constants/MovieConstant";

let initialState = {
  movieList: null,
  movieListDefault: null,
};

export const movieListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MOVIE_LIST:
      state.movieList = payload;
      state.movieListDefault = state.movieList;
      return {
        ...state,
      };

    default:
      return state;
  }
};
