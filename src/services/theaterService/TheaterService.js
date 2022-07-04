import { GROUP_ID, httpsBase } from "../base/ConfigURL";

export const TheaterService = {
  getTheaterClustersInfo: () => {
    return httpsBase.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`
    );
  },
};
