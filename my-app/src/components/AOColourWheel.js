import SvgIcon from "@mui/material/SvgIcon";

const Wheel = (props) => {
  return (
    <SvgIcon sx={{ width: "10vw", height: "10vw" }} {...props}>
      <svg
        width="8vw"
        height="8vw"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin"
      >
        <path d="M21.95,13C21.449,18.053 17.185,22 12,22C6.477,22 2,17.523 2,12C2,6.815 5.947,2.551 11,2.05L11,4.062C7.023,4.568 4.009,7.99 4.009,11.999C4.009,16.384 7.615,19.995 12,20C16.013,20 19.436,16.981 19.938,13L21.951,13L21.95,13ZM21.95,11L19.938,11C19.482,7.386 16.614,4.518 13,4.062L13,2.049C17.714,2.524 21.476,6.286 21.95,11Z" />
      </svg>
    </SvgIcon>
  );
};

export const AOColourWheel = (cellColour) => {
  return <Wheel />;
};

/* <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="50" />
</svg> */
