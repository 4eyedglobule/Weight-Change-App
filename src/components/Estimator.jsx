import React from "react";
import { useState } from "react";
import "./Estimator.css";
import Button from "./Button";

const Estimator = () => {
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);

  const changeHeight = (e) => {
    setHeight(e.target.value);
  };
  const changeAge = (e) => {
    setAge(e.target.value);
  };
  const changeWeight = (e) => {
    setWeight(e.target.value);
  };
  const handleClick = () => {
    alert("Button clicked")
  }

  return (
    <div className="estimator_box">
      <div className="title_text">OTHER INFORMATION</div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Height"
          value={height}
          onChange={changeHeight}
        />
      </div>
      <div className="generic_text">Height: {height}</div>
      <div className="search-bar">
        <input type="text" placeholder="Age" value={age} onChange={changeAge} />
      </div>
      <div className="generic_text">Age: {age}</div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Current Weight"
          value={weight}
          onChange={changeWeight}
        />
      </div>
      <div className="generic_text">Weight: {weight}</div>
      <Button onClick={handleClick}>Calculate</Button>
    </div>
  );
};

export default Estimator;
