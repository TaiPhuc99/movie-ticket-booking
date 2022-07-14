import { ThongTinDatVe } from "../../_core/TicketBookingModel";
import httpsBase  from "../base/ConfigURL";

export const BookingService = {
  getTicketRooms: (idShowtime) => {
    return httpsBase.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${idShowtime}`
    );
  },

  ticketBooking: (ticket = new ThongTinDatVe()) => {
    // return httpsBaseAccessToken("api/QuanLyDatVe/DatVe", ticket, token);
    return httpsBase.post("api/QuanLyDatVe/DatVe", ticket);
  },
};
