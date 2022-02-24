import { Divider, Box } from "@mui/material";
import { aoWhite, aoRed, aoGrey, aoDivider } from "../assets/theme";

const style = {
  textTransform: "uppercase",
  fontSize: "0.8rem",
  letterSpacing: "0.2pt",
  textAlign: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "33%",
  bgcolor: aoGrey,
  boxShadow: "0px 0px 200px",
  p: 4,
};

export const ModalText = ({ prompt }) => {
  return (
    // for the how to do shit modal on the AOchart
    // drop an if not here to dodge the AO logo
    // & just render instructions

    <Box sx={style}>
      <div
        style={{
          fontSize: "2.5rem",
          fontFamily: "Noto Serif",
          textTransform: "lowercase",
          color: aoRed,
        }}
      >
        ꜵ
      </div>

      <Divider variant="middle" style={{ color: aoDivider }} />

      <br />
      <div style={{ fontFamily: "Noto Sans", color: aoWhite }}>
        {prompt === "New" ? (
          <>This be some new shit</>
        ) : prompt === "Load" ? (
          <>This be some contacting shit</>
        ) : prompt === "About" ? (
          <>
            A visual album management toolkit designed by &#x0026; for musicians
            to track &#x0026; monitor progress, foster collaboration, and aid in
            the smashing of goals.
            <br />
            <br />
            To begin, start a <b>new</b> project.
          </>
        ) : prompt === "Contact" ? (
          <>This be some contacting shit</>
        ) : null}
      </div>
    </Box>
  );
};
