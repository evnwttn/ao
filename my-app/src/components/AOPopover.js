import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { AOColorWheel } from "./AOColorWheel";
import { AOCommentBase } from "./AOCommentBase";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export const AOPopover = ({
  cell,
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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HighlightOffIcon
          sx={{ pointerEvents: "auto" }}
          onClick={() => handleClick("transparent")}
        />
      </Box>
    </Box>
  );
};
