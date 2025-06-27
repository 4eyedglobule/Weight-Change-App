import { useState } from "react";
import Intake from "./Intake";
import Loss from "./Loss";
import OtherInfo from "./OtherInfo";
import Button from "./Button";
import "./Calculator.css";
//The component that actually calculates weight change. Integrates calorie intake and loss components as well as otherinfo input component into one big component.

const Calculator = ({ getNewWeight }) => {
  const [totalCalAdded, setTotalCalAdded] = useState(0); //Keeps track of added calories
  const [totalCalLost, setTotalCalLost] = useState(0); //Keeps track of lost calories
  const [height, setHeight] = useState(0); //Keeps track of user height
  const [weight, setWeight] = useState(0); //Keeps track of user current weight
  const [age, setAge] = useState(0); //Keeps track of user's age
  const [sexConst, setSexConst] = useState(0); //Keeps track of a constant affected by whether the user is male or female. This constant affects the weight change equation and is either 5 or 161-
  const [weightChange, setWeightChange] = useState(0); //Total weight change
  const [newWeight, setNewWeight] = useState(0); //New weight - calculated by adding weight change to user's current weight

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

  //Calculates total weight loss and sets weightChange variable to it
  const calculateWeightChange = () => {
    setWeightChange(
      parseFloat(
        (totalCalAdded -
          (10 * weight + 6.25 * height - 5 * age + sexConst + totalCalLost)) /
          7700
      ).toFixed(2) //Rounds number to 2 decimal points to avoid a bunch of decimals in result
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
        ).toFixed(2) //Rounds number to 2 decimal points to avoid a bunch of decimals in result
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
