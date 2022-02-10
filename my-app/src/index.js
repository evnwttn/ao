import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let button = (elm) => {
  if (elm === "New") {
    return (
      <button key={elm} onClick={() => console.log("This is the NEW button")}>
        {elm}
      </button>
    );
  }
  return <button>{elm}</button>;
};

let Hello = () => {
  return "Hello World";
};

export default function AO() {
  return (
    <>
      <Hello />
      {button("New")}
    </>
  );
}

ReactDOM.render(AO(), document.getElementById("root"));
