import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  const [val, setval] = useState("");

  const setvalue = (buttonNames) => {
    if (buttonNames === "AC") {
      setval("");
    } else if (buttonNames === "=") {
      let result = eval(val);
      setval(result);
    } else if (buttonNames === "<") {
      let lessValue = val.slice(0, -1);
      setval(lessValue);
    } else if (buttonNames === "÷") {
      setval(val + "/");
    } else if (buttonNames === "+/-") {
      let toggledValue = parseFloat(val) * -1;
      setval(toggledValue.toString());
    } else if (buttonNames === "%") {
      let result = eval(val);
      let percentage = (result / 100) * 100;
      setval(percentage);
    } else {
      let newResult = val + buttonNames;
      setval(newResult);
    }
  };

  return (
    <>
      {" "}
      <div className="container">
        <div className="box">
          <Input value={val} />
          <Button setvalue={setvalue} />
        </div>
      </div>
    </>
  );
};

export default App;
