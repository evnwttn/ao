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
import SendIcon from "@mui/icons-material/Send";

export const LoadModal = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <nav aria-label="load session">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary="Session I" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary="Session II" />
            </ListItemButton>
          </ListItem>
        </List>
        <Box>
          <SendIcon sx={{ my: 0.5 }} />
        </Box>
      </nav>
    </Box>
  );
};
