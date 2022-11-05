import React from "react";
// import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { navMenuFontSx } from "../../assets/theme";

const menuItems = [
  { id: "Home" },
  { id: "New" },
  { id: "Load" },
  { id: "Log Out" },
];

const onClick = (item: string) => {
  console.log(item);
};

export const NavMenuContent = () => {
  return (
    <Box>
      <List>
        {menuItems.map((item) => {
          return (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                onClick={() => onClick(item.id)}
                sx={navMenuFontSx}
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
