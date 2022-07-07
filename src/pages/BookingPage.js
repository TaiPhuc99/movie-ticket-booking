/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  seatBookingAction,
  ticketBookingAction,
  ticketDetailAction,
} from "../redux/actions/BookingAction";
import { useParams } from "react-router-dom";
import { CloseOutlined, UserOutlined, CheckOutlined } from "@ant-design/icons";
import _ from "lodash";
import { ThongTinDatVe } from "../_core/TicketBookingModel";
import { Tabs } from "antd";
import { getUserAccountAction } from "../redux/actions/UserAction";

function SelectAndBooking() {
  const { userLogin } = useSelector((state) => {
    return state.userReducer;
  });
  // console.log(userLogin);
  const { ticketDetail, seatListChoice } = useSelector((state) => {
    return state.bookingReducer;
  });
  const dispatch = useDispatch();
  const { idShowtime } = useParams();

  // Destructure from Ticket Detail
  const { thongTinPhim, danhSachGhe } = ticketDetail;

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
      let classEmptySeat = "";

      // Check index of selected Seat, then className for empty Seat
      const indexCheckSeat = seatListChoice.findIndex((checkSeat) => {
        return checkSeat.maGhe === seat.maGhe;
      });
      if (indexCheckSeat !== -1) {
        classEmptySeat = "empty-seat";
      }

      // Check className for current User seat booking
      let classCurrentUserSeat = "";
      if (userLogin.taiKhoan === seat.taiKhoanNguoiDat) {
        classCurrentUserSeat = "currentUser-occupied-seat";
      }

      return (
        <Fragment key={`seat-${index}`}>
          <button
            className={`seat ${classVipSeat} ${classOccupiedSeat} ${classEmptySeat} ${classCurrentUserSeat} text-center`}
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
                <CloseOutlined
                  style={{ marginBottom: 7.5, fontWeight: "bold" }}
                />
              )
            ) : (
              seat.stt
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
        <div className="col-span-9">
          <div className="flex flex-col items-center mt-5">
            <div
              className="bg-black"
              style={{ width: "80%", height: 15 }}
            ></div>
            <div id="trapezoid" className="text-center">
              <p className="text-2xl mt-3 text-black">Screen</p>
            </div>
            <div>{renderSeatList()}</div>
          </div>

          <div className="overflow-x-auto my-5 container ">
            <table className="table table-zebra w-5/6 mx-auto text-center">
              {/* head */}
              <thead>
                <tr>
                  <th>Empty Seat</th>
                  <th>Checked Seat</th>
                  <th>VIP Seat</th>
                  <th>Occupied Seat</th>
                  <th>Yours' Seat</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>
                    <button className="seat text-center">
                      <CheckOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold" }}
                      />
                    </button>
                  </td>
                  <td>
                    <button className="seat empty-seat text-center">
                      <CheckOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold" }}
                      />
                    </button>
                  </td>
                  <td>
                    <button className="seat vip-seat text-center">
                      <CheckOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold" }}
                      />
                    </button>
                  </td>
                  <td>
                    <button className="seat occupied-seat text-center">
                      <CheckOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold" }}
                      />
                    </button>
                  </td>
                  <td>
                    <button className="seat currentUser-occupied-seat text-center">
                      <CheckOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold" }}
                      />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-span-3">
          <p className="text-green-400 text-center text-2xl">
            {seatListChoice
              .reduce((acc, cur, index) => {
                return (acc += cur.giaVe);
              }, 0)
              .toLocaleString()}{" "}
            VND
          </p>

          <hr style={{ width: "80%" }} />

          <p className="text-xl">{thongTinPhim.tenPhim}</p>
          <p>
            Address: {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}
          </p>
          <p>
            Showtime: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}
          </p>

          <hr style={{ width: "80%" }} />

          <div className="flex flex-row my-5">
            <div className="w-4/5">
              <span className="text-red-400 text-lg">Seats: </span>
              {_.sortBy(seatListChoice, ["stt"]).map((seat, index) => {
                return (
                  <span
                    key={`choice-seat-${index}`}
                    className="text-green-500 text-xl mr-1"
                  >
                    {seat.stt}
                  </span>
                );
              })}
            </div>
            <div className="text-right col-span-1">
              <span className="text-green-800 text-lg">
                {seatListChoice
                  .reduce((acc, cur, index) => {
                    return (acc += cur.giaVe);
                  }, 0)
                  .toLocaleString()}
              </span>
            </div>
          </div>

          <hr style={{ width: "80%" }} />

          <div className="my-5">
            <span>Email</span>
            <br />
            {userLogin.email}
          </div>
          <div className="my-5">
            <span>Phone</span>
            <br />
            {userLogin.soDT}
          </div>

          <hr style={{ width: "80%" }} />

          <div className="mb-0 h-full flex flex-col items-center">
            <div
              className="bg-green-800 text-white w-full text-center py-3 font-bold text-2xl cursor-pointer"
              onClick={() => {
                const ticketBooking = new ThongTinDatVe();
                ticketBooking.maLichChieu = idShowtime;
                ticketBooking.danhSachVe = [...seatListChoice];
                dispatch(
                  ticketBookingAction(ticketBooking, userLogin.accessToken)
                );
              }}
            >
              Dat Ve
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const { TabPane } = Tabs;
const onChange = (key) => {
  console.log(key);
};

export default function BookingPage(props) {
  return (
    <div className="p-3">
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="01 SEAT SELECT & BOOKING" key="1">
          <SelectAndBooking {...props} />
        </TabPane>
        <TabPane tab="02 RESULTS" key="2">
          <Results {...props} />
        </TabPane>
      </Tabs>
    </div>
  );
}

function Results() {
  const { userAccountInfo, userLogin } = useSelector((state) => {
    return state.userReducer;
  });
  console.log(userAccountInfo);
  // console.log(userLogin);
  const dispatch = useDispatch();

  // Fetch User Account
  useEffect(() => {
    dispatch(getUserAccountAction(userLogin.accessToken));
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            OUR BEST SERVICES
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here A List of Results You Have Already Selected
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/80x80"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Holden Caulfield
                </h2>
                <p className="text-gray-500">UI Designer</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/84x84"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Henry Letham
                </h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/88x88"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Oskar Blinde
                </h2>
                <p className="text-gray-500">Founder</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/90x90"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  John Doe
                </h2>
                <p className="text-gray-500">DevOps</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/94x94"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Martin Eden
                </h2>
                <p className="text-gray-500">Software Engineer</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/98x98"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Boris Kitua
                </h2>
                <p className="text-gray-500">UX Researcher</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/100x90"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Atticus Finch
                </h2>
                <p className="text-gray-500">QA Engineer</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/104x94"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Alper Kamu
                </h2>
                <p className="text-gray-500">System</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/108x98"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Rodrigo Monchi
                </h2>
                <p className="text-gray-500">Product Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
