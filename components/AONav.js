"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AONav = void 0;
const react_1 = require("react");
const material_1 = require("@mui/material");
const react_router_dom_1 = require("react-router-dom");
const theme_1 = require("../assets/theme");
const ModalBase_1 = require("../components/ModalBase");
const AONav = ({ data }) => {
    const [isAboutOpen, setIsAboutOpen] = (0, react_1.useState)(false);
    const handleClose = () => {
        setIsAboutOpen(false);
    };
    return (<material_1.Box sx={theme_1.navSx.container}>
      <ModalBase_1.ModalBase open={isAboutOpen} handleClose={handleClose} text={"Nav"}/>
      <material_1.Box sx={theme_1.navSx.text}>
        <material_1.Box sx={theme_1.navSx.text.author}>{data.author}</material_1.Box>
        <material_1.Divider orientation="vertical" flexItem sx={{ color: theme_1.palette.aoDivider, mx: "1vw" }}/>
        <material_1.Box sx={theme_1.navSx.text.id}>{data.id}</material_1.Box>
      </material_1.Box>
      <material_1.Button disableRipple sx={{ mt: "0.5vw" }} onClick={() => setIsAboutOpen(true)} variant="text" color={"inherit"}>
        ?
      </material_1.Button>
      <material_1.Box>
        <react_router_dom_1.Link to="/ao" style={theme_1.logoSx.nav} state={{ from: "home" }}>
          ꜵ
        </react_router_dom_1.Link>
      </material_1.Box>
    </material_1.Box>);
};
exports.AONav = AONav;
