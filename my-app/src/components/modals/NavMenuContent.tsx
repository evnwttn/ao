import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { logoSx } from "../../assets/theme";

const menuItems = [
  { id: "Home" },
  { id: "New" },
  { id: "Load" },
  { id: "Log Out" },
];

export const NavMenuContent = () => {
  return (
    <Box>
      <Link to="/ao" style={logoSx.nav} state={{ from: "home" }}>
        Home
      </Link>
    </Box>
  );
};
