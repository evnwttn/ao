import { Box, IconButton, List, ListItem, ListItemText } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { palette } from "../../assets/theme";
import { modalCenteredSx } from "../../assets/theme";

export const NewModalContentList = ({ input, target, onSubmit }) => {
  return (
    <Box sx={{ ...modalCenteredSx, my: 1 }}>
      <List sx={{ width: "85%" }}>
        {target !== `parameters`
          ? input.tracks &&
            input.tracks.map((track) => {
              return (
                <ListItem
                  key={track}
                  sx={{ bgcolor: palette.aoBlack }}
                  secondaryAction={
                    <IconButton onClick={() => onSubmit(track)}>
                      <ClearIcon />
                    </IconButton>
                  }
                >
                  <ListItemText primary={track} />
                </ListItem>
              );
            })
          : input.parameters &&
            input.parameters.map((parameter) => {
              return (
                parameter !== "title" && (
                  <ListItem
                    key={parameter}
                    sx={{ bgcolor: palette.aoBlack }}
                    secondaryAction={
                      <IconButton onClick={() => onSubmit(parameter)}>
                        <ClearIcon />
                      </IconButton>
                    }
                  >
                    <ListItemText primary={parameter} />
                  </ListItem>
                )
              );
            })}
      </List>
    </Box>
  );
};
