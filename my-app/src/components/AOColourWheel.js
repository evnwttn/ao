import SvgIcon from "@mui/material/SvgIcon";

const Wheel = (props) => {
  return (
    <SvgIcon {...props}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" />
      </svg>
    </SvgIcon>
  );
};

export const AOColourWheel = (cellColour) => {
  return (
    <>
      <Wheel
        sx={{
          color: cellColour.cellColour,
          background: "green",
          height: "100%",
        }}
      />
    </>
  );
};
