import { Divider, Box } from "@mui/material";
import { NewModal } from "./modals/NewModal";
import { LoadModal } from "./modals/LoadModal";
import { ContactModal } from "./modals/ContactModal";
import { AboutModal } from "./modals/AboutModal";
import { palette } from "../assets/theme";

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
  bgcolor: palette.aoGrey,
  color: palette.aoWhite,
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
          color: palette.aoRed,
          marginLeft: "0.25rem",
        }}
      >
        ꜵ
      </div>
      <Divider variant="middle" style={{ color: palette.aoDivider }} />
      <br />
      <>
        {prompt === "New" ? (
          <NewModal />
        ) : prompt === "Load" ? (
          <LoadModal />
        ) : prompt === "About" ? (
          <AboutModal />
        ) : prompt === "Contact" ? (
          <ContactModal />
        ) : null}
      </>
    </Box>
  );
};
