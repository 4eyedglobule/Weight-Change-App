import { useState } from "react";
import "./App.css";
import Intake from "./components/Intake";
import Loss from "./components/Loss";
import Estimator from "./components/Estimator";
import Button from "./components/Button";

function App() {
  const [totalCalAdded, setTotalCalAdded] = useState(0);
  const [totalCalLost, setTotalCalLost] = useState(0);
  const [heightWeightAge,setheightWeightAge] = useState([0,0,0]);

  const handleCalAdded = (value) => {
    setTotalCalAdded(value);
  };
  const handleCalLost = (value) => {
    setTotalCalLost(value);
  };
  const handleOtherInfo = (value) => {
    setheightWeightAge(value);
  };
  const calculateWeightLoss = () => {
    alert("Cal Added: "+totalCalAdded+", Cal Lost: "+totalCalLost+", Height, Weight, Age: "+heightWeightAge[0]+", "+heightWeightAge[1]+", "+heightWeightAge[2]);
  };
  document.body.style.background = "rgb(182, 182, 182)";
  return (
    <div className="box">
      <div className="title">DAILY WEIGHT LOSS CALCULATOR</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Intake onSendCaloriesAdded={handleCalAdded} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Loss onSendCaloriesLost={handleCalLost} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Estimator onSendInfo={handleOtherInfo} />
      </div>
      <div
        className="calc_button_box"
        style={{ display: "flex", justifyContent: "center", flex: "1" }}
      >
        <Button onClick={calculateWeightLoss}>CALCULATE WEIGHT LOSS</Button>
      </div>
      <div className="disclaimer">
        THIS APPLICATION IS NOT A COMPLETE AND TOTAL GUIDELINE FOR WEIGHT LOSS.
        MANY FACTORS ARE NOT INCLUDED, SUCH AS FOOD TYPE EATEN, METABOLISM, ETC.
        BE SURE TO CONSULT OTHER SOURCES OF INFORMATION.
      </div>
    </div>
  );
}

export default App;
