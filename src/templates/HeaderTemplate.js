/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

export default function HeaderTemplate(props) {
  return (
    <header className="fixed p-4 bg-white bg-opacity-20 text-white w-full z-[100]">
      <div className="px-8 container flex justify-between h-12 mx-auto">
        <Link to="/">
          <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
            CINEMAX
          </h1>
        </Link>

        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <Link
              to="/"
              className="flex items-center px-4 -mb-1 active:border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400 "
            >
              Showtimes
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/theater"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Theater Cluster
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/news"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              News{" "}
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/contact"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div>
          <Link to="/sign-in">
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to="/sign-up">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>

        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
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
    </header>
  );
}
