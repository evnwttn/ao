import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// task right meow -
// button functions - relay to other functions using name key
// elm - if elm > elmfunction

let TextButton = (text) => {
  return (
    <button key={text} onClick={() => HandleButton(text)}>
      {text}
    </button>
  );
};

let HandleButton = (input) => {
  console.log("This is the" + ` ${input} ` + "button");
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
