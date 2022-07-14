/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";
import AnimateCard from "../movies/animation/AnimateCard";

export default function MultipleRows({ movieList }) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    speed: 500,
    fade: true,
    rows: 2,
    dots: false,
    slidesPerRow: 3,
    nextArrow: false,
    prevArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesPerRow: 2,
          centerMode: true,
          infinite: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesPerRow: 1,
          centerMode: true,
          infinite: true,
          centerPadding: "40px",
        },
      },
    ],
  };

  return (
    <div id="films">
      <Slider {...settings}>
        {movieList?.map((movie, index) => {
          return (
            <div key={`movie-Slide-${index}`}>
              <AnimateCard movie={movie} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
