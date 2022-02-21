import React from "react";
import ReactDOM from "react-dom";
import "@fontsource/noto-sans";
import "./index.css";
import { ModalButton } from "./components/ModalButton";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F3EFE0",
      yellow: "#F2BF80",
      blue: "#7284A8",
      red: "#D93D1A",
      divider: "#707070",
    },
    background: {
      main: "#272727",
      modal: "#2D2D2D",
    },
  },
});

let Home = () => {
  return (
    <ThemeProvider theme={theme}>
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
