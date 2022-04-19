import SvgIcon from "@mui/material/SvgIcon";
import { palette } from "../assets/theme";

const Wheel = (props) => {
  return (
    <>
      {/* TOP LEFT // YELLOW */}
      <SvgIcon
        sx={{
          width: "10vw",
          height: "10vw",
          transform: "rotate(270deg)",
          transformOrigin: "150% 150%",
        }}
      >
        <svg color={palette.aoYellow} preserveAspectRatio="none">
          <path d="M21.95,11L19.938,11C19.482,7.386 16.614,4.518 13,4.062L13,2.049C17.714,2.524 21.476,6.286 21.95,11Z" />
        </svg>
      </SvgIcon>
      {/* TOP RIGHT // BLUE */}
      <SvgIcon sx={{ width: "10vw", height: "10vw" }}>
        <svg color={palette.aoBlue} preserveAspectRatio="none">
          <path d="M21.95,11L19.938,11C19.482,7.386 16.614,4.518 13,4.062L13,2.049C17.714,2.524 21.476,6.286 21.95,11Z" />
        </svg>
      </SvgIcon>
    </>
  );
};

export const AOColourWheel = (cellColour) => {
  return <Wheel />;
};
