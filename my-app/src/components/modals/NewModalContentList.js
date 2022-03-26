import { Box, IconButton, List, ListItem, ListItemText } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { palette } from "../../assets/theme";

// will complete when gf is done being angry about taxes
// const renderList = ({ input, target, onSubmit }) => {
//   return (
//     <List sx={{ width: "100%", bgcolor: palette.aoBlack }}>
//       {input.track.map((title) => (
//         <ListItem
//           key={title}
//           secondaryAction={
//             <IconButton onClick={() => onSubmit(title)}>
//               <ClearIcon />
//             </IconButton>
//           }
//         >
//           <ListItemText primary={`${title}`} />
//         </ListItem>
//       ))}
//     </List>
//   );
// };

export const NewModalContentList = ({ input, target, onSubmit }) => {
  return (
    <Box>
      {target === `track` ? (
        input.track !== undefined ? (
          <List sx={{ width: "100%", bgcolor: palette.aoBlack }}>
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
        input.parameter !== `` ? (
          <List sx={{ width: "100%", bgcolor: palette.aoBlack }}>
            {input.parameter.map((title) => (
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
      ) : null}
    </Box>
  );
};
