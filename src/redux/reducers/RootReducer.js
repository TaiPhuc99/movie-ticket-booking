import { combineReducers } from "redux";
import { movieReducer } from "./MovieReducer";
import { movieListReducer } from "./MovieListReducer";
import { carouselReducer } from "./CarouselReducer";
import { theaterReducer } from "./TheaterReducer";
import { userReducer } from "./UserReducer";
import { bookingReducer } from "./BookingReducer";
import { spinnerReducer } from "./SpinnerReducer";

export const rootReducer = combineReducers({
  movieReducer,
  movieListReducer,
  carouselReducer,
  theaterReducer,
  userReducer,
  bookingReducer,
  spinnerReducer,
});
