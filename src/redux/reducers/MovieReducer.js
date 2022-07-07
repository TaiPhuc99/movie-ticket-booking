import { GET_MOVIE_DETAIL_BY_THEATERS } from "../constants/TheaterConstant";

let initialState = {
  movieDetail: {},
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MOVIE_DETAIL_BY_THEATERS:
      return {
        ...state,
        movieDetail: payload,
      };

    default:
      return state;
  }
};
