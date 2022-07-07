import { ThongTinDatVe } from "../../_core/TicketBookingModel";
import { httpsBase, httpsBaseAccessToken } from "../base/ConfigURL";

export const BookingService = {
  getTicketRooms: (idShowtime) => {
    return httpsBase.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${idShowtime}`
    );
  },

  ticketBooking: (ticket = new ThongTinDatVe(), token) => {
    return httpsBaseAccessToken("api/QuanLyDatVe/DatVe", ticket, token);
  },
};
