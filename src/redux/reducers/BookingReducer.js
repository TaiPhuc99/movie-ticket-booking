import { ThongTinLichChieu } from "../../_core/TicketDetailModel";
import { GET_TICKET_DETAIL, SEAT_BOOKING } from "../constants/BookingConstant";

let initialState = {
  ticketDetail: new ThongTinLichChieu(),
  seatListChoice: [],
};

export const bookingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TICKET_DETAIL: {
      state.ticketDetail = payload;
      return { ...state };
    }

    case SEAT_BOOKING: {
      let newSeatListChoice = [...state.seatListChoice];
      const index = newSeatListChoice.findIndex((seat) => {
        return seat.maGhe === payload.maGhe;
      });
      if (index !== -1) {
        newSeatListChoice.splice(index, 1);
      } else {
        newSeatListChoice.push(payload);
      }
      return { ...state, seatListChoice: newSeatListChoice };
    }

    default:
      return state;
  }
};
