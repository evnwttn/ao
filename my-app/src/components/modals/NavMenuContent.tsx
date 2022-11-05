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

export const NavMenuContent = ({ userDataVerified }: any) => {
  const menuItems = [
    { id: "Home" },
    { id: "New" },
    { id: "Load" },
    { id: "Log Out" },
  ];

  const [navHome, setNavHome] = useState<Boolean>(false);

  const onClick = (item: string) => {
    setNavHome(true);
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
