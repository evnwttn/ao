import SvgIcon from "@mui/material/SvgIcon";
import { palette } from "../assets/theme";

const Wheel = (props) => {
  return (
    <>
      <SvgIcon
        sx={{ width: "10vw", height: "10vw", transform: "rotate(270deg)" }}
        {...props}
      >
        <svg
          width="8vw"
          height="8vw"
          color={palette.aoYellow}
          viewBox="0vw 0vw 100vw 100vw"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin"
        >
          <path d="M21.95,11L19.938,11C19.482,7.386 16.614,4.518 13,4.062L13,2.049C17.714,2.524 21.476,6.286 21.95,11Z" />
        </svg>
      </SvgIcon>
      <SvgIcon sx={{ width: "10vw", height: "10vw" }} {...props}>
        <svg
          width="8vw"
          height="8vw"
          color={palette.aoBlue}
          viewBox="0vw 0vw 100vw 100vw"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin"
        >
          <path d="M21.95,11L19.938,11C19.482,7.386 16.614,4.518 13,4.062L13,2.049C17.714,2.524 21.476,6.286 21.95,11Z" />
        </svg>
      </SvgIcon>
    </>
  );
};

export const AOColourWheel = (cellColour) => {
  return <Wheel />;
};

/* <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="50" />
</svg> */
