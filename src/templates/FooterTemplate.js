/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import film from "../assets/film-bg.jpg";
import { useEffect } from "react";
import { theaterClustersAction } from "../redux/actions/TheaterAction";

export default function FooterTemplate() {
  const { theaterClusters } = useSelector((state) => {
    return state.theaterReducer;
  });
  const theaterList = _.map(theaterClusters, (theater) => {
    return _.pick(theater, ["maHeThongRap", "logo", "tenHeThongRap"]);
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(theaterClustersAction());
  }, []);

  return (
    <Fragment>
      <div
        className="h-[600px]"
        style={{
          backgroundImage: `url(${film})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <footer className="py-3 template">
        <div className="container px-6 mx-auto space-y-6 md:space-y-12">
          <div className="grid grid-cols-12">
            <div className="col-span-full py-5 md:pb-0 md:col-span-6 flex flex-col justify-center items-center">
              <p className="text text-lg leading-normal font-medium hover:text-white">
                Quality Service For You
              </p>
              <Link to="/">
                <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
                  CINEMAX
                </h1>
              </Link>
            </div>
            <div className="col-span-6 md:text-left md:col-span-3 flex flex-col justify-center items-center">
              <p className="p-3 text-xl font-medium">PARTNERS</p>
              <div className="w-2/3 grid grid-cols-3 gap-2 mt-3">
                {theaterList.map((theater, index) => {
                  return (
                    <div
                      key={`theater-logo-${index}`}
                      className="inline-grid justify-center items-center mb-4 basis-1/4"
                    >
                      <img
                        src={theater.logo}
                        alt={theater.logo}
                        className="rounded-full w-6 h-6"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-span-6 md:col-span-3 flex flex-col justify-start items-center ">
              <p className="p-3 text-xl font-medium">ABOUT</p>
              <div className="grid grid-cols-2 gap-2 mt-3 text text-center">
                <p className="hover:text-white">FAQ</p>
                <p className="hover:text-white">Brand Guidelines</p>
                <p className="hover:text-white">Privacy policy</p>
                <p className="hover:text-white">Terms of service</p>
              </div>
            </div>
          </div>
          <div className="grid justify-center pt-6 lg:justify-center">
            <div className="flex text-sm text-center md:block lg:col-start-1 md:space-x-6">
              <span>©2022 All rights reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
