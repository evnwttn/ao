import { Box, IconButton, List, ListItem, ListItemText } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { palette } from "../../assets/theme";

export const NewModalContentList = (list, target) => {
  return (
    console.log(target),
    (
      <Box>
        {list.list.target !== undefined ? (
          <List sx={{ width: "100%", bgcolor: palette.aoBlack }}>
            {list.list.target.map((title) => (
              <ListItem
                key={title}
                secondaryAction={
                  <IconButton
                    onClick={
                      () => console.log(target)
                      //   {
                      //   for (let i = 0; i < list.list.target.length; i++) {
                      //     if (list.list.target[i] === title) {
                      //       const toRemove = list.list.target[i];
                      //       list.list.target.splice(toRemove, 1);
                      //       console.log(list.list);
                      //     }
                      //   }
                      // }
                    }
                  >
                    <ClearIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={`${title}`} />
              </ListItem>
            ))}
          </List>
        ) : (
          console.log(":(")
        )}
      </Box>
    )
  );
};
