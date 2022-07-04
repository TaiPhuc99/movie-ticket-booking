/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Progress } from "antd";
import { movieDetailAction } from "../redux/actions/MovieAction";

export default function DetailMoviePage() {
  const { idMovie } = useParams();
  const { movie } = useSelector((state) => {
    return state.movieReducer;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieDetailAction(idMovie));
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${movie.hinhAnh})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        backgroundSize: "cover",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <div className="box1" style={{ paddingTop: 150 }}>
        <h1>Hello</h1>
      </div>
    </div>
  );
}
