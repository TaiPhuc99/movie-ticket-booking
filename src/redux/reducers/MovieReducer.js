import { GET_MOVIE } from "../constants/MovieConstant";

let initialState = {
  movie: {},
};
export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MOVIE:
      return {
        ...state,
        movie: payload,
      };

    default:
      return state;
  }
};
