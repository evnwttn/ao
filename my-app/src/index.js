import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./modal.css";
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

  let HandleModal = (input, show) => {
    let pass;
    show = true
      ? input === "New"
        ? console.log("New")
        : input === "Load"
        ? console.log("Load")
        : input === "About"
        ? console.log("About")
        : input === "Contact"
        ? console.log("Contact")
        : pass
      : pass;
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
