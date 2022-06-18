import { useState } from "react";
import { Button, Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { logoSx, navSx, palette } from "../assets/theme";
import { ModalBase } from "../components/ModalBase";

export const AONav = ({ data }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ ...navSx.container }}>
      <ModalBase open={open} handleClose={handleClose} text={"Nav"} />
      <Box sx={{ ...navSx.text, display: "inline-flex" }}>
        <Box>{data.author}</Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ color: palette.aoDivider }}
        />
        <Box>{data.id}</Box>
      </Box>
      <Button
        disableRipple
        sx={{ mt: "0.5vw" }}
        onClick={() => setOpen(true)}
        variant="text"
        color={"inherit"}
      >
        ?
      </Button>
      <Box>
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
