import { useState } from "react";
import { useRef } from "react";
import Intake from "./Intake";
import Loss from "./Loss";
import OtherInfo from "./OtherInfo";
import Button from "./Button";
import "./Calculator.css";

const Calculator = ({ getNewWeight }) => {
  const [totalCalAdded, setTotalCalAdded] = useState(0);
  const [totalCalLost, setTotalCalLost] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  const [sexConst, setSexConst] = useState(0);
  const [weightChange, setWeightChange] = useState(0); //Total weight change
  const [newWeight, setNewWeight] = useState(0);

  const handleTotalAdded = (value) => {
    setTotalCalAdded(value);
  };
  const handleTotalLost = (value) => {
    setTotalCalLost(value);
  };
  const handleHeight = (value) => {
    setHeight(value);
  };
  const handleWeight = (value) => {
    setWeight(value);
  };
  const handleAge = (value) => {
    setAge(value);
  };
  const handleSexConst = (value) => {
    setSexConst(value);
  };
  const handleNewWeightValInput = (e) => {
    setNewWeightVal(Number(e.target.value));
  };
  //Calculates total weight loss and sets weightChange variable to it
  const calculateWeightChange = () => {
    setWeightChange(
      parseFloat(
        (totalCalAdded -
          (10 * weight + 6.25 * height - 5 * age + sexConst + totalCalLost)) /
          7700
      ).toFixed(2)
    );
    setNewWeight(
      parseFloat(
        (
          Number(weight) +
          parseFloat(
            (totalCalAdded -
              (10 * weight +
                6.25 * height -
                5 * age +
                sexConst +
                totalCalLost)) /
              7700
          )
        ).toFixed(2)
      )
    );
  };
  return (
    <div className="input_box">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Intake onSendCaloriesAdded={handleTotalAdded} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Loss onSendCaloriesLost={handleTotalLost} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <OtherInfo
          onSendHeight={handleHeight}
          onSendAge={handleAge}
          onSendWeight={handleWeight}
          onSendSexConst={handleSexConst}
        />
      </div>
      <div
        className="calc_button_box"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "40px",
        }}
      >
        <Button
          onClick={calculateWeightChange}
          onDisable={height < 1 || weight < 1 || age < 1 || sexConst == 0}
        >
          CALCULATE WEIGHT CHANGE
        </Button>
        <div>Total weight change: {weightChange} kg difference</div>
        <div>New weight: {newWeight} kg</div>
        <Button onClick={() => getNewWeight(newWeight)} onDisable={weightChange == 0}>
          ADD TO CHART
        </Button>
      </div>
    </div>
  );
};

export default Calculator;
