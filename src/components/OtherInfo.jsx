import React from "react";
import { useState } from "react";
import "./OtherInfo.css";
import Button from "./Button";

const OtherInfo = ({ onSendHeight, onSendAge, onSendWeight, onSendSexConst }) => {
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [sexConst, setSexConst] = useState(0);

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
  const changeSex = (value) => {
    setSexConst(value);
    onSendSexConst(value);
  }
  return (
    <div className="estimator_box">
      <div className="title_text">Other Information</div>
      <div style={{ display: "flex" }}>
            <Button onClick={() => changeSex(5)} onDisable={sexConst==5}>
              MALE
            </Button>
            <Button
              onClick={() => changeSex(-161)}
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
