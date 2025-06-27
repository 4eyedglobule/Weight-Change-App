import React from "react";
import { useState } from "react";
import "./Intake.css";
import Button from "./Button";
//Component that keeps track of calorie intake total and items. Very similar to Loss component

const Intake = ({ onSendCaloriesAdded }) => {
  const [caloriesAdded, setCaloriesAdded] = useState(0); //Calories added per individual item consumed
  const [consumed, setConsumed] = useState(""); //Individual item consumed
  const [items, setItems] = useState([]); //Items consumed for added calories. Elements are consumed variables ^
  const [totalCalories, setTotalCalories] = useState(0); //Total calories added, basically caloriesAdded variables added together

  const addConsumed = (event) => {
    setConsumed(event.target.value);
  };
  const handleCalInput = (event) => {
    setCaloriesAdded(event.target.value);
  };
  const calculateCalories = () => { //Calculates total calories consumed and adds elements consumed to array
    onSendCaloriesAdded(totalCalories + Number(caloriesAdded));
    setTotalCalories((totalCalories) => totalCalories + Number(caloriesAdded));
    setItems((items) => [...items, consumed]);
  };
  const resetCalories = () => { //Resets calories back to 0 and clears items consumed
    onSendCaloriesAdded(0);
    setItems([]);
    setTotalCalories(0);
  };
  return (
    <div className="calorie_intake_box">
      <div className="title_text">Calorie Intake</div>
      <div style={{ display: "flex" }}>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Item Consumed"
            onChange={addConsumed}
          />
        </div>
        <div className="search-bar">
          <input
            type="Number"
            placeholder="Calories Gained"
            onChange={handleCalInput}
          />
        </div>
        <Button onClick={calculateCalories} onDisable={consumed.length < 1 || caloriesAdded < 1}>
          Add
        </Button>
      </div>
      <div className="generic_text">Items Consumed: {items.join(", ")}</div>
      <div className="generic_text">
        Total Calories Gained: {totalCalories}
      </div>
      <Button onClick={resetCalories}>Reset</Button>
    </div>
  );
};

export default Intake;
