import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let TextButton = (text) => {
  return (
    <button
      key={text}
      onClick={() => console.log("This be the" + ` ${text} ` + "button")}
    >
      {text}
    </button>
  );
};

let Home = () => {
  return (
    <>
      <div className="top-right">
        {TextButton("About")}
        {TextButton("Contact")}
      </div>
      <div className="center">
        {TextButton("New")}
        <h1>ꜵ</h1>
        {TextButton("Load")}
      </div>
    </>
  );
};

let AOChart = () => {
  console.log("yo");
  return null;
};

export default function AO() {
  return (
    <>
      <Home />
      <AOChart />
    </>
  );
}

ReactDOM.render(AO(), document.getElementById("root"));
