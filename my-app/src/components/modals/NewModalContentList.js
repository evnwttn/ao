import { Box, IconButton, List, ListItem, ListItemText } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { palette } from "../../assets/theme";
import { modalCenteredSx } from "../../assets/theme";

export const NewModalContentList = ({ input, target, onSubmit }) => {
  return (
    <Box sx={{ ...modalCenteredSx, my: 1 }}>
      <List sx={{ width: "85%", bgcolor: palette.aoBlack }}>
        {target !== `parameter`
          ? input.track !== undefined
            ? input.track.map((value) => {
                return (
                  <ListItem
                    key={value}
                    secondaryAction={
                      <IconButton onClick={() => onSubmit(value)}>
                        <ClearIcon />
                      </IconButton>
                    }
                  >
                    <ListItemText primary={value} />
                  </ListItem>
                );
              })
            : null
          : input.parameter !== undefined
          ? input.parameter.map((value) => {
              return (
                <ListItem
                  key={value}
                  secondaryAction={
                    <IconButton onClick={() => onSubmit(value)}>
                      <ClearIcon />
                    </IconButton>
                  }
                >
                  <ListItemText primary={value} />
                </ListItem>
              );
            })
          : null}
      </List>
    </Box>
  );
};
