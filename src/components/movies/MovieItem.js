/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default function MovieItem({ movie }) {
  return (
    <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
      <div
        style={{
          background: `url(${movie.hinhAnh})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <img
          className="opacity-0 w-full"
          style={{ height: "300px" }}
          src={movie.hinhAnh}
          alt={movie.hinhAnh}
        />
      </div>

      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 h-8">
        {movie.tenPhim}
      </h1>
      <p className="leading-relaxed mb-3 h-8">
        {movie.moTa.length > 120 ? (
          <span>{movie.moTa.slice(0, 120)}...</span>
        ) : (
          <span>{movie.moTa}</span>
        )}
      </p>
      <p className="leading-relaxed mb-3">
        Streaming:{" "}
        <span>{moment(movie.ngayKhoiChieu).format("DD/MM/YYYY")}</span>
      </p>
      <Link
        to={`/detail/${movie.maPhim}`}
        className="text-indigo-500 inline-flex items-center"
      >
        <button className="rounded bg-orange-600 text-white h-10 w-24 hover:bg-opacity-80 hover:text-white">
          DETAIL
        </button>
      </Link>
    </div>
  );
}
