import { createTheme } from "@mui/material";
import "@fontsource/noto-sans";
import "@fontsource/noto-serif";
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
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: "Noto Sans",
          fontSize: "0.75vw",
          letterSpacing: "0.125vw",
          textTransform: "uppercase",
          backgroundColor: palette.aoBlack,
          color: palette.aoWhite,
          border: `solid 1px ${palette.aoWhite}`,
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: { padding: "0 0 0" },
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
          color: palette.aoWhite,
          fontFamily: "Noto Sans",
          fontSize: "0.8vw",
          letterSpacing: "0.125vw",
          textTransform: "uppercase",
          fontWeight: "400",
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
        outlined: {
          border: `1px solid ${palette.aoBlack}`,
          fontFamily: "Noto Sans",
          fontSize: "0.7vw",
          letterSpacing: "0.125vw",
          textTransform: "uppercase",
          fontWeight: "400",
          lineHeight: "1.66",
          color: palette.aoWhite,
          "&:hover": {
            opacity: "0.7",
          },
        },
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
          fontSize: "0.9vw",
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
  nav: {
    fontFamily: "Noto-Serif",
    textTransform: "lowercase",
    textDecoration: "none",
    color: palette.aoBlue,
    fontSize: "2.5vw",
  },
};

// HOME

export const homeSx = {
  mainDiv: {
    marginLeft: "2.5vw",
    marginRight: "2.5vw",
    marginTop: "2.5vh",
    marginBottom: "2.5vh",
  },
  cornerDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  centerDiv: {
    display: "flex",
    paddingTop: "25vh",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
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

export const circularProgressSx = {
  ml: "21vw",
  mt: "0.5vw",
  mr: "2vw",
};

export const newSessionModal = {
  text: {
    flexDirection: "row",
    "b, strong": {
      color: palette.aoBlue,
    },
  },
  field: {
    display: "inline-flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    width: "39vw",
  },
};

// AO GRID

export const gridSx = {
  dom: {
    display: "flex",
    marginTop: "0.75vw",
    marginBottom: "1.5vw",
    fontFamily: "Noto Sans",
    fontSize: "0.8vw",
    letterSpacing: "0.125vw",
    textAlign: "center",
    textTransform: "uppercase",
    flexGrow: 1,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "2.5vw",
    marginRight: "2.5vw",
  },
};

export const cellSx = {
  paraCell: {
    color: palette.aoWhite,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "2vw",
    padding: 1,
    marginBottom: "0.5vw",
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
    my: "0.4vw",
    padding: "1.75vw",
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
  topRight:
    "M 9 10 C 8.523 6.381 5.626 3.525 2 3.1 L 2 1 C 6.7 1.5 10.5 5.2 10.9 10 L 9 10 Z",
  topLeft:
    "M 10.95 2.95 C 7.331 3.427 4.475 6.324 4.05 9.95 L 1.95 9.95 C 2.45 5.25 6.15 1.45 10.95 1.05 L 10.95 2.95 Z",
  bottomRight:
    "M1.95,8.05C5.569,7.573 8.425,4.676 8.85,1.05L10.95,1.05C10.45,5.75 6.75,9.55 1.95,9.95L1.95,8.05Z",
  bottomLeft:
    "M 3.9 1 C 4.377 4.619 7.274 7.475 10.9 7.9 L 10.9 10 C 6.2 9.5 2.4 5.8 2 1 L 3.9 1 Z",
};

export const wheelSx = {
  remove: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    position: "relative",
    bottom: "0.6vw",
    left: "0.2vw",
    pointerEvents: "auto",
    svg: {
      fontSize: "1.75vw",
    },
  },
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
    strokeOpacity: 0.5,
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
    width: "29vw",
  },
};

// NAV

export const navSx = {
  container: {
    marginTop: "0.5vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    mt: "0.63vw",
    mr: "0.5vw",
    fontFamily: "Noto Sans",
    fontSize: "0.8vw",
    letterSpacing: "0.125vw",
    textTransform: "uppercase",
    fontWeight: "400",
    lineHeight: "1.66",
    display: "inline-flex",
    sessionTitle: { color: palette.aoWhite, opacity: "0.7" },
    author: { color: palette.aoWhite },
  },
};
