"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalText = void 0;
const material_1 = require("@mui/material");
const NewModalContent_1 = require("./modals/NewModalContent");
const LoadModalContent_1 = require("./modals/LoadModalContent");
const ContactModalContent_1 = require("./modals/ContactModalContent");
const AboutModalContent_1 = require("./modals/AboutModalContent");
const AONavAboutContent_1 = require("./modals/AONavAboutContent");
const theme_1 = require("../assets/theme");
const ModalText = ({ prompt }) => {
    return (<material_1.Box sx={Object.assign(Object.assign({}, theme_1.modalFontSx), theme_1.modalBoxStyling)}>
      <material_1.Box sx={Object.assign(Object.assign({}, theme_1.logoSx), { color: theme_1.palette.aoBlue, fontSize: "3vw", mb: "0.25vw" })}>
        ꜵ
      </material_1.Box>
      <material_1.Divider variant="middle" sx={{ color: theme_1.palette.aoDivider }}/>
      <material_1.Box sx={{ mt: "5vh" }}>
        {(prompt === "New" && <NewModalContent_1.NewModalContent />) ||
            (prompt === "Load" && <LoadModalContent_1.LoadModalContent />) ||
            (prompt === "About" && <AboutModalContent_1.AboutModalContent />) ||
            (prompt === "Contact" && <ContactModalContent_1.ContactModalContent />) ||
            (prompt === "Nav" && <AONavAboutContent_1.AONavAboutContent />)}
      </material_1.Box>
    </material_1.Box>);
};
exports.ModalText = ModalText;
