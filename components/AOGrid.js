"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AOGrid = void 0;
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const material_1 = require("@mui/material/");
const theme_1 = __importStar(require("../assets/theme"));
const AOCell_1 = require("./AOCell");
const AONav_1 = require("./AONav");
const BlankSession_1 = require("../assets/dummydata/BlankSession");
const LoadSample_1 = require("../assets/dummydata/LoadSample");
const AOGrid = () => {
    const [gridData, setGridData] = (0, react_1.useState)(BlankSession_1.blankSession);
    const [hoverCell, setHoverCell] = (0, react_1.useState)();
    const [isHovered, setIsHovered] = (0, react_1.useState)(false);
    const toggleHovered = () => setIsHovered(!isHovered);
    const location = (0, react_router_dom_1.useLocation)();
    (0, react_1.useEffect)(() => {
        const { from, data } = location.state;
        from === "load" && setGridData(LoadSample_1.darkSideOfTheMoon);
        from === "new" && setGridData(data);
    }, [location.state]);
    return (React.createElement(material_1.Box, { sx: theme_1.gridSx.container },
        React.createElement(material_1.ThemeProvider, { theme: theme_1.default },
            React.createElement(AONav_1.AONav, { data: gridData }),
            React.createElement(material_1.Box, { sx: theme_1.gridSx.dom },
                React.createElement(material_1.Grid, { container: true },
                    React.createElement(material_1.Grid, { sx: {
                            flexFlow: "row nowrap",
                            justifyContent: "center",
                        }, container: true, spacing: "0.75vw" }, gridData.parameters.map((parameterTitle) => {
                        return (React.createElement(material_1.Grid, { item: true, sm: 1, key: parameterTitle },
                            React.createElement(material_1.Box, { sx: theme_1.cellSx.paraCell }, parameterTitle)));
                    })),
                    gridData.tracks.map((track, parameter) => {
                        return (React.createElement(material_1.Grid, { container: true, sx: {
                                display: "flex",
                                flexFlow: "row nowrap",
                                justifyContent: "center",
                            }, key: track.title, spacing: "0.75vw" }, gridData.parameters.map((parameter) => {
                            return parameter === `title` ? (React.createElement(material_1.Grid, { item: true, sm: 1, key: parameter },
                                React.createElement(material_1.Box, { sx: theme_1.cellSx.titleCell }, track.title))) : (React.createElement(AOCell_1.AOCell, { key: parameter, cell: { track, parameter }, track: track, parameter: parameter, toggleHovered: toggleHovered, setHoverCell: setHoverCell, hoverCell: hoverCell }));
                        })));
                    }))))));
};
exports.AOGrid = AOGrid;