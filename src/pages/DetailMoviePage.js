/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Progress } from "antd";
import { Tabs } from "antd";
import { Rate } from "antd";
import { movieDetailByTheatersAction } from "../redux/actions/MovieAction";
import moment from "moment";

const { TabPane } = Tabs;

export default function DetailMoviePage() {
  const { idMovie } = useParams();
  const { movieDetail } = useSelector((state) => {
    return state.movieReducer;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieDetailByTheatersAction(idMovie));
  }, []);

  // Fetch Data Theaters & Stream Time
  const renderShowTimesByTheaters = () => {
    return movieDetail.heThongRapChieu?.map((showTimes, index) => {
      return (
        <TabPane
          tab={
            <div className="flex sm:flex-row flex-col items-center justify-center sm:w-full w-[100px]">
              <img
                src={showTimes.logo}
                alt={showTimes.logo}
                className="rounded-full sm:w-[50px] w-[40px]"
              />
              <p className="text-center text-white sm:ml-2 mt-3 uppercase sm:font-medium text-[12px]">
                {showTimes.tenHeThongRap}
              </p>
            </div>
          }
          key={`streamTime-${index}`}
        >
          <div style={{ height: 640, overflowY: "scroll" }}>
            {showTimes.cumRapChieu?.map((theaters, index) => {
              return (
                <div key={`detail-theater-${index}`}>
                  <div className="my-3">
                    <div className="flex md:flex-row md:justify-start flex-col justify-center items-center">
                      <img
                        src={theaters.hinhAnh}
                        alt={theaters.hinhAnh}
                        className="w-[120px] h-[100px] md:ml-[20px] object-cover"
                      />
                      <div className="ml-5">
                        <p className="text-[1.15rem] font-medium md:leading-[22px] text-white md:text-left text-center md:py-0 py-3">
                          {theaters.tenCumRap}
                        </p>
                        <p
                          className="text-gray-400 md:text-left text-center"
                          style={{ marginTop: 0 }}
                        >
                          {theaters.diaChi}
                        </p>
                        <div className="detail-showtimes grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 mt-3">
                          {theaters.lichChieuPhim
                            ?.slice(0, 12)
                            .map((detailShowTime, index) => {
                              return (
                                <div className="text-white bg-showtime border-solid border-0 rounded-sm p-2 justify-center items-center">
                                  <Link
                                    to={`/booking/${detailShowTime.maLichChieu}`}
                                    key={`order-showTime-${index}`}
                                    className="col-span-1 font-bold"
                                  >
                                    {moment(
                                      detailShowTime.ngayChieuGioChieu
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
                    style={{
                      width: "100%",
                      color: "rgb(121, 147, 195)",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </TabPane>
      );
    });
  };

  return (
    <div
      className="bg-cover bg-left-center bg-no-repeat min-h-screen min-w-full "
      style={{
        backgroundImage: `url(${movieDetail.hinhAnh})`,
      }}
    >
      <div className="box" style={{ paddingTop: 150 }}>
        <div className="grid grid-cols-12">
          <div className="col-span-full mx-5 md:mx-0 md:col-span-8 md:col-start-2">
            <div className="grid grid-cols-3">
              <img
                src={`${movieDetail.hinhAnh}`}
                alt={`${movieDetail.hinhAnh}`}
                className="col-span-1 w-full h-full object-cover"
              />
              <div className="col-span-2 mt-[10%] ml-[20px]">
                <p
                  className="text-sm text-bold"
                  style={{ color: "rgb(216, 74, 70)" }}
                >
                  Released:{" "}
                  {moment(movieDetail.ngayKhoiChieu).format("MM/DD/YYYY")}
                </p>
                <p className="text-2xl text-white">{movieDetail.tenPhim}</p>
                <p
                  className="mt-3 sm:text-[15px] sm:leading-[1.5rem] text-[13px] leading-5"
                  style={{
                    color: "rgb(34, 203, 191)",
                  }}
                >
                  {movieDetail.moTa}
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-full md:col-span-2 flex flex-row md:flex-col justify-center items-center md:ml-[2rem] mt-5 space-x-5">
            <p className="text-green-600 lg:text-[2.5rem] md:text-[2rem] text-[1.5rem]">
              RATING
            </p>
            <Progress
              type="circle"
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068",
              }}
              percent={movieDetail.danhGia * 10}
              format={(percent) => `${percent / 10} Score`}
            />
            <p className="text-yellow-500 text-2xl md:mt-[5%]">
              <Rate allowHalf value={movieDetail.danhGia / 2} />
            </p>
          </div>
        </div>

        <div className="my-10 px-5 py-5 mx-8 lg:mx-16 xl:mx-28">
          <Tabs
            defaultActiveKey="1"
            tabPosition="left"
            className="h-[640px] w-full"
            style={{
              border: "1px solid rgb(121, 147, 195)",
            }}
          >
            {renderShowTimesByTheaters()}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
