import { Box } from "@mui/material";
import "@fontsource/noto-serif";
import { aoBlue } from "../assets/theme";

export const MainLogo = () => {
  const style = {
    color: aoBlue,
    fontFamily: "Noto-Serif",
    fontSize: "10.8rem",
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <>
      <Box sx={style}>ꜵ</Box>
    </>
  );
};
