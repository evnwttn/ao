import { createTheme } from "@mui/material";

export const palette = {
  aoBlack: "#272727",
  aoWhite: "#F3EFE0",
  aoBlue: "#7284A8",
  aoYellow: "#F2BF80",
  aoRed: "#D93D1A",
  aoGrey: "#2D2D2D",
  aoDivider: "#707070",
};

const aotheme = createTheme({
  palette: {
    primary: {
      main: palette.aoBlack,
    },
    secondary: {
      main: palette.aoWhite,
    },
    blue: {
      main: palette.aoBlue,
    },
    yellow: {
      main: palette.aoYellow,
    },
    red: {
      main: palette.aoRed,
    },
    grey: {
      main: palette.aoGrey,
    },
    divider: {
      main: palette.aoDivider,
    },
  },
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: palette.aoRed,
          fontFamily: "Noto Sans",
          textAlign: "center",
          marginTop: 1,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: { color: palette.aoDivider },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: palette.aoWhite,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: palette.aoWhite,
          "&:hover": {
            background: "none",
            opacity: "0.6",
            cursor: "pointer",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        text: {
          color: palette.aoWhite,
          fontFamily: "Noto Sans",
          fontSize: "1.5vw",
          pointerEvents: "all",
          letterSpacing: "0.75vw",
          "&:hover": {
            background: "none",
            opacity: "0.6",
          },
        },
        textSecondary: {
          color: palette.aoRed,
        },
        textInherit: {
          fontSize: "1vw",
          letterSpacing: "0.5vw",
        },
      },
    },
  },
});

export default aotheme;

export const logoSx = {
  fontFamily: "Noto-Serif",
  textTransform: "lowercase",
  userSelect: "none",
  msUserSelect: "none",
  webkitTouchCallout: "none",
  webkitUserSelect: "none",
  khtmlUserSelectNone: "none",
  mozUserSelectNone: "none",
  msUserSelectNone: "none",
  userSelectNone: "none",
};

export const modalFontSx = {
  textTransform: "uppercase",
  fontSize: "0.75rem",
  letterSpacing: "0.03333vw",
  fontFamily: "Noto Sans",
  fontWeight: "400",
  lineHeight: "1.66",
  color: palette.aoWhite,
};

export const modalCenteredSx = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
