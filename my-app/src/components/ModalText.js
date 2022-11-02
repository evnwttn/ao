import { Divider, Box } from "@mui/material";
import { palette, logoSx, modalFontSx, modalBoxStyling } from "../assets/theme";
import {
  NewModalContent,
  LoadModalContent,
  AboutModalContent,
  AONavAboutContent,
  LoginModalContent,
  ContactModalContent,
} from "./modals/index";

export const ModalText = ({
  prompt,
  sessionUserId,
  setSessionUserId,
  setModalType,
}) => {
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
        {(prompt === "New" && (
          <NewModalContent sessionUserId={sessionUserId} />
        )) ||
          (prompt === "Load" && (
            <LoadModalContent sessionUserId={sessionUserId} />
          )) ||
          (prompt === "About" && <AboutModalContent />) ||
          (prompt === "Contact" && <ContactModalContent />) ||
          (prompt === "Nav" && <AONavAboutContent />) ||
          (prompt === "Login" && (
            <LoginModalContent
              sessionUserId={setSessionUserId}
              setSessionUserId={setSessionUserId}
              setModalType={setModalType}
            />
          ))}
      </Box>
    </Box>
  );
};
