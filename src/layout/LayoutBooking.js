import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { localStorageService } from "../services/base/LocalStorageService";

export default function LayoutBooking({ Component }) {
  // Scroll to Top
  useEffect(() => {
    window.scroll(0, 0);
  });

  if (!localStorageService.getUserLocal()) {
    return <Navigate to="/sign-in" />;
  }
  return <div className="overflow-hidden">{Component}</div>;
}
