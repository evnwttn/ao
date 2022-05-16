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
        width="12vw"
        fill={color}
        onClick={() => {
          handleClick(color);
        }}
        transform={transform}
        viewBox="11 -11 24 24"
      >
        <Tooltip
          PopperProps={{
            sx: {
              width: color === "transparent" && "9vw",
              height: color === "transparent" && "1vw",
              marginLeft: color === "transparent" && "-5vw !important",
              marginBottom: color === "transparent" && "2.5vw !important",
            },
          }}
          title={toolTip}
          placement={placement}
        >
          {color === "transparent" ? (
            <rect width="24" height="24" />
          ) : (
            <path d={svgShapes.quarterCircle} />
          )}
        </Tooltip>
      </svg>
    </Box>
  );
};
