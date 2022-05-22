import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import { AOCommentContent } from "./modals/AOCommentContent";
import { modalFontSx, modalBoxStyling, palette } from "../assets/theme";

export const AOCommentModal = ({ register, handleSubmit, onSubmit, cell }) => {
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
        <Box
          sx={{
            pr: 1,
            fontSize: "0.81vw",
            fontWeight: "800",
            color: palette.aoRed,
          }}
        >
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
      <AOCommentContent
        cell={cell}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </Box>
  );
};
