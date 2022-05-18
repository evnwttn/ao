import { Box } from "@mui/system";
import { wheelSx, svgShapes } from "../assets/theme";
import { Tooltip } from "@mui/material/";

export const AOSpoke = ({
  color,
  transform,
  handleClick,
  toolTip,
  placement,
}) => {
  return (
    <Box
      sx={
        color === "transparent"
          ? { ...wheelSx.transparent }
          : { ...wheelSx.spoke }
      }
    >
      <svg
        width={color === "transparent" ? "6vw" : "12vw"}
        fill={color}
        onClick={() => {
          handleClick(color);
        }}
        transform={transform}
        viewBox="11 -11 24 24"
      >
        <Tooltip
          title={toolTip}
          placement={placement}
          PopperProps={{
            sx: {
              "& .MuiTooltip-tooltip": color === "transparent" && {
                marginTop: "-3vw",
              },
            },
          }}
        >
          {color === "transparent" ? (
            <rect width="24" height="24" fill="pink" />
          ) : (
            <path d={svgShapes.quarterCircle} />
          )}
        </Tooltip>
      </svg>
    </Box>
  );
};
