import React from "react";
import { Box } from "@mui/system";
import { wheelSx, svgShapes } from "../assets/theme";
import { Tooltip } from "@mui/material/";

// switch comments to bottom right
// delete as icon below
// remove radio switch

export const AOSpoke = ({
  color,
  transform,
  handleClick,
  toolTip,
  placement,
}) => {
  const positionRef = React.useRef({
    x: 0,
    y: 0,
  });

  const popperRef = React.useRef(null);
  const areaRef = React.useRef(null);

  const handleMouseMove = (event) => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    if (popperRef.current != null) {
      popperRef.current.update();
    }
  };

  const transProps = {
    popperRef,
    anchorEl: {
      getBoundingClientRect: () => {
        return new DOMRect(
          positionRef.current.x,
          areaRef.current.getBoundingClientRect().y,
          -30,
          100
        );
      },
    },
  };

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
          title={toolTip}
          placement={placement}
          PopperProps={
            color === "transparent" && {
              ...transProps,
            }
          }
        >
          {color === "transparent" ? (
            <rect
              width="24"
              height="24"
              ref={areaRef}
              onMouseMove={handleMouseMove}
            />
          ) : (
            <path d={svgShapes.quarterCircle} ref={areaRef} />
          )}
        </Tooltip>
      </svg>
    </Box>
  );
};
