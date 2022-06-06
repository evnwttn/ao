import { useState } from "react";
import { Link } from "react-router-dom";
import { AONavAboutModal } from "./modals/AONavAboutModal";
import { logoSx } from "../assets/theme";
import { Button, Box } from "@mui/material";

export const AONav = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        marginTop: "0.5vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <AONavAboutModal open={open} handleClose={handleClose} />
      <Button
        disableRipple
        sx={{ mt: "0.5vw" }}
        onClick={() => setOpen(true)}
        variant="text"
        color={"inherit"}
      >
        ?
      </Button>
      <Box sx={{}}>
        <Link
          to="/ao"
          style={{
            ...logoSx.nav,
          }}
          state={{ from: "home" }}
        >
          ꜵ
        </Link>
      </Box>
    </Box>
  );
};
