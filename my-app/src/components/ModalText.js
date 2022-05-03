import { Divider, Box } from "@mui/material";
import { NewModalContent } from "./modals/NewModalContent";
import { LoadModalContent } from "./modals/LoadModalContent";
import { ContactModalContent } from "./modals/ContactModalContent";
import { AboutModalContent } from "./modals/AboutModalContent";
import { palette, logoSx, modalFontSx, modalBoxStyling } from "../assets/theme";

export const ModalText = ({ prompt }) => {
  return (
    <Box
      sx={{
        ...modalFontSx,
        ...modalBoxStyling,
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
      <Box sx={{ mt: "5vh" }}>
        {(prompt === "New" && <NewModalContent />) ||
          (prompt === "Load" && <LoadModalContent />) ||
          (prompt === "About" && <AboutModalContent />) ||
          (prompt === "Contact" && <ContactModalContent />)}
      </Box>
    </Box>
  );
};
