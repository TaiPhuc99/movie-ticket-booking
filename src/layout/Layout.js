import React, { useEffect } from "react";
import FooterTemplate from "../templates/FooterTemplate";
import HeaderTemplate from "../templates/HeaderTemplate";

export default function Layout({ Component }) {
  // Scroll to Top
  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <div className="overflow-hidden">
      <HeaderTemplate />
      {Component}
      <FooterTemplate />
    </div>
  );
}
