import React from "react";
import "./animate.css";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function AnimateCard({ movie }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={movie.hinhAnh}
            alt={movie.hinhAnh}
            style={{ width: 280, height: 320 }}
          />
        </div>

        <div
          className="flip-card-back"
          style={{ position: "relative", backgroundColor: "rgba(0,0,0,0.9)" }}
        >
          <div style={{ position: "absolute", top: 0, left: 0 }}>
            <img
              src={movie.hinhAnh}
              alt={movie.hinhAnh}
              style={{ width: 280, height: 320 }}
            />
          </div>
          <div
            className="w-full h-full"
            style={{
              position: "absolute",
              backgroundColor: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <div className="rounded-full cursor-pointer">
                <PlayCircleOutlined style={{ fontSize: "50px" }} />
              </div>
              <div className="text-2xl mt-2 font-bold">{movie.tenPhim}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange-300 text-center cursor-pointer py-2  my-2 text-success-50 font-bold">
        <Link to={`/detail/${movie.maPhim}`}>
          <button>DETAIL</button>
        </Link>
      </div>
    </div>
  );
}
