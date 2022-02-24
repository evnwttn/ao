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
  paddingTop: "11%",
  alignContent: "center",
  flexDirection: "row",
  justifyContent: "center",
};

let topRightStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
};

let Home = () => {
  return (
    <ThemeProvider theme={aotheme}>
      <Box sx={topRightStyle}>
        <ModalButton text={"About"} />
        <ModalButton text={"Contact"} />
      </Box>

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
