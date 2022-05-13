import { createTheme } from "@mui/material";
import commentFx from "./img/commentfx.png";
import commentFxInverse from "./img/commentfxinverse.png";

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
    MuiFilledInput: {
      styleOverrides: {
        root: { padding: "0 0 0" },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          display: "inline-flex",
          top: "6vw",
          pointerEvents: "auto",
          paddingBottom: "0px",
          paddingTop: "0px",
          paddingLeft: "0px",
          paddingRight: "0px",
          "&:hover": { opacity: "0.7" },
          "& svg": {
            padding: "0.75vw",
            paddingBottom: "1vw",
            width: "1.5vw",
            height: "1.5vw",
            color: palette.aoWhite,
          },
        },
      },
    },
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
            opacity: "0.7",
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
            opacity: "0.7",
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

export const modalBoxStyling = {
  bgcolor: palette.aoGrey,
  textAlign: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "33%",
  boxShadow: "0px 0px 50pt rbg(0 0 0 / 0.16)",
  p: "2.75vw",
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
  comment: {
    backgroundImage: `url(${commentFx})`,
    backgroundSize: "47.5%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "95% 10%",
  },
  commentInverse: {
    backgroundImage: `url(${commentFxInverse})`,
    backgroundSize: "47.5%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "95% 10%",
  },
};

// COLOUR WHEEL

export const svgShapes = {
  quarterCircle:
    "m 20 11 H 20 A 8 8 90 0 0 13 4.1 V 2 c 4.7 0.5 8.5 4.2 8.9 9 Z",
  quarterCircleOG:
    "M 6 11 h 14 A 8 8 90 0 0 13 4.1 V 2 c 4.7 0.5 8.5 4.2 8.9 9 Z",
};

export const wheelSx = {
  transparent: {
    display: "inline-flex",
    svg: {
      pointerEvents: "none",
      rect: {
        pointerEvents: "auto",
        "&:hover": {
          opacity: "0.7",
          cursor: "pointer",
        },
      },
    },
  },
  spoke: {
    display: "inline-flex",
    stroke: palette.aoWhite,
    strokeWidth: 0.2,
    filter: "drop-shadow(0 0 0.5vw rgb(0, 0, 0, 0.25))",
    svg: {
      pointerEvents: "none",
      path: {
        pointerEvents: "auto",
        "&:hover": {
          opacity: "0.7",
          cursor: "pointer",
        },
      },
    },
  },
};

export const commentSx = {
  inputProps: {
    sx: {
      backgroundColor: palette.aoWhite,
      color: palette.aoBlack,
      fontFamily: "Noto-Serif",
      letterSpacing: "0.05vw",
      lineHeight: "1.75vw",
      fontSize: "1.05vw",
      paddingTop: "1vw",
      paddingLeft: "1.5vw",
      paddingRight: "1.5vw",
      paddingBottom: "1vw",
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": { width: 0 },
    },
  },
  textField: {
    paddingTop: "0.75vw",
    width: "87%",
  },
};
