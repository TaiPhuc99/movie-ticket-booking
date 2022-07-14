import { UserService } from "../../services/userService/UserService";
import { GET_CURRENT_USER, GET_USER_ACCOUNT } from "../constants/UserConstant";
import { toast } from "react-toastify";
import { localStorageService } from "../../services/base/LocalStorageService";

export const signInUserAction = (account) => {
  return async (dispatch) => {
    try {
      const result = await UserService.getUserLogin(account);
      const data = result.data;
      // console.log(data.content);
      if (data.statusCode === 200) {
        // Save User to Local Storage
        localStorageService.setUserLocal(data.content);
        dispatch({
          type: GET_CURRENT_USER,
          payload: data.content,
        });
        toast.success("Successfully Sign-In");
      }
    } catch (error) {
      toast.error("Something went wrong with Sign-In");
    }
  };
};

export const getUserAccountAction = () => {
  return async (dispatch) => {
    try {
      const result = await UserService.getUserAccountInfo();
      const data = result.data;
      // console.log("data", data);
      if (data.statusCode === 200) {
        dispatch({
          type: GET_USER_ACCOUNT,
          payload: data.content,
        });
      }
    } catch (error) {
      throw error;
    }
  };
};
