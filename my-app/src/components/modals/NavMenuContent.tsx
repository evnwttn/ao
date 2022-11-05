import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { navMenuFontSx } from "../../assets/theme";

export const NavMenuContent = () => {
  const menuItems = [{ id: "Home" }, { id: "Log Out" }];
  const [navHome, setNavHome] = useState<Boolean>(false);

  const onClick = (item: string) => {
    switch (item) {
      case "Home":
        // axios rebuild cookie session
        setNavHome(true);

        break;
      case "Log Out":
        // axios destroy cookie session then
        setNavHome(true);

        break;
      default:
        break;
    }
  };

  return (
    <Box>
      {navHome && <Navigate to="/ao" replace={true} />}
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
