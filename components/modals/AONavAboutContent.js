"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AONavAboutContent = void 0;
const material_1 = require("@mui/material");
const theme_1 = require("../../assets/theme");
const AONavAboutContent = () => {
    return (React.createElement(material_1.Box, { sx: theme_1.modalCenteredSx },
        "YOU MAY CLICK ON A CELL TO BEGIN.",
        React.createElement(material_1.Box, { sx: { my: 2 } },
            React.createElement("b", null, "COLOURWHEEL"),
            React.createElement(material_1.Box, { sx: {
                    mt: "0.125vw",
                    b: {
                        color: theme_1.palette.aoYellow,
                    },
                } },
                React.createElement("b", null, "The Top Left"),
                " indicades that a task is in progress."),
            React.createElement(material_1.Box, { sx: {
                    mt: "0.125vw",
                    b: {
                        color: theme_1.palette.aoBlue,
                    },
                } },
                React.createElement("b", null, "The Top Right"),
                " indicades that a task is completed."),
            React.createElement(material_1.Box, { sx: {
                    mt: "0.125vw",
                    b: {
                        textShadow: `0px 0px 10px rgb(243, 239, 224, 0.75)`,
                        color: theme_1.palette.aoBlack,
                    },
                } },
                React.createElement("b", null, "The Bottom Left"),
                " indicates that a task has been set."),
            React.createElement(material_1.Box, { sx: { mt: "0.125vw" } },
                React.createElement("b", null, "The Bottom Right"),
                " opens the comment window."))));
};
exports.AONavAboutContent = AONavAboutContent;
