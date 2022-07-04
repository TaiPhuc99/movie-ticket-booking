/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import {
  GET_MOVIE_COMING,
  GET_MOVIE_SHOWING,
} from "../../redux/constants/MovieConstant";
import AnimateCard from "../movies/animation/AnimateCard";

export default function MultipleRows({ movieList }) {
  const dispatch = useDispatch();
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    fade: true,
    rows: 2,
    dots: true,
    slidesPerRow: 3,
    nextArrow: false,
    prevArrow: false,
  };

  return (
    <div>
      {/* <div>
        <button
          type="button"
          className="px-8 py-3 font-bold border rounded mr-2 bg-white text-gray-700 hover:bg-gray-700 hover:text-white"
          onClick={() => {
            dispatch({
              type: GET_MOVIE_SHOWING,
            });
          }}
        >
          Now Showing
        </button>
        <button
          type="button"
          className="px-8 py-3 font-bold border rounded bg-white text-gray-700 hover:bg-gray-700 hover:text-white"
          onClick={() => {
            dispatch({
              type: GET_MOVIE_COMING,
            });
          }}
        >
          Coming Soon
        </button>
      </div> */}

      <Slider {...settings}>
        {movieList?.map((movie, index) => {
          return (
            <div className="mt-2" key={`movie-Slide-${index}`}>
              <AnimateCard movie={movie} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
