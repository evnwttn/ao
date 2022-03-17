import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { palette } from "../../assets/theme";

export const NewModalContentList = () => {
  <Box>
    {aoOutput.track !== undefined ? (
      <List sx={{ width: "100%", bgcolor: palette.aoBlack }}>
        {aoOutput.track.map((value) => (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton
                onClick={() => {
                  for (let i = 0; i < aoOutput.track.length; i++) {
                    if (aoOutput.track[i] === value) {
                      const toRemove = aoOutput.track[i];
                      aoOutput.track.splice(toRemove, 1);
                      console.log(aoOutput);
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
  </Box>;
};
