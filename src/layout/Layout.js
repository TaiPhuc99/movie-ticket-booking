import React from "react";
import FooterTemplate from "../templates/FooterTemplate";
import HeaderTemplate from "../templates/HeaderTemplate";

export default function Layout({ Component }) {
  return (
    <>
      <HeaderTemplate />
      {Component}
      <FooterTemplate />
    </>
  );
}
