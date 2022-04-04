import { React, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, Box } from "@mui/material";
import aotheme from "./assets/theme";
import "@fontsource/noto-sans";
import "@fontsource/noto-serif";
import "./index.css";
import { ModalButton } from "./components/ModalButton";
import { MainLogo } from "./components/MainLogo";
import { ModalBase } from "./components/ModalBase";
import { AOGrid } from "./components/AOGrid";

let Home = () => {
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
        marginLeft: "2.5vw",
        marginRight: "2.5vw",
        marginTop: "2.5vh",
        marginBottom: "2.5vh",
      }}
    >
      <ThemeProvider theme={aotheme}>
        <ModalBase open={open} handleClose={handleClose} text={modalType} />

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
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
            display: "flex",
            paddingTop: "28vh",
            alignContent: "center",
            flexDirection: "row",
            justifyContent: "center",
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

let AO = () => {
  return (
    <>
      <Home />
      <AOGrid />
    </>
  );
};

ReactDOM.render(AO(), document.getElementById("root"));
