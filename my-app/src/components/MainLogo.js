import { Box } from "@mui/material";
import "@fontsource/noto-serif";
import { aoBlue } from "../assets/theme";

export const MainLogo = () => {
  const style = {
    color: aoBlue,
    fontFamily: "Noto-Serif",
    fontSize: "13vw",
    marginTop: "-5vh",
  };

  return (
    <>
      <Box sx={style}>ꜵ</Box>
    </>
  );
};
