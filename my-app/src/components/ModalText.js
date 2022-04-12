import { Divider, Box } from "@mui/material";
import { NewModalContent } from "./modals/NewModalContent";
import { LoadModalContent } from "./modals/LoadModalContent";
import { ContactModalContent } from "./modals/ContactModalContent";
import { AboutModalContent } from "./modals/AboutModalContent";
import { palette, logoSx, modalFontSx } from "../assets/theme";

export const ModalText = ({ prompt }) => {
  return (
    <Box
      sx={{
        ...modalFontSx,
        bgcolor: palette.aoGrey,
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "33%",
        boxShadow: "0px 0px 50pt rbg(0 0 0 / 0.16)",
        p: "2.75vw",
      }}
    >
      <Box
        sx={{
          ...logoSx,
          color: palette.aoRed,
          fontSize: "3vw",
          mb: 0.5,
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
