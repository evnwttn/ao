import { useState } from "react";
import { Link } from "react-router-dom";
import { logoSx } from "../assets/theme";
import { ModalBase } from "../components/ModalBase";
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
      <ModalBase open={open} handleClose={handleClose} text={"Nav"} />
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
