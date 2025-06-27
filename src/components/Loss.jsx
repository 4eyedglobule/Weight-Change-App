import React from "react";
import { useState } from "react";
import "./Loss.css";
import Button from "./Button";
//Component that keeps track of calorie loss total and activities. Very similar to intake component
//      | ||
//      || |_ 
const Loss = ({ onSendCaloriesLost }) => {
  const [caloriesLost, setCaloriesLost] = useState(0); //Calories lost per individual activity
  const [activity, setActivity] = useState(""); //Individual activities done
  const [items, setItems] = useState([]); //Activities done for lost calories. Elements are activity variables ^
  const [totalLost, setTotalLost] = useState(0); //Total calories lost, basically caloriesLost variables added together

  const addActivity = (event) => {
    setActivity(event.target.value);
  };
  const handleCalLoss = (event) => {
    setCaloriesLost(event.target.value);
  };
  const calculateCalories = () => { //Calculates total calories lost and adds activities done to array
    onSendCaloriesLost(totalLost + Number(caloriesLost));
    setItems((items) => [...items, activity]);
    setTotalLost((totalLost) => totalLost + Number(caloriesLost));
  };
  const resetCalories = () => { //Resets calories back to 0 and clears activities done
    onSendCaloriesLost(0);
    setItems([]);
    setTotalLost(0);
  };

  return (
    <div className="calorie_loss_box">
      <div className="title_text">Calorie Loss</div>
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
      <div className="generic_text">
        Activities Performed: {items.join(", ")}
      </div>
      <div className="generic_text">Total Calories Lost: {totalLost}</div>
      <Button onClick={resetCalories}>Reset</Button>
    </div>
  );
};

export default Loss;
