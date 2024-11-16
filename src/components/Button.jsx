import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Button = ({ setvalue }) => {
  const buttonNames = [
    "AC",
    "<",
    "+/-",
    "÷",
    "7",
    "8",
    "9",
    "×",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "%",
    "0",
    ".",
    "=",
  ];

  return (
    <div className="btnContainer">
      {buttonNames.map((buttonNames, idx) => (
        <button className="btn" key={idx} onClick={() => setvalue(buttonNames)}>
          {buttonNames}
        </button>
      ))}
    </div>
  );
};

export default Button;
