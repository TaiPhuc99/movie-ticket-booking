/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from "react";
import { Tabs } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";

const { TabPane } = Tabs;

export default function MovieTabpane({ theaterClusters }) {
  const renderTheaterClusters = () => {
    // render theater Cluster
    return theaterClusters?.map((theaterCluster, index) => {
      return (
        <TabPane
          tab={
            <img
              src={theaterCluster.logo}
              className="rounded-full sm:w-[50px] w-[40px]"
            />
          }
          key={`clusters-${index}`}
        >
          <Tabs tabPosition="left">
            {/* Render Theaters */}
            {theaterCluster.lstCumRap?.map((theaters, index) => {
              return (
                <TabPane
                  tab={
                    <div
                      className="xl:w-[300px] lg:w-[250px] sm:w-[200px] w-[120px] flex flex-col text-left pl-0"
                      style={{
                        borderBottom: "1px solid rgb(121, 147, 195)",
                      }}
                    >
                      <div className="text-left text-white font-medium leading-normal uppercase">
                        {theaters.tenCumRap}
                      </div>
                      <p className="text font-normal text-[12px] leading-[1.6] tracking-[0.0075rem] text-left uppercase overflow-hidden text-ellipsis">
                        {theaters.diaChi}
                      </p>

                      <p className="font-medium leading-[1.75] text-left text-yellow-500 text-[12px] lowercase mb-[5px]">
                        [Detail]
                      </p>
                    </div>
                  }
                  key={`theaters-${index}`}
                >
                  {/* Render List Movie for each Theater */}
                  <div className="h-[720px] overflow-y-scroll">
                    {theaters.danhSachPhim?.map((movie, index) => {
                      return (
                        <Fragment key={`movie-theater-${index}`}>
                          <div className="my-2">
                            <div className="flex lg:flex-row flex-col justify-center lg:justify-start items-center">
                              <img
                                src={movie.hinhAnh}
                                alt={movie.hinhAnh}
                                className="lg:ml-[20px]"
                                width={100}
                                height={100}
                              />
                              <div className="lg:ml-5">
                                <p className="lg:text-[1.15rem] font-medium lg:leading-[22px] sm:text[1rem] sm:leading-5 text-[0.9rem] leading-3 text-center lg:text-left py-3 lg:py-0 text-white">
                                  {movie.tenPhim}
                                </p>
                                <div className="grid grid-cols-2 gap-4 mt-3">
                                  {/* Render Time Streaming */}
                                  {movie.lstLichChieuTheoPhim
                                    ?.slice(0, 4)
                                    .map((onStream, index) => {
                                      return (
                                        <div className="text-white bg-showtime border-solid border-0 rounded-sm sm:p-2 p-1">
                                          <Link
                                            to={`/booking/${onStream.maLichChieu}`}
                                            key={`onStream-${index}`}
                                            style={{ textDecoration: "none" }}
                                          >
                                            {moment(
                                              onStream.ngayChieuGioChieu
                                            ).format("hh:mm A")}
                                          </Link>
                                        </div>
                                      );
                                    })}
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr
                            className="w-full"
                            style={{
                              color: "rgb(121, 147, 195)",
                            }}
                          />
                        </Fragment>
                      );
                    })}
                  </div>
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };

  return (
    <Tabs
      id="showtimes"
      tabPosition="left"
      className="h-[720px] w-full"
      style={{
        border: "1px solid rgb(121, 147, 195)",
      }}
    >
      {renderTheaterClusters()}
    </Tabs>
  );
}
