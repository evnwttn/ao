import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, Box } from "@mui/material";
import aotheme from "./assets/theme";
import "@fontsource/noto-sans";
import "@fontsource/noto-serif";
import "./index.css";
import { ModalButton } from "./components/ModalButton";
import { MainLogo } from "./components/MainLogo";

let centerStyle = {
  display: "flex",
  paddingTop: "11.5%",
  alignContent: "center",
  flexDirection: "row",
  justifyContent: "center",
};

let Home = () => {
  return (
    <ThemeProvider theme={aotheme}>
      <div className="top-right">
        <ModalButton text={"About"} />
        <ModalButton text={"Contact"} />
      </div>
      <Box sx={centerStyle}>
        <ModalButton text={"New"} />
        <MainLogo />
        <ModalButton text={"Load"} />
      </Box>
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
