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
    primary: {
      main: aoBlack,
    },
    secondary: {
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
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          color: aoWhite,
          fontFamily: "Noto Sans",
          fontSize: "15.5pt",
          pointerEvents: "all",
          letterSpacing: "8pt",
          "&:hover": {
            background: "none",
          },
        },
        textSecondary: {
          color: aoRed,
        },
        textInherit: {
          fontSize: "9pt",
          letterSpacing: "5pt",
        },
      },
    },
  },
});

export default aotheme;
export { aoBlack, aoWhite, aoBlue, aoYellow, aoRed, aoGrey, aoDivider };
