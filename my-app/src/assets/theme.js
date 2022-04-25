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
    MuiPopover: {
      styleOverrides: {
        paper: {
          background: "none",
          color: "none",
          boxShadow: "none",
          minHeight: "none",
          minWidth: "none",
          maxheight: "none",
          maxWidth: "none",
          borderRadius: "none",
          pointerEvents: "none",
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: palette.aoRed,
          fontFamily: "Noto Sans",
          fontSize: "0.8vw",
          letterSpacing: "0.125vw",
          textTransform: "uppercase",
          fontWeight: "800",
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
          display: "inline-flex",
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

// LOGO

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

// MODALS

export const modalFontSx = {
  fontFamily: "Noto Sans",
  fontSize: "0.8vw",
  letterSpacing: "0.125vw",
  textTransform: "uppercase",
  fontWeight: "400",
  lineHeight: "1.66",
  color: palette.aoWhite,
};

export const modalCenteredSx = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

// AO GRID

export const gridDomSx = {
  display: "flex",
  fontFamily: "Noto Sans",
  fontSize: "0.8vw",
  letterSpacing: "0.125vw",
  textAlign: "center",
  textTransform: "uppercase",
  flexGrow: 1,
};

export const cellSx = {
  paraCell: {
    color: palette.aoWhite,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 1,
    padding: 1,
    marginBottom: 1,
  },
  titleCell: {
    color: palette.aoYellow,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 1,
    mx: 1,
  },
  cell: {
    my: "0.75vh",
    padding: "3.5vh",
  },
};

// COLOUR WHEEL

export const spokeSx = {
  display: "inline-flex",
  svg: {
    pointerEvents: "none",
    filter: "drop-shadow(0 0 2.5vw #000000)",
    path: {
      pointerEvents: "auto",
      "&:hover": {
        filter: "drop-shadow(0 0 5vw #000000)",
        opacity: "0.6",
        cursor: "pointer",
      },
    },
  },
};
