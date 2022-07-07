import { UserService } from "../../services/userService/UserService";
import { GET_CURRENT_USER, GET_USER_ACCOUNT } from "../constants/UserConstant";
import { toast } from "react-toastify";

export const signInUserAction = (account) => {
  return async (dispatch) => {
    try {
      const result = await UserService.getUserLogin(account);
      const data = result.data;
      // console.log(data);
      if (data.statusCode === 200) {
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

export const getUserAccountAction = (token) => {
  return async (dispatch) => {
    try {
      console.log(token);
      const result = await UserService.getUserAccountInfo(token);
      const data = result.data;
      console.log(data);
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
