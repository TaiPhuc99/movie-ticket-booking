import httpsBase, { GROUP_ID } from "../base/ConfigURL";

export const TheaterService = {
  getTheaterClustersInfo: () => {
    return httpsBase.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`
    );
  },
};
