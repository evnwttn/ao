import React, { useState, useEffect } from "react";
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
import { Session } from "../../types";

export const LoadModalContent = () => {
  const axios = require("axios").default;
  const [userSessions, setUserSessions] = useState<Session[]>();

  useEffect(() => {
    axios
      .post(
        `http://localhost:5000/load/`,
        {},
        {
          withCredentials: true,
        }
      )
      .then((data: any) => setUserSessions(data.data))
      .catch(function (error: any) {
        console.log(error);
      });
  }, [axios]);

  return (
    <Box sx={{ mx: "2vw" }}>
      <List>
        {userSessions?.map((session) => {
          return (
            <ListItem key={session.sessionTitle} disablePadding>
              <Link
                to="/aogrid"
                state={{ from: "load", data: session }}
                style={loadModalFontSx}
              >
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
                  <ListItemText primary={`${session.sessionTitle}`} />
                </ListItemButton>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
