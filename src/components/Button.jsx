import React from "react";
import "./Button.css"

const Button = ({ onClick, onDisable, children, textSize="20px" }) => {
  return (
    <button
      type="button"
      style={{ fontFamily: "Raleway", fontSize: textSize, borderRadius: "30px" }}
      disabled={onDisable}
      className={
        "btn d-flex btn-outline-light justify-content-center button_disabled_override"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
