import { toast } from "react-toastify";
import { BookingService } from "../../services/bookingService/BookingService";
import { ThongTinDatVe } from "../../_core/TicketBookingModel";
import { GET_TICKET_DETAIL, SEAT_BOOKING } from "../constants/BookingConstant";

export const ticketDetailAction = (idShowtime) => {
  return async (dispatch) => {
    try {
      // Return all data from API
      const result = await BookingService.getTicketRooms(idShowtime);
      const data = result.data;
      // console.log(data);
      if (data.statusCode === 200) {
        dispatch({
          type: GET_TICKET_DETAIL,
          payload: data.content,
        });
      }
    } catch (error) {
      throw error;
    }
  };
};

export const seatBookingAction = (data) => {
  return {
    type: SEAT_BOOKING,
    payload: data,
  };
};

export const ticketBookingAction = (ticket = new ThongTinDatVe(), token) => {
  return async (dispatch) => {
    try {
      const result = await BookingService.ticketBooking(ticket, token);
      const data = result.data;
      console.log(data);
      if (data.statusCode === 200) {
        toast.success("Successfully Ticket Booking");
      }
    } catch (error) {
      toast.error("Failed Ticket Booking");
      throw error;
    }
  };
};
