import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let button = (elm) => {
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
      <div className="top-right">{button("About")}</div>
      <div className="center">
        {button("New")}
        <h1>ꜵ</h1>
        {button("Load")}
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
