import { SPINNER_END, SPINNER_START } from "../constants/SpinnerConstant";

let initialState = {
  loading: false,
  count: 0,
};

export const spinnerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SPINNER_START: {
      state.loading = true;
      state.count = state.count + 1;
      return { ...state };
    }

    case SPINNER_END: {
      state.count = state.count - 1;
      if (state.count === 0) {
        state.loading = false;
      }
      return { ...state };
    }

    default:
      return state;
  }
};
