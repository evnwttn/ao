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
import { palette } from "../../assets/theme";

const routerLinkSx = {
  fontFamily: "Noto Sans",
  fontSize: "0.8vw",
  letterSpacing: "0.125vw",
  fontWeight: "400",
  lineHeight: "1.66",
  color: palette.aoWhite,
  textDecoration: "none",
};

export const LoadModalContent = () => {
  return (
    <Box sx={{ mx: "2vw" }}>
      <List>
        <ListItem disablePadding>
          <Link to="/aogrid" state={{ from: "load" }} style={routerLinkSx}>
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
