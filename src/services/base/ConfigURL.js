import axios from "axios";

export const BASE_URL = "https://movienew.cybersoft.edu.vn";
export const USER_TOKEN = "accessToken";
export const USER_LOGIN = "USER_LOGIN";
export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMSIsIkhldEhhblN0cmluZyI6IjEzLzEyLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY3MDg4OTYwMDAwMCIsIm5iZiI6MTY0MTkyMDQwMCwiZXhwIjoxNjcxMDM3MjAwfQ.bmkH3ZTAY_imW1WGWQrt5UXILbKPSLre4odX6sUKnbU";
export const GROUP_ID = "GP09";
export const httpsBase = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN,
  },
});
export const httpsBaseAccessToken = (url, data, token) => {
  return axios({
    url: `${BASE_URL}/${url}`,
    method: "POST",
    data: data,
    headers: {
      Authorization: `Bearer ${token}`,
      TokenCybersoft: TOKEN,
    },
  });
};
