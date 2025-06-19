import React from "react";
import { useState } from "react";
import "./Intake.css";
import Button from "./Button";

const Intake = ({ onSendCaloriesAdded }) => {
  const [caloriesAdded, setCaloriesAdded] = useState(0);
  const [consumed, setConsumed] = useState("");
  const [items, setItems] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);

  const addConsumed = (e) => {
    setConsumed(e.target.value);
  };
  const handleCalInput = (e) => {
    setCaloriesAdded(e.target.value);
  };
  const calculateCalories = () => {
    onSendCaloriesAdded(totalCalories + Number(caloriesAdded));
    setTotalCalories((totalCalories) => totalCalories + Number(caloriesAdded));
    setItems((items) => [...items, consumed]);
  };
  const resetCalories = () => {
    setItems([]);
    setTotalCalories(0);
  };
  return (
    <div className="calorie_intake_box">
      <div className="intake_text">Calorie Intake Calculator</div>
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
      <div className="calories_gained">Items Consumed: {items.join(", ")}</div>
      <div className="calories_gained">
        Total Calories Gained: {totalCalories}
      </div>
      <Button onClick={resetCalories}>Reset</Button>
    </div>
  );
};

export default Intake;
