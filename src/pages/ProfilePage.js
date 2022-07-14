/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import bgProfile from "../assets/profile-bg.jpg";
import { useSelector, useDispatch } from "react-redux";
import { getUserAccountAction } from "../redux/actions/UserAction";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const { userAccountInfo } = useSelector((state) => {
    return state.userReducer;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log("userLogin", userLogin);
  // console.log("userAccountInfo", userAccountInfo);

  //Fetch User Account
  useEffect(() => {
    dispatch(getUserAccountAction());
  }, []);

  return (
    <>
      <main className="profile-page">
        <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-bottom bg-cover"
            style={{
              backgroundImage: `url(${bgProfile})`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
        </section>
        <section className="relative py-16 template">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="carousel-bg lg:px-6 md:px-4 px-4">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src="https://i.picsum.photos/id/916/250/250.jpg?hmac=aWcQwdZhpNFAL87_5exUEN2VTDWF8HMBla3kTbvVCgM"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 lg:-ml-16"
                        style={{ maxWidth: "150px" }}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={() => {
                          navigate("/update-account");
                        }}
                      >
                        Update
                      </button>
                    </div>
                  </div>

                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <p className="text-xl font-bold uppercase text-yellow-500">
                          {userAccountInfo.thongTinDatVe
                            ?.reduce((acc, cur, arr) => {
                              return (acc +=
                                cur.giaVe * cur.danhSachGhe.length);
                            }, 0)
                            .toLocaleString()}{" "}
                          VND
                        </p>
                        <span className="text-sm text-2 uppercase">
                          Total Amount of Money Used
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <p className="font-serif text-green-500 text-4xl mb-4">
                    Greetings!
                  </p>
                  <div className="text-3xl font-semibold leading-normal mb-2 text-white uppercase">
                    <p>{userAccountInfo.hoTen}</p>
                  </div>
                  <div className="flex space-x-1 justify-center items-center text-sm leading-normal mt-0 mb-2  font-bold">
                    <p className="font-bold text-md text-white">Username: </p>
                    <p className="text-3 text-md font-semibold">
                      {userAccountInfo.taiKhoan}
                    </p>
                  </div>
                  <div className="flex space-x-1 justify-center items-center mb-2">
                    <p className="font-bold text-md capitalize text-white">
                      Phone:{" "}
                    </p>
                    <p className="capitalize text-3 text-md font-semibold">
                      {userAccountInfo.soDT}
                    </p>
                  </div>
                  <div className="flex space-x-1 justify-center items-center mb-2">
                    <p className="font-bold text-md capitalize text-white">
                      Email:{" "}
                    </p>
                    <p className=" text-3 text-md font-semibold">
                      {userAccountInfo.email}
                    </p>
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text">
                        Thank you for being an member with{" "}
                        <span className="text-3 font-bold text-md">
                          CINEMAX
                        </span>
                        . We always provide with high quality services and
                        consistently support for our customers. We always go
                        along with you now and in the future whenever you need
                        to feedback and support. We truthly appreciated for our
                        members because of using of our services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
