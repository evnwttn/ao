import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import { AOCommentContent } from "./modals/AOCommentContent";
import { modalFontSx, modalBoxStyling, palette } from "../assets/theme";

export const AOCommentModal = ({ onChange, comment, cell }) => {
  return (
    <Box
      sx={{
        ...modalFontSx,
        ...modalBoxStyling,
      }}
    >
      <Box
        sx={{
          ...modalFontSx,
          display: "inline-flex",
          mb: 1,
        }}
      >
        <Box sx={{ pr: 1, fontWeight: "bold", color: palette.aoRed }}>
          {cell.track}
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ color: palette.aoDivider }}
        />
        <Box sx={{ pl: 1 }}>{cell.parameter}</Box>
      </Box>
      <Divider variant="middle" sx={{ color: palette.aoDivider }} />
      <AOCommentContent onChange={onChange} comment={comment} cell={cell} />
    </Box>
  );
};
