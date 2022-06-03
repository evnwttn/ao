import { useState } from "react";
import { AONavAboutModal } from "./modals/AONavAboutModal";
import { palette, logoSx } from "../assets/theme";
import { Button, Box } from "@mui/material";

export const AONav = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        marginTop: "1.5vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <AONavAboutModal open={open} handleClose={handleClose} />
      <Button
        disableRipple
        onClick={() => setOpen(true)}
        variant="text"
        color={"inherit"}
      >
        ?
      </Button>
      <Box
        sx={{
          ...logoSx,
          color: palette.aoBlue,
          fontSize: "2.5vw",
          mt: "-0.4vw",
        }}
      >
        ꜵ
      </Box>
    </Box>
  );
};
