import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export const LoadModalContent = () => {
  return (
    <Box sx={{ mx: 2, width: "85%" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              "&:hover": {
                background: "transparent",
                opacity: "0.6",
                cursor: "pointer",
              },
            }}
            disableRipple
          >
            <ListItemIcon>
              <ArrowRightIcon />
            </ListItemIcon>
            <ListItemText primary="Session I" />
          </ListItemButton>
        </ListItem>
      </List>
      <Box></Box>
    </Box>
  );
};
