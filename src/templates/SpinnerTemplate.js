import React from "react";
import { useSelector } from "react-redux";
import { HashLoader } from "react-spinners";

export default function SpinnerTemplate() {
  let { loading } = useSelector((state) => {
    return state.spinnerReducer;
  });

  return loading ? (
    <div className="fixed w-screen h-screen top-0 left-0 bg-gray-800 z-50 flex justify-center items-center">
      <HashLoader color="#FF9F29" loading={true} size={50} />
    </div>
  ) : (
    <></>
  );
}
