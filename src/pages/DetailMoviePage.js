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
  // console.log(movieDetail);
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
            <div className="flex flex-row items-center justify-center">
              <img
                src={showTimes.logo}
                alt={showTimes.logo}
                width="50"
                className="rounded-full "
              />
              <p
                className="text-center ml-2"
                style={{ textTransform: "uppercase", fontWeight: "bold" }}
              >
                {showTimes.tenHeThongRap}
              </p>
            </div>
          }
          key={`streamTime-${index}`}
        >
          {showTimes.cumRapChieu?.map((theaters, index) => {
            return (
              <div className="mt-5" key={`detail-theater-${index}`}>
                <div className="flex flex-row">
                  <img
                    src={theaters.hinhAnh}
                    alt={theaters.hinhAnh}
                    style={{ width: 60, height: 60 }}
                  />
                  <div className="ml-2">
                    <p
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        lineHeight: "1",
                        textTransform: "uppercase",
                      }}
                    >
                      {theaters.tenCumRap}
                    </p>
                    <p className="text-gray-400" style={{ marginTop: 0 }}>
                      {theaters.diaChi}
                    </p>
                  </div>
                </div>
                <div className="detail-showtimes grid grid-cols-4 mt-3 border-b-2">
                  {theaters.lichChieuPhim
                    ?.slice(0, 12)
                    .map((detailShowTime, index) => {
                      return (
                        <div className="w-16 h-6 bg-gray-800 mb-1 text-white hover:bg-green-700 hover:text-white flex justify-center items-center rounded">
                          <Link
                            to={`/booking/${detailShowTime.maLichChieu}`}
                            key={`order-showTime-${index}`}
                            className="col-span-1 font-bold"
                          >
                            {moment(detailShowTime.ngayChieuGioChieu).format(
                              "hh:mm A"
                            )}
                          </Link>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </TabPane>
      );
    });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${movieDetail.hinhAnh})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        backgroundSize: "cover",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <div className="box1" style={{ paddingTop: 150 }}>
        <div className="grid grid-cols-12">
          <div className="col-span-8 col-start-2">
            <div className="grid grid-cols-3">
              <img
                src={`${movieDetail.hinhAnh}`}
                alt={`${movieDetail.hinhAnh}`}
                className="col-span-1"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                className="col-span-2 "
                style={{ marginTop: "10%", marginLeft: "20px" }}
              >
                <p className="text-sm text-green-600 text-bold">
                  Released:{" "}
                  {moment(movieDetail.ngayKhoiChieu).format("MM/DD/YYYY")}
                </p>
                <p className="text-2xl text-red-600">{movieDetail.tenPhim}</p>
                <p
                  className="mt-3"
                  style={{ fontSize: "15px", lineHeight: "1.5rem" }}
                >
                  {movieDetail.moTa}
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-span-2 flex flex-col justify-center items-center"
            style={{ marginLeft: "2rem" }}
          >
            <p className="text-green-600" style={{ fontSize: "3rem" }}>
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
            <p className="text-yellow-500 text-2xl" style={{ marginTop: "5%" }}>
              <Rate allowHalf value={movieDetail.danhGia / 2} />
            </p>
          </div>
        </div>

        <div className="mt-10 ml-32 w-2/3 container px-5 py-5">
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Show Times" key="1" style={{ minHeight: 300 }}>
              <div>
                <Tabs tabPosition={"left"} className="bg-white">
                  {renderShowTimesByTheaters()}
                </Tabs>
              </div>
            </TabPane>
            <TabPane tab="Information" key="2" style={{ minHeight: 300 }}>
              Information
            </TabPane>
            <TabPane tab="Evaluation" key="3" style={{ minHeight: 300 }}>
              Evaluation
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
