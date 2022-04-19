import { useState } from "react";
import { palette } from "../assets/theme";

export const AOColourWheel = (cellColour) => {
  const [exportColour, updateExportColour] = useState("transparent");

  switch (cellColour) {
    case palette.aoBlue:
      toggleCellColour("transparent");
      break;
    case "transparent":
      toggleCellColour(palette.aoGrey);
      break;
    case palette.aoGrey:
      toggleCellColour(palette.aoYellow);
      break;
    case palette.aoYellow:
      toggleCellColour(palette.aoBlue);
      break;
    default:
  }
};
