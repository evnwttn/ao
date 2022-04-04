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
                      <IconButton onClick={() => console.log(value)}>
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
                    <IconButton onClick={() => console.log(value)}>
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

// export const NewModalContentList = ({ input, target, onSubmit }) => {
//   return (
//     <Box sx={{ ...modalCenteredSx, my: 1 }}>
//       {target === `track` ? (
//         input.track !== undefined ? (
//           <List sx={{ width: "85%", bgcolor: palette.aoBlack }}>
//             {input.track.map((title) => (
//               <ListItem
//                 key={title}
//                 secondaryAction={
//                   <IconButton onClick={() => onSubmit(title)}>
//                     <ClearIcon />
//                   </IconButton>
//                 }
//               >
//                 <ListItemText primary={`${title}`} />
//               </ListItem>
//             ))}
//           </List>
//         ) : null
//       ) : target === `parameter` ? (
//         input.parameter === `` || undefined ? null : (
//           <List sx={{ width: "85%", bgcolor: palette.aoBlack }}>
//             {input.parameter.map((title) => (
//               <ListItem
//                 key={title}
//                 secondaryAction={
//                   <IconButton onClick={() => onSubmit(title)}>
//                     <ClearIcon />
//                   </IconButton>
//                 }
//               >
//                 <ListItemText primary={`${title}`} />
//               </ListItem>
//             ))}
//           </List>
//         )
//       ) : // (
//       //   input.parameter !== `` && undefined ? (
//       // <List sx={{ width: "85%", bgcolor: palette.aoBlack }}>
//       //   {input.parameter.map((title) => (
//       //     <ListItem
//       //       key={title}
//       //       secondaryAction={
//       //         <IconButton onClick={() => onSubmit(title)}>
//       //           <ClearIcon />
//       //         </IconButton>
//       //       }
//       //     >
//       //       <ListItemText primary={`${title}`} />
//       //     </ListItem>
//       //   ))}
//       // </List>
//       //   ) : null
//       // )
//       null}
//     </Box>
//   );
// };
