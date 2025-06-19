import React from "react";
import { useState } from "react";
import "./Loss.css";
import Button from "./Button";

const Loss = ({ onSendCaloriesLost }) => {
  const [caloriesLost, setCaloriesLost] = useState(0);
  const [activity, setActivity] = useState("");
  const [items, setItems] = useState([]);
  const [totalLost, setTotalLost] = useState(0);

  const addActivity = (e) => {
    setActivity(e.target.value);
  };
  const handleCalLoss = (e) => {
    setCaloriesLost(e.target.value);
  };
  const calculateCalories = () => {
    onSendCaloriesLost(totalLost + Number(caloriesLost));
    setItems((items) => [...items, activity]);
    setTotalLost((totalLost) => totalLost + Number(caloriesLost));
  };
  const resetCalories = () => {
    setItems([]);
    setTotalLost(0);
  };

  return (
    <div className="calorie_loss_box">
      <div className="loss_text">Calorie Loss Calculator</div>
      <div style={{ display: "flex" }}>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Activity Performed"
            onChange={addActivity}
          />
        </div>
        <div className="search-bar">
          <input
            type="Number"
            placeholder="Calories Lost"
            onChange={handleCalLoss}
          />
        </div>
        <Button onClick={calculateCalories} onDisable={activity.length < 1 || caloriesLost < 1}>
          Add
        </Button>
      </div>
      <div className="calories_lost">
        Activities Performed: {items.join(", ")}
      </div>
      <div className="calories_lost">Total Calories Lost: {totalLost}</div>
      <Button onClick={resetCalories}>Reset</Button>
    </div>
  );
};

export default Loss;
