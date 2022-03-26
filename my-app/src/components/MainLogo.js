import { Box } from "@mui/material";
import "@fontsource/noto-serif";
import { palette } from "../assets/theme";

const style = {
  color: palette.aoBlue,
  fontFamily: "Noto-Serif",
  fontSize: "13vw",
  marginTop: "-5vh",
  userSelect: "none",
  msUserSelect: "none",
  webkitTouchCallout: "none",
  webkitUserSelect: "none",
  khtmlUserSelectNone: "none",
  mozUserSelectNone: "none",
  msUserSelectNone: "none",
  userSelectNone: "none",
};

export const MainLogo = () => {
  return (
    <>
      <Box sx={style}>ꜵ</Box>
    </>
  );
};
