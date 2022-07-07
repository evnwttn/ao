import "./index.css";
import "@fontsource/noto-sans";
import "@fontsource/noto-serif";
import { useState, useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useMediaQuery } from "react-responsive";
import { ThemeProvider, Box, Divider } from "@mui/material";
import { ModalButton } from "./components/ModalButton";
import { MainLogo } from "./components/MainLogo";
import { ModalBase } from "./components/ModalBase";
import { AOGrid } from "./components/AOGrid";
import aotheme, { homeSx, palette } from "./assets/theme";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleOpen = (text) => {
    setModalType(text);
  };

  useEffect(() => {
    modalType !== "" ? setOpen(true) : setOpen(false);
  }, [modalType]);

  const handleClose = () => {
    setOpen(false);
    setModalType("");
  };

  // const screenOrientation = window.screen.orientation;
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  // const isPortrait = useMediaQuery({
  //   query: "(orientation: portrait)",
  // });

  // isTabletOrMobile && isPortrait && screenOrientation.lock("landscape-primary");

  return (
    <Box sx={homeSx.mainDiv}>
      <ThemeProvider theme={aotheme}>
        <ModalBase open={open} handleClose={handleClose} text={modalType} />
        <Box sx={homeSx.cornerDiv}>
          <ModalButton text={"About"} handleOpen={(text) => handleOpen(text)} />
          <ModalButton
            text={"Contact"}
            handleOpen={(text) => handleOpen(text)}
          />
        </Box>
        <Box sx={homeSx.centerDiv}>
          <MainLogo />
          <Divider variant="middle" sx={homeSx.centerDiv.divider} />
          <ModalButton text={"New"} handleOpen={(text) => handleOpen(text)} />
          <ModalButton text={"Load"} handleOpen={(text) => handleOpen(text)} />
        </Box>
      </ThemeProvider>
    </Box>
  );
};

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/ao" element={<Home />} />
      <Route path="/aogrid" element={<AOGrid />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
