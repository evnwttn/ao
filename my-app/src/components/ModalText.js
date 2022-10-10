import { Divider, Box } from "@mui/material";
import {
  NewModalContent,
  LoadModalContent,
  AboutModalContent,
  AONavAboutContent,
  LoginModalContent,
  ContactModalContent,
} from "../components/modals/index";

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
          color: palette.aoBlue,
          fontSize: "3vw",
          mb: "0.25vw",
        }}
      >
        ꜵ
      </Box>
      <Divider variant="middle" sx={{ color: palette.aoDivider }} />
      <Box sx={{ mt: "5vh" }}>
        {(prompt === "New" && <NewModalContent />) ||
          (prompt === "Load" && <LoadModalContent />) ||
          (prompt === "About" && <AboutModalContent />) ||
          (prompt === "Contact" && <ContactModalContent />) ||
          (prompt === "Nav" && <AONavAboutContent />) ||
          (prompt === "Login" && <LoginModalContent />)}
      </Box>
    </Box>
  );
};
