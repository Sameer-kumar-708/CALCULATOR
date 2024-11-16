import React from "react";

const Input = ({ value }) => {
  return (
    <div>
      <input type="text" className="input" value={value} />
    </div>
  );
};

export default Input;
