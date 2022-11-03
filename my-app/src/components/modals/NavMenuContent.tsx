import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { logoSx } from "../../assets/theme";

export const NavMenuContent = () => {
  return (
    <Box>
      <Link to="/ao" style={logoSx.nav} state={{ from: "home" }}>
        Home
      </Link>
    </Box>
  );
};
