import { createTheme } from "@mui/material";
import { purple, orange, red } from "@mui/material/colors";

const primaryColor = purple[600];
const secondaryColor = orange[500];
const dangerColor = red[900];

const aotheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    tertiary: {
      main: dangerColor,
    },
    pink: {
      main: "pink",
    },
    info: {
      main: dangerColor,
    },
  },
  //   components: {
  //     MuiFab: {
  //       styleOverrides: {
  //         secondary: {
  //           "&:hover": {
  //             color: "white",
  //           },
  //         },
  //       },
  //     },
  //   },
});

export default aotheme;
