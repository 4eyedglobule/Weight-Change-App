import { useState } from "react";
import "./App.css";
import Intake from "./components/Intake";
import Loss from "./components/Loss";
import Estimator from "./components/Estimator";

function App() {
  document.body.style.background = "rgb(255, 204, 93)";
  return (
    <div className="box">
      <div className="title">DAILY WEIGHT LOSS CALCULATOR</div>
      <div style={{ display: "flex", justifyContent: "center"}}>
        <Intake />
        <Loss />
      </div>
      <div style={{display: "flex", justifyContent: "center", flex:"1"}}>
        <Estimator/>
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
