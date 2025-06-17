import React from "react";

const Button = ({ onClick, onDisable, children }) => {
  return (
    <button
      type="button"
      style={{ fontFamily: "Raleway", fontSize: "30px", borderRadius: "40px" }}
      disabled={onDisable}
      className={
        "btn d-flex btn-lg btn-outline-dark justify-content-center font-family-Raleway"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
