/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  seatBookingAction,
  ticketBookingAction,
  ticketDetailAction,
} from "../redux/actions/BookingAction";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserOutlined, RobotOutlined, HomeOutlined } from "@ant-design/icons";
import _ from "lodash";
import { ThongTinDatVe } from "../_core/TicketBookingModel";
import { Tabs } from "antd";
import { getUserAccountAction } from "../redux/actions/UserAction";
import moment from "moment";
import { CHANGE_TAB } from "../redux/constants/BookingConstant";
import { localStorageService } from "../services/base/LocalStorageService";
import { useState } from "react";

const { TabPane } = Tabs;

export default function BookingPage(props) {
  const { tabActive } = useSelector((state) => {
    return state.bookingReducer;
  });
  const { userAccountInfo, userLogin } = useSelector((state) => {
    return state.userReducer;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Unmount Component & Defaul key '1'
  useEffect(() => {
    return () => {
      dispatch({
        type: CHANGE_TAB,
        payload: "1",
      });
    };
  }, []);

  // Render Account User on Tabs
  const operations = (
    <Fragment>
      {!_.isEmpty(userLogin) ? (
        <div className="account-booking">
          <button
            onClick={() => {
              navigate("/profile");
            }}
            className="rounded-full text-white button-color-3 p-1 sm:p-2"
          >
            <span>{userLogin.taiKhoan.substr(0, 3)}</span>
          </button>
          <button
            className="px-3 sm:px-6 py-1 sm:py-2 rounded ml-2 sm:ml-3 bg-red-600 text-white cursor-pointer hover:bg-red-600/50 hover:text-white"
            onClick={() => {
              localStorageService.removeUserLocal();
              window.location.href = "/";
              window.location.reload();
            }}
          >
            Log Out
          </button>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );

  // Handle Click Change Tab
  const handleclickChangeTab = (key) => {
    dispatch({
      type: CHANGE_TAB,
      payload: key,
    });
  };

  return (
    <div className="p-3">
      <Tabs
        defaultActiveKey="1"
        activeKey={tabActive.toString()}
        onChange={handleclickChangeTab}
        tabBarExtraContent={operations}
      >
        <TabPane tab="SEAT SELECT & BOOKING" key="1">
          <SelectAndBooking {...props} />
        </TabPane>

        <TabPane tab="RESULTS" key="2">
          <Results {...props} />
        </TabPane>
        <TabPane
          tab={
            <Link to={"/"}>
              <HomeOutlined style={{ marginLeft: 10, fontSize: 25 }} />
            </Link>
          }
          key="3"
        ></TabPane>
      </Tabs>
    </div>
  );
}

function SelectAndBooking() {
  const { userAccountInfo, userLogin } = useSelector((state) => {
    return state.userReducer;
  });
  const { ticketDetail, seatListChoice } = useSelector((state) => {
    return state.bookingReducer;
  });
  const dispatch = useDispatch();
  const { idShowtime } = useParams();

  // Destructure from Ticket Detail
  const { thongTinPhim, danhSachGhe } = ticketDetail;
  // console.log(thongTinPhim);

  // Fetch API
  useEffect(() => {
    dispatch(ticketDetailAction(idShowtime));
  }, []);

  // Render List Seats
  const renderSeatList = () => {
    return danhSachGhe.map((seat, index) => {
      // Check ClassName for each type of seat
      let classVipSeat = seat.loaiGhe === "Vip" ? "vip-seat" : "";
      let classOccupiedSeat = seat.daDat === true ? "occupied-seat" : "";
      let classSelectSeat = "";

      // Check index of selected Seat, then className for empty Seat
      const indexCheckSeat = seatListChoice.findIndex((checkSeat) => {
        return checkSeat.maGhe === seat.maGhe;
      });
      if (indexCheckSeat !== -1) {
        classSelectSeat = "select-seat";
      }

      // Check className for current User seat booking
      let classCurrentUserSeat = "";
      if (userLogin.taiKhoan === seat.taiKhoanNguoiDat) {
        classCurrentUserSeat = "currentUser-occupied-seat";
      }

      return (
        <Fragment key={`seat-${index}`}>
          <button
            className={`seat ${classVipSeat} ${classOccupiedSeat} ${classSelectSeat} ${classCurrentUserSeat} $ text-center`}
            disabled={seat.daDat}
            onClick={() => {
              dispatch(seatBookingAction(seat));
            }}
          >
            {/* Check If current User book seats or other? */}
            {seat.daDat ? (
              classCurrentUserSeat !== "" ? (
                <UserOutlined
                  style={{ marginBottom: 7.5, fontWeight: "bold" }}
                />
              ) : (
                <RobotOutlined
                  style={{
                    marginBottom: 7.5,
                    fontWeight: "bold",
                    color: "white",
                  }}
                />
              )
            ) : (
              <span className="text">{seat.stt}</span>
            )}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div className="min-h-screen mt-5">
      <div className="grid grid-cols-12">
        <div className="col-span-full xl:col-span-9">
          <div className="flex flex-col items-center">
            <div className="screen"></div>
            <div id="trapezoid" className="text-center">
              <p className="text-2xl" style={{ color: "rgb(8, 21, 72)" }}>
                Screen
              </p>
            </div>
            <div className="mt-5">{renderSeatList()}</div>
          </div>

          <div className="overflow-x-auto my-5 container mx-auto">
            <table className="table table-zebra w-5/6 mx-auto text-center">
              {/* head */}
              <thead className="text-white sm:text-[12px] text-[11px]">
                <tr>
                  <th>Empty Seat</th>
                  <th>Select Seat</th>
                  <th>VIP Seat</th>
                  <th>Occupied Seat</th>
                  <th>Yours' Seat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <button className="seat text-center"></button>
                  </td>
                  <td>
                    <button className="seat select-seat text-center"></button>
                  </td>
                  <td>
                    <button className="seat vip-seat text-center"></button>
                  </td>
                  <td>
                    <button className="seat occupied-seat text-center">
                      <RobotOutlined
                        style={{
                          marginBottom: 7.5,
                          fontWeight: "bold",
                          color: "rgb(8, 21, 72)",
                        }}
                      />
                    </button>
                  </td>
                  <td>
                    <button className="seat currentUser-occupied-seat text-center">
                      <UserOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold" }}
                      />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div
          className="col-span-full mt-10 xl:mt-0 xl:col-span-3 w-2/3 md:w-1/2 xl:w-full mx-auto flex flex-col text-white shadow-sm shadow-gray-300 carousel-bg"
          style={{ border: "1px solid rgb(121, 147, 195)" }}
        >
          <p className="text-yellow-400 text-center text-2xl px-3 py-4 border-b-[1px] border-gray-600">
            {seatListChoice
              .reduce((acc, cur, index) => {
                return (acc += cur.giaVe);
              }, 0)
              .toLocaleString()}{" "}
            VND
          </p>

          <div className="flex justify-between items-center border-b-[1px] border-gray-600 py-3 px-1">
            <p className="font-bold">Theater: </p>
            <p className="text-sm text-2 overflow-hidden text-ellipsis w-2/3 text-right">
              {thongTinPhim.tenCumRap}
            </p>
          </div>

          <div className="flex justify-between items-center border-b-[1px] border-gray-600 py-3 px-1">
            <p className="font-bold">Address: </p>
            <p className="text-sm text-2 overflow-hidden text-ellipsis w-2/3 text-right">
              {thongTinPhim.diaChi}
            </p>
          </div>

          <div className="flex justify-between items-center border-b-[1px] border-gray-600 py-3 px-1">
            <p className="font-bold">Room: </p>
            <p className="text-sm text-2 overflow-hidden text-ellipsis w-2/3 text-right">
              {thongTinPhim.tenRap}
            </p>
          </div>

          <div className="flex justify-between items-center border-b-[1px] border-gray-600 py-3 px-1">
            <p className="font-bold">Showtime: </p>
            <p className="text-sm text-3 overflow-hidden text-ellipsis w-2/3 font-bold text-right">
              {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}
            </p>
          </div>

          <div className="flex justify-between items-center border-b-[1px] border-gray-600 py-3 px-1">
            <p className="font-bold">Movie: </p>
            <p className="text-sm text-2 overflow-hidden text-ellipsis w-2/3 text-right">
              {thongTinPhim.tenPhim}
            </p>
          </div>

          <div className="flex justify-between items-center border-b-[1px] border-gray-600 py-3 px-1">
            <p className="font-bold">Seats: </p>
            <div className="flex flex-wrap justify-end text-ellipsis w-2/3 text-md font-medium text-center text-green-500">
              {_.sortBy(seatListChoice, ["stt"]).map((seat, index) => {
                return <p key={`choice-seat-${index}`}>{`[${seat.stt}]`}</p>;
              })}
            </div>
          </div>

          <div className="flex justify-between items-center border-b-[1px] border-gray-600 py-3 px-1">
            <p className="font-bold">Email: </p>
            <p className="text-sm text-2 overflow-hidden text-ellipsis w-2/3 text-right">
              {userAccountInfo.email}
            </p>
          </div>
          <div className="flex justify-between items-center border-b-[1px] border-gray-600 py-3 px-1">
            <p className="font-bold">Phone: </p>
            <p className="text-sm text-2 overflow-hidden text-ellipsis w-2/3 text-right">
              {userAccountInfo.soDT}
            </p>
          </div>

          <div className="mb-0 h-full flex flex-col items-center justify-end">
            <div
              className="button-color-4 text-white w-full text-center py-3 font-bold text-xl sm:text-2xl cursor-pointer"
              onClick={() => {
                const ticketBooking = new ThongTinDatVe();
                ticketBooking.maLichChieu = idShowtime;
                ticketBooking.danhSachVe = [...seatListChoice];
                dispatch(ticketBookingAction(ticketBooking));
              }}
            >
              BOOKING
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Results() {
  const { userAccountInfo } = useSelector((state) => {
    return state.userReducer;
  });
  // console.log("userAccountInfo", userAccountInfo);
  const dispatch = useDispatch();

  // Fetch User Account
  useEffect(() => {
    dispatch(getUserAccountAction());
  }, []);

  // Render A List of Booking Results
  const renderBookingResults = () => {
    return userAccountInfo.thongTinDatVe?.map((ticket, index) => {
      const seats = _.first(ticket.danhSachGhe);

      return (
        <div
          className="p-2 lg:w-1/3 md:w-1/2 w-full"
          key={`get-ticket-${index}`}
        >
          <div className="h-full flex items-center border-gray-400 border px-3 py-2 rounded-lg relative">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src={ticket.hinhAnh}
            />
            <div className="flex-grow">
              <p className="text-2 text-md font-medium uppercase">
                {ticket.tenPhim}
              </p>
              <p className="text-gray-500">
                <span className="text-white font-bold">Date: </span>{" "}
                <span className="text-3">
                  {moment(ticket.ngayDat).format("MM/DD/YYYY")}
                </span>{" "}
                - <span className="text-white font-bold">Time: </span>
                <span className="text-3">
                  {moment(ticket.ngayDat).format("hh:mm A")}
                </span>
              </p>
              <p>
                <span className="text-white font-bold">Address: </span>{" "}
                <span className="text-2 text-md">{seats.tenHeThongRap}</span>
              </p>
              <p>
                <span className="text-white font-bold">Theater: </span>{" "}
                <span className="text-2 text-md">{seats.tenCumRap} </span>
              </p>
              <div className="flex space-x-1">
                <p className="text-white font-bold ">Seats: </p>
                <div className="flex flex-wrap space-x-1">
                  {ticket.danhSachGhe.map((seat, index) => {
                    return (
                      <span
                        className="text-green-500 text-md"
                        key={`selected-seat-${index}`}
                      >{` [${seat.tenGhe}] `}</span>
                    );
                  })}
                </div>
              </div>
              <div className="flex space-x-1">
                <p className="text-white font-bold">Total Price: </p>
                <p className="space-x-1 text-2 text-md font-medium">{`${(
                  ticket.giaVe * ticket.danhSachGhe.length
                ).toLocaleString()} VND`}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <p className="md:text-3xl text-2xl font-medium mb-4 text-white">
            OUR BEST SERVICES
          </p>
          <p className="md:w-2/3 mx-auto font-medium text-[15px] leading-relaxed text">
            List of Results You Have Already Selected
          </p>
        </div>

        <div className="flex flex-wrap">{renderBookingResults()}</div>
      </div>
    </section>
  );
}
