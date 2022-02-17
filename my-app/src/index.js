import React from "react";
import ReactDOM from "react-dom";
import "@fontsource/noto-sans";
import "./index.css";
import { useState } from "react";
import { TextButton } from "./components/TextButton";
import { BasicModal } from "./components/BasicModal";

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
        <br />
        <BasicModal />
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
