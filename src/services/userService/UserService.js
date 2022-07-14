/* eslint-disable no-empty-pattern */
import httpsBase from "../base/ConfigURL";

export const UserService = {
  getUserLogin: (account) => {
    return httpsBase.post("/api/QuanLyNguoiDung/DangNhap", account);
  },

  newUserSignUp: (account) => {
    return httpsBase.post("/api/QuanLyNguoiDung/DangKy", account);
  },

  // Option 2
  getUserAccountInfo: () => {
    return httpsBase.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan");
  },

  updateUserAccount: (account) => {
    return httpsBase.put(
      "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      account
    );
  },
};

// Option 1
// getUserAccountInfo: (token) => {
//   return axios.post(`${BASE_URL}/api/QuanLyNguoiDung/ThongTinTaiKhoan`, "", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       TokenCybersoft: TOKEN,
//     },
//   });
// },

// Option 3
// getUserAccountInfo: (token) => {
//   return httpsBaseAccessToken(
//     "/api/QuanLyNguoiDung/ThongTinTaiKhoan",
//     "",
//     token
//   );
// },
