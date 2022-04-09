import React from "react";
import "./SwitchButton.scss";

export default function SwitchButton() {
  return (
    <span>
      <input type="checkbox" id="switch" />
      <label for="switch" />
    </span>
  );
}
