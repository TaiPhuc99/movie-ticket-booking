import { ThongTinLichChieu } from "../../_core/TicketDetailModel";
import {
  CHANGE_TAB,
  CHANGE_TAB_ACTIVE,
  COMPLETE_BOOKING,
  GET_TICKET_DETAIL,
  SEAT_BOOKING,
} from "../constants/BookingConstant";

let initialState = {
  ticketDetail: new ThongTinLichChieu(),
  seatListChoice: [],
  tabActive: 1,
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

    case COMPLETE_BOOKING: {
      state.seatListChoice = [];
      return { ...state };
    }

    case CHANGE_TAB_ACTIVE: {
      state.tabActive = 2;
      return { ...state };
    }

    case CHANGE_TAB: {
      state.tabActive = payload;
      return { ...state };
    }

    default:
      return state;
  }
};
