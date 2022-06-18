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
import { modalFontSx } from "../../assets/theme";

export const LoadModalContent = () => {
  return (
    <Box sx={{ mx: "2vw" }}>
      <List>
        <ListItem disablePadding>
          <Link
            to="/aogrid"
            state={{ from: "load" }}
            style={{ textDecoration: "none", ...modalFontSx }}
          >
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
