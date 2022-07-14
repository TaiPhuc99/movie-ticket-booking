/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { bannerMovieAction } from "../redux/actions/MovieAction";

const contentStyle = {
  height: "500px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export default function MovieCarousel() {
  const { carouselBannerList } = useSelector((state) => {
    return state.carouselReducer;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bannerMovieAction());
  }, []);

  return (
    <Carousel effect="fade" autoplay={true}>
      {carouselBannerList?.map((banner, index) => {
        return (
          <div key={`banner-${index}`}>
            <div
              style={{
                ...contentStyle,
                backgroundImage: `url(${banner.hinhAnh})`,
              }}
            >
              <img
                src={banner.hinhAnh}
                alt={banner.hinhAnh}
                className="w-full opacity-0"
              />
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
