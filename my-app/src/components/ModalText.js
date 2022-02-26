import { Divider, Box } from "@mui/material";
import { NewModal } from "./NewModal";
import { LoadModal } from "./LoadModal";
import { AboutModal } from "./AboutModal";
import { ContactModal } from "./ContactModal";
import { aoWhite, aoRed, aoGrey, aoDivider } from "../assets/theme";

const style = {
  textTransform: "uppercase",
  fontSize: "1vw",
  letterSpacing: "0.08vw",
  textAlign: "center",
  position: "absolute",
  top: "50vh",
  left: "50vw",
  transform: "translate(-50%, -50%)",
  width: "33vw",
  bgcolor: aoGrey,
  boxShadow: "0px 0px 50pt rbg(0 0 0 / 0.16)",
  p: 4,
};

export const ModalText = ({ prompt }) => {
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
        {prompt === "New" ? (
          <NewModal />
        ) : prompt === "Load" ? (
          <LoadModal />
        ) : prompt === "About" ? (
          <AboutModal />
        ) : prompt === "Contact" ? (
          <ContactModal />
        ) : null}
      </div>
    </Box>
  );
};
