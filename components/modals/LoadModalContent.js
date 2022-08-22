"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadModalContent = void 0;
const react_router_dom_1 = require("react-router-dom");
const material_1 = require("@mui/material");
const ArrowRight_1 = __importDefault(require("@mui/icons-material/ArrowRight"));
const theme_1 = require("../../assets/theme");
const LoadModalContent = () => {
    return (<material_1.Box sx={{ mx: "2vw" }}>
      <material_1.List>
        <material_1.ListItem disablePadding>
          <react_router_dom_1.Link to="/aogrid" state={{ from: "load" }} style={Object.assign({ textDecoration: "none" }, theme_1.modalFontSx)}>
            <material_1.ListItemButton sx={{
            span: {
                fontSize: "1.25vw",
            },
            "&:hover": {
                background: "transparent",
                opacity: "0.7",
                cursor: "pointer",
            },
        }} disableRipple>
              <material_1.ListItemIcon>
                <ArrowRight_1.default />
              </material_1.ListItemIcon>
              <material_1.ListItemText primary="The Dark Side Of The Moon"/>
            </material_1.ListItemButton>
          </react_router_dom_1.Link>
        </material_1.ListItem>
      </material_1.List>
    </material_1.Box>);
};
exports.LoadModalContent = LoadModalContent;
