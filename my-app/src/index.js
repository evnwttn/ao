import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, Box } from "@mui/material";
import aotheme from "./assets/theme";
import "@fontsource/noto-sans";
import "@fontsource/noto-serif";
import "./index.css";
import { ModalButton } from "./components/ModalButton";
import { MainLogo } from "./components/MainLogo";

let containerStyle = {
  marginLeft: "2.5vw",
  marginRight: "2.5vw",
  marginTop: "2.5vh",
  marginBottom: "2.5vh",
};

let centerStyle = {
  display: "flex",
  paddingTop: "28vh",
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
    <Box sx={containerStyle}>
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
    </Box>
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
