/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import _ from "lodash";
import React, { Fragment, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { localStorageService } from "../services/base/LocalStorageService";

export default function HeaderTemplate() {
  const { userLogin } = useSelector((state) => {
    return state.userReducer;
  });
  const navigate = useNavigate();
  // console.log(userLogin);

  // Handle Log Out User
  const handleLogOutUser = useCallback(() => {
    localStorageService.removeUserLocal();
    window.location.href = "/";
    window.location.reload();
  }, []);

  // Toggle Button Header
  const [navbarOpen, setNavbarOpen] = useState(false);
  // console.log(navbarOpen);

  // Render Account
  const renderUserLogIn = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0">
            <div className="px-3 py-1 md:py-0">
              <Link to="/sign-in">
                <button className="text-white button-color-2 px-4 py-2 mr-2 border-0 rounded-md cursor-pointer">
                  Sign In
                </button>
              </Link>
            </div>
            <div className="px-3 md:px-0">
              {" "}
              <Link to="/sign-up">
                <button className="button-color-3 px-4 py-2 rounded-md cursor-pointer border-0 text-white">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0">
            <div className="flex justify-center items-center">
              <span className="font-bold text-yellow-400 px-3 md:px-1 py-2">
                Welcome,{" "}
              </span>
              <button
                className="text-white button-color-3 p-2 rounded-full"
                onClick={() => {
                  navigate("/profile");
                }}
              >
                <span>{userLogin.taiKhoan.substr(0, 3)}</span>
              </button>
            </div>

            <button
              onClick={handleLogOutUser}
              className="px-6 py-2 rounded ml-3 bg-red-600 text-white cursor-pointer"
            >
              Log Out
            </button>
          </div>
        </Fragment>
      );
    }
  };

  return (
    <nav className="fixed flex flex-wrap items-center justify-between px-2 py-5 bg-black bg-opacity-40 mb-5 w-full z-[100]">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
          <Link to="/">
            <span className="text-red-600 text-3xl font-bold cursor-pointer">
              CINEMAX
            </span>
          </Link>
          <button
            className="text-red cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none z-100"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex md:flex-grow items-start" +
            (navbarOpen ? " flex flex-col" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col md:flex-row list-none md:ml-auto">
            <li className="nav-item font-medium">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#films"
              >
                Films
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 md:mr-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#showtimes"
              >
                Showtimes
              </a>
            </li>
          </ul>
          {renderUserLogIn()}
        </div>
      </div>
    </nav>
  );
}
