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
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export const LoadModalContent = () => {
  return (
    <Box sx={{ mx: 2, width: "85%" }}>
      <List>
        <ListItem disablePadding>
          <Link to="/aogrid">
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
              <ListItemText primary="The Dark Side Of The Moon" />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};
