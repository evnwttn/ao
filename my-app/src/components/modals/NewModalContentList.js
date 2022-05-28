import { useState } from "react";
import { Box, IconButton, List, ListItem, ListItemText } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { palette } from "../../assets/theme";
import { modalCenteredSx } from "../../assets/theme";

export const NewModalContentList = ({ data, input, onSubmit }) => {
  return (
    <Box sx={{ ...modalCenteredSx, my: 1 }}>
      <List sx={{ width: "85%" }}>
        {data.tracks &&
          data.tracks.map((track, number) => {
            return (
              <ListItem
                key={`${track.title}.${number}`}
                sx={{ bgcolor: palette.aoBlack }}
                secondaryAction={
                  <IconButton onClick={() => onSubmit(track)}>
                    <ClearIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={track.title} />
              </ListItem>
            );
          })}
      </List>
    </Box>
  );
};
