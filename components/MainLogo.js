"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainLogo = void 0;
const material_1 = require("@mui/material");
const theme_1 = require("../assets/theme");
const MainLogo = () => {
    return (<material_1.Box sx={Object.assign(Object.assign({}, theme_1.logoSx), { display: "flex", alignContent: "center", justifyContent: "center", color: theme_1.palette.aoBlue, fontSize: "13vw", mt: "-5vh" })}>
      ꜵ
    </material_1.Box>);
};
exports.MainLogo = MainLogo;
