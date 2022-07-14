import { GET_THEATER_CLUSTERS } from "../constants/TheaterConstant";

let initialState = {
  theaterClusters: [],
};

export const theaterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_THEATER_CLUSTERS: {
      state.theaterClusters = payload;
      return { ...state };
    }

    default:
      return state;
  }
};
