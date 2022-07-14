/* eslint-disable default-case */
import axios from "axios";
import {
  SPINNER_END,
  SPINNER_START,
} from "../../redux/constants/SpinnerConstant";
import { store } from "../../redux/Store";

export const BASE_URL = "https://movienew.cybersoft.edu.vn";
export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMSIsIkhldEhhblN0cmluZyI6IjEzLzEyLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY3MDg4OTYwMDAwMCIsIm5iZiI6MTY0MTkyMDQwMCwiZXhwIjoxNjcxMDM3MjAwfQ.bmkH3ZTAY_imW1WGWQrt5UXILbKPSLre4odX6sUKnbU";
export const GROUP_ID = "GP09";

const timeRequestMax = 15;
const httpsBase = axios.create({
  baseURL: BASE_URL,
  timeout: 1000 * timeRequestMax,
  headers: {
    TokenCybersoft: TOKEN,
  },
});

httpsBase.interceptors.request.use(
  (config) => {
    store.dispatch({
      type: SPINNER_START,
    });
    const token = localStorage.getItem("USER_LOGIN");
    if (token) {
      const userToken = JSON.parse(token).accessToken;
      config.headers.Authorization = `Bearer ${userToken}`;
    } else {
      delete httpsBase.defaults.headers.common.Authorization;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpsBase.interceptors.response.use(
  (response) => {
    store.dispatch({
      type: SPINNER_END,
    });
    return response;
  },
  (error) => {
    store.dispatch({
      type: SPINNER_END,
    });

    switch (error.response.status) {
      case 401:
      case 403:
        window.location.href = "/sign-in";
    }
    return Promise.reject(error);
  }
);

export default httpsBase;

// export const httpsBaseAccessToken = (url, data, token) => {
//   return axios({
//     url: `${BASE_URL}/${url}`,
//     method: "POST",
//     data: data,
//     headers: {
//       Authorization: `Bearer ${token}`,
//       TokenCybersoft: TOKEN,
//     },
//   });
// };
