/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import _ from "lodash";
import { useSelector } from "react-redux";

export default function FooterTemplate() {
  const { theaterClusters } = useSelector((state) => {
    return state.theaterReducer;
  });
  const theaterList = _.map(theaterClusters, (theater) => {
    return _.pick(theater, ["maHeThongRap", "logo", "tenHeThongRap"]);
  });
  // console.log(theaterList);

  return (
    <footer className="py-6 dark:bg-gray-800 dark:text-gray-50">
      <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
        <div className="grid grid-cols-12">
          <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-3 md:justify-start"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-900"
                >
                  <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z" />
                </svg>
              </div>
              <span className="self-center text-2xl font-semibold">
                Brand name
              </span>
            </a>
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-2">
            <p className="pb-1 text-lg font-medium">PARTNERS</p>
            <div className="w-full grid grid-cols-3 gap-2 self-center">
              {theaterList.map((theater, index) => {
                return (
                  <div
                    key={`theater-logo-${index}`}
                    style={{ marginBottom: "16px", flexBasis: "25%" }}
                    className="self-center"
                  >
                    <img
                      src={theater.logo}
                      alt={theater.logo}
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="grid justify-center pt-6 lg:justify-center">
          <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
            <span>©2022 All rights reserved</span>
            <a rel="noopener noreferrer" href="#">
              <span>Privacy policy</span>
            </a>
            <a rel="noopener noreferrer" href="#">
              <span>Terms of service</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
