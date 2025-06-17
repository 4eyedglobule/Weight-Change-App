import React from "react";
import { useState } from "react";
import "./Estimator.css";
import Button from "./Button";

const Estimator = ( onSendInfo ) => {
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);

  const changeHeight = (e) => {
    setHeight(e.target.value);
    onSendInfo([height,age,weight]);
  };
  const changeAge = (e) => {
    setAge(e.target.value);
    onSendInfo([height,age,weight]);
  };
  const changeWeight = (e) => {
    setWeight(e.target.value);
    onSendInfo([height,age,weight]);
  };
  return (
    <div className="estimator_box">
      <div className="title_text">OTHER INFORMATION</div>
      <div className="generic_text">Height: {height}</div>
      <div className="search-bar">
        <input type="text" placeholder="Enter height" onChange={changeHeight} />
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
