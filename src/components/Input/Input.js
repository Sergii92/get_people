import React from "react";
import "./style.css";

const Input = ({ onChange, value, label }) => {
  return (
    <div className="filter">
      <label>{label}:</label>
      <input type="text" onChange={onChange} value={value} />
    </div>
  );
};

export default Input;
