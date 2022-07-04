import { TheaterService } from "../../services/theaterService/TheaterService";
import { GET_THEATER_CLUSTERS } from "../constants/TheaterConstant";

export const theaterClustersAction = () => {
  return async (dispatch) => {
    try {
      const result = await TheaterService.getTheaterClustersInfo();
      const data = result.data;
      dispatch({
        type: GET_THEATER_CLUSTERS,
        payload: data.content,
      });
    } catch (error) {
      throw error;
    }
  };
};
