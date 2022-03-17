import React, { useState, useEffect } from "react";
import { Box, IconButton, List, ListItem, ListItemText } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { palette } from "../../assets/theme";

export const NewModalContentList = (input) => {
  return (
    <Box>
      {input.track !== undefined ? (
        <List sx={{ width: "100%", bgcolor: palette.aoBlack }}>
          {input.track.map((value) => (
            <ListItem
              key={value}
              secondaryAction={
                <IconButton
                  onClick={() => {
                    for (let i = 0; i < input.track.length; i++) {
                      if (input.track[i] === value) {
                        const toRemove = input.track[i];
                        input.track.splice(toRemove, 1);
                        console.log(input);
                      }
                    }
                  }}
                >
                  <ClearIcon />
                </IconButton>
              }
            >
              <ListItemText primary={`${value}`} />
            </ListItem>
          ))}
        </List>
      ) : (
        console.log(":(")
      )}
    </Box>
  );
};
