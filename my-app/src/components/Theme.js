import * as React from "react";
import ReactDOM from "react-dom";
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      white: "#F3EFE0",
      yellow: "#F2BF80",
      blue: "#7284A8",
      red: "#D93D1A",
    },
    secondary: {
      main: "#F2BF80",
    },
  },
});
