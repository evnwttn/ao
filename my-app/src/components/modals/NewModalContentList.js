import { Box, IconButton, List, ListItem, ListItemText } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { palette } from "../../assets/theme";

export const NewModalContentList = ({ aoOutput, target }) => {
  return (
    <Box>
      {aoOutput.track !== undefined ? (
        <List sx={{ width: "100%", bgcolor: palette.aoBlack }}>
          {aoOutput.track.map((title) => (
            <ListItem
              key={title}
              secondaryAction={
                <IconButton onClick={() => console.log(title)}>
                  <ClearIcon />
                </IconButton>
              }
            >
              <ListItemText primary={`${title}`} />
            </ListItem>
          ))}
        </List>
      ) : (
        <>{null}</>
      )}
    </Box>
  );
};

// for (let i = 0; i < aoOutput.track.length; i++) {
//   if (aoOutput.track[i] === title) {
//     const toRemove = aoOutput.track[i];
//     aoOutput.track.splice(toRemove, 1);
//     setAoUpdate(aoOutput);
//     console.log({ aoUpdate });
