import { createTheme } from "@mui/material";

// palette
const aoBlack = "#272727";
const aoWhite = "#F3EFE0";
const aoBlue = "#7284A8";
const aoYellow = "#F2BF80";
const aoRed = "#D93D1A";

// shades
const aoGrey = "#2D2D2D";
const aoDivider = "#707070";

const aotheme = createTheme({
  palette: {
    black: {
      main: aoBlack,
    },
    white: {
      main: aoWhite,
    },
    blue: {
      main: aoBlue,
    },
    yellow: {
      main: aoYellow,
    },
    red: {
      main: aoRed,
    },
    grey: {
      main: aoGrey,
    },
    divider: {
      main: aoDivider,
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
