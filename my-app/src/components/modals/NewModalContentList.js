import { Box, IconButton, List, ListItem, ListItemText } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { palette } from "../../assets/theme";
import { modalCenteredSx } from "../../assets/theme";

export const NewModalContentList = ({ input, target, onSubmit }) => {
  return (
    <Box sx={{ ...modalCenteredSx, my: 1 }}>
      {target === `track` ? (
        input.track !== undefined ? (
          <List sx={{ width: "85%", bgcolor: palette.aoBlack }}>
            {input.track.map((title) => (
              <ListItem
                key={title}
                secondaryAction={
                  <IconButton onClick={() => onSubmit(title)}>
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
        input.parameter === `` || undefined ? null : (
          console.log(input.parameter)
        )
      ) : // (
      //   input.parameter !== `` && undefined ? (
      // <List sx={{ width: "85%", bgcolor: palette.aoBlack }}>
      //   {input.parameter.map((title) => (
      //     <ListItem
      //       key={title}
      //       secondaryAction={
      //         <IconButton onClick={() => onSubmit(title)}>
      //           <ClearIcon />
      //         </IconButton>
      //       }
      //     >
      //       <ListItemText primary={`${title}`} />
      //     </ListItem>
      //   ))}
      // </List>
      //   ) : null
      // )
      null}
    </Box>
  );
};
