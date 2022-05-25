import "./index.css";
import { React, useState, useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ModalButton } from "./components/ModalButton";
import { MainLogo } from "./components/MainLogo";
import { ModalBase } from "./components/ModalBase";
import { AOGrid } from "./components/AOGrid";
import { ThemeProvider, Box, Button } from "@mui/material";
import TableViewIcon from "@mui/icons-material/TableView";
import aotheme from "./assets/theme";
import { homeSx } from "./assets/theme";
import { sampleData } from "./assets/TestData";

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

  return (
    <Box
      sx={{
        ...homeSx.mainDiv,
      }}
    >
      <ThemeProvider theme={aotheme}>
        <Button sx={{ position: "fixed" }}>
          <Link to="/aogrid">
            <TableViewIcon />
          </Link>
        </Button>
        <ModalBase open={open} handleClose={handleClose} text={modalType} />
        <Box
          sx={{
            ...homeSx.cornerDiv,
          }}
        >
          <ModalButton text={"About"} handleOpen={(text) => handleOpen(text)} />
          <ModalButton
            text={"Contact"}
            handleOpen={(text) => handleOpen(text)}
          />
        </Box>
        <Box
          sx={{
            ...homeSx.centerDiv,
          }}
        >
          <ModalButton text={"New"} handleOpen={(text) => handleOpen(text)} />
          <MainLogo />
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
