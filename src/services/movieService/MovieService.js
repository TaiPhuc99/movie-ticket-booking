import { GROUP_ID, httpsBase } from "../base/ConfigURL";

export const MovieService = {
  getMovieList: () => {
    return httpsBase.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
  },

  getDetailMovie: (idMovie) => {
    return httpsBase.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idMovie}`);
  },

  getMovieBanners: () => {
    return httpsBase.get("/api/QuanLyPhim/LayDanhSachBanner");
  },
};
