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
import { loadModalFontSx } from "../../assets/theme";

export const LoadModalContent = ({ userDataVerified }: any) => {
  console.log(userDataVerified);

  return (
    <Box sx={{ mx: "2vw" }}>
      <List>
        <ListItem disablePadding>
          <Link to="/aogrid" state={{ from: "load" }} style={loadModalFontSx}>
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
