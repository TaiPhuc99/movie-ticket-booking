import React from "react";
import { Navigate } from "react-router-dom";
import { USER_LOGIN } from "../services/base/ConfigURL";

export default function LayoutBooking({ Component }) {
  if (!localStorage.getItem(USER_LOGIN)) {
    return <Navigate to="/sign-in" />;
  }
  return <div className="overflow-hidden">{Component}</div>;
}
