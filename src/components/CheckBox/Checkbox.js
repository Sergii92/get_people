import React from "react";

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div>
      <input type="checkbox" checked={checked} id={label} onChange={onChange} />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
