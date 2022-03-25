import { Box, IconButton, List, ListItem, ListItemText } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { palette } from "../../assets/theme";

export const NewModalContentList = ({ input, target, onClick }) => {
  return (
    <Box>
      {target === `track` ? (
        input.track !== undefined ? (
          <List sx={{ width: "100%", bgcolor: palette.aoBlack }}>
            {input.track.map((title) => (
              <ListItem
                key={title}
                secondaryAction={
                  <IconButton onClick={() => onClick(title)}>
                    <ClearIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={`${title}`} />
              </ListItem>
            ))}
          </List>
        ) : null
      ) : target === `parameter` ? (
        input.parameter !== undefined ? (
          <List sx={{ width: "100%", bgcolor: palette.aoBlack }}>
            {input.parameter.map((title) => (
              <ListItem
                key={title}
                secondaryAction={
                  <IconButton onClick={() => onClick(title)}>
                    <ClearIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={`${title}`} />
              </ListItem>
            ))}
          </List>
        ) : null
      ) : null}
    </Box>
  );
};
