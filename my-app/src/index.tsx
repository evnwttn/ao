import "./index.css";
import "@fontsource/noto-sans";
import "@fontsource/noto-serif";
import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, Box } from "@mui/material";
import { ModalButton, MainLogo, ModalBase, AOGrid } from "./components/index";
import aotheme, { homeSx } from "./assets/theme";
import { UserLoginData } from "./types";

const Home = () => {
  const [userDataVerified, setUserDataVerified] = useState<UserLoginData>();
  const [open, setOpen] = useState<Boolean>(true);
  const [modalType, setModalType] = useState<string>("Login");

  const handleOpen = (text: string) => {
    setModalType(text);
  };

  useEffect(() => {
    modalType !== "" ? setOpen(true) : setOpen(false);
  }, [modalType]);

  const handleClose = () => {
    if (userDataVerified) {
      setOpen(false);
      setModalType("");
      console.log(document.cookie);
    }
  };

  return (
    <Box sx={homeSx.mainDiv}>
      <ThemeProvider theme={aotheme}>
        <ModalBase
          open={open}
          handleClose={handleClose}
          text={modalType}
          setModalType={setModalType}
          userDataVerified={userDataVerified}
          setUserDataVerified={setUserDataVerified}
        />
        <Box sx={homeSx.cornerDiv}>
          <ModalButton
            text={"About"}
            handleOpen={(text: string) => handleOpen(text)}
          />
          <ModalButton
            text={"Contact"}
            handleOpen={(text: string) => handleOpen(text)}
          />
        </Box>
        <Box sx={homeSx.centerDiv}>
          <MainLogo />
          <ModalButton
            text={"New"}
            handleOpen={(text: string) => handleOpen(text)}
          />
          <ModalButton
            text={"Load"}
            handleOpen={(text: string) => handleOpen(text)}
          />
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
