import classNames from "classnames";
import React from "react";
import styles from "./SwitchButton.module.scss";

export default function SwitchButton({ checked, onChange, className }) {
  return (
    <span className={classNames(styles["switch-button"], className)}>
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
