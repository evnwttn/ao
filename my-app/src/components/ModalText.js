import { Divider, Box } from "@mui/material";
import { palette, logoSx, modalFontSx, modalBoxStyling } from "../assets/theme";
import {
  NewModalContent,
  LoadModalContent,
  AboutModalContent,
  NavAboutContent,
  LoginModalContent,
  ContactModalContent,
  NavMenuContent,
} from "./modals/index";

export const ModalText = ({
  prompt,
  userDataVerified,
  setUserDataVerified,
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
          <NewModalContent userDataVerified={userDataVerified} />
        )) ||
          (prompt === "Load" && (
            <LoadModalContent userDataVerified={userDataVerified} />
          )) ||
          (prompt === "About" && <AboutModalContent />) ||
          (prompt === "Contact" && <ContactModalContent />) ||
          (prompt === "Nav" && <NavAboutContent />) ||
          (prompt === "Menu" && (
            <NavMenuContent userDataVerified={userDataVerified} />
          )) ||
          (prompt === "Login" && (
            <LoginModalContent
              userDataVerified={userDataVerified}
              setUserDataVerified={setUserDataVerified}
              setModalType={setModalType}
            />
          ))}
      </Box>
    </Box>
  );
};
