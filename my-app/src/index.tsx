import "./index.css";
import "@fontsource/noto-sans";
import "@fontsource/noto-serif";
import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, Box } from "@mui/material";
import { ModalButton, MainLogo, ModalBase, AOGrid } from "./components/index";
import aotheme, { homeSx } from "./assets/theme";

const Home = () => {
  const axios = require("axios").default;
  const [sessionUserId, setSessionUserId] = useState<string>();
  const [open, setOpen] = useState<Boolean>(true);
  const [modalType, setModalType] = useState<string>("Login");

  useEffect(() => {
    if (!sessionUserId) {
      axios
        .get(`http://localhost:5000/login`)
        .then((data: any) => setSessionUserId(data.data))
        .catch(function (error: any) {
          console.log("error");
        });
    }
  }, [axios, sessionUserId]);

  const handleOpen = (text: string) => {
    setModalType(text);
  };

  useEffect(() => {
    modalType !== "" ? setOpen(true) : setOpen(false);
  }, [modalType]);

  const handleClose = () => {
    if (sessionUserId) {
      setOpen(false);
      setModalType("");
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
          sessionUserId={sessionUserId}
          setSessionUserId={setSessionUserId}
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
