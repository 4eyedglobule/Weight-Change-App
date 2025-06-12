import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      type="button"
      style={{ fontFamily: "Raleway", fontSize: "30px", borderRadius: "40px" }}
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
