import React from "react";
import { useState } from "react";
import "./Estimator.css";
import Button from "./Button";

const Estimator = ({ onSendHeight, onSendAge, onSendWeight }) => {
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);

  const changeHeight = (e) => {
    setHeight(e.target.value);
    onSendHeight(e.target.value);
  };
  const changeAge = (e) => {
    setAge(e.target.value);
    onSendAge(e.target.value);
  };
  const changeWeight = (e) => {
    setWeight(e.target.value);
    onSendWeight(e.target.value);
  };
  return (
    <div className="estimator_box">
      <div className="title_text">OTHER INFORMATION</div>
      <div className="generic_text">Height: {height}</div>
      <div className="search-bar">
        <input
          type="number"
          placeholder="Enter height"
          onChange={changeHeight}
        />
      </div>
      <div className="generic_text">Age: {age}</div>
      <div className="search-bar">
        <input type="number" placeholder="Enter age" onChange={changeAge} />
      </div>
      <div className="generic_text">Weight: {weight}</div>
      <div className="search-bar">
        <input
          type="number"
          placeholder="Enter current weight"
          onChange={changeWeight}
        />
      </div>
    </div>
  );
};

export default Estimator;
