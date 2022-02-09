import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Hello() {
  return "Hello World";
}

export default function AO() {
  return (
    <>
      <Hello />
    </>
  );
}

ReactDOM.render(AO(), document.getElementById("root"));
