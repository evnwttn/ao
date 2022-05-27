import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { AOColorWheel } from "./AOColorWheel";
import { AOCommentBase } from "./AOCommentBase";
import { wheelSx } from "../assets/theme";
import { Tooltip } from "@mui/material/";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export const AOPopover = ({
  cell,
  cellComment,
  handleClick,
  register,
  handleSubmit,
  onSubmit,
}) => {
  // POPOVER
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setSwitchValue("1");
  };

  // COMMENT SWITCH
  const [switchValue, setSwitchValue] = useState("1");

  useEffect(() => {
    switchValue !== "1" ? setOpen(true) : setOpen(false);
  }, [switchValue]);

  return (
    <Box>
      <AOCommentBase
        cell={cell}
        cellComment={cellComment}
        open={open}
        handleClose={handleClose}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
      <AOColorWheel
        handleClick={(color) => handleClick(color)}
        openComment={() => setSwitchValue("2")}
      />
      <Box
        sx={{
          ...wheelSx.remove,
        }}
      >
        <Tooltip title="Delete Task" placement="right-end">
          <HighlightOffIcon onClick={() => handleClick("transparent")} />
        </Tooltip>
      </Box>
    </Box>
  );
};
