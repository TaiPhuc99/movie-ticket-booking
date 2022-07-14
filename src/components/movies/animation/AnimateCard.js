/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./animate.css";
import { Link } from "react-router-dom";

export default function AnimateCard({ movie }) {
  const getYoutubeId = (url) => {
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : null;
  };

  return (
    <div className="mx-1">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={movie.hinhAnh}
              alt={movie.hinhAnh}
              className="w-full h-[320px]"
            />
          </div>

          <div
            className="flip-card-back"
            style={{ position: "relative", backgroundColor: "rgba(0,0,0,0.9)" }}
          >
            <div className="absolute w-full top-0 left-0">
              <img
                src={movie.hinhAnh}
                alt={movie.hinhAnh}
                className="w-full h-[320px]"
              />
            </div>
            <div
              className="w-full h-full absolute flex justify-center items-center"
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              <div>
                <div className="rounded-full cursor-pointer">
                  <button onClick={() => {}}>
                    <iframe
                      src={`//www.youtube-nocookie.com/embed/${getYoutubeId(
                        movie.trailer
                      )}`}
                      frameborder="0"
                      allow="autoplay; encrypted-media"
                      width="100%"
                      height="100%"
                    ></iframe>
                    ;
                  </button>
                </div>
                <div className="text-2xl mt-2 font-bold">{movie.tenPhim}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button-color text-center cursor-pointer py-2 my-3 text-white font-bold rounded-sm w-full">
        <Link to={`/detail/${movie.maPhim}`}>
          <button>TICKET BOOKING</button>
        </Link>
      </div>
    </div>
  );
}
