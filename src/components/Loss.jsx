import React from "react";
import { useState } from "react";
import "./Loss.css";
import Button from "./Button";

const Loss = () => {
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
    setItems((items) => [...items, activity]);
    setTotalLost((totalLost) => totalLost + Number(caloriesLost));
  };
  const resetCalories = () => {
    setTotalLost(0);
    setItems([]);
  };

  return (
    <div className="calorie_loss_box">
      <div className="loss_text">Calorie Loss Calculator</div>
      <div style={{ display: "flex" }}>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Activity Performed"
            value={activity}
            onChange={addActivity}
          />
        </div>
        <div className="search-bar">
          <input
            type="Number"
            placeholder="Calories Lost"
            value={caloriesLost}
            onChange={handleCalLoss}
          />
        </div>
        <Button onClick={calculateCalories}>Add</Button>
      </div>
      <div className="calories_lost">
        Activities Performed: {items}
      </div>
      <div className="calories_lost">Total Calories Lost: {totalLost}</div>
      <Button onClick={resetCalories}>Reset</Button>
    </div>
  );
};

export default Loss;
