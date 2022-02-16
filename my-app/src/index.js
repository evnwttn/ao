import React from "react";
import ReactDOM from "react-dom";
import "@fontsource/noto-sans";
import "./index.css";
import { useState } from "react";
import { TextButton } from "./components/TextButton";

let Home = () => {
  let [showModal, setShowModal] = useState(false);

  let HandleButton = (input) => {
    HandleModal(input, showModal);
    setShowModal(true);
  };

  let HandleModal = (input, showModal) => {
    let pass;
    showModal = true
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
        <TextButton text={"About"} onClick={HandleButton(text)} />
        <TextButton text={"Contact"} onClick={HandleButton(text)} />
      </div>
      <div className="center">
        <TextButton text={"New"} onClick={HandleButton(text)} />
        <h1>ꜵ</h1>
        <TextButton text={"Load"} onClick={HandleButton(text)} />
      </div>
    </>
  );
};

let AOChart = () => {
  console.log("yo");
  return null;
};

let AO = () => {
  return (
    <>
      <Home />
      <AOChart />
    </>
  );
};

ReactDOM.render(AO(), document.getElementById("root"));
