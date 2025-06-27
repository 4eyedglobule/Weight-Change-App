import React from "react";
import "./Button.css"
//Semi-modular button component. Has parameters for calling a function when clicked, disabling, displayed text, and changing text size.

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
