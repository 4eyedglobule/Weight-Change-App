import React from "react";
import { useState } from "react";
import "./OtherInfo.css";
import Button from "./Button";
//Component which is essentially a group of inputs for other information other than calories: height, age, weight, and sex

const OtherInfo = ({ onSendHeight, onSendAge, onSendWeight, onSendSexConst }) => {
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [sexConst, setSexConst] = useState(0);

  const changeHeight = (event) => {
    setHeight(event.target.value);
    onSendHeight(event.target.value);
  };
  const changeAge = (event) => {
    setAge(event.target.value);
    onSendAge(event.target.value);
  };
  const changeWeight = (event) => {
    setWeight(event.target.value);
    onSendWeight(event.target.value);
  };
  const changeSexConst = (value) => {
    setSexConst(value);
    onSendSexConst(value);
  }
  return (
    <div className="estimator_box">
      <div className="title_text">Other Information</div>
      <div style={{ display: "flex" }}>
            <Button onClick={() => changeSexConst(5)} onDisable={sexConst==5}>
              MALE
            </Button>
            <Button
              onClick={() => changeSexConst(-161)}
              onDisable={sexConst==-161}
            >
              FEMALE
            </Button>
      </div>
      <div className="generic_text">Height: {height} cm tall</div>
      <div className="search-bar">
        <input
          type="number"
          placeholder="Enter height (cm)"
          onChange={changeHeight}
        />
      </div>
      <div className="generic_text">Age: {age} years old</div>
      <div className="search-bar">
        <input type="number" placeholder="Enter age (years)" onChange={changeAge} />
      </div>
      <div className="generic_text">Current weight: {weight} kg</div>
      <div className="search-bar">
        <input
          type="number"
          placeholder="Enter current weight (kg)"
          onChange={changeWeight}
        />
      </div>
    </div>
  );
};

export default OtherInfo;
