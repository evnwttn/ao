import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let Button = (elm) => {
  return (
    <button
      key={elm}
      onClick={() => console.log("This is the" + ` ${elm} ` + "button")}
    >
      {elm}
    </button>
  );
};

let Home = () => {
  return (
    <>
      <div className="top-right">
        {Button("About")}
        {Button("Contact")}
      </div>
      <div className="center">
        {Button("New")}
        {Button("Load")}
      </div>
    </>
  );
};

export default function AO() {
  return (
    <>
      <Home />
    </>
  );
}

ReactDOM.render(AO(), document.getElementById("root"));
