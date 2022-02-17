import React from "react";
import ReactDOM from "react-dom";
import "@fontsource/noto-sans";
import "./index.css";
import { useState } from "react";
import { TextButton } from "./components/TextButton";
import ModalUnstyled from "@mui/base/ModalUnstyled";

let Home = () => {
  return (
    <>
      <div className="top-right">
        <TextButton text={"About"} />
        <TextButton text={"Contact"} />
      </div>
      <div className="center">
        <TextButton text={"New"} />
        <h1>ꜵ</h1>
        <TextButton text={"Load"} />
      </div>
    </>
  );
};

let AOChart = () => {
  return null;
};

let AO = () => {
  return (
    <>
      <Home />
      <AOChart />
    </>
  );
};

ReactDOM.render(AO(), document.getElementById("root"));
