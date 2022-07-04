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
              className="rounded-full"
              width="50"
              borderBottom="1px solid rgba(0,0,0,0.2)"
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
                      style={{
                        width: "300px",
                        borderBottom: "1px solid rgba(0,0,0,0.1)",
                        display: "flex flex-column",
                      }}
                    >
                      <div
                        className="text-left"
                        style={{
                          color: "#108f3e",
                          fontWeight: 500,
                          lineHeight: 1.4,
                          fontSize: "14px",
                          textTransform: "uppercase",
                        }}
                      >
                        {theaters.tenCumRap}
                      </div>
                      <p
                        style={{
                          color: "#757575",
                          fontWeight: 400,
                          fontSize: "12px",
                          lineHeight: 1.6,
                          letterSpacing: "0.0075rem",
                          textAlign: "left",
                          textTransform: "uppercase",
                        }}
                      >
                        {theaters.diaChi}
                      </p>
                      <p
                        style={{
                          fontWeight: 500,
                          lineHeight: 1.75,
                          textAlign: "left",
                          color: "#fb4226",
                          fontSize: "12px",
                          textTransform: "lowercase",
                        }}
                      >
                        [Detail]
                      </p>
                    </div>
                  }
                  key={`theaters-${index}`}
                >
                  {/* Render List Movie for each Theater */}
                  {theaters.danhSachPhim?.map((movie, index) => {
                    return (
                      <Fragment key={`movie-theater-${index}`}>
                        <div className="my-5">
                          <div style={{ display: "flex" }}>
                            <img
                              src={movie.hinhAnh}
                              alt={movie.hinhAnh}
                              width={50}
                              height={50}
                            />
                            <div className="ml-2">
                              <p
                                style={{
                                  fontSize: "1rem",
                                  fontWeight: 500,
                                  lineHeight: "22px",
                                }}
                              >
                                {movie.tenPhim}
                              </p>
                              <div className="grid grid-cols-2 gap-6">
                                {/* Render Time Streaming */}
                                {movie.lstLichChieuTheoPhim
                                  ?.slice(0, 4)
                                  .map((onStream, index) => {
                                    return (
                                      <Link
                                        to={`/detail/${movie.maPhim}`}
                                        key={`onStream-${index}`}
                                      >
                                        {moment(
                                          onStream.ngayChieuGioChieu
                                        ).format("hh:mm A")}
                                      </Link>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr style={{ width: "80%" }} />
                      </Fragment>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };

  return <Tabs tabPosition="left">{renderTheaterClusters()}</Tabs>;
}
