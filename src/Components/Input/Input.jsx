import React from "react";
import "./input.scss";

const Input = (props) => {
  return (
    <div className="input">
      <span>{props.text}</span>
      <input {...props} />
    </div>
  );
};

export default Input;
