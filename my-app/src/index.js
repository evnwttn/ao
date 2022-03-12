import { React, useState, useEffect, useReducer } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, Box } from "@mui/material";
import aotheme from "./assets/theme";
import "@fontsource/noto-sans";
import "@fontsource/noto-serif";
import "./index.css";
import { ModalButton } from "./components/ModalButton";
import { MainLogo } from "./components/MainLogo";
import { ModalBase } from "./components/ModalBase";

const reducer = (state, action) => {
  switch (action) {
    case "": {
      return state;
    }
    default:
      return action;
  }
};

let Home = () => {
  const [state, dispatch] = useReducer(reducer, "");
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const handleOpen = (text) => {
    dispatch(text);
    setOpen(true);
  };

  useEffect(() => {
    setModalType(state);
  }, [state]);

  const handleClose = () => setOpen(false);

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
