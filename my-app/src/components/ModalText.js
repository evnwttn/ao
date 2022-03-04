import { Divider, Box } from "@mui/material";
import { NewModalContent } from "./modals/NewModalContent";
import { LoadModalContent } from "./modals/LoadModalContent";
import { ContactModalContent } from "./modals/ContactModalContent";
import { AboutModalContent } from "./modals/AboutModalContent";
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
      <Box
        sx={{
          fontSize: "2.5rem",
          fontFamily: "Noto Serif",
          textTransform: "lowercase",
          color: palette.aoRed,
          marginLeft: "0.25rem",
        }}
      >
        ꜵ
      </Box>
      <Divider variant="middle" style={{ color: palette.aoDivider }} />
      <br />
      <>
        {prompt === "New" ? (
          <NewModalContent />
        ) : prompt === "Load" ? (
          <LoadModalContent />
        ) : prompt === "About" ? (
          <AboutModalContent />
        ) : prompt === "Contact" ? (
          <ContactModalContent />
        ) : null}
      </>
    </Box>
  );
};
