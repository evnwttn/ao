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
exports.AOCell = void 0;
const react_1 = __importStar(require("react"));
const react_hook_form_1 = require("react-hook-form");
const material_1 = require("@mui/material/");
const AOPopover_1 = require("./AOPopover");
const theme_1 = require("../assets/theme");
// diff highlighted cell from others
const AOCell = ({ cell, track, parameter, toggleHovered, setHoverCell, hoverCell, }) => {
    const { register, handleSubmit } = (0, react_hook_form_1.useForm)();
    const [cellColor, setCellColor] = (0, react_1.useState)(theme_1.palette.aoGrey);
    const [cellComment, setCellComment] = (0, react_1.useState)("");
    const onSubmit = (data) => setCellComment(data.comment);
    const [anchorEl, setAnchorEl] = react_1.default.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    (0, react_1.useEffect)(() => {
        const initialData = () => {
            if (track.parameters) {
                track.parameters.map((cell) => (cell.parameter === parameter && setCellColor(cell.colour)) ||
                    (cell.comment &&
                        cell.parameter === parameter &&
                        setCellComment(cell.comment)));
            }
        };
        initialData();
    }, [parameter, track.parameters]);
    (0, react_1.useEffect)(() => {
        const timer = setTimeout(() => {
            setHoverCell(undefined);
        }, 1000);
        return () => clearTimeout(timer);
    }, [toggleHovered, setHoverCell]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Grid, { item: true, sm: 1, onClick: handleClick, onMouseEnter: () => setHoverCell(cell), onMouseLeave: toggleHovered },
            react_1.default.createElement(material_1.Box, { sx: Object.assign(Object.assign(Object.assign(Object.assign({ backgroundColor: cellColor }, theme_1.cellSx.cell), { boxShadow: 
                    // triggers cell hover effects
                    (hoverCell && hoverCell.track === cell.track) ||
                        (hoverCell && hoverCell.parameter === cell.parameter)
                        ? `0 0 0.5vw 0.2vw rgb(243, 239, 224, 0.125)`
                        : ``, transition: (hoverCell && hoverCell.track === cell.track) ||
                        (hoverCell && hoverCell.parameter === cell.parameter)
                        ? "box-shadow 0.025s linear"
                        : "box-shadow 0.1s linear" }), (cellColor !== theme_1.palette.aoGrey && cellColor !== "transparent"
                    ? cellComment !== "" && theme_1.cellSx.comment
                    : cellComment !== "" && theme_1.cellSx.commentInverse)), { "&:hover": {
                        backgroundColor: cellColor === theme_1.palette.aoBlack && theme_1.palette.aoGrey,
                        opacity: "0.6",
                        cursor: "pointer",
                    } }) })),
        react_1.default.createElement(material_1.Popover, { sx: {
                backdropFilter: "blur(1.5px)",
                top: "1.6vw",
                left: "0.2vw",
            }, open: open, anchorEl: anchorEl, onClose: handleClose, anchorOrigin: {
                vertical: "center",
                horizontal: "center",
            }, transformOrigin: {
                vertical: "center",
                horizontal: "center",
            } },
            react_1.default.createElement(AOPopover_1.AOPopover, { cell: cell, cellComment: cellComment, handleClick: (color) => setCellColor(color), register: register, handleSubmit: handleSubmit, onSubmit: onSubmit }))));
};
exports.AOCell = AOCell;
