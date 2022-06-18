import { useState } from "react";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { logoSx, navSx } from "../assets/theme";
import { ModalBase } from "../components/ModalBase";

export const AONav = ({ data }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  console.log(data);

  return (
    <Box sx={{ ...navSx.container }}>
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
