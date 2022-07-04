import { combineReducers } from "redux";
import { movieReducer } from "./MovieReducer";
import { movieListReducer } from "./MovieListReducer";
import { carouselReducer } from "./CarouselReducer";
import { theaterReducer } from "./TheaterReducer";

export const rootReducer = combineReducers({
  movieReducer,
  movieListReducer,
  carouselReducer,
  theaterReducer,
});
