import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { navMenuFontSx, palette } from "../../assets/theme";

export const NavMenuContent = () => {
  const axios = require("axios").default;
  const menuItems = [{ id: "Home" }, { id: "Log Out" }];
  const [navHome, setNavHome] = useState<Boolean>(false);

  const onClick = (item: string) => {
    switch (item) {
      case "Home":
        setNavHome(true);

        break;
      case "Log Out":
        axios
          .post(
            `https://ao-production.up.railway.app/session/`,
            {},
            {
              withCredentials: true,
            }
          )
          .then((data: any) => setNavHome(data.data))
          .catch((error: any) => {
            console.log(error);
          });

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
                <ListItemIcon sx={{ color: palette.aoWhite }}>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary={`${item.id}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
