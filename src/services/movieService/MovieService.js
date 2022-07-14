import httpsBase, { GROUP_ID } from "../base/ConfigURL";

export const MovieService = {
  getMovieList: () => {
    return httpsBase.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
  },

  getMovieDetailByTheaters: (idMovie) => {
    return httpsBase.get(
      `/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idMovie}`
    );
  },

  getMovieBanners: () => {
    return httpsBase.get("/api/QuanLyPhim/LayDanhSachBanner");
  },
};
