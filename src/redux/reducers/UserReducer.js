import { localStorageService } from "../../services/base/LocalStorageService";
import { GET_CURRENT_USER, GET_USER_ACCOUNT } from "../constants/UserConstant";

let initialState = {
  // Check whether current user have or not
  userLogin: localStorageService.getUserLocal(),
  userAccountInfo: {},
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CURRENT_USER: {
      state.userLogin = payload;
      //   console.log(payload);

      // Save User to Local Storage
      localStorageService.setUserLocal(payload);

      // Save User AccessToken to Local Storage
      localStorageService.setUserLocalToken(payload.accessToken);
      return { ...state };
    }

    case GET_USER_ACCOUNT: {
      state.userAccountInfo = payload;
      return { ...state };
    }

    default:
      return state;
  }
};
