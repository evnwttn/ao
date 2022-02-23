import { Divider, Box } from "@mui/material";
import "@fontsource/noto-sans";
import "@fontsource/noto-serif";
import { aoWhite, aoRed, aoGrey, aoDivider } from "../assets/theme";

const style = {
  textTransform: "uppercase",
  fontSize: "0.8rem",
  letterSpacing: "0.2pt",
  textAlign: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "33%",
  bgcolor: aoGrey,
  boxShadow: "0px 0px 200px",
  p: 4,
};

export const ModalText = ({ prompt }) => {
  if (prompt === "New") {
    console.log("yes");
  }
  return (
    <Box sx={style}>
      <div
        style={{
          fontSize: "2.5rem",
          fontFamily: "Noto Serif",
          textTransform: "lowercase",
          color: aoRed,
        }}
      >
        ꜵ
      </div>

      <Divider variant="middle" style={{ color: aoDivider }} />

      <br />
      <div style={{ fontFamily: "Noto Sans", color: aoWhite }}>
        {prompt === "New"
          ? "This be some new shit"
          : prompt === "Load"
          ? "This be some loading shit"
          : prompt === "About"
          ? "This be some ABOUT SHIT"
          : prompt === "Contact"
          ? "This be some CONTRACTING"
          : null}
      </div>
    </Box>
  );
};
