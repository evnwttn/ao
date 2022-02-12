import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { useState } from "react";

let Home = () => {
  let [show, setModal] = useState(false);

  let TextButton = (text) => {
    return (
      <button key={text} onClick={() => HandleButton(text)}>
        {text}
      </button>
    );
  };

  let HandleButton = (input) => {
    setModal(true);
    HandleModal(input, show);
  };

  let HandleModal = (a, b) => {
    if ((b = true)) {
      if (a === "New") {
        console.log("New");
      } else if (a === "Load") {
        console.log("Load");
      } else if (a === "About") {
        console.log("About");
      } else if (a === "Contact") {
        console.log("Contact");
      }
    }
  };

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
