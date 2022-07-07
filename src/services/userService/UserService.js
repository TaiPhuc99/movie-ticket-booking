/* eslint-disable no-empty-pattern */
import axios from "axios";
import { BASE_URL, httpsBase, TOKEN } from "../base/ConfigURL";

export const UserService = {
  getUserLogin: (account) => {
    return httpsBase.post("/api/QuanLyNguoiDung/DangNhap", account);
  },

  getUserAccountInfo: (token) => {
    return axios.post(`${BASE_URL}/api/QuanLyNguoiDung/ThongTinTaiKhoan`, {
      headers: {
        Authorization: `Bearer ${token}`,
        TokenCybersoft: TOKEN,
      },
    });
  },
};
