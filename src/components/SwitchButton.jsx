import React from "react";
import "./SwitchButton.scss";

export default function SwitchButton({ checked, onChange, className }) {
  return (
    <span className={className}>
      <input
        type="checkbox"
        id="switch"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="switch" />
    </span>
  );
}
