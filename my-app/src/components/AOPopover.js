import { useState, useEffect } from "react";
import { Box, Tooltip } from "@mui/material/";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { AOColorWheel } from "./AOColorWheel";
import { AOCommentBase } from "./AOCommentBase";
import { wheelSx } from "../assets/theme";

export const AOPopover = ({
  cell,
  cellComment,
  handleClick,
  register,
  handleSubmit,
  onSubmit,
}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [commentOpen, setCommentOpen] = useState("1");

  const handleClose = () => {
    setIsPopoverOpen(false);
    setCommentOpen("1");
  };

  useEffect(() => {
    commentOpen !== "1" ? setIsPopoverOpen(true) : setIsPopoverOpen(false);
  }, [commentOpen]);

  useEffect(() => {
    setIsPopoverOpen(false);
  }, [cellComment, setIsPopoverOpen]);

  return (
    <>
      <AOCommentBase
        cell={cell}
        cellComment={cellComment}
        open={isPopoverOpen}
        handleClose={handleClose}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
      <AOColorWheel
        handleClick={(color) => handleClick(color)}
        openComment={() => setCommentOpen("2")}
      />
      <Box sx={wheelSx.remove}>
        <Tooltip title="Cancel Task" placement="right-end">
          <RemoveCircleOutlineIcon onClick={() => handleClick("transparent")} />
        </Tooltip>
      </Box>
    </>
  );
};
