import { GET_BANNER_LIST } from "../constants/MovieConstant";

let initialState = {
  carouselBannerList: null,
};

export const carouselReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BANNER_LIST:
      return {
        ...state,
        carouselBannerList: payload,
      };

    default:
      return state;
  }
};
