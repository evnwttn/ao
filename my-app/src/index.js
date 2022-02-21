import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material";
import aotheme from "./assets/theme";
import "@fontsource/noto-sans";
import "./index.css";
import { ModalButton } from "./components/ModalButton";

let Home = () => {
  return (
    <ThemeProvider theme={aotheme}>
      <div className="top-right">
        <ModalButton text={"About"} />
        <ModalButton text={"Contact"} />
      </div>
      <div className="center">
        <ModalButton text={"New"} />
        <h1>ꜵ</h1>
        <ModalButton text={"Load"} />
      </div>
    </ThemeProvider>
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
