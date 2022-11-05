import React from "react";
// import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const menuItems = [
  { id: "Home" },
  { id: "New" },
  { id: "Load" },
  { id: "Log Out" },
];

export const NavMenuContent = () => {
  return (
    <Box>
      <List>
        {menuItems.map((item) => {
          return (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                sx={{
                  span: {
                    fontSize: "1.25vw",
                  },
                  "&:hover": {
                    background: "transparent",
                    opacity: "0.7",
                    cursor: "pointer",
                  },
                }}
                disableRipple
              >
                <ListItemText primary={`${item.id}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

/* 
      <Link to="/ao" style={loadModalFontSx} state={{ from: "home" }}>
        Home
      </Link> */
